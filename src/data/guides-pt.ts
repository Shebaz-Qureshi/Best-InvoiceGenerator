import { guides, type Guide } from './guides';

type PortugueseGuideMeta = {
  title: string;
  summary: string;
  category: string;
  focus: string;
};

/*
 * Portuguese-Brazilian editorial adaptation of the guide library. The shared
 * structure keeps every localized article complete while the copy below uses
 * Brazilian billing vocabulary (fatura, faturamento, prazo de pagamento).
 */
const ptMeta: Record<string, PortugueseGuideMeta> = {
  'invoice-checklist': { title: 'Checklist de fatura: 9 itens para conferir antes de enviar', summary: 'Revise datas, valores, dados do cliente e instruções de pagamento antes de compartilhar uma fatura.', category: 'Noções de faturamento', focus: 'uma revisão final da fatura' },
  'payment-terms': { title: 'Prazos de pagamento da fatura: como deixar o vencimento claro', summary: 'Defina condições de pagamento que o cliente entende e que ajudam a previsibilidade do seu caixa.', category: 'Recebimentos', focus: 'prazos e condições de pagamento' },
  'invoice-numbering': { title: 'Numeração de faturas: um sistema simples para manter a organização', summary: 'Crie referências únicas, fáceis de pesquisar e consistentes para cada fatura emitida.', category: 'Noções de faturamento', focus: 'numeração e referência de faturas' },
  'quote-vs-invoice': { title: 'Orçamento ou fatura: do aceite ao pagamento', summary: 'Entenda a função de cada documento e organize a passagem entre proposta, aprovação e cobrança.', category: 'Faturamento de clientes', focus: 'a diferença entre orçamento e fatura' },
  'freelance-billing-essentials': { title: 'Faturamento para freelancers: fundamentos para cobrar com clareza', summary: 'Um guia prático para profissionais independentes descreverem serviços, valores e vencimentos.', category: 'Trabalho independente', focus: 'faturamento para freelancers' },
  'invoice-generator-software-guide': { title: 'Software para gerar faturas: como escolher a ferramenta certa', summary: 'Compare ferramentas simples de faturamento com sistemas mais completos sem perder de vista seu processo.', category: 'Ferramentas', focus: 'a escolha de um software de faturamento' },
  'ai-invoice-automation': { title: 'Automação de faturas com IA: onde a tecnologia pode ajudar', summary: 'Use automação de forma responsável para reduzir tarefas repetitivas, mantendo a revisão humana.', category: 'Automação', focus: 'automação de faturas' },
  'mobile-invoicing-apps': { title: 'Faturamento pelo celular: como criar e enviar faturas em movimento', summary: 'Organize um fluxo móvel para registrar o trabalho, revisar dados e enviar a fatura sem perder contexto.', category: 'Faturamento móvel', focus: 'criação de faturas pelo celular' },
  'invoice-templates-branding': { title: 'Modelos e identidade visual de faturas: uma apresentação profissional', summary: 'Use marca, estrutura e linguagem consistente para tornar sua fatura fácil de reconhecer e conferir.', category: 'Design de documentos', focus: 'modelos e personalização de faturas' },
  'overdue-invoice-recovery': { title: 'Faturas vencidas: como cobrar pagamentos em atraso com profissionalismo', summary: 'Monte um processo de lembretes objetivo, respeitoso e documentado para valores pendentes.', category: 'Cobrança', focus: 'recuperação de pagamentos em atraso' },
  'international-multi-currency-invoicing': { title: 'Faturas internacionais e multimoeda: como cobrar clientes de outros países', summary: 'Deixe moeda, datas, referência e instruções de pagamento explícitas ao faturar internacionalmente.', category: 'Faturamento internacional', focus: 'faturamento internacional em várias moedas' },
  'pdf-invoice-generation': { title: 'Como gerar uma fatura em PDF pronta para enviar', summary: 'Revise o documento antes de exportar e entregue um PDF legível, completo e fácil de arquivar.', category: 'Exportação de documentos', focus: 'geração de faturas em PDF' },
  'small-business-tax-invoicing': { title: 'Faturamento e impostos para pequenos negócios: o que conferir', summary: 'Separe valores, impostos e informações fiscais para que a fatura seja clara e verificável.', category: 'Impostos e faturamento', focus: 'impostos em faturas de pequenos negócios' },
  'contractor-milestone-billing': { title: 'Faturamento por etapas: como cobrar projetos de prestadores de serviço', summary: 'Vincule cada cobrança a uma entrega ou marco aprovado para reduzir dúvidas e atrasos.', category: 'Projetos e contratos', focus: 'faturamento por etapas de projeto' },
  'consultant-hourly-retainer-invoicing': { title: 'Faturas de consultoria: horas, mensalidades e escopo', summary: 'Transforme horas e entregas de consultoria em itens de linha compreensíveis para o cliente.', category: 'Serviços profissionais', focus: 'faturamento de consultoria' },
  'recurring-subscription-invoicing': { title: 'Faturamento recorrente: como organizar cobranças periódicas', summary: 'Padronize períodos de serviço, datas de emissão e referências para cobranças mensais ou recorrentes.', category: 'Cobrança recorrente', focus: 'faturamento recorrente' },
  'ecommerce-product-invoicing': { title: 'Faturas para e-commerce: produtos, frete e pedidos', summary: 'Faça a fatura acompanhar o pedido com descrições, quantidades, frete e referências verificáveis.', category: 'Comércio eletrônico', focus: 'faturamento de produtos e e-commerce' },
  'agency-subcontractor-billing': { title: 'Faturamento de agências e subcontratados: controle de projeto e escopo', summary: 'Mantenha serviços, custos aprovados e referências de projeto organizados em cada cobrança.', category: 'Agências e equipes', focus: 'faturamento de agências e subcontratados' },
  'how-to-write-an-invoice': { title: 'Como fazer uma fatura: guia prático passo a passo', summary: 'Inclua os dados essenciais, descreva o trabalho e apresente um total e vencimento fáceis de localizar.', category: 'Noções de faturamento', focus: 'como elaborar uma fatura' },
  'invoice-vs-receipt': { title: 'Fatura e recibo: qual é a diferença?', summary: 'Saiba quando emitir uma cobrança e quando registrar que o pagamento já foi recebido.', category: 'Documentos financeiros', focus: 'a diferença entre fatura e recibo' },
  'deposit-invoice-guide': { title: 'Fatura de sinal: como cobrar um adiantamento de forma clara', summary: 'Explique o valor do sinal, a entrega a que ele se refere e como será descontado do saldo final.', category: 'Pagamentos antecipados', focus: 'faturas de sinal e adiantamento' },
  'proforma-invoice-guide': { title: 'Fatura proforma: quando usar e como ela difere da fatura final', summary: 'Diferencie uma estimativa comercial do documento definitivo de cobrança e registro.', category: 'Documentos financeiros', focus: 'faturas proforma' },
  'invoice-email-templates': { title: 'E-mail de fatura: modelos e boas práticas para enviar cobranças', summary: 'Escreva mensagens curtas com assunto pesquisável, anexo identificado e prazo de pagamento visível.', category: 'Comunicação com clientes', focus: 'envio de faturas por e-mail' },
  'credit-note-invoice-corrections': { title: 'Nota de crédito e correção de faturas: como ajustar valores com rastreabilidade', summary: 'Corrija documentos sem apagar o histórico: conecte a nota de crédito à fatura original.', category: 'Correções e registros', focus: 'correções de faturas e notas de crédito' },
  'vat-invoice-requirements': { title: 'Requisitos de uma fatura com IVA: informações que merecem atenção', summary: 'Organize os campos de imposto e confirme as regras aplicáveis antes de emitir documentos com IVA.', category: 'Impostos e faturamento', focus: 'requisitos de faturas com IVA' },
  'invoice-vs-receipt-vs-purchase-order': { title: 'Fatura, recibo e pedido de compra: como cada documento funciona', summary: 'Veja onde cada documento se encaixa no fluxo entre compra, entrega, cobrança e pagamento.', category: 'Documentos financeiros', focus: 'faturas, recibos e pedidos de compra' },
  'purchase-order-invoice-matching': { title: 'Conferência de pedido de compra e fatura: um processo simples', summary: 'Compare referências, quantidades e valores para que a fatura seja aprovada sem retrabalho.', category: 'Processos de compra', focus: 'conferência entre pedido de compra e fatura' },
  'e-invoicing-formats-compliance': { title: 'Faturamento eletrônico: formatos e cuidados de conformidade', summary: 'Entenda a diferença entre um PDF para leitura e arquivos estruturados exigidos em determinados processos.', category: 'Faturamento eletrônico', focus: 'formatos e conformidade de faturas eletrônicas' },
  'invoice-payment-methods-fees': { title: 'Formas de pagamento em faturas: rapidez, custos e conciliação', summary: 'Escolha instruções de pagamento que façam sentido para seu cliente, valor cobrado e processo financeiro.', category: 'Recebimentos', focus: 'formas de pagamento em faturas' },
  'early-payment-discounts-late-fees': { title: 'Desconto por pagamento antecipado e multa por atraso em faturas', summary: 'Comunique incentivos e encargos de forma objetiva, alinhada ao contrato e às regras aplicáveis.', category: 'Recebimentos', focus: 'descontos antecipados e encargos por atraso' },
  'invoice-disputes-short-payments': { title: 'Divergências e pagamentos parciais: como lidar com uma fatura contestada', summary: 'Separe o valor aceito do item em discussão e registre as conversas para resolver a cobrança com clareza.', category: 'Cobrança', focus: 'divergências e pagamentos parciais' },
  'invoice-record-retention-audit-trail': { title: 'Arquivamento de faturas e trilha de auditoria: como manter registros', summary: 'Organize faturas, ajustes e comprovantes em um sistema simples de busca e retenção.', category: 'Organização financeira', focus: 'arquivamento e rastreabilidade de faturas' },
  'invoice-fraud-prevention': { title: 'Prevenção a fraudes em faturas: como reduzir riscos de pagamento', summary: 'Crie verificações para alterações de dados bancários, solicitações incomuns e documentos suspeitos.', category: 'Segurança financeira', focus: 'prevenção a fraudes em faturas' },
  'accounts-receivable-aging-cash-flow': { title: 'Contas a receber e fluxo de caixa: como acompanhar o envelhecimento das faturas', summary: 'Agrupe valores em aberto por vencimento para priorizar acompanhamento e planejar entradas.', category: 'Gestão financeira', focus: 'contas a receber e fluxo de caixa' },
  'client-billing-onboarding': { title: 'Onboarding de faturamento de clientes: organize a cobrança desde o início', summary: 'Reúna dados de cobrança, referências e regras de aprovação antes da primeira fatura.', category: 'Relacionamento com clientes', focus: 'onboarding de faturamento de clientes' },
  'deposits-advance-payments': { title: 'Depósitos e pagamentos antecipados: como refletir o saldo na fatura final', summary: 'Mostre o valor recebido e o valor restante de forma transparente na cobrança do projeto.', category: 'Pagamentos antecipados', focus: 'depósitos e pagamentos antecipados' },
  'invoice-email-delivery': { title: 'Entrega de faturas por e-mail: como aumentar clareza e encontrabilidade', summary: 'Use assunto, nome de arquivo e mensagem que permitam ao cliente localizar e encaminhar a cobrança.', category: 'Comunicação com clientes', focus: 'entrega de faturas por e-mail' },
  'invoice-line-item-descriptions': { title: 'Descrições de itens na fatura: como escrever linhas claras e verificáveis', summary: 'Troque descrições vagas por itens que expliquem o que foi entregue, em qual período e por qual valor.', category: 'Noções de faturamento', focus: 'descrições de itens de fatura' },
  'invoicing-without-registered-business': { title: 'Como faturar sem empresa registrada: informações essenciais para conferir', summary: 'Crie um documento claro com identificação, serviço, valor e pagamento, respeitando os requisitos locais.', category: 'Começando a faturar', focus: 'faturamento sem empresa registrada' },
  'multilingual-invoices': { title: 'Faturas multilíngues: como cobrar clientes que falam outros idiomas', summary: 'Use uma estrutura consistente e termos compreensíveis para reduzir dúvidas em operações internacionais.', category: 'Faturamento internacional', focus: 'faturas multilíngues' },
  'rebilling-expenses-disbursements': { title: 'Reembolso de despesas na fatura: como separar custos e honorários', summary: 'Destaque despesas reembolsáveis, documentos de apoio e honorários para deixar o total transparente.', category: 'Serviços profissionais', focus: 'reembolso de despesas em faturas' },
  'trades-field-service-invoicing': { title: 'Faturas para serviços em campo: mão de obra, materiais e alterações', summary: 'Documente serviços, materiais e mudanças aprovadas para uma cobrança que o cliente consegue conferir.', category: 'Serviços em campo', focus: 'faturamento de serviços em campo' },
  'withholding-tax-on-invoices': { title: 'Imposto retido na fonte em faturas: como apresentar valores e saldo', summary: 'Mostre o valor bruto, a retenção e o valor líquido de maneira legível, verificando a regra aplicável.', category: 'Impostos e faturamento', focus: 'impostos retidos na fonte em faturas' },
};

function buildPortugueseGuide(guide: Guide, meta: PortugueseGuideMeta): Guide {
  const hasFaq = Boolean(guide.faq?.length);
  return {
    slug: guide.slug,
    title: meta.title,
    description: meta.summary,
    category: meta.category,
    readingTime: guide.readingTime.replace('min read', 'min de leitura'),
    reviewed: '21 de setembro de 2026',
    author: 'Equipe editorial do Best Invoice Generator',
    editor: 'Equipe editorial do Best Invoice Generator',
    summary: meta.summary,
    image: guide.image ? { ...guide.image, alt: `Ilustração sobre ${meta.focus}` } : undefined,
    intro: [
      `Este guia explica ${meta.focus} em português brasileiro, com foco nas decisões que ajudam você a emitir uma cobrança clara, conferir as informações e acompanhar o pagamento.`,
      `${meta.summary} Use as recomendações como um ponto de partida e ajuste os dados ao seu contrato, à sua atividade e às exigências aplicáveis no Brasil ou no local onde você atua.`,
    ],
    example: {
      label: 'Exemplo prático',
      title: `Um cenário de ${meta.focus}`,
      body: 'Imagine um pequeno negócio que concluiu um serviço e precisa enviar uma cobrança sem abrir espaço para dúvidas. A fatura reúne uma referência única, uma descrição verificável, um prazo claro e uma instrução de pagamento.',
      rows: [
        ['Referência', 'Use um número único que o cliente possa citar ao fazer o pagamento.'],
        ['Descrição', 'Identifique o produto, serviço ou período de forma específica.'],
        ['Vencimento', 'Mostre uma data de vencimento, e não apenas uma expressão relativa.'],
        ['Total', 'Apresente o valor, a moeda e os tributos ou ajustes de modo separado.'],
      ],
    },
    diagram: {
      title: `Fluxo prático para ${meta.focus}`,
      caption: 'Siga uma sequência simples para que o documento seja fácil de revisar, aprovar e pagar.',
      steps: ['Organize os dados e a referência', 'Descreva o que foi combinado', 'Confira valor e vencimento', 'Envie e registre o acompanhamento'],
    },
    sections: [
      {
        heading: 'Comece pelo que precisa estar confirmado',
        paragraphs: [
          `Antes de emitir a fatura, confirme os dados ligados a ${meta.focus}: o nome correto do cliente, a entrega acordada, a referência do projeto e a pessoa ou caixa de e-mail responsável pelo pagamento. Essas informações evitam que uma cobrança correta fique parada por falta de contexto.`,
          'Quando houver contrato, pedido de compra, aceite de orçamento ou aprovação de mudança de escopo, mantenha essa referência próxima do documento. Ela ajuda quem recebe a identificar rapidamente por que o valor está sendo cobrado.',
        ],
        checklist: ['Confira dados do cliente e da sua empresa.', 'Use uma referência única e fácil de localizar.', 'Confirme que o valor corresponde ao que foi combinado.', 'Mostre uma data de vencimento e uma forma de pagamento.'],
      },
      {
        heading: 'Transforme o acordo em informações fáceis de conferir',
        paragraphs: [
          `Uma boa fatura não exige que o cliente adivinhe o que cada linha representa. Ao tratar de ${meta.focus}, prefira descrições específicas, períodos definidos e valores separados por item quando isso tornar a cobrança mais verificável.`,
          'Evite esconder impostos, descontos, despesas ou pagamentos anteriores no total. Se um ajuste afetar o valor devido, identifique-o de modo que a pessoa responsável consiga fazer a conferência sem enviar uma nova pergunta.',
        ],
      },
      {
        heading: 'Registre e acompanhe com consistência',
        paragraphs: [
          'Depois de enviar, guarde uma cópia do documento final, a data de emissão e a forma de envio. Um histórico simples facilita responder a dúvidas, localizar comprovantes e seguir o mesmo processo na próxima cobrança.',
          'Este material traz orientações gerais de processo. Questões fiscais, jurídicas, contábeis ou de emissão de documento fiscal dependem da sua atividade e localidade; valide os requisitos aplicáveis antes de emitir a fatura.',
        ],
      },
    ],
    faq: hasFaq ? [
      { question: `Qual é o primeiro passo em ${meta.focus}?`, answer: 'Comece reunindo o que foi acordado com o cliente: escopo, referência, valor, vencimento e forma de pagamento. Depois transforme essas informações em campos claros na fatura.' },
      { question: 'Posso usar este guia como orientação fiscal ou jurídica?', answer: 'Não. O conteúdo é informativo e trata de organização de faturamento. Para obrigações fiscais, legais ou contábeis, confirme as regras aplicáveis com um profissional qualificado.' },
    ] : undefined,
    related: guide.related,
  };
}

export const guidesPt: Guide[] = guides.map((guide) => buildPortugueseGuide(guide, ptMeta[guide.slug] ?? {
  title: guide.title,
  summary: guide.summary,
  category: 'Faturamento',
  focus: 'faturamento',
}));

export function getGuidePt(slug: string) {
  return guidesPt.find((guide) => guide.slug === slug);
}
