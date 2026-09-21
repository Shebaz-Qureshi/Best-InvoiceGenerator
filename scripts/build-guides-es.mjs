#!/usr/bin/env node
/**
 * One-time script: parses 43 Spanish guide markdown files and generates
 * src/data/guides-es.ts with the Guide[] array.
 *
 * Run: node scripts/build-guides-es.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve('Guide-Articles/Spanish');
const OUT_FILE = path.resolve('src/data/guides-es.ts');

// English slug → Spanish slug mapping (for related links in articles 21-43)
const EN_TO_ES = {
  'invoice-checklist': 'lista-verificacion-factura',
  'payment-terms': 'condiciones-de-pago',
  'invoice-numbering': 'numeracion-de-facturas',
  'quote-vs-invoice': 'presupuesto-vs-factura',
  'freelance-billing-essentials': 'facturacion-autonomos',
  'invoice-generator-software-guide': 'comparativa-software-facturacion',
  'ai-invoice-automation': 'automatizacion-factura-ia',
  'mobile-invoicing-apps': 'facturacion-movil',
  'invoice-templates-branding': 'plantillas-marca-factura',
  'overdue-invoice-recovery': 'recuperacion-facturas-vencidas',
  'international-multi-currency-invoicing': 'facturacion-multidivisa-internacional',
  'pdf-invoice-generation': 'generacion-factura-pdf',
  'small-business-tax-invoicing': 'facturacion-fiscal-pequenas-empresas',
  'contractor-milestone-billing': 'facturacion-por-hitos-contratistas',
  'consultant-hourly-retainer-invoicing': 'facturacion-igualas-consultores',
  'recurring-subscription-invoicing': 'facturacion-recurrente-suscripciones',
  'ecommerce-product-invoicing': 'facturacion-ecommerce-productos',
  'agency-subcontractor-billing': 'facturacion-agencia-subcontratistas',
  'how-to-write-an-invoice': 'como-redactar-una-factura',
  'invoice-vs-receipt': 'factura-vs-recibo',
  'deposit-invoice-guide': 'factura-de-anticipo',
  'proforma-invoice-guide': 'factura-proforma',
  'invoice-email-templates': 'como-redactar-un-correo-de-factura',
  'credit-note-invoice-corrections': 'notas-de-credito-y-correcciones-de-facturas',
  'vat-invoice-requirements': 'requisitos-de-facturas-con-iva',
  'invoice-vs-receipt-vs-purchase-order': 'factura-recibo-u-orden-de-compra',
  'purchase-order-invoice-matching': 'orden-de-compra-y-conciliacion-de-tres-vias',
  'e-invoicing-formats-compliance': 'facturacion-electronica-formatos-y-cumplimiento',
  'invoice-payment-methods-fees': 'metodos-de-pago-y-comisiones-en-facturas',
  'early-payment-discounts-late-fees': 'descuentos-por-pronto-pago-y-recargos-por-mora',
  'invoice-disputes-short-payments': 'facturas-en-disputa-y-pagos-incompletos',
  'invoice-record-retention-audit-trail': 'registros-de-facturas-conservacion-y-auditoria',
  'invoice-fraud-prevention': 'fraude-con-facturas',
  'accounts-receivable-aging-cash-flow': 'cuentas-por-cobrar-por-antiguedad',
  'client-billing-onboarding': 'configuracion-de-facturacion-cliente-nuevo',
  'deposits-advance-payments': 'anticipos-y-pagos-adelantados',
  'invoice-email-delivery': 'envio-de-la-factura-por-correo',
  'invoice-line-item-descriptions': 'lineas-de-factura-que-se-aprueben-sin-preguntas',
  'invoicing-without-registered-business': 'facturar-sin-empresa-registrada',
  'multilingual-invoices': 'facturas-en-otro-idioma',
  'rebilling-expenses-disbursements': 'refacturacion-de-gastos-a-clientes',
  'trades-field-service-invoicing': 'facturacion-oficios-servicio-en-campo',
  'withholding-tax-on-invoices': 'retencion-de-impuestos-en-facturas',
};

// ── helpers ──────────────────────────────────────────────────────────
function parseFrontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { meta: {}, body: text };
  const raw = m[1];
  const meta = {};
  for (const line of raw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    meta[key] = val;
  }
  const body = text.slice(m[0].length).trim();
  return { meta, body };
}

function extractSlug(meta, filename) {
  if (meta.canonical) {
    const urlMatch = meta.canonical.match(/\/es\/guias\/([^/]+)\/?$/);
    if (urlMatch) return urlMatch[1];
  }
  if (meta.slug_sugerido) return meta.slug_sugerido;
  return filename.replace(/^\d+-/, '').replace(/\.md$/, '');
}

function cleanTitle(title) {
  return title.replace(/\s*\|\s*Best Invoice Generator\s*$/i, '').trim();
}

function extractCategoryAndReadingTime(body, meta) {
  let category = meta.categoria || meta.category || '';
  let readingTime = meta.tiempo_de_lectura || meta.reading_time || '';
  if (!category || !readingTime) {
    for (const line of body.split('\n').slice(0, 5)) {
      const m = line.trim().match(/^(.+?)\s*·\s*(\d+\s*min(?:uto)?s?\s*de\s*lectura)$/i);
      if (m) {
        if (!category) category = m[1].trim();
        if (!readingTime) readingTime = m[2].trim();
        break;
      }
    }
  }
  return { category, readingTime };
}

// ── body parsing ──────────────────────────────────────────────────────
const EXAMPLE_MARKERS = /^\*?(?:Ejemplo práctico|Aplicación práctica|Comparación directa)\*?\s*$/i;
const DIAGRAM_MARKER = /^\*?Diagrama original\*?\s*$/i;
const FAQ_MARKER = /^\*?Preguntas frecuentes\*?\s*$/i;
const CTA_MARKER = /^\*?Usa la herramienta\*?\s*$/i;
const H2 = /^##\s+(.+)/;

function parseBody(body) {
  const lines = body.split('\n');

  // Scan all lines for markers
  const markers = [];
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (EXAMPLE_MARKERS.test(t)) markers.push({ type: 'example', lineIdx: i });
    else if (DIAGRAM_MARKER.test(t)) markers.push({ type: 'diagram', lineIdx: i });
    else if (FAQ_MARKER.test(t)) markers.push({ type: 'faq', lineIdx: i });
    else if (CTA_MARKER.test(t)) markers.push({ type: 'cta', lineIdx: i });
  }

  // Also check for H2 sections: "## Guías relacionadas", "## Preguntas frecuentes"
  const h2RelatedIdx = lines.findIndex((l) => /^##\s+Guías relacionadas/i.test(l.trim()));
  const h2FaqIdx = lines.findIndex((l) => /^##\s+Aclaraciones útiles/i.test(l.trim()));

  const firstH2 = lines.findIndex((l) => H2.test(l));

  // Intro = lines from 0 to first marker or first H2
  const introEnd = markers.length > 0 ? markers[0].lineIdx : (firstH2 >= 0 ? firstH2 : lines.length);
  const introLines = lines.slice(0, introEnd);

  // Find boundaries
  const diagMarker = markers.find((m) => m.type === 'diagram');
  const faqMarker = markers.find((m) => m.type === 'faq');
  const ctaMarker = markers.find((m) => m.type === 'cta');

  // Content end: the earliest of FAQ marker, CTA marker, H2 related, H2 FAQ
  const possibleEnd = [faqMarker?.lineIdx, ctaMarker?.lineIdx, h2RelatedIdx, h2FaqIdx].filter((x) => x != null && x >= 0);
  const contentEnd = possibleEnd.length > 0 ? Math.min(...possibleEnd) : lines.length;

  // Content start: after diagram marker
  const contentStart = diagMarker ? diagMarker.lineIdx + 1 : (firstH2 >= 0 ? firstH2 : 0);

  // Content block: between diagram end and FAQ/CTA/related
  const contentBlock = lines.slice(contentStart, contentEnd).join('\n');
  const allH2Sections = parseH2Sections(contentBlock);

  // First section after diagram might be the diagram's own heading+steps
  let diagramHeading = 'Flujo de trabajo';
  let diagramSteps = [];
  let contentSections = allH2Sections;

  if (allH2Sections.length > 0) {
    const first = allH2Sections[0];
    const hasNumSteps = first.paragraphs.some((p) => /^\d+\.\s+/.test(p.trim()));
    if (hasNumSteps) {
      diagramHeading = first.heading;
      diagramSteps = first.paragraphs
        .map((p) => { const m = p.match(/^\d+\.\s+(.+)/); return m ? m[1].trim() : null; })
        .filter(Boolean);
      contentSections = allH2Sections.slice(1);
    }
  }

  // Example section: lines between example marker and diagram marker
  const exampleMarker = markers.find((m) => m.type === 'example');
  let exampleSectionLines = [];
  if (exampleMarker) {
    const exEnd = diagMarker ? diagMarker.lineIdx : contentStart;
    exampleSectionLines = lines.slice(exampleMarker.lineIdx + 1, exEnd);
  }

  // Diagram section lines (the plain text marker's segment, if any)
  let diagramSectionLines = [];
  if (diagMarker) {
    // The diagram marker's segment is from marker+1 to the first H2 after it
    // But we already handle diagram via contentSections, so just get the raw lines
    const nextH2 = lines.findIndex((l, i) => i > diagMarker.lineIdx && H2.test(l));
    diagramSectionLines = lines.slice(diagMarker.lineIdx + 1, nextH2 >= 0 ? nextH2 : contentStart);
  }

  // FAQ section lines
  let faqSectionLines = [];
  if (faqMarker) {
    const faqEnd = ctaMarker ? ctaMarker.lineIdx : (h2RelatedIdx >= 0 ? h2RelatedIdx : lines.length);
    faqSectionLines = lines.slice(faqMarker.lineIdx + 1, faqEnd);
  } else if (h2FaqIdx >= 0) {
    // H2 "Aclaraciones útiles" is the FAQ section
    const faqEnd = h2RelatedIdx >= 0 ? h2RelatedIdx : lines.length;
    faqSectionLines = lines.slice(h2FaqIdx, faqEnd);
  }

  // Related section: everything after "Guías relacionadas" (plain text or H2)
  let relatedLines = [];
  if (h2RelatedIdx >= 0) {
    relatedLines = lines.slice(h2RelatedIdx + 1);
  } else {
    // Look for plain text "Guías relacionadas" marker
    const plainRelatedIdx = lines.findIndex((l) => /^\*?Guías relacionadas\*?\s*$/i.test(l.trim()));
    if (plainRelatedIdx >= 0) {
      relatedLines = lines.slice(plainRelatedIdx + 1);
    }
  }
  // Clean related lines: stop at "Nota editorial" or horizontal rule
  relatedLines = relatedLines.filter((l) => {
    const t = l.trim();
    if (t.startsWith('---')) return false;
    if (/^Nota editorial/.test(t)) return false;
    if (/^©/.test(t)) return false;
    return true;
  });

  return {
    intro: introLines,
    exampleSectionLines,
    diagramSectionLines,
    diagramHeading,
    diagramSteps,
    contentSections,
    faqSectionLines,
    relatedLines,
  };
}

function parseH2Sections(block) {
  const lines = block.split('\n');
  const sections = [];
  let current = null;
  for (const line of lines) {
    const h2 = line.match(H2);
    if (h2) {
      if (current) sections.push(current);
      current = { heading: h2[1].trim(), paragraphs: [], rawLines: [] };
    } else if (current) {
      current.rawLines.push(line);
      current.paragraphs.push(line);
    }
  }
  if (current) sections.push(current);
  return sections;
}

function extractExample(exampleSectionLines) {
  const sectionParts = parseH2Sections(exampleSectionLines.join('\n'));
  if (sectionParts.length === 0) {
    return { label: 'Ejemplo práctico', title: 'Ejemplo práctico', body: '', rows: [] };
  }
  const first = sectionParts[0];
  const title = first.heading;

  const allParas = sectionParts.flatMap((s) => s.paragraphs);

  // Extract bold key-value rows
  const fullText = allParas.join('\n');
  const rows = [];
  const boldMatches = [...fullText.matchAll(/\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=\*\*|\n\n|$)/g)];
  for (const m of boldMatches) {
    rows.push([m[1].trim(), m[2].trim().replace(/\n/g, ' ')]);
  }

  // Narrative = non-bold lines
  const narrative = allParas
    .filter((l) => !l.trim().startsWith('**') && l.trim().length > 0)
    .map((l) => l.trim())
    .join(' ')
    .trim();

  return { label: 'Ejemplo práctico', title, body: narrative, rows };
}

function extractDiagramFromContent(diagramHeading, diagramSteps) {
  return {
    title: diagramHeading || 'Flujo de trabajo',
    caption: undefined,
    steps: diagramSteps,
  };
}

function extractRelated(relatedLines) {
  const slugs = [];
  for (const line of relatedLines) {
    // Spanish URLs: /es/guias/SLUG/
    const m1 = line.match(/\[.*?\]\(https:\/\/best-invoicegenerator\.com\/es\/guias\/([^/]+)\/?\)/);
    if (m1) { slugs.push(m1[1]); continue; }
    // English URLs: /guides/SLUG/ → map to Spanish slug
    const m2 = line.match(/\[.*?\]\(https:\/\/best-invoicegenerator\.com\/guides\/([^/]+)\/?\)/);
    if (m2) {
      const esSlug = EN_TO_ES[m2[1]] || m2[1];
      slugs.push(esSlug);
      continue;
    }
    // Relative URLs
    const m3 = line.match(/\[.*?\]\(\/es\/guias\/([^/]+)\/?\)/);
    if (m3) { slugs.push(m3[1]); continue; }
    const m4 = line.match(/\[.*?\]\(\/guides\/([^/]+)\/?\)/);
    if (m4) {
      const esSlug = EN_TO_ES[m4[1]] || m4[1];
      slugs.push(esSlug);
    }
  }
  return slugs;
}

function extractFaq(faqSectionLines) {
  // Check if this is an H2 block (starting with "## Aclaraciones útiles")
  const joined = faqSectionLines.join('\n');
  const sections = parseH2Sections(joined);
  const items = [];

  // Could be H2 sections with question headings
  for (const s of sections) {
    if (s.heading.endsWith('?')) {
      const answer = s.paragraphs
        .filter((p) => p.trim().length > 0 && !p.startsWith('#'))
        .map((p) => p.trim())
        .join('\n\n');
      if (answer) items.push({ question: s.heading, answer });
    }
  }

  // If no H2 sections found, try parsing bold Q/A pairs
  if (items.length === 0) {
    const lines = faqSectionLines;
    let currentQ = null;
    let currentA = [];
    for (const line of lines) {
      const boldMatch = line.match(/^\*\*(.+?)\*\*\s*$/);
      if (boldMatch) {
        if (currentQ && currentA.length) {
          items.push({ question: currentQ, answer: currentA.join('\n\n').trim() });
        }
        currentQ = boldMatch[1].trim();
        currentA = [];
      } else if (currentQ && line.trim().length > 0) {
        currentA.push(line.trim());
      }
    }
    if (currentQ && currentA.length) {
      items.push({ question: currentQ, answer: currentA.join('\n\n').trim() });
    }
  }

  return items;
}

function extractChecklist(rawLines) {
  const items = [];
  for (const line of rawLines) {
    const m = line.match(/^\s*[-–]\s*✓\s*(.+)/);
    if (m) items.push(m[1].trim());
  }
  return items.length ? items : undefined;
}

function cleanParagraphs(paras) {
  return paras
    .map((p) => p.trim())
    .filter((p) => {
      if (p.length === 0) return false;
      if (p.startsWith('#')) return false;
      if (p.startsWith('[') && p.includes('](')) return false;
      if (p.startsWith('---')) return false;
      if (/^©/.test(p)) return false;
      if (/^Nota editorial/.test(p)) return false;
      if (/^\*?Diagrama original\*?$/i.test(p)) return false;
      if (/^\*?Ejemplo práctico\*?$/i.test(p)) return false;
      if (/^\*?Aplicación práctica\*?$/i.test(p)) return false;
      if (/^Comparación directa$/i.test(p)) return false;
      if (/^\*?Preguntas frecuentes\*?$/i.test(p)) return false;
      if (/^\*?Aclaraciones útiles\*?$/i.test(p)) return false;
      if (/^\*?Guías relacionadas\*?$/i.test(p)) return false;
      if (/^\*?Usa la herramienta\*?$/i.test(p)) return false;
      if (/^Usa la herramienta$/i.test(p)) return false;
      if (/^\[.*\]\(https:\/\/best-invoicegenerator\.com.*\)$/.test(p)) return false;
      return true;
    });
}

// ── main ─────────────────────────────────────────────────────────────
const files = fs.readdirSync(SRC_DIR)
  .filter((f) => /^\d{2}-.+\.md$/.test(f) && !f.startsWith('00-'))
  .sort();

const entries = [];

for (const file of files) {
  const text = fs.readFileSync(path.join(SRC_DIR, file), 'utf-8');
  const { meta, body } = parseFrontMatter(text);
  const slug = extractSlug(meta, file);

  const title = cleanTitle(meta.title || '');
  const description = meta['meta-description'] || meta['meta_description'] || meta.description || '';
  const summary = meta.resumen_tarjeta || description;
  const { category, readingTime } = extractCategoryAndReadingTime(body, meta);
  const imageSrc = meta.imagen || '/images/guides/default.svg';
  const imageAlt = meta.imagen_alt || title;

  const parsed = parseBody(body);

  const intro = cleanParagraphs(parsed.intro);
  const example = extractExample(parsed.exampleSectionLines);
  const diagram = extractDiagramFromContent(parsed.diagramHeading, parsed.diagramSteps);

  const sections = parsed.contentSections
    .filter((s) => !/^(¿Listo para crear el documento|Aclaraciones útiles|Guías relacionadas|Nota editorial|Preguntas frecuentes)/i.test(s.heading))
    .map((s) => {
      const paras = cleanParagraphs(s.paragraphs);
      if (paras.length === 0) return null;
      const checklist = extractChecklist(s.rawLines);
      return {
        heading: s.heading,
        paragraphs: paras,
        ...(checklist ? { checklist } : {}),
      };
    })
    .filter(Boolean);

  const faq = extractFaq(parsed.faqSectionLines);
  const related = extractRelated(parsed.relatedLines);

  entries.push({
    slug,
    title,
    description,
    category,
    readingTime,
    reviewed: '',
    author: '',
    editor: '',
    summary,
    image: { src: imageSrc, alt: imageAlt },
    intro,
    example,
    diagram,
    sections,
    faq: faq.length ? faq : undefined,
    related,
  });
}

// ── emit TypeScript ──────────────────────────────────────────────────
function escapeString(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function tsVal(val, indent = 0) {
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';
  if (typeof val === 'string') return '`' + escapeString(val) + '`';
  if (typeof val === 'boolean' || typeof val === 'number') return String(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const pad = '  '.repeat(indent + 1);
    const closePad = '  '.repeat(indent);
    const items = val.map((v) => pad + tsVal(v, indent + 1) + ',');
    return '[\n' + items.join('\n') + '\n' + closePad + ']';
  }
  if (typeof val === 'object') {
    const keys = Object.keys(val);
    if (keys.length === 0) return '{}';
    const pad = '  '.repeat(indent + 1);
    const closePad = '  '.repeat(indent);
    const lines = keys.map((k) => pad + k + ': ' + tsVal(val[k], indent + 1) + ',');
    return '{\n' + lines.join('\n') + '\n' + closePad + '}';
  }
  return String(val);
}

let ts = `import type { Guide } from './guides';\n\nexport const guidesEs: Guide[] = [\n`;
for (const e of entries) {
  ts += `  ${tsVal(e, 1)},\n`;
}
ts += `];\n\n`;
ts += `export function getGuideEs(slug: string): Guide | undefined {\n`;
ts += `  return guidesEs.find((g) => g.slug === slug);\n`;
ts += `}\n`;

fs.writeFileSync(OUT_FILE, ts, 'utf-8');

console.log(`Generated ${OUT_FILE}`);
console.log(`  ${entries.length} guides`);

let issues = 0;
for (const e of entries) {
  const probs = [];
  if (!e.title) probs.push('missing title');
  if (!e.description) probs.push('missing description');
  if (!e.category) probs.push('missing category');
  if (!e.readingTime) probs.push('missing readingTime');
  if (e.intro.length === 0) probs.push('empty intro');
  if (e.sections.length === 0) probs.push('empty sections');
  if (!e.example.body && e.example.rows.length === 0) probs.push('empty example');
  if (e.diagram.steps.length === 0) probs.push('no diagram steps');
  if (e.related.length === 0) probs.push('no related links');
  if (probs.length) {
    console.log(`  ⚠ ${e.slug}: ${probs.join(', ')}`);
    issues++;
  }
}
if (!issues) console.log('  ✓ All guides have complete data');
