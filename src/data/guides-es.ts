import type { Guide } from './guides';

export const guidesEs: Guide[] = [
  {
    slug: `lista-verificacion-factura`,
    title: `Lista de verificación de facturas: 9 detalles que confirmar antes de enviarlas`,
    description: `Una lista de verificación práctica, campo por campo, con un ejemplo de factura de servicios ya completado.`,
    category: `Fundamentos de facturación`,
    readingTime: `5 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una lista de verificación práctica, campo por campo, con un ejemplo de factura de servicios ya completado.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Lista de verificación de facturas: 9 detalles que confirmar antes de enviarlas`,
    },
    intro: [
      `Fundamentos de facturación · 5 min de lectura`,
      `Una revisión final toma menos de dos minutos y puede evitar un retraso en el pago causado por una fecha, una referencia o un total que falta.`,
      `Una factura es más fácil de pagar cuando quien la recibe puede identificar de inmediato quién la emitió, en qué consistió el trabajo, cuánto se debe y cuándo pagar. Esta lista se centra en esos detalles clave para la decisión de pago, no en el formato decorativo.`,
      `Úsala después de introducir tus conceptos y antes de exportar un PDF o compartir un enlace. Sirve tanto para autónomos como para contratistas y pequeños equipos que facturan productos o servicios.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Una factura de consultoría ya completada`,
      body: `Northstar Studio factura a Acme Retail dos días de revisión de un sitio web. Cada dato responde a una pregunta que el equipo contable de Acme necesita resolver antes de pagar. NS-2026-041 — único y fácil de citar en un correo Revisión del sitio web, 14–15 de agosto de 2026 Neto 14 — pago vencido el 2 de septiembre de 2026 1.500,00 \$ — el tratamiento fiscal se muestra por separado`,
      rows: [
        [
          `Número de factura`,
          `NS-2026-041 — único y fácil de citar en un correo`,
        ],
        [
          `Periodo de servicio`,
          `Revisión del sitio web, 14–15 de agosto de 2026`,
        ],
        [
          `Condiciones de pago`,
          `Neto 14 — pago vencido el 2 de septiembre de 2026`,
        ],
        [
          `Importe a pagar`,
          `1.500,00 \$ — el tratamiento fiscal se muestra por separado`,
        ],
      ],
    },
    diagram: {
      title: `El recorrido visual de quien paga`,
      caption: undefined,
      steps: [
        `¿Quién factura?`,
        `¿Qué se entregó?`,
        `¿Cuánto se debe?`,
        `¿Cuándo y cómo pago?`,
      ],
    },
    sections: [
      {
        heading: `Empieza por la identidad y las referencias`,
        paragraphs: [
          `Coloca el nombre de tu negocio y un medio de contacto fiable cerca de la parte superior. Después, confirma que el nombre, el contacto y la dirección del cliente coincidan con la persona o el equipo que aprueba el pago.`,
          `- ✓ El nombre de tu negocio y tu correo electrónico están presentes.`,
          `- ✓ El nombre del cliente está escrito como lo espera su equipo contable.`,
          `- ✓ El número de factura es único y sigue tu secuencia elegida.`,
          `- ✓ La fecha de emisión y la fecha de vencimiento son visibles.`,
        ],
        checklist: [
          `El nombre de tu negocio y tu correo electrónico están presentes.`,
          `El nombre del cliente está escrito como lo espera su equipo contable.`,
          `El número de factura es único y sigue tu secuencia elegida.`,
          `La fecha de emisión y la fecha de vencimiento son visibles.`,
        ],
      },
      {
        heading: `Haz que el trabajo sea fácil de reconocer`,
        paragraphs: [
          `Un concepto vago como "servicios" le da al cliente poco que aprobar. Indica el entregable, la cantidad o el tiempo, la tarifa unitaria y el periodo correspondiente. Si existe una orden de compra, un contrato o un código de proyecto, colócalo en un campo de referencia o en una nota.`,
          `- ✓ Cada concepto explica el producto o servicio.`,
          `- ✓ La cantidad y la tarifa coinciden con lo acordado.`,
          `- ✓ Los descuentos, el envío y los impuestos están indicados por separado, no ocultos en el total.`,
          `- ✓ La moneda coincide con la acordada.`,
        ],
        checklist: [
          `Cada concepto explica el producto o servicio.`,
          `La cantidad y la tarifa coinciden con lo acordado.`,
          `Los descuentos, el envío y los impuestos están indicados por separado, no ocultos en el total.`,
          `La moneda coincide con la acordada.`,
        ],
      },
      {
        heading: `Termina con una solicitud de pago clara`,
        paragraphs: [
          `Muestra el importe total a pagar una sola vez, de forma destacada, e indica el método o las instrucciones de pago. Si aceptas transferencia bancaria, incluye solo los datos que te sientas cómodo compartiendo en una factura. Si usas enlaces de pago en línea, confirma que el enlace sea correcto antes de enviarlo.`,
          `- ✓ El total a pagar se ha verificado contra los conceptos facturados.`,
          `- ✓ Las condiciones de pago coinciden con lo acordado con el cliente.`,
          `- ✓ Una breve nota de agradecimiento o de remesa es opcional, pero conviene que sea concreta.`,
          `- ✓ Has abierto el PDF exportado al menos una vez para comprobar el diseño.`,
        ],
        checklist: [
          `El total a pagar se ha verificado contra los conceptos facturados.`,
          `Las condiciones de pago coinciden con lo acordado con el cliente.`,
          `Una breve nota de agradecimiento o de remesa es opcional, pero conviene que sea concreta.`,
          `Has abierto el PDF exportado al menos una vez para comprobar el diseño.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `condiciones-de-pago`,
      `numeracion-de-facturas`,
      `facturacion-autonomos`,
    ],
  },
  {
    slug: `condiciones-de-pago`,
    title: `Condiciones de pago de facturas: cómo fijar una fecha de vencimiento clara`,
    description: `Cómo elegir y redactar condiciones de pago para facturas, con ejemplos prácticos según el tipo de relación con el cliente.`,
    category: `Cobrar a tiempo`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo elegir y redactar condiciones de pago para facturas, con ejemplos prácticos según el tipo de relación con el cliente.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Condiciones de pago de facturas: cómo fijar una fecha de vencimiento clara`,
    },
    intro: [
      `Cobrar a tiempo · 6 min de lectura`,
      `Unas buenas condiciones de pago indican una fecha concreta, un método de pago y qué debe usar el cliente como referencia.`,
      `Las condiciones de pago son la instrucción que convierte el total de una factura en un pago esperado. "Neto 14" puede ser útil, pero una fecha de vencimiento visible elimina la ambigüedad para un equipo de cuentas por pagar con poco tiempo.`,
      `Elige condiciones que se ajusten al nivel de confianza, al ritmo de entrega y a las necesidades de flujo de caja de tu trabajo. Después, usa la misma redacción de forma constante en presupuestos, contratos y facturas.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Tres formas de decir lo mismo`,
      body: `Para una factura emitida el 19 de agosto de 2026, estas condiciones comunican, de menos a más, un nivel de detalle progresivo. Por favor, paguen a la brevedad. Pago vencido a los 14 días de la emisión. Pago vencido el 2 de septiembre de 2026. Por favor, incluyan la factura NS-2026-041 como referencia de pago.`,
      rows: [
        [
          `Demasiado vago`,
          `Por favor, paguen a la brevedad.`,
        ],
        [
          `Claro`,
          `Pago vencido a los 14 días de la emisión.`,
        ],
        [
          `Ideal para el seguimiento`,
          `Pago vencido el 2 de septiembre de 2026. Por favor, incluyan la factura NS-2026-041 como referencia de pago.`,
        ],
      ],
    },
    diagram: {
      title: `Elige las condiciones según la relación`,
      caption: undefined,
      steps: [
        `¿Proyecto nuevo?`,
        `Usa una factura de depósito o por hitos.`,
        `¿Cliente recurrente?`,
        `Usa la fecha de vencimiento acordada.`,
      ],
    },
    sections: [
      {
        heading: `Usa fechas de calendario siempre que sea posible`,
        paragraphs: [
          `Las condiciones relativas pueden interpretarse de forma distinta cuando una factura se reenvía o se vuelve a emitir. Añade una fecha como "Vence el 2 de septiembre de 2026" junto a "Neto 14". Esto permite al cliente actuar sin tener que contar días.`,
        ],
      },
      {
        heading: `Ajusta el ritmo de pago al tipo de trabajo`,
        paragraphs: [
          `Un trabajo puntual y pequeño puede facturarse contra entrega. Los proyectos más grandes suelen usar un depósito y una factura final, mientras que las igualas recurrentes pueden facturarse el mismo día cada mes. Indica el periodo de servicio para que un cargo recurrente sea fácil de relacionar con el trabajo realizado.`,
          `- ✓ Confirma que las condiciones se acordaron antes de empezar el trabajo.`,
          `- ✓ Usa la referencia de orden de compra que exija el cliente, si la tiene.`,
          `- ✓ Envía la factura a la persona o al correo encargado de los pagos.`,
          `- ✓ Guarda una copia del PDF enviado y la fecha en que se emitió.`,
        ],
        checklist: [
          `Confirma que las condiciones se acordaron antes de empezar el trabajo.`,
          `Usa la referencia de orden de compra que exija el cliente, si la tiene.`,
          `Envía la factura a la persona o al correo encargado de los pagos.`,
          `Guarda una copia del PDF enviado y la fecha en que se emitió.`,
        ],
      },
      {
        heading: `Diseña un plan de seguimiento tranquilo`,
        paragraphs: [
          `Tu factura no necesita una nota amenazante. Un calendario breve de recordatorios suele bastar: una nota amable unos días antes del vencimiento, un recordatorio directo el día del vencimiento y un seguimiento personal si el pago sigue pendiente.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `lista-verificacion-factura`,
      `presupuesto-vs-factura`,
      `recuperacion-facturas-vencidas`,
    ],
  },
  {
    slug: `numeracion-de-facturas`,
    title: `Numeración de facturas: un sistema sencillo que se mantiene organizado`,
    description: `Elige un formato de numeración de facturas único, mira ejemplos reales y evita los errores más comunes al numerar.`,
    category: `Fundamentos de facturación`,
    readingTime: `5 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Elige un formato de numeración de facturas único, mira ejemplos reales y evita los errores más comunes al numerar.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Numeración de facturas: un sistema sencillo que se mantiene organizado`,
    },
    intro: [
      `Fundamentos de facturación · 5 min de lectura`,
      `El mejor sistema de numeración es el que puedes seguir usando: único, lo bastante secuencial para buscarlo, y coherente en todos tus registros.`,
      `Los números de factura ayudan a ambas partes a encontrar el mismo documento con rapidez. También evitan la confusión que surge cuando dos facturas comparten nombre de archivo o cuando se envía una factura revisada sin una referencia clara.`,
      `No necesitas un código complicado. Empieza con un prefijo corto y una secuencia que puedas mantener, y registra cualquier cambio en tu propio proceso contable.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Una secuencia legible para 2026`,
      body: `Un estudio llamado Northstar usa un prefijo más el año y una secuencia. El número se mantiene único incluso cuando las facturas se guardan en carpetas distintas. NS-2026-001 NS-2026-041 NS-2026-041-R1 — solo si tu proceso necesita una etiqueta de revisión independiente`,
      rows: [
        [
          `Primera factura`,
          `NS-2026-001`,
        ],
        [
          `Factura número cuarenta y uno`,
          `NS-2026-041`,
        ],
        [
          `Revisión`,
          `NS-2026-041-R1 — solo si tu proceso necesita una etiqueta de revisión independiente`,
        ],
      ],
    },
    diagram: {
      title: `Un número de factura tiene tres partes útiles`,
      caption: undefined,
      steps: [
        `NS`,
        `2026`,
        `041`,
      ],
    },
    sections: [
      {
        heading: `Elige un patrón que puedas continuar`,
        paragraphs: [
          `Un prefijo identifica el negocio o la serie, el año facilita el rastreo en los archivos, y un número con ceros a la izquierda se ordena correctamente en una lista de archivos. Si prefieres una única secuencia corrida, también funciona: lo esencial es evitar duplicados.`,
          `- ✓ Empieza desde un número que no choque con registros anteriores.`,
          `- ✓ Usa el mismo número en el nombre del archivo, el asunto del correo y la referencia de pago.`,
          `- ✓ No reutilices un número después de haber enviado una factura.`,
          `- ✓ Conserva las facturas anuladas o corregidas en tus registros, con una explicación.`,
        ],
        checklist: [
          `Empieza desde un número que no choque con registros anteriores.`,
          `Usa el mismo número en el nombre del archivo, el asunto del correo y la referencia de pago.`,
          `No reutilices un número después de haber enviado una factura.`,
          `Conserva las facturas anuladas o corregidas en tus registros, con una explicación.`,
        ],
      },
      {
        heading: `No dejes que las revisiones generen ambigüedad`,
        paragraphs: [
          `Si corriges una factura, sigue el proceso de registro adecuado para tu negocio y tu jurisdicción. En muchos casos, mantener la referencia original y anotar claramente la revisión es más fácil de seguir para un cliente que sustituir la factura en silencio.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Los números de factura tienen que empezar en 001?`,
        answer: `No. Elige un punto de partida único que encaje con tus registros actuales. Lo importante es que cada factura emitida pueda identificarse sin confusión.`,
      },
      {
        question: `¿Pueden dos clientes recibir el mismo número de factura?`,
        answer: `No. Usa una referencia única por cada factura emitida, incluso cuando los importes o los servicios sean los mismos.`,
      },
    ],
    related: [
      `lista-verificacion-factura`,
      `presupuesto-vs-factura`,
      `generacion-factura-pdf`,
    ],
  },
  {
    slug: `presupuesto-vs-factura`,
    title: `Presupuesto vs. factura: un flujo de trabajo práctico desde la aprobación hasta el pago`,
    description: `Entiende para qué sirven los presupuestos y las facturas, con un ejemplo de flujo de trabajo para un proyecto de servicios.`,
    category: `Facturación a clientes`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Entiende para qué sirven los presupuestos y las facturas, con un ejemplo de flujo de trabajo para un proyecto de servicios.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Presupuesto vs. factura: un flujo de trabajo práctico desde la aprobación hasta el pago`,
    },
    intro: [
      `Facturación a clientes · 6 min de lectura`,
      `Un presupuesto ayuda al cliente a decidir si aprueba un trabajo. Una factura solicita el pago después de que se cumple el hito de facturación acordado.`,
      `Los presupuestos y las facturas suelen contener datos parecidos —nombre del cliente, servicios, importes y fechas—, pero sirven a momentos distintos dentro de una relación con el cliente. Mantener esa distinción visible facilita el seguimiento de la aprobación y del pago.`,
      `Esta guía usa un proyecto de servicios como ejemplo. Tu contrato, el tratamiento fiscal y los requisitos locales de conservación de registros pueden exigir documentos adicionales.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Fotografía de marca para el lanzamiento de un producto`,
      body: `Un fotógrafo envía un presupuesto antes de la reserva y una factura después del hito acordado. La descripción se mantiene igual, mientras que el propósito del documento cambia. Un día de sesión + set de imágenes editadas — total propuesto: 1.200 \$ El cliente acepta el alcance y paga un depósito de reserva del 40 % Factura de depósito: 480 \$; factura final: 720 \$ tras la entrega`,
      rows: [
        [
          `Presupuesto`,
          `Un día de sesión + set de imágenes editadas — total propuesto: 1.200 \$`,
        ],
        [
          `Aprobación`,
          `El cliente acepta el alcance y paga un depósito de reserva del 40 %`,
        ],
        [
          `Factura`,
          `Factura de depósito: 480 \$; factura final: 720 \$ tras la entrega`,
        ],
      ],
    },
    diagram: {
      title: `Un traspaso limpio en la facturación al cliente`,
      caption: undefined,
      steps: [
        `Presupuesto: ¿cuánto va a costar esto?`,
        `Aprobación: ¿estamos de acuerdo?`,
        `Factura: ¿qué se debe ahora?`,
        `Recibo o registro: ¿se pagó?`,
      ],
    },
    sections: [
      {
        heading: `Usa un presupuesto para describir una propuesta`,
        paragraphs: [
          `Un presupuesto le da al cliente un precio y un alcance antes de empezar el trabajo. Incluye cuánto tiempo es válido el precio, qué está incluido y qué cambiaría el precio. Una vez que el cliente lo aprueba, conserva el presupuesto aceptado junto con los registros del proyecto.`,
        ],
      },
      {
        heading: `Usa una factura para solicitar el pago acordado`,
        paragraphs: [
          `Una factura debe hacer referencia al trabajo entregado o al hito acordado, e indicar una fecha de vencimiento. No debería sorprender al cliente con un importe sin explicación. Si el alcance cambió, explica el cambio aprobado por separado y haz que los conceptos sean fáciles de reconocer.`,
          `- ✓ Haz coincidir el nombre del cliente en el presupuesto y en la factura.`,
          `- ✓ Haz referencia al presupuesto aceptado o al código de proyecto, si resulta útil.`,
          `- ✓ Factura solo el hito aprobado o el importe final.`,
          `- ✓ Mantén las instrucciones de pago coherentes.`,
        ],
        checklist: [
          `Haz coincidir el nombre del cliente en el presupuesto y en la factura.`,
          `Haz referencia al presupuesto aceptado o al código de proyecto, si resulta útil.`,
          `Factura solo el hito aprobado o el importe final.`,
          `Mantén las instrucciones de pago coherentes.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Puedo convertir un presupuesto en una factura?`,
        answer: `Sí. Reutiliza el alcance aprobado y los datos del cliente, y luego cambia el propósito del documento, añade un número de factura, la fecha de emisión, la fecha de vencimiento y las instrucciones de pago.`,
      },
      {
        question: `¿Un presupuesto es prueba de pago?`,
        answer: `No. Un presupuesto es una propuesta. Conserva un registro de pago, un recibo o una confirmación independientes una vez que la factura se haya pagado.`,
      },
    ],
    related: [
      `condiciones-de-pago`,
      `numeracion-de-facturas`,
      `facturacion-autonomos`,
    ],
  },
  {
    slug: `facturacion-autonomos`,
    title: `Fundamentos de facturación para autónomos: cómo montar un sistema de facturación limpio`,
    description: `Aprende cómo autónomos y contratistas usan un generador de facturas gratuito para crear flujos de facturación sencillos que se cobran a tiempo.`,
    category: `Autónomos y servicios`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Aprende cómo autónomos y contratistas usan un generador de facturas gratuito para crear flujos de facturación sencillos que se cobran a tiempo.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Fundamentos de facturación para autónomos: cómo montar un sistema de facturación limpio`,
    },
    intro: [
      `Autónomos y servicios · 7 min de lectura`,
      `Una configuración de facturación estructurada convierte los entregables terminados en flujo de caja rápidamente, a la vez que mantiene tus registros financieros listos para una auditoría.`,
      `Llevar una consultoría individual o un negocio freelance significa gestionar tu propio proceso contable. Cuando se completan los entregables de un proyecto, redactar una factura a mano en un procesador de texto suele provocar fechas olvidadas o diseños poco consistentes.`,
      `Al usar un generador de facturas en línea, los profesionales independientes pueden mantener una imagen de marca uniforme, guardar perfiles de clientes en borrador de forma local y emitir facturas profesionales en minutos, sin cuotas de suscripción recurrentes.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Una factura de iguala de diseño freelance`,
      body: `Una ilustradora digital factura a una agencia de marketing las horas mensuales de su iguala usando un flujo de trabajo sencillo con un generador de facturas en PDF. Generador de facturas gratuito con almacenamiento local activado Wireframes de UX y recursos visuales — 20 h a 85 \$/h 1.700,00 \$ Neto 14 (vence el 8 de septiembre de 2026)`,
      rows: [
        [
          `Herramienta de facturación`,
          `Generador de facturas gratuito con almacenamiento local activado`,
        ],
        [
          `Concepto detallado`,
          `Wireframes de UX y recursos visuales — 20 h a 85 \$/h`,
        ],
        [
          `Subtotal`,
          `1.700,00 \$`,
        ],
        [
          `Condiciones de pago`,
          `Neto 14 (vence el 8 de septiembre de 2026)`,
        ],
      ],
    },
    diagram: {
      title: `El ciclo de facturación del autónomo`,
      caption: undefined,
      steps: [
        `Registrar el alcance del entregable`,
        `Generar la factura en PDF`,
        `Enviarla con instrucciones de pago`,
        `Registrar el pago recibido`,
      ],
    },
    sections: [
      {
        heading: `Por qué los autónomos eligen un generador de facturas gratuito en el navegador`,
        paragraphs: [
          `Las hojas de cálculo y los archivos de texto sin conexión requieren formatear tablas a mano y no calculan automáticamente los importes de cada concepto. Usar un generador de facturas gratuito especializado permite a los autónomos introducir tarifas por hora, descripciones de conceptos y tipos de impuestos en un formulario intuitivo dentro del navegador.`,
          `Un generador de facturas sencillo calcula automáticamente los totales por línea, los subtotales y los impuestos. Esto elimina errores de cálculo antes de exportar el PDF final.`,
          `- ✓ Verifica la dirección de facturación del cliente y su número de identificación fiscal.`,
          `- ✓ Confirma que las tarifas por hora o los honorarios de proyecto cerrado coinciden con tu contrato.`,
          `- ✓ Incluye los datos de transferencia bancaria directa o los enlaces del portal de pago.`,
          `- ✓ Guarda una copia en el almacenamiento local de tu navegador para duplicarla rápidamente.`,
        ],
        checklist: [
          `Verifica la dirección de facturación del cliente y su número de identificación fiscal.`,
          `Confirma que las tarifas por hora o los honorarios de proyecto cerrado coinciden con tu contrato.`,
          `Incluye los datos de transferencia bancaria directa o los enlaces del portal de pago.`,
          `Guarda una copia en el almacenamiento local de tu navegador para duplicarla rápidamente.`,
        ],
      },
      {
        heading: `Cómo fijar condiciones de pago claras para contratistas independientes`,
        paragraphs: [
          `Unas condiciones de pago demasiado largas pueden perjudicar el flujo de caja de un autónomo. Establecer plazos de 14 o 7 días fomenta que los clientes paguen más rápido. Usar un creador de facturas gratuito fiable te ayuda a mostrar la fecha de vencimiento de forma destacada en la parte superior del documento.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Cuál es el mejor generador de facturas gratuito para autónomos?`,
        answer: `El mejor generador de facturas gratuito es una herramienta basada en el navegador, centrada en la privacidad, que permite descargar el PDF al instante sin necesidad de registrar una cuenta ni instalar software.`,
      },
      {
        question: `¿Deben los autónomos cobrar recargos por mora en facturas vencidas?`,
        answer: `Sí, siempre que las condiciones de recargo por mora (por ejemplo, un interés mensual del 1,5 %) estén indicadas explícitamente en el contrato original y se muestren con claridad en la factura.`,
      },
    ],
    related: [
      `lista-verificacion-factura`,
      `condiciones-de-pago`,
      `comparativa-software-facturacion`,
    ],
  },
  {
    slug: `comparativa-software-facturacion`,
    title: `Comparativa de herramientas de facturación: generador de facturas en línea vs software de escritorio`,
    description: `Una mirada independiente al software de facturación, las aplicaciones de escritorio y los generadores de facturas en línea para la contabilidad de pequeños negocios.`,
    category: `Software y herramientas`,
    readingTime: `8 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una mirada independiente al software de facturación, las aplicaciones de escritorio y los generadores de facturas en línea para la contabilidad de pequeños negocios.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Comparativa de herramientas de facturación: generador de facturas en línea vs software de escritorio`,
    },
    intro: [
      `Software y herramientas · 8 min de lectura`,
      `Compara el software de facturación basado en navegador con las instalaciones de escritorio más pesadas para elegir la solución más rápida para tu negocio.`,
      `Elegir el software de facturación adecuado es un paso clave para agencias en crecimiento y contratistas independientes. Muchas suites contables de escritorio tradicionales exigen instalaciones voluminosas, suscripciones obligatorias y registros de cuenta en la nube solo para enviar una factura básica.`,
      `Las aplicaciones web modernas ofrecen una alternativa ligera: un generador de facturas en línea sin necesidad de iniciar sesión, que procesa los datos directamente en tu navegador, manteniendo privados los datos sensibles del cliente mientras ofrece la velocidad de las herramientas de escritorio.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Comparando la carga de cada tipo de software`,
      body: `Cómo se compara un buen generador de facturas gratuito basado en la web frente al software de facturación de escritorio tradicional. Herramienta web: 0 segundos frente a aplicación de escritorio: 15-30 minutos de instalación Almacenamiento local en el navegador (IndexedDB) frente a base de datos propietaria del software Generador de facturas gratuito frente a suscripciones de software de 30 \$/mes Exportación instantánea a PDF vectorial frente a configuración compleja del controlador de impresión`,
      rows: [
        [
          `Tiempo de configuración`,
          `Herramienta web: 0 segundos frente a aplicación de escritorio: 15-30 minutos de instalación`,
        ],
        [
          `Almacenamiento de datos`,
          `Almacenamiento local en el navegador (IndexedDB) frente a base de datos propietaria del software`,
        ],
        [
          `Modelo de coste`,
          `Generador de facturas gratuito frente a suscripciones de software de 30 \$/mes`,
        ],
        [
          `Salida en PDF`,
          `Exportación instantánea a PDF vectorial frente a configuración compleja del controlador de impresión`,
        ],
      ],
    },
    diagram: {
      title: `Lista de verificación para elegir software`,
      caption: undefined,
      steps: [
        `¿Necesitas facturar al instante?`,
        `Usa un generador de facturas en línea desde el navegador`,
        `¿Necesitas un ERP de inventario complejo?`,
        `Usa una suite de software contable completa`,
      ],
    },
    sections: [
      {
        heading: `Por qué el software de facturación basado en navegador destaca en las reseñas`,
        paragraphs: [
          `En las comparativas de generadores de facturas mejor valorados, los usuarios priorizan la velocidad, la privacidad de los datos y una generación de PDF limpia. Las herramientas web que funcionan localmente en el navegador eliminan los riesgos de caída del servidor y protegen la privacidad del cliente.`,
          `Al buscar software de facturación, busca soluciones que no almacenen tus registros financieros en servidores de terceros sin tu permiso explícito.`,
          `- ✓ Elige herramientas que permitan descargas instantáneas en PDF vectorial.`,
          `- ✓ Busca calculadoras integradas de múltiples divisas y tipos de impuestos.`,
          `- ✓ Asegúrate de que la herramienta admita marca personalizada y carga de logotipo.`,
          `- ✓ Confirma que los datos se puedan exportar y respaldar localmente en formato JSON.`,
        ],
        checklist: [
          `Elige herramientas que permitan descargas instantáneas en PDF vectorial.`,
          `Busca calculadoras integradas de múltiples divisas y tipos de impuestos.`,
          `Asegúrate de que la herramienta admita marca personalizada y carga de logotipo.`,
          `Confirma que los datos se puedan exportar y respaldar localmente en formato JSON.`,
        ],
      },
      {
        heading: `Cuándo elegir un generador de facturas gratuito`,
        paragraphs: [
          `Los pequeños negocios con necesidades de facturación sencillas rara vez necesitan suites de software empresarial sobrecargadas. Un generador de facturas gratuito y ligero te permite emitir facturas profesionales de inmediato, sin cuotas mensuales continuas.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué hace seguro a un software de generación de facturas?`,
        answer: `Un generador de facturas seguro procesa los datos dentro de tu propio navegador (del lado del cliente) usando APIs como IndexedDB, garantizando que los registros de tus clientes nunca lleguen a servidores externos.`,
      },
      {
        question: `¿Puede funcionar sin conexión un generador de facturas en línea?`,
        answer: `Sí, las aplicaciones web construidas con service workers sin conexión y almacenamiento local en el navegador permiten redactar y exportar facturas incluso sin conexión a internet.`,
      },
    ],
    related: [
      `facturacion-autonomos`,
      `generacion-factura-pdf`,
      `automatizacion-factura-ia`,
    ],
  },
  {
    slug: `automatizacion-factura-ia`,
    title: `Flujos de facturación con IA: cómo aprovechar herramientas inteligentes de creación de facturas`,
    description: `Descubre cómo un generador de facturas con IA puede ayudar a estructurar conceptos, calcular tarifas y redactar descripciones de entregables con precisión.`,
    category: `Tecnología e IA`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Descubre cómo un generador de facturas con IA puede ayudar a estructurar conceptos, calcular tarifas y redactar descripciones de entregables con precisión.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Flujos de facturación con IA: cómo aprovechar herramientas inteligentes de creación de facturas`,
    },
    intro: [
      `Tecnología e IA · 6 min de lectura`,
      `Descubre cómo un creador de facturas con IA ayuda a estructurar el alcance de clientes complejos, manteniendo la supervisión humana sobre los totales finales.`,
      `La inteligencia artificial está transformando los flujos de trabajo administrativos del día a día. En la gestión de la facturación, un generador de facturas con IA puede tomar notas sueltas, registros de actividad de un proyecto o resúmenes de control horario, y convertirlos en conceptos ordenados y bien estructurados.`,
      `Usar un creador de facturas con IA no significa renunciar al control sobre tus precios. Funciona como un asistente de redacción inteligente que agiliza la preparación mientras garantiza la exactitud en totales, impuestos y descripciones del servicio.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Convertir notas de trabajo sin formato en una factura`,
      body: `Cómo transformar notas de una reunión diaria de seguimiento en una factura organizada usando un creador de facturas en línea. 4h arreglando un bug de autenticación, 3h actualizando el esquema de la base de datos, 2h en llamada con el cliente. Parche de seguridad de autenticación en el backend (4 h a 100 \$/h) — 400,00 \$ Optimización del esquema y las consultas de la base de datos (3 h a 100 \$/h) — 300,00 \$ Llamada de arquitectura técnica y estrategia con el cliente (2 h a 100 \$/h) — 200,00 \$`,
      rows: [
        [
          `Notas originales`,
          `4h arreglando un bug de autenticación, 3h actualizando el esquema de la base de datos, 2h en llamada con el cliente.`,
        ],
        [
          `Concepto estructurado por IA 1`,
          `Parche de seguridad de autenticación en el backend (4 h a 100 \$/h) — 400,00 \$`,
        ],
        [
          `Concepto estructurado por IA 2`,
          `Optimización del esquema y las consultas de la base de datos (3 h a 100 \$/h) — 300,00 \$`,
        ],
        [
          `Concepto estructurado por IA 3`,
          `Llamada de arquitectura técnica y estrategia con el cliente (2 h a 100 \$/h) — 200,00 \$`,
        ],
      ],
    },
    diagram: {
      title: `Flujo inteligente de facturación con IA`,
      caption: undefined,
      steps: [
        `Introducir las notas de trabajo`,
        `La IA estructura los conceptos`,
        `Una persona revisa los cálculos y los impuestos`,
        `Exportar la factura en PDF`,
      ],
    },
    sections: [
      {
        heading: `Cómo la automatización inteligente acelera la facturación a clientes`,
        paragraphs: [
          `Redactar facturas a mano para entregables complejos de varias semanas consume mucho tiempo. Un generador de facturas con IA analiza los hitos del proyecto y calcula automáticamente los desgloses de subtotales, los descuentos porcentuales y los impuestos regionales sobre ventas.`,
          `Combinado con un creador de facturas en línea moderno, las herramientas de IA ayudan a los autónomos a no perder horas facturables, manteniendo al mismo tiempo un diseño de documento profesional.`,
          `- ✓ Revisa la claridad de las descripciones de conceptos generadas por la IA.`,
          `- ✓ Verifica los subtotales matemáticos y los porcentajes de impuestos.`,
          `- ✓ Asegúrate de que las condiciones de pago y las fechas de vencimiento queden explícitas.`,
          `- ✓ Comprueba que se conserven los códigos de referencia del cliente o los números de orden de compra.`,
        ],
        checklist: [
          `Revisa la claridad de las descripciones de conceptos generadas por la IA.`,
          `Verifica los subtotales matemáticos y los porcentajes de impuestos.`,
          `Asegúrate de que las condiciones de pago y las fechas de vencimiento queden explícitas.`,
          `Comprueba que se conserven los códigos de referencia del cliente o los números de orden de compra.`,
        ],
      },
      {
        heading: `Mantener la supervisión humana en la facturación automatizada`,
        paragraphs: [
          `Las herramientas automatizadas deben ayudar, no sustituir, tu revisión final. Comprueba siempre las cifras de facturación definitivas antes de enviar un PDF a los departamentos de contabilidad de los clientes, para asegurar el cumplimiento de lo pactado en el contrato.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Cómo beneficia un creador de facturas con IA a los equipos pequeños?`,
        answer: `Automatiza tareas tediosas como resumir hojas de horas, clasificar gastos facturables y organizar conceptos, ahorrando horas de trabajo manual cada mes.`,
      },
      {
        question: `¿Están seguros mis datos financieros al usar herramientas de facturación con IA?`,
        answer: `Sí, siempre que uses herramientas orientadas a la privacidad que procesen la información de forma local, sin almacenar tus datos de negocio en bases de datos en la nube.`,
      },
    ],
    related: [
      `comparativa-software-facturacion`,
      `facturacion-autonomos`,
      `plantillas-marca-factura`,
    ],
  },
  {
    slug: `facturacion-movil`,
    title: `Facturación móvil sobre la marcha: cómo encontrar la mejor app gratuita para crear facturas`,
    description: `Cómo técnicos móviles, contratistas de campo y consultores remotos usan una app de facturación para cobrar a los clientes directamente desde el móvil.`,
    category: `Facturación móvil`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo técnicos móviles, contratistas de campo y consultores remotos usan una app de facturación para cobrar a los clientes directamente desde el móvil.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación móvil sobre la marcha: cómo encontrar la mejor app gratuita para crear facturas`,
    },
    intro: [
      `Facturación móvil · 6 min de lectura`,
      `Emitir facturas justo al terminar el trabajo reduce los ciclos de cobro de semanas a días.`,
      `Para los servicios de campo, los contratistas de oficios y los consultores móviles, esperar a volver a un ordenador de escritorio para crear la factura suele retrasar el pago. Usar una app de facturación gratuita y adaptable permite crear, revisar y enviar facturas en el propio lugar de trabajo.`,
      `Las soluciones web modernas de facturación móvil no requieren descargas pesadas desde una tienda de aplicaciones. Se abren directamente en el navegador del móvil, cargan al instante y guardan los datos del cliente de forma local.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Factura de un técnico de servicio a domicilio`,
      body: `Un técnico de climatización termina una reparación y genera una factura en una tablet antes de salir de la propiedad. Navegador del móvil con una app sencilla para crear facturas Diagnóstico urgente del compresor y sustitución de válvula Piezas: 140,00 \$ | Mano de obra: 1,5 h a 90 \$/h (135,00 \$) 275,00 \$ mediante enlace de pago instantáneo`,
      rows: [
        [
          `Dispositivo usado`,
          `Navegador del móvil con una app sencilla para crear facturas`,
        ],
        [
          `Servicios facturados`,
          `Diagnóstico urgente del compresor y sustitución de válvula`,
        ],
        [
          `Piezas y mano de obra`,
          `Piezas: 140,00 \$ | Mano de obra: 1,5 h a 90 \$/h (135,00 \$)`,
        ],
        [
          `Total pagado en el sitio`,
          `275,00 \$ mediante enlace de pago instantáneo`,
        ],
      ],
    },
    diagram: {
      title: `Flujo de facturación móvil`,
      caption: undefined,
      steps: [
        `Terminar el servicio en el sitio`,
        `Abrir la app de creación de facturas en el móvil`,
        `Introducir conceptos e impuestos`,
        `Enviar el PDF por correo o compartir el enlace de pago`,
      ],
    },
    sections: [
      {
        heading: `Características clave de la mejor app gratuita para crear facturas`,
        paragraphs: [
          `Una buena app de facturación gratuita debe ser ligera, cómoda al tacto y capaz de generar PDFs de factura limpios incluso en pantallas pequeñas. Las interfaces con campos y botones grandes hacen que la introducción de datos en el sitio sea rápida y con menos errores.`,
          `Usar un creador de facturas en línea optimizado para móviles garantiza que los archivos exportados mantengan exactamente el mismo diseño nítido y profesional que los documentos generados desde un ordenador.`,
          `- ✓ Elige una herramienta con formularios responsivos y adaptados al tacto.`,
          `- ✓ Confirma que las descargas en PDF funcionen directamente en los navegadores móviles.`,
          `- ✓ Guarda de antemano los servicios o conceptos habituales para una entrada más rápida.`,
          `- ✓ Verifica que las ediciones sin conexión se guarden automáticamente en el almacenamiento del navegador.`,
        ],
        checklist: [
          `Elige una herramienta con formularios responsivos y adaptados al tacto.`,
          `Confirma que las descargas en PDF funcionen directamente en los navegadores móviles.`,
          `Guarda de antemano los servicios o conceptos habituales para una entrada más rápida.`,
          `Verifica que las ediciones sin conexión se guarden automáticamente en el almacenamiento del navegador.`,
        ],
      },
      {
        heading: `Acelerar el flujo de caja con facturación inmediata`,
        paragraphs: [
          `Los estudios muestran que las facturas emitidas dentro de las primeras 24 horas tras terminar un proyecto se cobran hasta un 50 % más rápido que las enviadas semanas después. Llevar una buena app para crear facturas en el bolsillo elimina el retraso acumulado en la facturación.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Necesito instalar una app desde la App Store o Google Play?`,
        answer: `No. Las aplicaciones web progresivas modernas funcionan como una app de creación de facturas directamente dentro de Safari, Chrome o cualquier navegador móvil, sin instalación.`,
      },
      {
        question: `¿Puedo añadir logotipos al usar una app de facturación móvil?`,
        answer: `Sí, las herramientas de facturación web permiten subir imágenes directamente desde el carrete de fotos o el sistema de archivos del móvil.`,
      },
    ],
    related: [
      `facturacion-autonomos`,
      `recuperacion-facturas-vencidas`,
      `plantillas-marca-factura`,
    ],
  },
  {
    slug: `plantillas-marca-factura`,
    title: `Diseño de facturas profesionales: plantillas personalizadas y estética de marca`,
    description: `Aprende a usar un creador de facturas sencillo para personalizar colores, subir logotipos y aplicar una tipografía de diseño limpia.`,
    category: `Diseño y marca`,
    readingTime: `5 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Aprende a usar un creador de facturas sencillo para personalizar colores, subir logotipos y aplicar una tipografía de diseño limpia.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Diseño de facturas profesionales: plantillas personalizadas y estética de marca`,
    },
    intro: [
      `Diseño y marca · 5 min de lectura`,
      `Una factura bien diseñada refuerza tu imagen de marca profesional, a la vez que facilita que el equipo contable del cliente procese los conceptos.`,
      `Una factura suele ser el último punto de contacto en una transacción con un cliente. Enviar un documento de texto plano y mal formateado puede debilitar una experiencia de marca que, de otro modo, sería de alto nivel, tanto para una agencia como para un autónomo.`,
      `Con una plantilla de creación de facturas intuitiva, los negocios pueden aplicar paletas de color ya definidas, subir logotipos en alta resolución y elegir ilustraciones de portada elegantes que conviertan sus facturas en piezas de marca pulidas.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Diseño de factura de una agencia con marca propia`,
      body: `Una agencia creativa usa un creador de facturas sencillo para personalizar sus documentos de facturación. Banner moderno en degradado que combina con los colores primarios de la marca Fuentes sans-serif limpias con una jerarquía clara por secciones Logotipo en PNG transparente y alta resolución, subido a la cabecera Vista previa en modo oscuro / estilo glassmorphism elegante`,
      rows: [
        [
          `Estilo de cabecera`,
          `Banner moderno en degradado que combina con los colores primarios de la marca`,
        ],
        [
          `Tipografía`,
          `Fuentes sans-serif limpias con una jerarquía clara por secciones`,
        ],
        [
          `Elementos de marca`,
          `Logotipo en PNG transparente y alta resolución, subido a la cabecera`,
        ],
        [
          `Sistema de color`,
          `Vista previa en modo oscuro / estilo glassmorphism elegante`,
        ],
      ],
    },
    diagram: {
      title: `Jerarquía visual de una factura profesional`,
      caption: undefined,
      steps: [
        `Cabecera: logotipo y título de la marca`,
        `Metadatos: número y fechas de la factura`,
        `Cuerpo: tabla detallada de conceptos`,
        `Pie: total y condiciones de pago`,
      ],
    },
    sections: [
      {
        heading: `Por qué un buen diseño visual mejora los tiempos de pago`,
        paragraphs: [
          `Una jerarquía tipográfica clara dirige la mirada del cliente hacia los detalles críticos: el importe a pagar, la fecha de vencimiento y las instrucciones de pago. Usar un buen creador de facturas te permite equilibrar la estética de marca con una legibilidad funcional.`,
          `Un creador de facturas sencillo asegura que el espaciado de las tablas, la alineación de columnas y el contraste cumplan con estándares de diseño profesional, tanto en pantalla como en papel impreso.`,
          `- ✓ Sube un logotipo de empresa nítido y en alta resolución.`,
          `- ✓ Elige un tema de color acorde con la identidad de tu marca.`,
          `- ✓ Asegúrate de que los totales de los conceptos contrasten bien con el fondo de la tabla.`,
          `- ✓ Verifica la legibilidad al imprimir antes de enviar los PDF a los clientes.`,
        ],
        checklist: [
          `Sube un logotipo de empresa nítido y en alta resolución.`,
          `Elige un tema de color acorde con la identidad de tu marca.`,
          `Asegúrate de que los totales de los conceptos contrasten bien con el fondo de la tabla.`,
          `Verifica la legibilidad al imprimir antes de enviar los PDF a los clientes.`,
        ],
      },
      {
        heading: `Personalizar plantillas de diseño según el sector`,
        paragraphs: [
          `Distintos sectores se benefician de estilos de plantilla diferentes: los estudios creativos pueden optar por acentos vibrantes en degradado, mientras que las consultorías legales o financieras suelen preferir diseños monocromáticos clásicos. Las herramientas flexibles de creación de facturas admiten estas elecciones estéticas sin esfuerzo.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué formato de logotipo funciona mejor en una plantilla de factura?`,
        answer: `Las imágenes en PNG transparente o SVG funcionan mejor, ya que se escalan con nitidez sin dejar bordes blancos incómodos alrededor de tu logotipo.`,
      },
      {
        question: `¿Afecta el diseño de plantilla personalizado al tamaño del archivo PDF?`,
        answer: `Las plantillas web minimalistas generan archivos PDF ligeros (normalmente por debajo de 100 KB) que se entregan rápidamente por correo electrónico.`,
      },
    ],
    related: [
      `generacion-factura-pdf`,
      `facturacion-autonomos`,
      `facturacion-movil`,
    ],
  },
  {
    slug: `recuperacion-facturas-vencidas`,
    title: `Cómo gestionar pagos atrasados: seguimientos amables y protocolos de cobro`,
    description: `Estrategias prácticas, guiones de correo y flujos de trabajo para recuperar pagos atrasados usando un creador de facturas en línea.`,
    category: `Cobrar a tiempo`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Estrategias prácticas, guiones de correo y flujos de trabajo para recuperar pagos atrasados usando un creador de facturas en línea.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Cómo gestionar pagos atrasados: seguimientos amables y protocolos de cobro`,
    },
    intro: [
      `Cobrar a tiempo · 7 min de lectura`,
      `Un calendario de recordatorios sistemático recupera facturas pendientes de forma profesional, sin dañar relaciones valiosas con los clientes.`,
      `Lidiar con pagos atrasados es uno de los aspectos más frustrantes de gestionar un negocio. En muchos casos, las facturas vencidas no se deben a mala fe del cliente, sino simplemente a correos extraviados, aprobaciones internas pendientes o números de orden de compra que faltan.`,
      `Contar con un protocolo de seguimiento estructurado —apoyado en un creador de facturas en línea fiable— te permite rastrear el estado de cada factura, enviar recordatorios a tiempo y volver a emitir documentos corregidos cuando sea necesario.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Un calendario de seguimiento de pago en tres etapas`,
      body: `Cómo gestiona una agencia la recuperación de pagos atrasados usando un creador de facturas sencillo. Recordatorio amable para comprobar si se recibió la factura Seguimiento directo adjuntando de nuevo el archivo PDF original de la factura Aviso formal solicitando el pago inmediato antes de aplicar el recargo por mora`,
      rows: [
        [
          `Etapa 1 (día +3)`,
          `Recordatorio amable para comprobar si se recibió la factura`,
        ],
        [
          `Etapa 2 (día +7)`,
          `Seguimiento directo adjuntando de nuevo el archivo PDF original de la factura`,
        ],
        [
          `Etapa 3 (día +14)`,
          `Aviso formal solicitando el pago inmediato antes de aplicar el recargo por mora`,
        ],
      ],
    },
    diagram: {
      title: `Árbol de decisión para la recuperación de pagos`,
      caption: undefined,
      steps: [
        `Llega la fecha de vencimiento de la factura`,
        `Enviar un recordatorio cortés (día 3)`,
        `Verificar el contacto de la cuenta y la orden de compra (día 7)`,
        `Aplicar el recargo por mora acordado (día 14 en adelante)`,
      ],
    },
    sections: [
      {
        heading: `Organizar tu panel de seguimiento de facturas`,
        paragraphs: [
          `Usar un buen creador de facturas con capacidades de panel local te permite marcar las facturas como Borrador, Sin pagar o Pagada. Este seguimiento visual del estado te permite saber de inmediato qué cuentas necesitan seguimiento.`,
          `Cuando una factura supera su fecha de vencimiento, abre tu creador de facturas en línea, verifica los datos de contacto del cliente y vuelve a enviar la factura junto con un mensaje de seguimiento amable.`,
          `- ✓ Comprueba que la factura se envió originalmente al contacto correcto.`,
          `- ✓ Verifica si se omitió un número de orden de compra necesario.`,
          `- ✓ Vuelve a adjuntar el PDF original de la factura en cada recordatorio.`,
          `- ✓ Mantén un registro detallado de toda la correspondencia de recordatorios de pago.`,
        ],
        checklist: [
          `Comprueba que la factura se envió originalmente al contacto correcto.`,
          `Verifica si se omitió un número de orden de compra necesario.`,
          `Vuelve a adjuntar el PDF original de la factura en cada recordatorio.`,
          `Mantén un registro detallado de toda la correspondencia de recordatorios de pago.`,
        ],
      },
      {
        heading: `Cómo redactar correos de recordatorio de pago eficaces`,
        paragraphs: [
          `Mantén un tono profesional, conciso y tranquilo. Indica el número de factura, la fecha de vencimiento original, el importe total pendiente y el enlace de pago directo. Evita el lenguaje emocional y céntrate únicamente en los datos contractuales objetivos.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué hago si un cliente ignora varios recordatorios de factura?`,
        answer: `Escala el asunto llamando directamente a la persona responsable de finanzas, pausando el trabajo activo del proyecto o enviando una carta de reclamación formal por escrito.`,
      },
      {
        question: `¿Puede un software de facturación reenviar facturas automáticamente?`,
        answer: `Muchas herramientas permiten volver a descargar el PDF con un solo clic y copiar el enlace, para que puedas adjuntar la factura actualizada a tus correos de seguimiento manuales.`,
      },
    ],
    related: [
      `condiciones-de-pago`,
      `facturacion-autonomos`,
      `facturacion-multidivisa-internacional`,
    ],
  },
  {
    slug: `facturacion-multidivisa-internacional`,
    title: `Facturación internacional: cómo facturar a clientes globales en varias divisas`,
    description: `Aprende a facturar a clientes internacionales usando un generador de facturas en línea compatible con EUR, USD, GBP, JPY y más de 40 divisas.`,
    category: `Negocios globales`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Aprende a facturar a clientes internacionales usando un generador de facturas en línea compatible con EUR, USD, GBP, JPY y más de 40 divisas.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación internacional: cómo facturar a clientes globales en varias divisas`,
    },
    intro: [
      `Negocios globales · 7 min de lectura`,
      `Domina la facturación multidivisa, la notación de tipos de cambio y las consideraciones fiscales transfronterizas para clientes internacionales.`,
      `Trabajar con clientes internacionales amplía tu mercado, pero introduce complejidades propias de la facturación en varias divisas. Las diferencias en los símbolos de moneda, las convenciones de tipo de cambio y los códigos bancarios internacionales pueden generar confusión en los departamentos de contabilidad de otros países.`,
      `Al usar un generador de facturas en línea versátil, compatible con más de 40 divisas mundiales (incluidas USD, EUR, GBP, JPY, CAD, AUD y divisas regionales), los negocios pueden emitir facturas internacionales claras y conformes con la normativa.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Un estudio europeo factura a un cliente corporativo en Estados Unidos`,
      body: `Una consultora de Berlín factura a un cliente de Nueva York en USD usando un creador de facturas gratuito. USD (\$) — elimina los cálculos de conversión de moneda para quien paga Auditoría estratégica de marca — 3.500,00 \$ USD Códigos IBAN y SWIFT/BIC claramente indicados en la sección de remesa Servicio de exportación con tipo cero (exento de IVA según las disposiciones UE-EE. UU.)`,
      rows: [
        [
          `Divisa acordada`,
          `USD (\$) — elimina los cálculos de conversión de moneda para quien paga`,
        ],
        [
          `Conceptos facturados`,
          `Auditoría estratégica de marca — 3.500,00 \$ USD`,
        ],
        [
          `Códigos bancarios`,
          `Códigos IBAN y SWIFT/BIC claramente indicados en la sección de remesa`,
        ],
        [
          `Nota fiscal`,
          `Servicio de exportación con tipo cero (exento de IVA según las disposiciones UE-EE. UU.)`,
        ],
      ],
    },
    diagram: {
      title: `Flujo de la lista de verificación para facturación internacional`,
      caption: undefined,
      steps: [
        `Elegir la divisa del cliente`,
        `Configurar los datos bancarios internacionales (SWIFT/IBAN)`,
        `Aplicar las normas fiscales transfronterizas`,
        `Exportar la factura en PDF localizada`,
      ],
    },
    sections: [
      {
        heading: `Buenas prácticas para facturar en varias divisas a clientes`,
        paragraphs: [
          `Acuerda siempre la divisa de facturación en el contrato inicial. Al completar el formulario de tu generador de facturas, selecciona el código exacto de la divisa (por ejemplo, EUR, CAD, GBP) para que el formato de los subtotales y los símbolos de moneda se ajusten automáticamente.`,
          `Indica qué parte asume las comisiones de transferencia bancaria o los cargos por conversión de divisa. Mostrar con claridad tu código SWIFT/BIC e IBAN en el bloque de notas evita errores en el enrutamiento bancario.`,
          `- ✓ Confirma que la divisa de facturación coincide con lo acordado en el contrato.`,
          `- ✓ Incluye los códigos completos SWIFT/BIC e IBAN.`,
          `- ✓ Añade las notas de exención fiscal internacional obligatorias, si aplican.`,
          `- ✓ Formatea las cifras en moneda extranjera con los separadores decimales correctos.`,
        ],
        checklist: [
          `Confirma que la divisa de facturación coincide con lo acordado en el contrato.`,
          `Incluye los códigos completos SWIFT/BIC e IBAN.`,
          `Añade las notas de exención fiscal internacional obligatorias, si aplican.`,
          `Formatea las cifras en moneda extranjera con los separadores decimales correctos.`,
        ],
      },
      {
        heading: `Cómo gestionar el IVA y otros impuestos internacionales`,
        paragraphs: [
          `Los servicios transfronterizos suelen calificar para el IVA a tipo cero o para el mecanismo de inversión del sujeto pasivo. Usa un creador de facturas en línea para mostrar tipos impositivos separados o añadir notas explicativas en el campo de observaciones de la factura.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué divisa debo elegir al facturar a clientes internacionales?`,
        answer: `Factura en la divisa especificada en tu contrato. Si no se especifica, facturar en la divisa local del cliente o en una divisa fuerte y estable (como USD o EUR) simplifica la aprobación.`,
      },
      {
        question: `¿Cómo incluyo los datos SWIFT e IBAN en mi factura?`,
        answer: `Añade tus códigos bancarios internacionales en el campo de notas o de observaciones de tu generador de facturas, para que aparezcan claramente en la parte inferior del PDF.`,
      },
    ],
    related: [
      `generacion-factura-pdf`,
      `comparativa-software-facturacion`,
      `recuperacion-facturas-vencidas`,
    ],
  },
  {
    slug: `generacion-factura-pdf`,
    title: `Cómo crear facturas en PDF conformes: estándares de impresión y seguridad de archivo`,
    description: `Por qué las facturas en PDF vectorial siguen siendo el estándar de referencia en materia de cumplimiento contable, y cómo generar PDFs de alta resolución.`,
    category: `Estándares de documentos`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Por qué las facturas en PDF vectorial siguen siendo el estándar de referencia en materia de cumplimiento contable, y cómo generar PDFs de alta resolución.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Cómo crear facturas en PDF conformes: estándares de impresión y seguridad de archivo`,
    },
    intro: [
      `Estándares de documentos · 6 min de lectura`,
      `Los archivos PDF vectoriales garantizan que las facturas de tu negocio sigan siendo legibles, imprimibles y conformes con la normativa durante años.`,
      `Aunque las notificaciones por correo y los enlaces de pago son cómodos, la contabilidad formal de un negocio sigue apoyándose en facturas en PDF. Las autoridades fiscales y los auditores corporativos exigen archivos de documento independientes e inalterables que puedan conservarse durante años.`,
      `Usar un creador de facturas en PDF dedicado garantiza que tus documentos exportados conserven exactamente el mismo formato visual, la nitidez tipográfica y la exactitud matemática, sin importar el sistema operativo o la impresora que se use.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Propiedades estándar de una exportación en PDF vectorial`,
      body: `Atributos técnicos clave de un documento PDF generado por un creador de facturas gratuito. PDF / elementos gráficos vectoriales con fuentes del sistema incrustadas Documento ligero y optimizado (menos de 100 KB) Dimensiones estándar A4 / Carta US, orientación vertical Conversión a color sRGB, compatible con html2pdf/html2canvas`,
      rows: [
        [
          `Estándar de formato`,
          `PDF / elementos gráficos vectoriales con fuentes del sistema incrustadas`,
        ],
        [
          `Tamaño de archivo`,
          `Documento ligero y optimizado (menos de 100 KB)`,
        ],
        [
          `Diseño de impresión`,
          `Dimensiones estándar A4 / Carta US, orientación vertical`,
        ],
        [
          `Compatibilidad de color`,
          `Conversión a color sRGB, compatible con html2pdf/html2canvas`,
        ],
      ],
    },
    diagram: {
      title: `Proceso de generación y archivo del PDF`,
      caption: undefined,
      steps: [
        `Introducir los datos de la factura`,
        `Renderizar el HTML en tiempo real (canvas)`,
        `Convertir el CSS a PDF vectorial en sRGB`,
        `Descargar y archivar de forma local`,
      ],
    },
    sections: [
      {
        heading: `Por qué el PDF es el estándar universal para facturar a clientes`,
        paragraphs: [
          `A diferencia de los archivos de texto editables o los enlaces web simples, un creador de facturas en PDF congela tu documento en un formato de solo lectura. Esto evita modificaciones accidentales después de haber enviado la factura al cliente.`,
          `Las plataformas de generación de facturas gratuitas de calidad construyen los PDFs con texto y formas vectoriales. Esto garantiza que tu logotipo y tu texto se mantengan nítidos incluso al imprimirlos en papel de alta resolución.`,
          `- ✓ Verifica el aspecto del diseño en PDF antes de enviarlo por correo a los clientes.`,
          `- ✓ Asegúrate de que el texto sea seleccionable (y no una imagen de baja resolución).`,
          `- ✓ Mantén las copias digitales en PDF organizadas por año y número de factura.`,
          `- ✓ Prueba el diseño de impresión para confirmar que los márgenes se ajustan al tamaño de papel estándar.`,
        ],
        checklist: [
          `Verifica el aspecto del diseño en PDF antes de enviarlo por correo a los clientes.`,
          `Asegúrate de que el texto sea seleccionable (y no una imagen de baja resolución).`,
          `Mantén las copias digitales en PDF organizadas por año y número de factura.`,
          `Prueba el diseño de impresión para confirmar que los márgenes se ajustan al tamaño de papel estándar.`,
        ],
      },
      {
        heading: `Archivar facturas en PDF para fines fiscales y de auditoría`,
        paragraphs: [
          `La normativa fiscal de la mayoría de las jurisdicciones exige que los negocios conserven copias de todas las facturas emitidas durante entre cinco y siete años. Descargar y guardar los PDF vectoriales en un almacenamiento local seguro garantiza que estés preparado para cualquier auditoría a largo plazo.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Por qué son mejores las facturas en PDF vectorial que las capturas de imagen?`,
        answer: `Los PDF vectoriales se escalan sin perder calidad, permiten seleccionar el texto para automatizar la contabilidad y generan archivos mucho más ligeros que los formatos de imagen.`,
      },
      {
        question: `¿Cómo puedo convertir mi factura web a PDF de forma gratuita?`,
        answer: `Usa un creador de facturas gratuito con herramientas de exportación a PDF integradas, que conviertan los datos de tu formulario directamente en un PDF descargable con un solo clic.`,
      },
    ],
    related: [
      `comparativa-software-facturacion`,
      `lista-verificacion-factura`,
      `facturacion-multidivisa-internacional`,
    ],
  },
  {
    slug: `facturacion-fiscal-pequenas-empresas`,
    title: `Facturación para pequeñas empresas en temporada fiscal: desglose, impuesto sobre ventas y preparación para auditorías`,
    description: `Cómo las pequeñas empresas y los autónomos usan un generador de facturas gratuito para registrar con precisión el impuesto sobre ventas, documentar gastos deducibles y preparar registros de facturación listos para una auditoría.`,
    category: `Contabilidad y fiscalidad`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo las pequeñas empresas y los autónomos usan un generador de facturas gratuito para registrar con precisión el impuesto sobre ventas, documentar gastos deducibles y preparar registros de facturación listos para una auditoría.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación para pequeñas empresas en temporada fiscal: desglose, impuesto sobre ventas y preparación para auditorías`,
    },
    intro: [
      `Contabilidad y fiscalidad · 7 min de lectura`,
      `Las facturas bien desglosadas, con un tratamiento fiscal claro, simplifican las declaraciones anuales y protegen tu negocio ante una auditoría.`,
      `Para quienes dirigen una pequeña empresa, la preparación de la declaración de fin de año suele sacar a la luz registros de facturación desordenados, impuestos sobre ventas sin registrar y descripciones de gastos poco claras. Reconstruir meses de transacciones con clientes a partir de solo los extractos bancarios es tedioso y propenso a sanciones.`,
      `Usar un generador de facturas gratuito dedicado garantiza que cada factura que emitas registre el identificador fiscal del cliente, separe los productos gravados de los servicios exentos, y desglose el IVA, el impuesto estatal o provincial con precisión matemática.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Factura de un proveedor minorista conforme a la normativa fiscal`,
      body: `Una empresa local de tostado artesanal factura a un cliente corporativo usando un creador de facturas en línea. 800,00 \$ (granos de café espresso y alquiler de equipo) 250,00 \$ (formación de barista en el local del cliente) 66,00 \$ (aplicado solo a los bienes gravados) 1.116,00 \$ con un registro fiscal transparente`,
      rows: [
        [
          `Subtotal (bienes gravados)`,
          `800,00 \$ (granos de café espresso y alquiler de equipo)`,
        ],
        [
          `Subtotal (servicio exento)`,
          `250,00 \$ (formación de barista en el local del cliente)`,
        ],
        [
          `Impuesto estatal sobre ventas (8,25 %)`,
          `66,00 \$ (aplicado solo a los bienes gravados)`,
        ],
        [
          `Total documentado`,
          `1.116,00 \$ con un registro fiscal transparente`,
        ],
      ],
    },
    diagram: {
      title: `Ruta de validación de una factura lista para auditoría`,
      caption: undefined,
      steps: [
        `Registrar el identificador fiscal del cliente`,
        `Separar las líneas gravadas de las exentas`,
        `Calcular los tipos impositivos exactos`,
        `Guardar el registro en PDF vectorial`,
      ],
    },
    sections: [
      {
        heading: `Por qué el desglose del impuesto sobre ventas es fundamental para la contabilidad de una pequeña empresa`,
        paragraphs: [
          `Las autoridades fiscales exigen una distinción clara entre las ventas brutas y los impuestos recaudados. Al usar un creador de facturas en línea, asegúrate de que los tipos impositivos se muestren de forma explícita en conceptos independientes, y no agrupados en un total arbitrario.`,
          `Con un buen generador de facturas gratuito, puedes ajustar los porcentajes de impuestos para adaptarlos a cada jurisdicción local, lo que facilita la conciliación de la declaración fiscal al cierre de cada trimestre.`,
          `- ✓ Verifica el registro fiscal del negocio del cliente y sus certificados de exención, si los tiene.`,
          `- ✓ Comprueba dos veces que los campos de porcentaje de impuesto calculan correctamente.`,
          `- ✓ Asegúrate de que las copias digitales en PDF estén respaldadas en carpetas mensuales organizadas.`,
          `- ✓ Incluye los números de registro fiscal obligatorios en la cabecera de tu factura.`,
        ],
        checklist: [
          `Verifica el registro fiscal del negocio del cliente y sus certificados de exención, si los tiene.`,
          `Comprueba dos veces que los campos de porcentaje de impuesto calculan correctamente.`,
          `Asegúrate de que las copias digitales en PDF estén respaldadas en carpetas mensuales organizadas.`,
          `Incluye los números de registro fiscal obligatorios en la cabecera de tu factura.`,
        ],
      },
      {
        heading: `Mantener registros a largo plazo con un creador de facturas gratuito`,
        paragraphs: [
          `La mayoría de las normativas fiscales exigen conservar las facturas de venta emitidas durante un mínimo de cinco a siete años. Usar un creador de facturas gratuito y local garantiza que tus antiguos PDF de facturas sigan accesibles en tu propio equipo, sin riesgo de perder el acceso por una suscripción en la nube caducada.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Todas las facturas deben mostrar un tipo de impuesto sobre ventas?`,
        answer: `Solo si estás registrado para recaudar impuesto sobre ventas, IVA o un impuesto equivalente en tu jurisdicción, o si vendes productos o servicios gravados según la normativa fiscal local.`,
      },
      {
        question: `¿Cuál es la mejor forma de archivar facturas para una auditoría fiscal?`,
        answer: `Exporta archivos de alta resolución desde un creador de facturas en PDF y guárdalos en carpetas indexadas y fechadas, respaldadas tanto en almacenamiento local como en una copia cifrada fuera de línea.`,
      },
    ],
    related: [
      `generacion-factura-pdf`,
      `facturacion-autonomos`,
      `comparativa-software-facturacion`,
    ],
  },
  {
    slug: `facturacion-por-hitos-contratistas`,
    title: `Facturación por hitos para contratistas: cómo estructurar facturas de avance en proyectos grandes`,
    description: `Una guía paso a paso para contratistas sobre cómo dividir el alcance de un gran proyecto en hitos de facturación, usando un creador de facturas sencillo para mantener un flujo de caja constante.`,
    category: `Trabajo por contrato`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una guía paso a paso para contratistas sobre cómo dividir el alcance de un gran proyecto en hitos de facturación, usando un creador de facturas sencillo para mantener un flujo de caja constante.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación por hitos para contratistas: cómo estructurar facturas de avance en proyectos grandes`,
    },
    intro: [
      `Trabajo por contrato · 6 min de lectura`,
      `La facturación por hitos divide contratos largos en etapas de pago predecibles, reduciendo el riesgo financiero tanto para el cliente como para el contratista.`,
      `Aceptar un proyecto grande de contrato, de 3 o 6 meses, resulta emocionante, pero esperar hasta la entrega final para enviar una sola factura puede generar una fuerte tensión de flujo de caja y aumentar el riesgo de impago.`,
      `La facturación por hitos (también llamada facturación por avance) vincula las solicitudes de pago a entregables concretos del proyecto. Usando un creador de facturas sencillo, los contratistas pueden dar formato a facturas por fases que expresen con claridad qué alcance está completado y cuál es el saldo pendiente.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Un contrato de desarrollo web comercial en 3 fases`,
      body: `Una empresa de desarrollo de software factura un proyecto de 12.000 \$ dividido en tres entregables claros, usando un creador de facturas sencillo. 4.000,00 \$ (vence al firmar el contrato y aprobar el diseño) 4.000,00 \$ (vence al desplegar en entorno de pruebas y aprobar QA) 4.000,00 \$ (vence al entregar en producción y cambiar el DNS) 12.000,00 \$ registrado con números de factura secuenciales`,
      rows: [
        [
          `Hito 1 (depósito)`,
          `4.000,00 \$ (vence al firmar el contrato y aprobar el diseño)`,
        ],
        [
          `Hito 2 (versión beta)`,
          `4.000,00 \$ (vence al desplegar en entorno de pruebas y aprobar QA)`,
        ],
        [
          `Hito 3 (lanzamiento final)`,
          `4.000,00 \$ (vence al entregar en producción y cambiar el DNS)`,
        ],
        [
          `Valor total del contrato`,
          `12.000,00 \$ registrado con números de factura secuenciales`,
        ],
      ],
    },
    diagram: {
      title: `Ciclo de avance por hitos`,
      caption: undefined,
      steps: [
        `Firma del contrato (depósito)`,
        `Revisión a mitad de proyecto (fase 2)`,
        `Aceptación del cliente (fase 3)`,
        `Cierre final y archivo`,
      ],
    },
    sections: [
      {
        heading: `Cómo estructurar facturas por hitos que los clientes aprueban de inmediato`,
        paragraphs: [
          `Cada factura de hito debe hacer referencia clara al contrato general del proyecto, al hito concreto que se factura, y a un resumen conciso de los entregables aprobados. Al buscar un buen generador de facturas, elige herramientas que permitan notas detalladas por línea sin recargar el diseño.`,
          `Usar un creador de facturas sencillo, con un formato de plantilla limpio, garantiza que los gestores de proyecto y los equipos financieros del cliente puedan cotejar de inmediato tu factura con su lista de verificación de hitos.`,
          `- ✓ Indica el número de fase del hito (por ejemplo, "Fase 2 de 4") en el título de la factura.`,
          `- ✓ Incluye una breve lista con viñetas de los entregables completados en esta fase.`,
          `- ✓ Muestra el importe acumulado facturado hasta la fecha y el saldo restante del contrato.`,
          `- ✓ Envía las facturas inmediatamente después de recibir la aprobación del hito por parte del cliente.`,
        ],
        checklist: [
          `Indica el número de fase del hito (por ejemplo, "Fase 2 de 4") en el título de la factura.`,
          `Incluye una breve lista con viñetas de los entregables completados en esta fase.`,
          `Muestra el importe acumulado facturado hasta la fecha y el saldo restante del contrato.`,
          `Envía las facturas inmediatamente después de recibir la aprobación del hito por parte del cliente.`,
        ],
      },
      {
        heading: `Gestionar cambios de alcance durante un proyecto por hitos`,
        paragraphs: [
          `Cuando los requisitos del cliente se amplían a mitad de proyecto, nunca incorpores el trabajo nuevo en silencio dentro de un hito ya existente. Usa tu herramienta de facturación para crear una factura de orden de cambio independiente, que documente por separado el alcance adicional aprobado y su precio.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué porcentaje de depósito debe pedir un contratista por adelantado?`,
        answer: `Los depósitos estándar del sector oscilan entre el 25 % y el 50 % del valor total del proyecto, según los materiales iniciales, los costes de software y la duración del proyecto.`,
      },
      {
        question: `¿Qué pasa si un cliente retrasa la aprobación de un entregable por hito?`,
        answer: `Incluye una cláusula en el contrato que establezca que los entregables se consideran aceptados si no se recibe retroalimentación de revisión en un plazo de 7 a 10 días hábiles.`,
      },
    ],
    related: [
      `condiciones-de-pago`,
      `presupuesto-vs-factura`,
      `facturacion-autonomos`,
    ],
  },
  {
    slug: `facturacion-igualas-consultores`,
    title: `Facturación por horas e igualas: cómo los consultores registran su tiempo y facturan con transparencia`,
    description: `Cómo los consultores de gestión, legales y técnicos convierten hojas de horas facturables y acuerdos de iguala mensual en facturas transparentes para el cliente, usando un creador de facturas en línea.`,
    category: `Consultoría`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo los consultores de gestión, legales y técnicos convierten hojas de horas facturables y acuerdos de iguala mensual en facturas transparentes para el cliente, usando un creador de facturas en línea.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación por horas e igualas: cómo los consultores registran su tiempo y facturan con transparencia`,
    },
    intro: [
      `Consultoría · 7 min de lectura`,
      `Un desglose horario transparente y unas condiciones de iguala claras generan confianza a largo plazo con el cliente y evitan disputas de facturación.`,
      `Los clientes de consultoría esperan transparencia. Cuando llega una factura con un único concepto vago como "Servicios de asesoría: 5.000 \$", los departamentos financieros corporativos suelen frenar el pago para pedir hojas de horas y registros de tareas detallados.`,
      `Los consultores profesionales usan un creador de facturas en línea estructurado para ofrecer registros horarios desglosados, categorías de subtareas del proyecto y resúmenes claros del consumo de la iguala, lo que da al cliente plena confianza sobre cada dólar facturado.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Factura mensual de una iguala de asesoría estratégica`,
      body: `Una consultora de gestión factura a un cliente corporativo las horas mensuales de su iguala, más el exceso de horas, usando un generador de facturas en línea. 20 horas de asesoría incluidas — 3.000,00 \$ de base mensual 4,5 horas adicionales a 175 \$/h — 787,50 \$ 3.787,50 \$ con registro detallado de horas adjunto Neto 15 (datos de transferencia bancaria directa incluidos)`,
      rows: [
        [
          `Base de la iguala`,
          `20 horas de asesoría incluidas — 3.000,00 \$ de base mensual`,
        ],
        [
          `Horas adicionales`,
          `4,5 horas adicionales a 175 \$/h — 787,50 \$`,
        ],
        [
          `Total a pagar`,
          `3.787,50 \$ con registro detallado de horas adjunto`,
        ],
        [
          `Plazo de pago`,
          `Neto 15 (datos de transferencia bancaria directa incluidos)`,
        ],
      ],
    },
    diagram: {
      title: `Flujo de facturación de un consultor`,
      caption: undefined,
      steps: [
        `Registrar las tareas diarias del cliente`,
        `Agrupar por categoría de entregable`,
        `Dar formato con un creador de facturas en línea`,
        `Emitir el PDF con notas de resumen`,
      ],
    },
    sections: [
      {
        heading: `Equilibrar el detalle con la legibilidad en las facturas por horas`,
        paragraphs: [
          `Demasiado poco detalle genera desconfianza en el cliente, mientras que un microrregistro excesivo satura el documento. Usa una herramienta de registro de tiempo o un generador de facturas con IA para resumir las actividades diarias en bloques de servicio coherentes (por ejemplo, "Revisión de arquitectura y estrategia ejecutiva: 8 h").`,
          `Con un buen generador de facturas gratuito, puedes introducir fácilmente cantidades y tarifas específicas mientras mantienes un diseño visual limpio y cuidado.`,
          `- ✓ Agrupa las tareas horarias relacionadas bajo encabezados de entregables claros.`,
          `- ✓ Indica explícitamente el periodo de fechas cubierto por el ciclo de facturación.`,
          `- ✓ Muestra las horas de la iguala consumidas, el saldo restante o las tarifas de exceso.`,
          `- ✓ Incluye los datos de contacto directo para consultas de facturación.`,
        ],
        checklist: [
          `Agrupa las tareas horarias relacionadas bajo encabezados de entregables claros.`,
          `Indica explícitamente el periodo de fechas cubierto por el ciclo de facturación.`,
          `Muestra las horas de la iguala consumidas, el saldo restante o las tarifas de exceso.`,
          `Incluye los datos de contacto directo para consultas de facturación.`,
        ],
      },
      {
        heading: `Por qué las igualas mensuales estabilizan los ingresos de una consultoría`,
        paragraphs: [
          `Los acuerdos de iguala ofrecen ingresos predecibles a la vez que garantizan al cliente acceso continuo a tu experiencia. Usar un creador de facturas sencillo para emitir facturas de iguala recurrentes el día 1 de cada mes genera un flujo de caja operativo fiable.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Las facturas de iguala deben emitirse por adelantado o a mes vencido?`,
        answer: `La base de la iguala se factura habitualmente por adelantado, el primer día de cada mes, mientras que las horas de exceso del mes anterior se facturan a mes vencido.`,
      },
      {
        question: `¿Puedo crear facturas de consultoría desde el móvil?`,
        answer: `Sí, usar una app de creación de facturas responsiva en cualquier navegador móvil permite a los consultores redactar, revisar y enviar facturas a clientes directamente entre reuniones.`,
      },
    ],
    related: [
      `facturacion-autonomos`,
      `plantillas-marca-factura`,
      `condiciones-de-pago`,
    ],
  },
  {
    slug: `facturacion-recurrente-suscripciones`,
    title: `Facturación recurrente a clientes: cómo establecer ciclos de facturación repetitivos y predecibles`,
    description: `Buenas prácticas para facturar acuerdos de mantenimiento recurrentes, igualas mensuales de software y servicios por suscripción usando un creador de facturas sencillo.`,
    category: `Facturación recurrente`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Buenas prácticas para facturar acuerdos de mantenimiento recurrentes, igualas mensuales de software y servicios por suscripción usando un creador de facturas sencillo.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación recurrente a clientes: cómo establecer ciclos de facturación repetitivos y predecibles`,
    },
    intro: [
      `Facturación recurrente · 6 min de lectura`,
      `Simplifica las igualas mensuales y las suscripciones de servicio continuas con plantillas de facturación recurrente estructuradas.`,
      `Las agencias, los desarrolladores de SaaS y los proveedores de mantenimiento prosperan gracias a los ingresos recurrentes. Sin embargo, generar decenas de facturas repetidas cada mes puede consumir mucho tiempo si empiezas desde cero en cada ciclo de facturación.`,
      `Al establecer una plantilla estructurada en tu creador de facturas y guardar los perfiles de clientes en el almacenamiento local del navegador, los negocios pueden duplicar, actualizar fechas y exportar facturas recurrentes en menos de treinta segundos por cliente.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Suscripción mensual de mantenimiento de un sitio web`,
      body: `Una agencia digital factura a un cliente minorista el hosting mensual, las actualizaciones de seguridad y el soporte de gestión de contenidos, usando un creador de facturas gratuito. 1 de septiembre de 2026 – 30 de septiembre de 2026 Hosting en la nube gestionado y auditorías de seguridad diarias — 250,00 \$ 2 horas dedicadas a mantenimiento y actualización de contenidos — 180,00 \$ 430,00 \$ (vence el día 1 de cada mes natural)`,
      rows: [
        [
          `Periodo de facturación`,
          `1 de septiembre de 2026 – 30 de septiembre de 2026`,
        ],
        [
          `Plan de suscripción`,
          `Hosting en la nube gestionado y auditorías de seguridad diarias — 250,00 \$`,
        ],
        [
          `Iguala de soporte`,
          `2 horas dedicadas a mantenimiento y actualización de contenidos — 180,00 \$`,
        ],
        [
          `Total mensual`,
          `430,00 \$ (vence el día 1 de cada mes natural)`,
        ],
      ],
    },
    diagram: {
      title: `Ciclo de vida de la factura recurrente`,
      caption: undefined,
      steps: [
        `Guardar la plantilla recurrente`,
        `Duplicarla el día 1`,
        `Actualizar la fecha del periodo de servicio`,
        `Exportar y enviar el PDF por correo al cliente`,
      ],
    },
    sections: [
      {
        heading: `Cómo simplificar la facturación repetida con plantillas de cliente guardadas`,
        paragraphs: [
          `Cuando gestiones clientes mensuales recurrentes, busca un creador de facturas o una herramienta web que recuerde los datos de tu cliente, los conceptos recurrentes y las instrucciones de pago. Esto elimina la necesidad de volver a escribirlo todo y evita errores en la numeración de facturas.`,
          `Con un creador de facturas con IA o una herramienta inteligente de almacenamiento local, actualizar la factura de un cliente habitual para un nuevo mes solo requiere pulsar "duplicar", actualizar el número de factura y la fecha, y exportar el nuevo PDF.`,
          `- ✓ Indica el periodo exacto de cobertura del servicio en cada factura repetida.`,
          `- ✓ Mantén la numeración secuencial de facturas a lo largo de los meses sucesivos.`,
          `- ✓ Confirma el método de pago recurrente (tarjeta guardada, domiciliación o pago automático).`,
          `- ✓ Avisa a los clientes con al menos 30 días de antelación de cualquier ajuste de precio en la suscripción.`,
        ],
        checklist: [
          `Indica el periodo exacto de cobertura del servicio en cada factura repetida.`,
          `Mantén la numeración secuencial de facturas a lo largo de los meses sucesivos.`,
          `Confirma el método de pago recurrente (tarjeta guardada, domiciliación o pago automático).`,
          `Avisa a los clientes con al menos 30 días de antelación de cualquier ajuste de precio en la suscripción.`,
        ],
      },
      {
        heading: `Cómo gestionar el prorrateo y las mejoras a mitad de mes`,
        paragraphs: [
          `Cuando un cliente mejora su nivel de suscripción a mitad de ciclo, calcula la diferencia prorrateada por los días restantes del mes y muéstrala como un crédito o un ajuste explícito en su siguiente factura programada.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Cuál es la mejor forma de gestionar facturas recurrentes sin software caro?`,
        answer: `Usa un creador de facturas gratuito basado en el navegador, con almacenamiento local (IndexedDB), para guardar los perfiles de los clientes y duplicar las plantillas mensuales con un solo clic.`,
      },
      {
        question: `¿Cómo muestro claramente el periodo de facturación en una factura de suscripción?`,
        answer: `Incluye un rango de fechas de servicio bien visible en la descripción del concepto o en el bloque de notas de la factura (por ejemplo, "Periodo de servicio: 1–31 de octubre de 2026").`,
      },
    ],
    related: [
      `plantillas-marca-factura`,
      `recuperacion-facturas-vencidas`,
      `facturacion-autonomos`,
    ],
  },
  {
    slug: `facturacion-ecommerce-productos`,
    title: `Facturación de comercio electrónico y venta al por mayor: gastos de envío, niveles por volumen y desglose por SKU`,
    description: `Cómo los vendedores de productos, el dropshipping y los distribuidores mayoristas usan un generador de facturas gratuito para desglosar SKUs, gestionar niveles de compra por volumen y aplicar correctamente los gastos de envío.`,
    category: `Comercio electrónico y venta al por menor`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo los vendedores de productos, el dropshipping y los distribuidores mayoristas usan un generador de facturas gratuito para desglosar SKUs, gestionar niveles de compra por volumen y aplicar correctamente los gastos de envío.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación de comercio electrónico y venta al por mayor: gastos de envío, niveles por volumen y desglose por SKU`,
    },
    intro: [
      `Comercio electrónico y venta al por menor · 6 min de lectura`,
      `Un desglose claro de productos físicos, con tarifas de envío explícitas y descuentos por volumen, evita retrasos en los pedidos mayoristas.`,
      `Vender bienes físicos a compradores B2B, minoristas o clientes corporativos implica más complejidad que la facturación de servicios básica. Las facturas deben reflejar con precisión los SKU de cada unidad, los umbrales de descuento por volumen y las tarifas de flete o envío por separado.`,
      `Usar un generador de facturas gratuito dedicado permite a los vendedores generar facturas comerciales detalladas, desglosar las cantidades de cada paquete y ofrecer un desglose de costes transparente que los departamentos de contabilidad puedan conciliar al instante con los albaranes.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Factura de un pedido mayorista B2B por volumen`,
      body: `Una marca de fabricación especializada factura a una tienda minorista independiente usando un generador de facturas en línea. SKU-802 Bolsas de algodón orgánico (200 unidades a 4,50 \$) — 900,00 \$ SKU-805 Mochilas de lona reciclada (50 unidades a 28,00 \$) — 1.400,00 \$ -115,00 \$ aplicado sobre el subtotal de mercancía (2.300,00 \$) 145,00 \$ de flete terrestre, con referencia de seguimiento 2.330,00 \$ (vence a los 30 días de recibir el envío)`,
      rows: [
        [
          `Línea de producto 1`,
          `SKU-802 Bolsas de algodón orgánico (200 unidades a 4,50 \$) — 900,00 \$`,
        ],
        [
          `Línea de producto 2`,
          `SKU-805 Mochilas de lona reciclada (50 unidades a 28,00 \$) — 1.400,00 \$`,
        ],
        [
          `Descuento por volumen (5 %)`,
          `-115,00 \$ aplicado sobre el subtotal de mercancía (2.300,00 \$)`,
        ],
        [
          `Envío y flete`,
          `145,00 \$ de flete terrestre, con referencia de seguimiento`,
        ],
        [
          `Saldo total a pagar`,
          `2.330,00 \$ (vence a los 30 días de recibir el envío)`,
        ],
      ],
    },
    diagram: {
      title: `Ciclo de facturación de un pedido mayorista`,
      caption: undefined,
      steps: [
        `Recibir la orden de compra (OC)`,
        `Verificar el stock y el precio por unidad`,
        `Calcular el flete y el nivel de volumen`,
        `Exportar la factura en PDF imprimible`,
      ],
    },
    sections: [
      {
        heading: `Cómo desglosar los SKU de producto y los detalles del entregable físico`,
        paragraphs: [
          `Los compradores mayoristas usan tu factura para verificar los envíos que llegan al almacén. Con un creador de facturas sencillo o una plantilla de creación de facturas, indica con claridad los códigos SKU de cada artículo, las unidades de medida, la tarifa por pieza y el total extendido.`,
          `Al buscar software de facturación, prioriza plataformas que permitan activar campos de importe de envío y porcentajes de descuento independientes, para que los costes de flete nunca queden ocultos dentro del precio unitario.`,
          `- ✓ Indica el SKU oficial del fabricante o el número de referencia de cada artículo.`,
          `- ✓ Muestra con claridad las cantidades por unidad y los tramos de precio.`,
          `- ✓ Presenta los gastos de envío y manipulación en una línea independiente y etiquetada.`,
          `- ✓ Incluye los números de seguimiento o los datos del transportista en las notas.`,
        ],
        checklist: [
          `Indica el SKU oficial del fabricante o el número de referencia de cada artículo.`,
          `Muestra con claridad las cantidades por unidad y los tramos de precio.`,
          `Presenta los gastos de envío y manipulación en una línea independiente y etiquetada.`,
          `Incluye los números de seguimiento o los datos del transportista en las notas.`,
        ],
      },
      {
        heading: `Cómo gestionar los costes de flete y las declaraciones de aduana`,
        paragraphs: [
          `Para pedidos internacionales o paletizados, indica los incoterms de envío (como FOB, DDP o EXW) en las notas de la factura, de modo que ambas partes entiendan quién asume la responsabilidad fiscal y aduanera.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Deben gravarse los gastos de envío en una factura de producto?`,
        answer: `La tributación de los gastos de envío varía según el estado o el país. En muchas jurisdicciones, el flete es gravable si el producto subyacente también lo es, mientras que en otras se exime la tarifa de entrega indicada por separado.`,
      },
      {
        question: `¿Puede un generador de facturas en línea servir para el dropshipping?`,
        answer: `Sí, las herramientas de facturación web permiten configurar direcciones de facturación y de envío distintas, lo que se adapta a los acuerdos de dropshipping y de logística por terceros.`,
      },
    ],
    related: [
      `generacion-factura-pdf`,
      `facturacion-fiscal-pequenas-empresas`,
      `facturacion-multidivisa-internacional`,
    ],
  },
  {
    slug: `facturacion-agencia-subcontratistas`,
    title: `Facturación de subcontratistas en agencias: costes repercutidos al cliente y pagos a contratistas`,
    description: `Un flujo de facturación práctico para agencias digitales y estudios creativos que gestionan facturas de subcontratistas, comisiones de margen y traspaso de gastos al cliente.`,
    category: `Agencias y equipos`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Un flujo de facturación práctico para agencias digitales y estudios creativos que gestionan facturas de subcontratistas, comisiones de margen y traspaso de gastos al cliente.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación de subcontratistas en agencias: costes repercutidos al cliente y pagos a contratistas`,
    },
    intro: [
      `Agencias y equipos · 7 min de lectura`,
      `Aprende a gestionar los costes de especialistas externos, facturar al cliente de forma clara y hacer seguimiento de los pagos a subcontratistas con una contabilidad transparente.`,
      `Las agencias creativas y técnicas modernas colaboran con frecuencia con especialistas freelance —como redactores, animadores 3D o ingenieros de bases de datos— para entregar las campañas de sus clientes. Facturar estos acuerdos con varias partes requiere una contabilidad estructurada.`,
      `Con un creador de facturas en línea versátil, los responsables de agencia pueden dar formato a facturas maestras limpias para el cliente, que consoliden las horas de los contratistas bajo hitos de proyecto unificados, manteniendo a la vez registros internos de los pagos pendientes a subcontratistas.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Factura de una agencia digital de servicio integral`,
      body: `Una agencia de marketing factura a una marca corporativa por una campaña completa de lanzamiento de producto, usando un creador de facturas sencillo. Dirección creativa senior (40 h a 150 \$/h) — 6.000,00 \$ Paquete de animación y motion graphics 3D — 4.500,00 \$ Traspaso directo de la inversión en publicidad social de pago — 2.500,00 \$ 13.000,00 \$ (condiciones de pago Neto 30)`,
      rows: [
        [
          `Dirección y estrategia principal`,
          `Dirección creativa senior (40 h a 150 \$/h) — 6.000,00 \$`,
        ],
        [
          `Paquete de recursos subcontratado`,
          `Paquete de animación y motion graphics 3D — 4.500,00 \$`,
        ],
        [
          `Traspaso de inversión en medios`,
          `Traspaso directo de la inversión en publicidad social de pago — 2.500,00 \$`,
        ],
        [
          `Total facturado de la campaña`,
          `13.000,00 \$ (condiciones de pago Neto 30)`,
        ],
      ],
    },
    diagram: {
      title: `Cadena de facturación de subcontratistas de una agencia`,
      caption: undefined,
      steps: [
        `El contratista factura a la agencia`,
        `La agencia verifica los entregables`,
        `Se consolida en la factura del cliente`,
        `El cliente paga a la agencia y se liquidan los pagos al contratista`,
      ],
    },
    sections: [
      {
        heading: `Cómo estructurar los costes de subcontratistas en las facturas al cliente`,
        paragraphs: [
          `Las agencias suelen gestionar los costes de especialistas de dos formas: entregables fijos por hito (donde las tarifas individuales de cada contratista se agrupan en una tarifa de proyecto global) o facturación transparente de costo más margen (cost-plus).`,
          `Con un buen creador de facturas o un software de facturación adecuado, las agencias pueden presentar conceptos unificados y profesionales que reflejen el valor total entregado, sin exponer los márgenes de los subcontratistas.`,
          `- ✓ Asegúrate de que los entregables del subcontratista estén totalmente aprobados antes de facturar al cliente.`,
          `- ✓ Confirma si el acuerdo con el cliente permite aplicar el porcentaje de margen estándar de la agencia.`,
          `- ✓ Conserva las facturas originales de los subcontratistas archivadas junto con la factura maestra.`,
          `- ✓ Alinea las condiciones de pago del cliente con tu calendario interno de pagos a subcontratistas.`,
        ],
        checklist: [
          `Asegúrate de que los entregables del subcontratista estén totalmente aprobados antes de facturar al cliente.`,
          `Confirma si el acuerdo con el cliente permite aplicar el porcentaje de margen estándar de la agencia.`,
          `Conserva las facturas originales de los subcontratistas archivadas junto con la factura maestra.`,
          `Alinea las condiciones de pago del cliente con tu calendario interno de pagos a subcontratistas.`,
        ],
      },
      {
        heading: `Gestionar el flujo de caja entre los cobros del cliente y los pagos a contratistas`,
        paragraphs: [
          `Para evitar tensiones de tesorería, negocia con los subcontratistas condiciones de pago que se correspondan con tus propios ciclos de cobro al cliente (por ejemplo, pagar a los contratistas dentro de los 7 días posteriores a la liquidación del cliente). Usar una buena app de facturación garantiza que las facturas se emitan en cuanto se aprueban los hitos del proyecto.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Deben las agencias revelar las tarifas de los subcontratistas al cliente final?`,
        answer: `En los contratos de precio fijo o por hitos, las agencias facturan el resultado total del entregable en lugar de desglosar los costes internos de los contratistas.`,
      },
      {
        question: `¿Cuál es la forma más sencilla para que un subcontratista facture a una agencia?`,
        answer: `Los subcontratistas pueden usar un generador de facturas gratuito para enviar facturas en PDF claras y estandarizadas, haciendo referencia a la orden de compra o al código de proyecto de la agencia.`,
      },
    ],
    related: [
      `facturacion-por-hitos-contratistas`,
      `facturacion-igualas-consultores`,
      `facturacion-autonomos`,
    ],
  },
  {
    slug: `como-redactar-una-factura`,
    title: `Cómo redactar una factura: guía paso a paso para principiantes`,
    description: `Aprende a redactar una factura profesional desde cero: qué incluir, un proceso paso a paso, un ejemplo práctico y respuestas a las dudas más comunes sobre la primera factura.`,
    category: `Fundamentos de facturación`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Aprende a redactar una factura profesional desde cero: qué incluir, un proceso paso a paso, un ejemplo práctico y respuestas a las dudas más comunes sobre la primera factura.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Cómo redactar una factura: guía paso a paso para principiantes`,
    },
    intro: [
      `Fundamentos de facturación · 6 min de lectura`,
      `Todo lo que necesita quien factura por primera vez para cobrar sin tener que enviar un correo de seguimiento: qué incluir, en qué orden, con un ejemplo práctico que puedes copiar.`,
      `Enviar tu primera factura suele ser menos complicado de lo que parece. Una factura es una solicitud formal de pago: un registro de lo que entregaste, cuánto cuesta y cuándo esperas cobrar. Los clientes pagan más rápido cuando ese registro está completo y es fácil de revisar de un vistazo, y más despacio cuando tienen que escribirte de vuelta para preguntar qué significa un concepto o adónde enviar el dinero.`,
      `Esta guía repasa exactamente qué incluir, en qué orden, con un ejemplo práctico sencillo, para que puedas redactar una factura profesional en menos de diez minutos.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Una factura completa de un estudio de diseño`,
      body: `Maya dirige un estudio de diseño unipersonal y acaba de terminar un proyecto de logotipo para una tostadora de café local. Su factura queda así: Studio Chen — [email protected] Riverbend Coffee Roasters, atención al departamento de contabilidad SC-2026-014 Emitida el 14 de septiembre de 2026 — vence el 29 de septiembre de 2026 (Neto 15) Paquete de diseño de logotipo, incluidas 2 rondas de revisiones — 850,00 \$ 850,00 \$`,
      rows: [
        [
          `De`,
          `Studio Chen — [email protected]`,
        ],
        [
          `Facturar a`,
          `Riverbend Coffee Roasters, atención al departamento de contabilidad`,
        ],
        [
          `N.º de factura`,
          `SC-2026-014`,
        ],
        [
          `Fechas`,
          `Emitida el 14 de septiembre de 2026 — vence el 29 de septiembre de 2026 (Neto 15)`,
        ],
        [
          `Concepto`,
          `Paquete de diseño de logotipo, incluidas 2 rondas de revisiones — 850,00 \$`,
        ],
        [
          `Total a pagar`,
          `850,00 \$`,
        ],
      ],
    },
    diagram: {
      title: `Seis pasos para terminar una factura`,
      caption: undefined,
      steps: [
        `Reunir los datos del negocio y del cliente`,
        `Asignar el número de factura y la fecha`,
        `Detallar el trabajo o los productos`,
        `Añadir impuestos, descuentos y el total`,
        `Fijar las condiciones y métodos de pago`,
        `Revisar, exportar y enviar`,
      ],
    },
    sections: [
      {
        heading: `Lo que necesita toda factura`,
        paragraphs: [
          `Como mínimo, una factura cobrable responde a cuatro preguntas: quién factura a quién, qué se entregó, cuánto se debe, y cuándo y cómo pagar. En la práctica, eso se traduce en nueve campos.`,
          `- ✓ El nombre de tu negocio, tu dirección y un correo electrónico o teléfono de contacto.`,
          `- ✓ El nombre del cliente y sus datos de facturación, tal como los tiene registrados su equipo contable.`,
          `- ✓ Un número de factura único que no vayas a reutilizar.`,
          `- ✓ La fecha de emisión y la fecha de vencimiento del pago.`,
          `- ✓ Una descripción de cada producto o servicio, con cantidad y tarifa.`,
          `- ✓ Un subtotal antes de impuestos.`,
          `- ✓ Cualquier impuesto, mostrado como una línea propia y no incluido dentro del total.`,
          `- ✓ El importe total a pagar, en la divisa acordada.`,
          `- ✓ Cómo aceptas el pago: transferencia bancaria, tarjeta o un enlace de pago.`,
        ],
        checklist: [
          `El nombre de tu negocio, tu dirección y un correo electrónico o teléfono de contacto.`,
          `El nombre del cliente y sus datos de facturación, tal como los tiene registrados su equipo contable.`,
          `Un número de factura único que no vayas a reutilizar.`,
          `La fecha de emisión y la fecha de vencimiento del pago.`,
          `Una descripción de cada producto o servicio, con cantidad y tarifa.`,
          `Un subtotal antes de impuestos.`,
          `Cualquier impuesto, mostrado como una línea propia y no incluido dentro del total.`,
          `El importe total a pagar, en la divisa acordada.`,
          `Cómo aceptas el pago: transferencia bancaria, tarjeta o un enlace de pago.`,
        ],
      },
      {
        heading: `Errores comunes al redactar la primera factura`,
        paragraphs: [
          `Unos pocos errores recurrentes causan la mayor parte de las fricciones en las primeras facturas.`,
          `- ✓ Usar una descripción vaga como "servicios prestados" en lugar de nombrar el trabajo real.`,
          `- ✓ Olvidar incluir una fecha de vencimiento, dejando el "cuándo" a criterio del cliente.`,
          `- ✓ Reutilizar por accidente un número de factura antiguo.`,
          `- ✓ Dejar el impuesto fuera del total, de modo que el importe pagado no coincide con lo que se debe.`,
          `- ✓ No guardar una copia antes de enviarla, por si necesitas volver a emitirla.`,
          `- ✓ Enviar un archivo editable de Word o de hoja de cálculo en lugar de un PDF.`,
        ],
        checklist: [
          `Usar una descripción vaga como "servicios prestados" en lugar de nombrar el trabajo real.`,
          `Olvidar incluir una fecha de vencimiento, dejando el "cuándo" a criterio del cliente.`,
          `Reutilizar por accidente un número de factura antiguo.`,
          `Dejar el impuesto fuera del total, de modo que el importe pagado no coincide con lo que se debe.`,
          `No guardar una copia antes de enviarla, por si necesitas volver a emitirla.`,
          `Enviar un archivo editable de Word o de hoja de cálculo en lugar de un PDF.`,
        ],
      },
      {
        heading: `Cómo elegir la forma de crear el documento`,
        paragraphs: [
          `Una factura básica se puede montar en una hoja de cálculo o en un procesador de texto, y para tu primera o segunda factura, esa suele ser la forma más sencilla de aprender los campos anteriores. Una vez que facturas con regularidad, un generador de facturas dedicado ahorra tiempo: guarda a mano los datos de tu negocio y tu lista de clientes, numera las facturas de forma automática, calcula los totales y exporta un PDF limpio directamente desde el navegador, sin tener que reformatear una plantilla cada vez.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Cuál es la diferencia entre una factura y un recibo?`,
        answer: `Una factura solicita el pago antes de que se realice; un recibo confirma el pago después de que ha ocurrido. Si un cliente pide "un justificante de pago", normalmente quiere un recibo, no otra copia de la factura.`,
      },
      {
        question: `¿Necesito registrar un negocio para enviar facturas?`,
        answer: `En la mayoría de los lugares, no. Muchos autónomos facturan como personas físicas usando su propio nombre y su identificación fiscal personal, al menos hasta que sus ingresos superen un umbral de registro. Las normas varían según el país, así que conviene consultar los requisitos locales si tienes dudas.`,
      },
      {
        question: `¿Tengo que cobrar impuesto sobre ventas en mi factura?`,
        answer: `Depende de dónde estén ubicados tú y tu cliente, de qué vendas y de si estás registrado para recaudar el impuesto. Si no estás seguro de si te corresponde aplicarlo, vale la pena una breve consulta con un contable local antes de emitir tus primeras facturas.`,
      },
      {
        question: `¿Qué debo hacer si un cliente no paga a tiempo?`,
        answer: `Envía un recordatorio amable que haga referencia al número de factura y a la fecha de vencimiento en cuanto se cumpla el plazo, en lugar de esperar. Un seguimiento breve y concreto se cobra más rápido que uno largo, y la mayoría de los pagos atrasados son descuidos, no negativas.`,
      },
      {
        question: `¿En qué formato de archivo debo enviar una factura?`,
        answer: `En PDF. Mantiene fijo tu diseño sin importar el dispositivo o el software con el que el cliente lo abra, y es el formato que esperan la mayoría de los sistemas contables.`,
      },
      {
        question: `¿Con qué rapidez debo enviar una factura después de terminar el trabajo?`,
        answer: `En cuanto se confirme que el trabajo o la entrega están completos. Esperar no hace que la factura sea más fácil de redactar, y sí retrasa el momento en que empieza a correr el plazo de pago.`,
      },
    ],
    related: [
      `factura-vs-recibo`,
      `lista-verificacion-factura`,
      `numeracion-de-facturas`,
      `condiciones-de-pago`,
    ],
  },
  {
    slug: `factura-vs-recibo`,
    title: `Factura vs. recibo: en qué se diferencian y cuándo usar cada uno`,
    description: `Las facturas y los recibos se confunden a menudo. Aquí tienes la diferencia práctica, cuándo necesitas cada uno y cómo evitar mezclarlos en tus registros.`,
    category: `Fundamentos de facturación`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Las facturas y los recibos se confunden a menudo. Aquí tienes la diferencia práctica, cuándo necesitas cada uno y cómo evitar mezclarlos en tus registros.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Factura vs. recibo: en qué se diferencian y cuándo usar cada uno`,
    },
    intro: [
      `Fundamentos de facturación · 6 min de lectura`,
      `Muestran datos parecidos, pero una factura y un recibo pertenecen a momentos distintos de una transacción — confundirlos genera problemas contables reales.`,
      `Una factura y un recibo se parecen. Ambos indican qué se compró, quién lo compró y por cuánto, que es precisamente por lo que se confunden. Pero sirven a momentos distintos dentro de una transacción: uno solicita dinero, el otro confirma que llegó. Usar el documento equivocado, o tratarlos como intercambiables, puede confundir al cliente y, en algunos casos, generar problemas contables reales en tu propio negocio.`,
      `Aquí tienes la diferencia práctica, y cómo usar cada uno correctamente.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Factura vs. recibo, de un vistazo`,
      body: `Una factura es una solicitud de pago, enviada antes de que el dinero cambie de manos. Un recibo es una confirmación de pago, enviada después. Factura: antes del pago — Recibo: después del pago Factura: solicita el dinero adeudado — Recibo: confirma el dinero recibido Factura: la entrega de bienes o servicios — Recibo: la recepción de los fondos Factura: una solicitud formal — Recibo: prueba de que ocurrió una transacción Factura: el vendedor o proveedor — Recibo: el vendedor o el procesador de pagos`,
      rows: [
        [
          `Momento`,
          `Factura: antes del pago — Recibo: después del pago`,
        ],
        [
          `Propósito`,
          `Factura: solicita el dinero adeudado — Recibo: confirma el dinero recibido`,
        ],
        [
          `Se genera por`,
          `Factura: la entrega de bienes o servicios — Recibo: la recepción de los fondos`,
        ],
        [
          `Función`,
          `Factura: una solicitud formal — Recibo: prueba de que ocurrió una transacción`,
        ],
        [
          `Quién lo emite habitualmente`,
          `Factura: el vendedor o proveedor — Recibo: el vendedor o el procesador de pagos`,
        ],
      ],
    },
    diagram: {
      title: `Cronología de la transacción: de la factura al recibo`,
      caption: undefined,
      steps: [
        `Se entrega el trabajo o se envían los bienes`,
        `Se envía la factura solicitando el pago`,
        `El cliente paga el importe adeudado`,
        `El recibo confirma que se recibió el pago`,
      ],
    },
    sections: [
      {
        heading: `¿Necesitas ambos documentos?`,
        paragraphs: [
          `Si facturas a tus clientes y ellos pagan por transferencia bancaria o con un enlace de tarjeta, la mayoría del software contable o de los procesadores de pago genera automáticamente una confirmación de pago en cuanto la factura se marca como pagada, lo que en la práctica funciona como tu recibo. Puede que solo necesites emitir un recibo aparte si un cliente lo pide expresamente, o si aceptas efectivo u otro método que no deja su propio rastro documental.`,
          `En el comercio minorista presencial, normalmente no existe factura alguna: la transacción y el pago ocurren en el mismo momento, por lo que un recibo es el único documento necesario.`,
          `Muchas herramientas de facturación permiten marcar una factura como "Pagada" y volver a emitirla como recibo, lo cual suele bastar para transacciones pequeñas. Sin embargo, a efectos contables, conviene mantener los dos registros lógicamente distintos —uno para lo que se debía, otro para lo que se cobró— incluso si comparten plantilla.`,
        ],
      },
      {
        heading: `Errores comunes al confundirlos`,
        paragraphs: [
          `Hay algunos errores que se repiten con frecuencia cuando se confunden ambos documentos.`,
          `- ✓ Enviar una factura sin pagar etiquetada como "recibo", lo que puede hacer dudar al cliente sobre si el pago sigue pendiente.`,
          `- ✓ Usar un lenguaje propio de recibo, como "Gracias por su pago", en un documento que todavía solicita un dinero que no ha llegado.`,
          `- ✓ No emitir ningún recibo para los pagos en efectivo, sin dejar ningún registro para ninguna de las dos partes.`,
          `- ✓ Tratar un presupuesto o una estimación como si fuera una factura: un presupuesto aún no se ha facturado, así que no lo es.`,
          `- ✓ Perder el rastro de pagos parciales porque el recibo no hacía referencia al número de factura original.`,
        ],
        checklist: [
          `Enviar una factura sin pagar etiquetada como "recibo", lo que puede hacer dudar al cliente sobre si el pago sigue pendiente.`,
          `Usar un lenguaje propio de recibo, como "Gracias por su pago", en un documento que todavía solicita un dinero que no ha llegado.`,
          `No emitir ningún recibo para los pagos en efectivo, sin dejar ningún registro para ninguna de las dos partes.`,
          `Tratar un presupuesto o una estimación como si fuera una factura: un presupuesto aún no se ha facturado, así que no lo es.`,
          `Perder el rastro de pagos parciales porque el recibo no hacía referencia al número de factura original.`,
        ],
      },
      {
        heading: `Por qué esta distinción importa para tu contabilidad`,
        paragraphs: [
          `La separación entre factura y recibo no es solo una cuestión de palabras: suele corresponder a dos eventos contables distintos. Según el método que uses, emitir una factura puede ser el momento en que se reconoce el ingreso, mientras que el recibo correspondiente es lo que confirma que el dinero realmente llegó.`,
          `Aquí es también donde ambos documentos demuestran su utilidad en temporada fiscal o durante una auditoría. Un auditor o contable que concilie tus cuentas por cobrar querrá ver ambas caras: lo que se facturó y lo que se cobró frente a ello.`,
        ],
      },
      {
        heading: `Cómo crear cada uno rápidamente`,
        paragraphs: [
          `Para una factura, parte de una plantilla que ya incluya los campos obligatorios —datos del negocio, número de factura, conceptos, impuestos y total—, de modo que solo tengas que rellenar los detalles específicos cada vez. Para un recibo, el método más rápido suele ser marcar la factura correspondiente como pagada y dejar que tu herramienta genere el recibo a partir de ella, lo que mantiene ambos documentos vinculados y facilita conciliar tus registros más adelante.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Puede una factura ser también un recibo?`,
        answer: `No al mismo tiempo. Una factura solo se convierte efectivamente en un recibo una vez que se marca como pagada y se vuelve a emitir para confirmar el pago; hasta entonces, sigue siendo una solicitud.`,
      },
      {
        question: `¿Es obligatorio por ley emitir un recibo?`,
        answer: `En muchos lugares, los negocios están obligados a entregar un recibo si el cliente lo solicita, y algunas jurisdicciones lo exigen automáticamente para ciertos tipos de transacción. Los requisitos varían, así que conviene comprobar qué aplica donde operas.`,
      },
      {
        question: `¿Qué es una "factura pagada" y es lo mismo que un recibo?`,
        answer: `Una factura pagada es una factura marcada como saldada. Es cercana a un recibo en función, pero un recibo dedicado suele ser una prueba de pago más clara, porque se presenta como una confirmación y no como una solicitud.`,
      },
      {
        question: `¿Deben los autónomos emitir recibos?`,
        answer: `No siempre, especialmente si los clientes pagan a través de un sistema que genera su propia confirmación de pago. Es buena práctica ofrecer uno si el cliente lo pide, en particular para pagos en efectivo o informales.`,
      },
      {
        question: `¿Qué datos debe incluir un recibo?`,
        answer: `Como mínimo: el importe pagado, la fecha, el método de pago y los datos de tu negocio. Incluir una referencia al número de factura relacionado facilita cotejar los registros más adelante.`,
      },
      {
        question: `¿Cuánto tiempo debo conservar facturas y recibos?`,
        answer: `La mayoría de las autoridades fiscales esperan que los registros se conserven durante varios años, habitualmente entre tres y siete, según el país. Consulta el requisito local, ya que varía según la jurisdicción y el tipo de negocio.`,
      },
    ],
    related: [
      `como-redactar-una-factura`,
      `lista-verificacion-factura`,
      `condiciones-de-pago`,
      `facturacion-fiscal-pequenas-empresas`,
    ],
  },
  {
    slug: `factura-de-anticipo`,
    title: `Facturas de anticipo: cómo solicitar y estructurar pagos por adelantado`,
    description: `Cómo pedir un anticipo a tus clientes antes de empezar a trabajar, cuánto solicitar y cómo estructurar una factura de anticipo para que el saldo final quede claro.`,
    category: `Cobros`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Pedir dinero antes de haber entregado nada resulta incómodo hasta que tienes un formato claro para hacerlo. Así puedes estructurar la solicitud para que parezca una práctica habitual y no una señal de alarma.`,
    image: {
      src: `/images/guides/deposit-invoice-guide.svg`,
      alt: `Ilustración de la estructura de una factura de anticipo`,
    },
    intro: [
      `Cobros · 7 min de lectura`,
      `Pedir dinero antes de haber entregado nada resulta incómodo hasta que tienes un formato claro para hacerlo. Así puedes estructurar la solicitud para que parezca una práctica habitual y no una señal de alarma.`,
      `![Ilustración de la estructura de una factura de anticipo](https://best-invoicegenerator.com/images/guides/deposit-invoice-guide.svg)`,
      `Pedirle dinero a un cliente nuevo antes de haber entregado nada puede resultar incómodo, pero un anticipo protege a ambas partes. A ti te da capital de trabajo para cubrir materiales o el tiempo que reservas, y al cliente le ofrece una forma de comprometerse con menos riesgo antes de pagar la tarifa completa del proyecto. Si se hace con claridad, una factura de anticipo no es más complicada que una factura normal. Así conviene estructurarla.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Un anticipo del 50 % para un proyecto de mobiliario a medida`,
      body: `Un carpintero presupuesta a un cliente \$4,200 por una mesa de comedor a medida, con el 50 % pagadero antes de empezar el trabajo. | Campo | Contenido | |---|---| | Título | Factura de anticipo — 50 % | | N.º de factura | WK-2026-009-D | | Facturar a | Nombre y dirección del cliente | | Concepto | Anticipo del proyecto de mesa de comedor a medida — 50 % de \$4,200 en total — \$2,100.00 | | Nota | El saldo restante de \$2,100.00 vence al finalizar y se facturará por separado | | Condiciones | Pagadero antes del inicio del proyecto, por transferencia bancaria o tarjeta |`,
      rows: [],
    },
    diagram: {
      title: `Ciclo de vida de una factura de anticipo`,
      caption: undefined,
      steps: [
        `El cliente acepta el presupuesto`,
        `Se envía la factura de anticipo (importe parcial)`,
        `Se recibe el anticipo: comienza el trabajo`,
        `Se envía la factura final (saldo pendiente)`,
      ],
    },
    sections: [
      {
        heading: `Cuándo pedir un anticipo`,
        paragraphs: [
          `Los anticipos son una práctica habitual en muchos sectores. Tienen más sentido cuando necesitas comprometer recursos antes de la entrega.`,
          `- El proyecto te obliga a comprar materiales o suministros antes de empezar.`,
          `- Vas a reservar una cantidad importante de tiempo en exclusiva para un solo cliente.`,
          `- El cliente es nuevo y no tienes historial de pagos con él.`,
          `- El valor total del proyecto es alto en relación con tu flujo de caja habitual.`,
          `- Tu sector considera los anticipos una práctica estándar: los eventos, los trabajos a medida, la construcción y el diseño suelen aplicarlos.`,
        ],
      },
      {
        heading: `¿Cuánto deberías pedir?`,
        paragraphs: [
          `No existe una regla universal, pero hay algunos patrones que se repiten: entre el 25 y el 33 % en proyectos pequeños con un cliente ya establecido, el 50 % para clientes nuevos o proyectos medianos, el 50 % por adelantado más pagos por hitos en proyectos grandes de varias fases, y el 100 % por adelantado en trabajos muy pequeños o productos digitales.`,
          `Sea cual sea el porcentaje que elijas, indícalo en tu presupuesto o contrato antes de facturarlo, de modo que la cifra de la factura de anticipo no sea la primera vez que el cliente la ve.`,
        ],
      },
      {
        heading: `Cómo estructurar correctamente una factura de anticipo`,
        paragraphs: [
          `Rotula la factura con claridad («Factura de anticipo» o «Factura — anticipo del 50 %» en el título) para que no se confunda con el cobro total del proyecto. Asígnale su propio número de factura dentro de tu secuencia habitual; no reutilices el número que piensas usar en la factura final.`,
          `En lugar de una línea vaga que diga «Anticipo», indica qué es lo que asegura: «Anticipo — proyecto de carpintería de cocina (50 % de \$4,200 en total)» le dice al cliente exactamente a qué corresponde el pago.`,
          `Incluye una línea o una nota con la tarifa total del proyecto, el importe del anticipo y el saldo que vencerá más adelante. Los anticipos suelen vencer antes que las facturas estándar: indica «Pagadero antes del inicio del proyecto» o una fecha concreta.`,
        ],
      },
      {
        heading: `Reembolsos y cancelaciones`,
        paragraphs: [
          `Define tu política de reembolsos antes de recibir el primer anticipo, no cuando un cliente te pida cancelar.`,
          `- Indica en tu contrato o presupuesto si el anticipo es reembolsable, parcialmente reembolsable o no reembolsable.`,
          `- En trabajos a medida con costos de materiales, un anticipo no reembolsable o parcialmente reembolsable es lo habitual.`,
          `- Deja la política por escrito en un documento que el cliente haya aceptado: una factura por sí sola no sustituye a un contrato.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Una factura de anticipo es legalmente vinculante?`,
        answer: `Una factura registra lo que se debe, pero el acuerdo exigible suele ser el presupuesto o el contrato que el cliente aceptó antes. Conviene tener ambos: un acuerdo firmado para las condiciones y la factura de anticipo como registro del pago.`,
      },
      {
        question: `¿Qué hago si un cliente se niega a pagar un anticipo?`,
        answer: `Tómalo como una señal para aclarar las condiciones antes de empezar, no como un motivo para seguir adelante de todos modos. La mayoría de los profesionales que exigen anticipos simplemente no empiezan a trabajar hasta recibirlo, algo que resulta más fácil de mantener si fijas esa expectativa desde la etapa del presupuesto.`,
      },
      {
        question: `¿Los anticipos llevan impuestos?`,
        answer: `En muchos lugares, sí: un anticipo suele tratarse como un pago adelantado de bienes o servicios gravados, por lo que normalmente se le aplican las mismas normas fiscales que a tus facturas habituales. Si tienes dudas, consúltalo con un contador local.`,
      },
      {
        question: `¿Puedo usar el mismo número de factura para el anticipo y para la factura final?`,
        answer: `Es mejor no hacerlo. Dale al anticipo su propio número y haz referencia a él en la factura final, para que cualquiera que revise tus registros pueda seguir toda la transacción.`,
      },
      {
        question: `¿Cuál es la diferencia entre un anticipo y una iguala (retainer)?`,
        answer: `Un anticipo es un pago único por adelantado a cuenta del costo total de un proyecto concreto. Una iguala es un pago recurrente que reserva tu tiempo o tu disponibilidad de forma continua, a menudo facturado cada mes, se aproveche por completo o no.`,
      },
      {
        question: `¿Necesito un contrato además de una factura de anticipo?`,
        answer: `Por lo general, sí, sobre todo para cualquier trabajo que no sea pequeño. La factura documenta el pago; el contrato o el presupuesto documenta lo que ambas partes acordaron, incluido lo que ocurre si el proyecto cambia o se cancela.`,
      },
    ],
    related: [
      `facturacion-por-hitos-contratistas`,
      `facturacion-igualas-consultores`,
      `condiciones-de-pago`,
      `como-redactar-una-factura`,
    ],
  },
  {
    slug: `factura-proforma`,
    title: `Factura proforma: qué es y cuándo enviarla`,
    description: `Una factura proforma presenta un precio comprometido antes de la entrega. Descubre en qué se diferencia de la factura final, cuándo usarla y qué debe incluir.`,
    category: `Estándares de documentos`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una factura proforma indica un precio comprometido antes de que se entregue el trabajo o se envíe la mercancía. Se parece a una factura, pero no pide el pago de la misma manera, y confundirlas genera problemas contables reales.`,
    image: {
      src: `/images/guides/proforma-invoice-guide.svg`,
      alt: `Una factura proforma y una factura final, una junto a la otra, con las diferencias resaltadas`,
    },
    intro: [
      `Estándares de documentos · 7 min de lectura`,
      `Una factura proforma indica un precio comprometido antes de que se entregue el trabajo o se envíe la mercancía. Se parece a una factura, pero no pide el pago de la misma manera, y confundirlas genera problemas contables reales.`,
      `![Una factura proforma y una factura final, una junto a la otra, con las diferencias resaltadas](https://best-invoicegenerator.com/images/guides/proforma-invoice-guide.svg)`,
      `La mayoría de las confusiones de facturación nacen de un mismo documento que hace dos trabajos a la vez. Un cliente te pide «una factura para poder aprobar esto», tú envías una factura real y, de pronto, tienes una cuenta por cobrar registrada por un trabajo que ni siquiera ha empezado. Seis semanas después cambia el alcance y tienes que emitir una nota de crédito para deshacer algo que nunca debió registrarse.`,
      `La factura proforma existe precisamente para resolver esto. Le da al cliente un documento formal con líneas de detalle, totales y datos de pago, sin crear una venta en tus registros. Una vez que entiendes dónde encaja en la secuencia de facturación, el resto de tu papeleo se simplifica.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: el anticipo de un proyecto de diseño`,
      body: `Un estudio acuerda un proyecto de identidad de marca por 4,800 (en la moneda del cliente), con el 40 % pagadero antes de empezar. La secuencia es esta: 1. **Presupuesto enviado el 2 de septiembre:** tres opciones de paquete, supuestos de alcance, válido por 30 días. 2. El cliente elige el paquete intermedio. Su equipo de finanzas pide «una factura» para tramitar el anticipo. 3. Se emite la proforma PF-2026-014 el 5 de septiembre por 1,920, claramente rotulada, válida hasta el 5 de octubre, con los datos bancarios y una nota que indica que el saldo se facturará en la entrega. 4. El anticipo se recibe el 12 de septiembre. Ahora el estudio emite la factura definitiva NS-2026-088 por el importe del anticipo, con referencia a PF-2026-014. 5. El proyecto se entrega el 30 de octubre. Se emite la factura final NS-2026-112 por los 2,880 restantes, con una línea que muestra el anticipo ya pagado.`,
      rows: [],
    },
    diagram: {
      title: `Factura proforma: qué es y cuándo enviarla — flujo de decisión`,
      caption: undefined,
      steps: [
        `Qué es realmente una factura proforma`,
        `Factura proforma frente a presupuesto y factura final`,
        `Cuándo la factura proforma es el documento adecuado`,
        `Qué incluir en una factura proforma`,
      ],
    },
    sections: [
      {
        heading: `Qué es realmente una factura proforma`,
        paragraphs: [
          `Una factura proforma es una declaración de buena fe de lo que vas a cobrar, emitida antes de que se haya producido el hecho que da lugar a la facturación. El nombre viene del latín y significa «por cuestión de forma»: tiene la forma de una factura, pero no su función.`,
          `De ahí se desprenden tres cosas:`,
          `- **No es una exigencia de pago. Es la expectativa de un pago.** Que un cliente la deje sin pagar no supone un incumplimiento de las condiciones.`,
          `- **No pertenece a tu libro de ventas.** En la fase de proforma no se reconoce el ingreso y, por lo general, tampoco se contabilizan los impuestos.`,
          `- **No es definitiva.** Las cantidades, las fechas y los totales aún pueden cambiar, por eso el documento debe decirlo con claridad.`,
          `Como el tratamiento fiscal difiere entre jurisdicciones, considera lo anterior un principio general y confirma los detalles con un contador que conozca las normas de tu país.`,
        ],
      },
      {
        heading: `Factura proforma frente a presupuesto y factura final`,
        paragraphs: [
          `Estos tres documentos corresponden a tres etapas de una misma conversación.`,
          `**El presupuesto: ayudar al cliente a decidir**`,
          `Un presupuesto es persuasivo. Puede incluir opciones, rangos, supuestos, exclusiones y un plazo de validez. Su destinatario es la persona que está decidiendo si te contrata. Los clientes suelen comparar varios presupuestos entre sí, así que el contexto y la descripción del alcance importan más que la precisión.`,
          `**La proforma: ayudar al cliente a comprometerse**`,
          `Una proforma es administrativa. La decisión ya está tomada en gran medida; ahora el cliente necesita un documento que su equipo de finanzas, su banco o su agente aduanal acepten. Replica exactamente la factura final: las mismas líneas de detalle, los mismos totales, los mismos datos bancarios, las mismas convenciones de referencia. La única diferencia es la etiqueta y el hecho de que todavía no se ha entregado nada.`,
          `**La factura final: pedir que te paguen**`,
          `La factura final se emite cuando ya se ha producido el hecho de facturación acordado: la entrega, la finalización de un hito o el cierre de un periodo de servicio. Lleva un número de factura secuencial y una fecha de vencimiento indicada, y entra en tu contabilidad como una cuenta por cobrar.`,
        ],
      },
      {
        heading: `Cuándo la factura proforma es el documento adecuado`,
        paragraphs: [
          `Envía una cuando el cliente necesite una cifra formal antes de que hayas adquirido el derecho a cobrar. Las situaciones habituales son estas:`,
          `- **Pagos anticipados o anticipos.** Muchos departamentos de finanzas no pueden liberar fondos sin un documento que muestre un total y las instrucciones de pago.`,
          `- **Aprobación interna de compras.** El proceso de compras de un cliente puede exigir un documento con aspecto de factura sobre el que emitir una orden de compra.`,
          `- **Envíos internacionales y aduanas.** Los transportistas y las autoridades aduaneras suelen pedir una proforma que declare el valor, la cantidad y el origen de las mercancías antes de que se muevan.`,
          `- **Clientes nuevos sin historial de pagos.** Una proforma te permite acordar las cifras exactas por escrito antes de comprometer tiempo de producción.`,
          `- **Solicitudes de subvenciones, presupuestos o reembolsos.** El cliente puede necesitar una prueba de un costo comprometido antes de que se realice el gasto.`,
        ],
      },
      {
        heading: `Qué incluir en una factura proforma`,
        paragraphs: [
          `Constrúyela a partir de tu factura habitual y cambia cuatro cosas. Todo lo demás debe permanecer idéntico, porque el objetivo es que el cliente no se lleve ninguna sorpresa cuando llegue la factura real.`,
          `- **Rotúlala sin ambigüedades.** Las palabras «Factura proforma» deben ser el texto más grande del documento, y la frase «Este documento no es una factura fiscal» debe aparecer cerca del total.`,
          `- **Usa una serie de referencia propia.** Algo como PF-2026-014, fuera de tu numeración secuencial de facturas.`,
          `- **Sustituye la fecha de vencimiento por una fecha de validez.** «Válida hasta el 15 de octubre de 2026» es honesto; «Vence el 15 de octubre de 2026» no lo es.`,
          `- **Indica qué podría cambiar las cifras.** Suele bastar una línea que cubra variaciones de cantidad, movimientos del tipo de cambio o el costo del envío.`,
          `Conserva el detalle de las líneas, el nombre legal y la dirección del cliente, tus datos de negocio, el subtotal, los impuestos mostrados como estimación y el total.`,
        ],
      },
      {
        heading: `Una regla sencilla para elegir`,
        paragraphs: [
          `Pregúntate para qué sirve el documento. Si el cliente aún está decidiendo, envía un presupuesto. Si el cliente ya decidió pero todavía no se ha entregado nada, envía una proforma. Si ya se ha producido el hecho de facturación acordado, envía una factura y pon en marcha el reloj de tus condiciones de pago.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Una factura proforma es una factura legal?`,
        answer: `No. Una factura proforma es un documento preliminar que indica lo que tienes previsto cobrar. No es una exigencia de pago y normalmente no se registra como una venta en tu contabilidad. Solo la factura final genera una cuenta por cobrar y pertenece a tus registros de ventas. Como las normas varían de un país a otro, confirma el tratamiento que se aplica a tu negocio antes de apoyarte en una proforma para cualquier asunto fiscal.`,
      },
      {
        question: `¿Cuál es la diferencia entre una factura proforma y un presupuesto?`,
        answer: `Un presupuesto invita al cliente a considerar un precio y suele ser exploratorio, con opciones y rangos. Una factura proforma es más firme: tiene el formato de la factura final, enumera líneas y totales exactos y normalmente se emite después de que el cliente haya indicado que quiere seguir adelante. En la práctica, un presupuesto ayuda al cliente a decidir, mientras que una proforma le ayuda a obtener la aprobación interna o a organizar el pago.`,
      },
      {
        question: `¿Puede un cliente pagar una factura proforma?`,
        answer: `Sí, y es una de las razones más comunes para enviarla. Muchas empresas necesitan un documento con un total y datos bancarios antes de que su equipo de finanzas pueda liberar un pago anticipado. Si un cliente paga contra una proforma, emite después la factura final y haz referencia al pago ya recibido para que ambos documentos cuadren sin problemas.`,
      },
      {
        question: `¿Una factura proforma necesita un número de factura?`,
        answer: `Asígnale una referencia, pero mantenla fuera de tu secuencia principal de facturas. Usar un prefijo distinto, como PF-2026-014, evita huecos en tu numeración de facturas reales y deja claro qué documento es provisional. Cuando emitas la factura final, cita en ella la referencia de la proforma para que el cliente pueda relacionar ambas.`,
      },
      {
        question: `¿Necesito una factura proforma para un envío internacional?`,
        answer: `Con frecuencia, sí. Las autoridades aduaneras y los agentes de carga suelen pedir una factura proforma antes de que las mercancías se muevan, porque en ella se declaran la descripción, la cantidad, el valor y el origen de lo que se envía. Los requisitos cambian según el destino y el tipo de envío, así que consúltalo con tu transportista o con un agente aduanal en lugar de dar por hecho que una plantilla genérica servirá para todas las rutas.`,
      },
    ],
    related: [
      `presupuesto-vs-factura`,
      `numeracion-de-facturas`,
      `facturacion-multidivisa-internacional`,
    ],
  },
  {
    slug: `como-redactar-un-correo-de-factura`,
    title: `Cómo redactar un correo de factura que se abra y se pague a tiempo`,
    description: `El asunto, la estructura del cuerpo y los hábitos con los adjuntos que hacen que un correo de factura sea fácil de gestionar para el equipo de pagos de tu cliente.`,
    category: `Cobros`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Rara vez se lee la factura con detalle en la primera pasada. El correo que la acompaña decide si se abre hoy o si queda enterrada hasta que alguien insista.`,
    image: {
      src: `/images/guides/invoice-email-templates.svg`,
      alt: `Ilustración de la estructura de una plantilla de correo de factura`,
    },
    intro: [
      `Cobros · 6 min de lectura`,
      `Rara vez se lee la factura con detalle en la primera pasada. El correo que la acompaña decide si se abre hoy o si queda enterrada hasta que alguien insista.`,
      `![Ilustración de la estructura de una plantilla de correo de factura](https://best-invoicegenerator.com/images/guides/invoice-email-templates.svg)`,
      `Una factura puede estar perfectamente maquetada y aun así pasar semanas sin pagarse si el correo que la lleva no cumple su función. Los equipos de cuentas por pagar clasifican sus bandejas de entrada a toda velocidad: buscan quién les factura, cuánto y para cuándo, muchas veces sin abrir el adjunto en la primera pasada.`,
      `Nada de esto requiere un mensaje ingenioso. Requiere un asunto fácil de buscar más adelante, un cuerpo que responda a las preguntas obvias sin necesidad de abrir el PDF y unos adjuntos que no le generen trabajo extra a quien te paga.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Un correo completo de primer envío`,
      body: `Asunto: Factura INV-2026-118 de Harbor & Oak — \$2,400 con vencimiento el 15 de oct. El cuerpo del correo indica qué cubre la factura, el total a pagar y el enlace de pago. | Campo | Contenido | |---|---| | Asunto | Factura INV-2026-118 de Harbor & Oak — \$2,400 con vencimiento el 15 de oct. | | Cubre | Iguala mensual de agosto: rediseño de la página de inicio y dos rondas de revisiones | | Importe | \$2,400.00, pagadero antes del 15 de octubre | | Pago | Enlace de pago en línea o transferencia bancaria según el pie de la factura |`,
      rows: [],
    },
    diagram: {
      title: `Secuencia de tres correos de factura`,
      caption: undefined,
      steps: [
        `Enviar el correo de la nueva factura`,
        `Recordatorio amable 2–3 días antes del vencimiento`,
        `Seguimiento directo 2–3 días después del vencimiento`,
      ],
    },
    sections: [
      {
        heading: `El asunto que los clientes sí abren`,
        paragraphs: [
          `Un asunto vago como «Seguimiento» o «Factura adjunta» se pierde entre los demás y, peor aún, es casi imposible de encontrar dentro de seis semanas. Un buen asunto de factura responde a tres preguntas de un vistazo: quién factura, cuánto y a qué referencia corresponde.`,
          `Si el equipo de finanzas del cliente usa una orden de compra o un código de proyecto, inclúyelo. Ese único dato suele ser lo que hace llegar tu correo a la persona correcta sin demoras por reenvíos.`,
        ],
      },
      {
        heading: `Qué debe decir realmente el cuerpo del correo`,
        paragraphs: [
          `Sé breve. El correo no es el lugar para repetir todo el proyecto: es donde confirmas lo esencial para que quien lo lee no tenga que abrir el adjunto solo para saber qué debe y cuándo.`,
          `- Un recordatorio de una línea sobre lo que cubre la factura (el proyecto, el periodo de servicio o el entregable).`,
          `- El importe a pagar y la fecha de vencimiento, escritos en texto plano y no solo dentro del PDF.`,
          `- Cómo pagar: datos para la transferencia bancaria, un enlace de pago o el método que aceptes.`,
          `- A quién dirigir las preguntas, si no eres tú.`,
          `- Una frase de cierre breve y concreta en lugar de una despedida genérica.`,
        ],
      },
      {
        heading: `Qué dejar fuera de un correo de factura`,
        paragraphs: [
          `Algunos hábitos socavan discretamente un correo de factura que, por lo demás, está bien escrito.`,
          `- Disculparte por enviar la factura, o por preguntar por un pago que de verdad está vencido.`,
          `- Enterrar el importe y la fecha de vencimiento en mitad de un párrafo.`,
          `- Volver a explicar todo el alcance del proyecto, algo que corresponde a la propuesta o al contrato.`,
          `- Mezclar varios temas sin relación en el mismo correo que la factura.`,
        ],
      },
      {
        heading: `Hábitos con los adjuntos y los nombres de archivo que ahorran tiempo`,
        paragraphs: [
          `Unas cuantas decisiones pequeñas hacen que tu factura sea más fácil de archivar correctamente en el lado del cliente.`,
          `- Envía un PDF, no un formato editable: se ve igual en todas partes y no se puede alterar después.`,
          `- Ponle al archivo un nombre claro: NombreDelNegocio-NumeroDeFactura-Fecha.pdf, no «factura_final_v3.pdf».`,
          `- Mantén un tamaño de archivo razonable; un logotipo mal comprimido puede hacer que una factura sencilla pese varios megabytes.`,
          `- Adjunta la factura directamente en lugar de limitarte a enlazarla.`,
        ],
      },
      {
        heading: `Automatizar sin que suene automático`,
        paragraphs: [
          `Los clientes recurrentes son los mejores candidatos para correos de factura con plantilla, o incluso programados, pero una plantilla sigue necesitando un nombre real, un importe real y una fecha real, bien insertados cada vez. Antes de que algo se envíe automáticamente, una revisión manual rápida detecta el texto de relleno y los totales que no cuadran, que dañan la confianza sin que te des cuenta.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Debo adjuntar la factura en PDF o enviar solo un enlace de pago?`,
        answer: `Haz las dos cosas cuando puedas. Adjunta el PDF para que el cliente tenga un registro permanente en sus archivos e incluye un enlace de pago en el cuerpo del correo para que pagar no exija abrir primero el adjunto.`,
      },
      {
        question: `¿Debo poner en copia directamente al equipo de cuentas por pagar del cliente?`,
        answer: `Si sabes quién gestiona los pagos en su empresa, sí: ponlo en copia o dirige el correo directamente a esa persona, en lugar de enviarlo todo a través de tu contacto principal, que quizá no lo reenvíe enseguida.`,
      },
      {
        question: `¿Cuál es el mejor día u hora para enviar un correo de factura?`,
        answer: `Suele funcionar mejor a primera hora de la semana laboral y del día, ya que las facturas enviadas el viernes por la tarde o tarde por la noche muchas veces quedan sin tocar hasta el lunes siguiente.`,
      },
      {
        question: `¿Cuánto tiempo después del vencimiento debo enviar un seguimiento?`,
        answer: `Un recordatorio breve dos o tres días antes de la fecha de vencimiento, seguido de un seguimiento directo en los dos o tres días hábiles posteriores a que esta pase, mantiene la factura visible sin que parezca una escalada inmediata.`,
      },
      {
        question: `¿Es poco profesional enviar recordatorios de factura automáticos?`,
        answer: `No, siempre que el contenido sea preciso y específico de esa factura. Por lo general, los clientes responden mejor a un calendario de recordatorios constante y predecible que a seguimientos manuales esporádicos cuyo tono varía.`,
      },
      {
        question: `¿Debo mencionar los recargos por mora en el propio correo de la factura?`,
        answer: `Solo si ya hay una política de recargos por mora acordada con el cliente, idealmente indicada en tu contrato o en el presupuesto original. Presentar un recargo por primera vez en un correo de recordatorio suele leerse como una sorpresa y no como una condición que se hace cumplir.`,
      },
    ],
    related: [
      `condiciones-de-pago`,
      `recuperacion-facturas-vencidas`,
      `lista-verificacion-factura`,
    ],
  },
  {
    slug: `notas-de-credito-y-correcciones-de-facturas`,
    title: `Notas de crédito y correcciones de facturas: cómo corregir una factura ya enviada`,
    description: `Nunca edites una factura que ya enviaste. Aprende cómo funcionan las notas de crédito, cuándo anular y cuándo ajustar, y cómo mantener tus registros conciliados.`,
    category: `Estándares de documentos`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una factura enviada es un registro, no un borrador. Cuando algo está mal, la solución es un segundo documento que haga referencia al primero, no una edición discreta del original.`,
    image: {
      src: `/images/guides/credit-note-invoice-corrections.svg`,
      alt: `Una factura con su nota de crédito correspondiente que reduce su valor, vinculadas por un número de referencia`,
    },
    intro: [
      `Estándares de documentos · 7 min de lectura`,
      `Una factura enviada es un registro, no un borrador. Cuando algo está mal, la solución es un segundo documento que haga referencia al primero, no una edición discreta del original.`,
      `![Una factura con su nota de crédito correspondiente que reduce su valor, vinculadas por un número de referencia](https://best-invoicegenerator.com/images/guides/credit-note-invoice-corrections.svg)`,
      `Tarde o temprano, todos los negocios se equivocan al facturar. Una cantidad no cuadra, se acordó un descuento después de enviar la factura, se nombró a la entidad equivocada o un cliente devuelve parte de un pedido. El instinto es abrir el archivo, corregir la cifra y volver a enviarlo. Ese instinto causa muchos más problemas que el error original.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: una devolución parcial`,
      body: `Un proveedor factura a un minorista el 3 de septiembre, factura NS-2026-140, por 20 unidades a 45 cada una, con un total de 900 antes de impuestos. El 9 de septiembre, el minorista informa de que cuatro unidades llegaron dañadas y las devuelve. 1. El proveedor emite la nota de crédito CN-2026-007 con fecha del 9 de septiembre. 2. La nota hace referencia a NS-2026-140 e indica el motivo: «4 unidades devueltas, dañadas durante el transporte». 3. Incluye una sola línea: 4 unidades a 45, valor de 180, con el impuesto calculado sobre la misma base que el original. 4. Cierra con una línea sobre la que el cliente puede actuar: «Importe neto que ahora debe pagarse de la factura NS-2026-140: 720 más impuestos».`,
      rows: [],
    },
    diagram: {
      title: `Notas de crédito y correcciones de facturas: cómo corregir una factura ya enviada — flujo de decisión`,
      caption: undefined,
      steps: [
        `Por qué nunca debes editar una factura enviada`,
        `Qué hace una nota de crédito`,
        `Cómo elegir la corrección adecuada`,
        `Haz el seguimiento de los créditos con el mismo cuidado que el de las facturas`,
      ],
    },
    sections: [
      {
        heading: `Por qué nunca debes editar una factura enviada`,
        paragraphs: [
          `En cuanto una factura sale de tu sistema, pierdes el control sobre cuántas copias existen. El software de cuentas por pagar de tu cliente puede haberla capturado ya. Quien la aprueba puede tener un PDF en una cadena de correos. Si editas el original y lo vuelves a enviar con el mismo número, se producen tres problemas:`,
          `- **Dos documentos comparten un mismo número.** Nadie puede saber cuál es la versión válida sin compararlas línea por línea.`,
          `- **La conciliación se rompe.** Si el cliente ya registró la primera versión, su libro contable y el tuyo diferirán en la cantidad modificada, y esa discrepancia saldrá a la luz en el peor momento posible.`,
          `- **Tu pista de auditoría desaparece.** Un conjunto de registros limpio muestra qué se cobró, qué cambió y por qué. Un archivo sobrescrito solo muestra el estado final.`,
          `Corregir mediante un documento aparte te cuesta dos minutos y elimina los tres riesgos.`,
        ],
      },
      {
        heading: `Qué hace una nota de crédito`,
        paragraphs: [
          `Una nota de crédito (en inglés también *credit memo*) es un documento que reduce el importe que te debe un cliente. Estructuralmente es una factura a la inversa: enumera líneas, cantidades e importes, pero esos importes disminuyen el saldo en lugar de aumentarlo.`,
          `Se utiliza para:`,
          `- **Anular una factura por completo:** una nota de crédito total por el mismo importe, que se emite cuando una factura nunca debió enviarse.`,
          `- **Reducir una factura parcialmente:** un artículo devuelto, una línea no aprobada, una rebaja de cortesía tras un problema con el servicio.`,
          `- **Aplicar un descuento acordado a posteriori:** por ejemplo, un descuento por pronto pago al que el cliente tenía derecho.`,
          `- **Corregir un cobro excesivo:** una tarifa equivocada, una línea duplicada o un error de cantidad a favor del cliente.`,
          `Qué debe incluir una nota de crédito:`,
          `- Las palabras «Nota de crédito» bien visibles en la parte superior.`,
          `- Su propia referencia, de una serie separada, por ejemplo CN-2026-007.`,
          `- El número y la fecha de la factura original que ajusta.`,
          `- Un motivo breve y concreto: «2 unidades devueltas, dañadas durante el transporte» es mejor que «ajuste».`,
          `- Las líneas afectadas, y no solo un importe global, cuando el ajuste sea parcial.`,
          `- Los impuestos mostrados sobre la misma base que la factura original.`,
          `- La fecha en que se emitió la nota de crédito.`,
          `- Si el crédito se reembolsa, se compensa o se reserva para facturas futuras.`,
        ],
      },
      {
        heading: `Cómo elegir la corrección adecuada`,
        paragraphs: [
          `**La factura no está pagada y es totalmente errónea:**`,
          `Emite una nota de crédito total que la anule y, después, una factura nueva con un número nuevo y los datos correctos. Haz referencia a la factura anulada en la nueva para que el cliente vea la relación entre ambas. No reutilices el número anterior.`,
          `**La factura no está pagada y es casi correcta:**`,
          `Emite una nota de crédito parcial por la diferencia. El cliente paga la factura original menos el crédito. Indícale de forma explícita cuánto debe pagar, porque «factura 088 menos nota de crédito 007» es más fácil de procesar que dejar que lo calcule por su cuenta.`,
          `**La factura tenía un precio demasiado bajo:**`,
          `No anules y vuelvas a emitir por un importe mayor sin hablarlo antes. Emite una nota de débito o, como es más habitual en los negocios pequeños, una segunda factura por la diferencia con una explicación clara. Un aumento inesperado es una conversación, no un documento.`,
          `**La factura ya está pagada:**`,
          `Emite la nota de crédito para corregir el registro y acuerda después con el cliente si reembolsas la diferencia o la trasladas a una factura futura. Trasladarla suele ser más sencillo para ambas partes, pero solo con un acuerdo por escrito: un saldo de crédito sin explicar tiende a ser olvidado por la parte que sale beneficiada con el olvido.`,
          `**Solo la redacción es errónea:**`,
          `Si el error es cosmético y no cambia el importe, la entidad, el tratamiento fiscal ni la fecha (un nombre de contacto mal escrito, por ejemplo), a menudo puedes enviar una copia corregida con una nota que explique el cambio, conservando ambas versiones en tus archivos. Cualquier cosa que afecte al dinero o a la identidad legal debe tramitarse mediante una nota de crédito.`,
        ],
      },
      {
        heading: `Haz el seguimiento de los créditos con el mismo cuidado que el de las facturas`,
        paragraphs: [
          `Los saldos de crédito pendientes se pierden fácilmente, sobre todo cuando un cliente deja de trabajar contigo antes de agotar uno. Incluye los créditos sin aplicar en cualquier revisión que hagas de las facturas abiertas y avisa a tus clientes cuando tengan un saldo disponible. Es un pequeño gesto de cortesía que no cuesta nada y que mejora de forma fiable la opinión que los clientes tienen de tu facturación.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Puedo simplemente editar una factura que ya envié?`,
        answer: `No deberías. Una vez que una factura ha salido de tus manos, el cliente tiene una copia y puede haberla registrado ya en su sistema de cuentas por pagar. Modificar el archivo sin avisar crea dos documentos distintos con el mismo número, que es justo lo que buscan los auditores y los equipos de finanzas. Emite en su lugar una nota de crédito y, después, una factura corregida si hace falta.`,
      },
      {
        question: `¿Cuál es la diferencia entre una nota de crédito y un reembolso?`,
        answer: `Una nota de crédito reduce sobre el papel lo que te debe el cliente. Un reembolso devuelve dinero al cliente. Si la factura no está pagada, basta con una nota de crédito para resolver el ajuste. Si la factura ya se pagó, normalmente emitirás la nota de crédito para corregir el registro y luego enviarás un reembolso real, o aplicarás el crédito a la siguiente factura del cliente si este está de acuerdo.`,
      },
      {
        question: `¿Una nota de crédito necesita su propio número?`,
        answer: `Sí. Dale a las notas de crédito su propia serie secuencial, como CN-2026-007, separada de la numeración de tus facturas. Cada nota de crédito debe indicar el número y la fecha de la factura con la que se relaciona. Esa única referencia es lo que permite que tú, tu cliente y un contador puedan emparejar los dos documentos años después.`,
      },
      {
        question: `¿Qué es una nota de débito?`,
        answer: `Una nota de débito aumenta el importe adeudado en lugar de reducirlo. Se usa cuando una factura cobró de menos, por ejemplo, cuando se omitió un recargo acordado o una cantidad adicional. Muchos negocios pequeños emiten simplemente una segunda factura por la diferencia, lo que suele resultar más claro para el cliente. Elijas lo que elijas, haz referencia a la factura original en el documento.`,
      },
      {
        question: `¿De cuánto tiempo dispongo para emitir una nota de crédito?`,
        answer: `En la práctica, en cuanto detectes el error, porque la corrección debe quedar registrada en el periodo contable correcto siempre que sea posible. Los plazos formales para ajustar los impuestos de una factura corregida varían considerablemente entre países, así que revisa las normas que te apliquen antes de corregir una factura de un periodo ya cerrado.`,
      },
    ],
    related: [
      `numeracion-de-facturas`,
      `lista-verificacion-factura`,
      `facturacion-fiscal-pequenas-empresas`,
    ],
  },
  {
    slug: `requisitos-de-facturas-con-iva`,
    title: `Requisitos de las facturas con IVA: qué deben incluir las empresas del Reino Unido y la UE`,
    description: `Los campos que necesita toda factura de una empresa registrada en el IVA, la diferencia entre facturas simplificadas y completas, y los errores más comunes con la inversión del sujeto pasivo.`,
    category: `Negocios globales`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una factura con IVA necesita más datos que una estándar: un número de registro, una fecha de devengo y el desglose de tipos por línea. Omitir un solo campo es un motivo habitual de que devuelvan la factura.`,
    image: {
      src: `/images/guides/vat-invoice-requirements.svg`,
      alt: `Ilustración de la lista de requisitos de una factura con IVA`,
    },
    intro: [
      `Negocios globales · 7 min de lectura`,
      `Una factura con IVA necesita más datos que una estándar: un número de registro, una fecha de devengo y el desglose de tipos por línea. Omitir un solo campo es un motivo habitual de que devuelvan la factura.`,
      `![Ilustración de la lista de requisitos de una factura con IVA](https://best-invoicegenerator.com/images/guides/vat-invoice-requirements.svg)`,
      `Si tu empresa está registrada en el IVA en el Reino Unido o en la UE, una factura no es solo una solicitud de pago: también es un documento fiscal en el que se apoyan tanto el sistema contable de tu cliente como tu propia declaración de IVA. Eso significa que algunos campos son prácticamente obligatorios y no simples decisiones de formato, y dejar uno fuera es uno de los motivos más frecuentes por los que el equipo de finanzas de un cliente devuelve una factura.`,
      `Esta es una orientación general, no un asesoramiento fiscal para tu situación concreta. Las normas del IVA varían de un país a otro y cambian periódicamente, así que confirma con un contador o con tu autoridad tributaria local cualquier dato que afecte a una declaración.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Una agencia del Reino Unido que factura a un cliente de la UE`,
      body: `Una agencia de diseño con sede en el Reino Unido termina un proyecto de branding para un cliente de Irlanda registrado en el IVA. Como se trata de un servicio transfronterizo entre empresas (B2B), la agencia no cobra IVA del Reino Unido: el cliente irlandés lo contabiliza mediante la inversión del sujeto pasivo (*reverse charge*). | Campo | Contenido | |---|---| | Importe neto | £4,000.00 | | IVA cobrado | £0.00 — se aplica la inversión del sujeto pasivo | | Nota de la factura | «Inversión del sujeto pasivo: el IVA debe ser contabilizado por el destinatario» | | N.º de IVA del cliente | Incluido completo, con formato verificado |`,
      rows: [],
    },
    diagram: {
      title: `Árbol de decisión de una factura con IVA`,
      caption: undefined,
      steps: [
        `Comprueba si estás registrado en el IVA`,
        `Determina si la venta es B2B o B2C`,
        `Aplica el tipo de IVA correcto o la inversión del sujeto pasivo`,
        `Incluye todos los campos obligatorios según el tipo de factura`,
      ],
    },
    sections: [
      {
        heading: `Quién necesita realmente emitir una factura con IVA`,
        paragraphs: [
          `Si estás registrado en el IVA (algo que en el Reino Unido pasa a ser obligatorio cuando el volumen de ventas gravables supera el umbral vigente, y que sigue umbrales de registro similares en los países de la UE), por lo general debes emitir una factura con IVA conforme a la normativa por las ventas gravadas a tipo general, a tipo reducido y a tipo cero realizadas a otras empresas registradas en el IVA.`,
          `Incluso algunas empresas por debajo del umbral obligatorio se registran voluntariamente, a menudo para recuperar el IVA de sus propias compras o porque los clientes más grandes esperan ver un número de IVA en las facturas que reciben. Una vez registrado, se aplican las mismas normas de facturación.`,
        ],
      },
      {
        heading: `Los campos básicos que debe incluir una factura con IVA válida`,
        paragraphs: [
          `Una factura con IVA completa necesita bastante más detalle que una factura comercial estándar. Omitir cualquiera de estos campos es el motivo más habitual por el que el equipo de cuentas por pagar de un cliente devuelve una factura.`,
          `- Un número de factura único y secuencial.`,
          `- La fecha de la factura y la fecha de devengo del impuesto (*tax point*), si difieren.`,
          `- El nombre, la dirección y el número de registro de IVA de tu empresa.`,
          `- El nombre y la dirección del cliente, además de su número de IVA en las ventas B2B.`,
          `- Una descripción clara de los bienes o servicios prestados.`,
          `- La cantidad y el precio unitario, sin IVA, de cada línea.`,
          `- El tipo de IVA aplicado a cada línea, y no solo un tipo global.`,
          `- El importe del IVA cobrado por cada tipo, mostrado por separado del total neto.`,
          `- El importe total sin IVA, el total del IVA cobrado y el total con IVA incluido.`,
        ],
      },
      {
        heading: `Facturas con IVA simplificadas frente a completas`,
        paragraphs: [
          `No todas las ventas exigen la lista completa de campos anterior. En las transacciones más pequeñas, de tipo comercio minorista y por debajo de un umbral de valor determinado, suele aceptarse una factura con IVA simplificada. Normalmente solo necesita los datos de tu empresa y tu número de IVA, la fecha, una descripción de los bienes o servicios y el total con IVA incluido al tipo aplicable. Las facturas simplificadas funcionan bien para los tiques del punto de venta; cualquier operación B2B, de mayor valor o transfronteriza debería usar, por lo general, el formato completo.`,
        ],
      },
      {
        heading: `Inversión del sujeto pasivo y notas sobre operaciones transfronterizas`,
        paragraphs: [
          `Vender a una empresa registrada en el IVA de otro país introduce consideraciones adicionales. En muchos servicios transfronterizos B2B, el comprador contabiliza el IVA en su propio país (inversión del sujeto pasivo), y la factura debe indicarlo de forma explícita. Las mercancías exportadas fuera del territorio del IVA suelen tributar a tipo cero en lugar de estar exentas de IVA. Desde el Brexit, las ventas del Reino Unido a la UE y de la UE al Reino Unido siguen, por lo general, las normas de exportación e importación en lugar del antiguo tratamiento del IVA intracomunitario.`,
        ],
      },
      {
        heading: `Errores comunes en las facturas con IVA`,
        paragraphs: [
          `Hay algunos errores que se repiten una y otra vez en la facturación con IVA.`,
          `- Dejar fuera tu número de registro de IVA.`,
          `- Aplicar un único tipo de IVA a toda la factura cuando las líneas están sujetas a tipos distintos.`,
          `- Olvidar la nota de inversión del sujeto pasivo en los servicios B2B transfronterizos que reúnen los requisitos.`,
          `- Confundir la fecha de la factura con la fecha de devengo cuando ambas difieren de verdad.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Tengo que cobrar IVA en las facturas a clientes de otros países?`,
        answer: `Depende de si el cliente es una empresa o un consumidor y de en qué país está. Muchos servicios transfronterizos B2B se rigen por la inversión del sujeto pasivo, lo que significa que tú no cobras IVA y el comprador lo contabiliza por su cuenta. Las ventas a consumidores y las de bienes suelen seguir otras normas, así que revisa cada caso concreto.`,
      },
      {
        question: `¿Qué es la fecha de devengo y en qué se diferencia de la fecha de la factura?`,
        answer: `La fecha de devengo (*tax point*) es la que determina a qué periodo de IVA pertenece una venta a efectos de declaración; suele ser la fecha en que se entregan los bienes o se completan los servicios, y no la fecha en que se imprime o se envía la factura. A menudo coinciden, pero no siempre.`,
      },
      {
        question: `¿Cuál es la diferencia entre tipo cero y exento de IVA?`,
        answer: `Las ventas a tipo cero siguen estando técnicamente gravadas, solo que a un tipo del 0 %, y normalmente puedes seguir recuperando el IVA de los costos relacionados. Las ventas exentas no están gravadas en absoluto y, por lo general, no puedes recuperar el IVA soportado relacionado. En una factura se parecen, pero se tratan de forma distinta en tu declaración de IVA.`,
      },
      {
        question: `¿Puedo emitir una factura con IVA en una moneda extranjera?`,
        answer: `Con frecuencia sí, pero muchas autoridades tributarias siguen exigiendo que el importe del IVA se muestre también, o pueda convertirse, en tu moneda local usando un tipo de cambio aprobado, a efectos de declaración.`,
      },
      {
        question: `¿Siempre hace falta el número de registro de IVA en la factura?`,
        answer: `En una factura con IVA completa, sí: tu propio número de IVA es obligatorio, y el del cliente también lo es en las ventas B2B. Las facturas simplificadas para transacciones más pequeñas tienen una lista más corta de campos obligatorios, pero normalmente se espera igualmente tu número de IVA.`,
      },
      {
        question: `¿Qué pasa si olvido cobrar el IVA cuando debía hacerlo?`,
        answer: `Por lo general, sigues siendo responsable del IVA que debió cobrarse, aunque no se haya desglosado en la factura original. La solución habitual es emitir una factura corregida o una complementaria por el importe de IVA que faltaba.`,
      },
    ],
    related: [
      `facturacion-multidivisa-internacional`,
      `facturacion-fiscal-pequenas-empresas`,
      `generacion-factura-pdf`,
    ],
  },
  {
    slug: `factura-recibo-u-orden-de-compra`,
    title: `Factura, recibo u orden de compra: qué documento enviar`,
    description: `Factura, cuenta, recibo, orden de compra y estado de cuenta cumplen funciones distintas. Una comparación clara de qué demuestra cada documento y cuándo enviarlo.`,
    category: `Conceptos básicos de facturación`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `En una venta corriente aparecen cinco documentos, y los clientes suelen pedir el equivocado. Cada uno demuestra algo distinto, y enviar el documento incorrecto es un motivo frecuente de que los pagos se estanquen.`,
    image: {
      src: `/images/guides/invoice-vs-receipt-vs-purchase-order.svg`,
      alt: `Orden de compra, nota de entrega, factura, recibo y estado de cuenta colocados a lo largo de la línea de tiempo de una venta`,
    },
    intro: [
      `Conceptos básicos de facturación · 7 min de lectura`,
      `En una venta corriente aparecen cinco documentos, y los clientes suelen pedir el equivocado. Cada uno demuestra algo distinto, y enviar el documento incorrecto es un motivo frecuente de que los pagos se estanquen.`,
      `![Orden de compra, nota de entrega, factura, recibo y estado de cuenta colocados a lo largo de la línea de tiempo de una venta](https://best-invoicegenerator.com/images/guides/invoice-vs-receipt-vs-purchase-order.svg)`,
      `«¿Puedes enviarme una factura de eso?» a veces es una petición de factura y otras veces es una petición de recibo, de factura proforma o de estado de cuenta. Acertar con el documento a la primera te ahorra una ronda de correos y, con los clientes más grandes, evita perder por completo un ciclo de pagos.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: un pedido de un cliente corporativo`,
      body: `- **14 de agosto:** el equipo de compras del cliente emite la orden de compra PO-88214 por 30 horas de consultoría a 120 la hora. - **15 de agosto – 5 de septiembre:** se entrega el trabajo. No se intercambia ningún documento. - **8 de septiembre:** emites la factura NS-2026-151 por 3,600, citando PO-88214 de forma destacada cerca de la parte superior, con una fecha de vencimiento indicada y una referencia de pago. - **22 de septiembre:** llega el pago. Envías un recibo breve que confirma la recepción de 3,600 por transferencia bancaria el 22 de septiembre, correspondiente a la factura NS-2026-151. - **30 de septiembre:** envías un estado de cuenta de fin de mes que muestra la factura, el pago y un saldo final de cero. Cada documento de esa cadena hace referencia al anterior. Esa cadena es lo que hace que una cuenta sea fácil de auditar y fácil de reclamar.`,
      rows: [],
    },
    diagram: {
      title: `Factura, recibo u orden de compra: qué documento enviar — flujo de decisión`,
      caption: undefined,
      steps: [
        `Los cinco documentos, en orden`,
        `Dónde encaja la «cuenta» (*bill*)`,
        `Los documentos que más se confunden`,
        `Una regla práctica`,
      ],
    },
    sections: [
      {
        heading: `Los cinco documentos, en orden`,
        paragraphs: [
          `La forma más sencilla de tenerlos claros es colocarlos en la línea de tiempo de una sola venta.`,
          `**1. Orden de compra: el comprador se compromete**`,
          `La crea el comprador, antes de que se entregue nada. Indica qué está pidiendo, a qué precio, en qué cantidad y, a menudo, con qué condiciones. Es la autorización del comprador para gastar y, una vez que la aceptas, normalmente pasa a formar parte del acuerdo entre ambos.`,
          `La consecuencia importante para un vendedor: si un cliente emite órdenes de compra, tu factura debe citar el número de la orden. Sin él, el sistema de cuentas por pagar del cliente no tiene nada con lo que cotejar tu factura, y esta quedará sin pagar por muy claras que sean tus condiciones de pago.`,
          `**2. Nota de entrega (albarán): llega la mercancía**`,
          `Acompaña a un envío físico y enumera lo que contiene la caja. Normalmente muestra cantidades pero no precios. Su función es permitir que quien recibe confirme que obtuvo lo que se pidió, y se convierte en la prueba en cualquier disputa posterior por una entrega incompleta.`,
          `**3. Factura: el vendedor solicita el pago**`,
          `La crea el vendedor, después de que se produzca el hecho de facturación acordado. Indica el importe adeudado, la fecha de vencimiento, cómo pagar y qué referencia utilizar. Crea una cuenta por cobrar en tu contabilidad y una cuenta por pagar en la del cliente.`,
          `**4. Recibo: se confirma el pago**`,
          `Lo crea el vendedor, después de haber recibido el dinero. Demuestra que el pago se hizo. La distinción importa: una factura demuestra que lo pediste; un recibo demuestra que te pagaron. Los clientes necesitan recibos para reclamar gastos, para las garantías y para su propia contabilidad.`,
          `**5. Estado de cuenta: se resume el periodo**`,
          `Es un resumen periódico de todo lo que hay en la cuenta de un cliente: facturas emitidas, créditos aplicados, pagos recibidos y saldo final. Es una herramienta de conciliación, no una exigencia de pago. Enviar un estado de cuenta en lugar de una factura es un error frecuente y costoso, porque la mayoría de los sistemas de cuentas por pagar no pagan contra un estado de cuenta.`,
        ],
      },
      {
        heading: `Dónde encaja la «cuenta» (*bill*)`,
        paragraphs: [
          `En inglés, *bill* e *invoice* describen el mismo documento visto desde extremos opuestos. Tú emites una factura; tu cliente la recibe y la registra como una cuenta por pagar. El software contable suele reflejarlo directamente, con «facturas emitidas» para el dinero que entra y «facturas recibidas» o «cuentas por pagar» para el que sale.`,
          `En el lenguaje cotidiano hay una distinción sutil: «la cuenta» (como en un restaurante o en un servicio básico) suele implicar un pago inmediato, mientras que una factura implica condiciones de pago y una fecha de vencimiento futura. No merece la pena discutir esa diferencia con un cliente. Si te piden la cuenta, envía tu factura.`,
        ],
      },
      {
        heading: `Los documentos que más se confunden`,
        paragraphs: [
          `**Factura frente a factura proforma:**`,
          `Una factura proforma se parece a una factura, pero se emite antes del hecho de facturación y no genera una cuenta por cobrar. Se usa para anticipos, aprobaciones internas y trámites aduaneros. Si has estado enviando facturas reales para que los clientes puedan emitir órdenes de compra, deberías estar enviando facturas proforma.`,
          `**Factura frente a presupuesto:**`,
          `Un presupuesto es una oferta que el cliente puede aceptar o rechazar. Una factura es una solicitud de pago por un trabajo cuyo hecho de facturación ya se ha producido. Enviar una factura cuando el cliente esperaba un presupuesto parece presuntuoso y, a menudo, daña más la relación que el propio error de facturación.`,
          `**Recibo frente a factura pagada:**`,
          `Marcar una factura como PAGADA, con la fecha y el método de cobro, suele funcionar como recibo para los clientes empresariales. Los consumidores y algunos procesos de reclamación de gastos exigen a veces un documento de recibo independiente. Ante la duda, enviar un recibo breve por separado no cuesta nada.`,
        ],
      },
      {
        heading: `Una regla práctica`,
        paragraphs: [
          `Antes de enviar nada, pregúntate qué necesita hacer el destinatario con ello. ¿Aprobar un gasto? Orden de compra. ¿Liberar un pago? Factura con referencia a la orden de compra. ¿Reclamar un gasto? Recibo. ¿Conciliar un trimestre? Estado de cuenta. ¿Decidir si te contrata? Presupuesto. El documento se deduce de la acción, y no al revés.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿«La cuenta» es lo mismo que una factura?`,
        answer: `Suelen ser el mismo documento visto desde lados distintos. El vendedor envía una factura; el comprador la recibe y la trata como una cuenta por pagar. En el uso cotidiano, «la cuenta» también tiende a describir importes que se deben al momento, como la cuenta de un restaurante, mientras que la factura implica condiciones de crédito y una fecha de vencimiento futura. Si un cliente te pide la cuenta, envía tu factura estándar.`,
      },
      {
        question: `¿Una factura puede servir también como recibo?`,
        answer: `Solo si está claramente marcada como pagada, con la fecha de pago, el importe recibido y el método. Una factura por sí sola demuestra que se solicitó un importe, no que se pagara. Muchos negocios emiten un recibo aparte o simplemente sellan la factura como PAGADA con la fecha, algo que por lo general basta para un cliente que necesita un comprobante de pago para sus propios registros.`,
      },
      {
        question: `¿Quién crea una orden de compra, el comprador o el vendedor?`,
        answer: `El comprador. Una orden de compra es la instrucción formal del comprador para adquirir bienes o servicios concretos a un precio acordado. Después, el vendedor entrega contra ella y factura haciendo referencia al número de la orden. Si un cliente te envía una orden de compra, citar su número en tu factura suele ser lo más eficaz que puedes hacer para cobrar a tiempo.`,
      },
      {
        question: `¿Qué es un estado de cuenta?`,
        answer: `Un estado de cuenta resume toda la actividad de la cuenta de un cliente durante un periodo: facturas emitidas, créditos aplicados, pagos recibidos y saldo final. Por sí solo no es una solicitud de pago y nunca debe usarse en lugar de una factura. Los estados de cuenta son más útiles para clientes con varias facturas abiertas que necesitan una vista única de lo pendiente.`,
      },
      {
        question: `¿Necesito emitir un recibo si el cliente ya tiene la factura?`,
        answer: `No siempre, pero es una buena práctica y algunos clientes lo exigen. Los consumidores, en particular, suelen necesitar un recibo para reclamaciones de garantía o reembolsos de gastos. A los clientes empresariales puede bastarles el registro bancario junto con la factura original. Los requisitos difieren según el país y el sector, así que confirma qué se aplica a tu negocio.`,
      },
    ],
    related: [
      `presupuesto-vs-factura`,
      `factura-proforma`,
      `orden-de-compra-y-conciliacion-de-tres-vias`,
    ],
  },
  {
    slug: `orden-de-compra-y-conciliacion-de-tres-vias`,
    title: `Números de orden de compra y conciliación de tres vías: cómo cobrar a clientes grandes`,
    description: `Por qué las grandes empresas rechazan facturas, cómo funciona la conciliación de tres vías y qué campos debes cuidar para que tu factura pase cuentas por pagar a la primera.`,
    category: `Facturación a clientes`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cuando una gran empresa te paga tarde, casi nunca es una decisión. Es una factura atascada en una cola de excepciones porque un campo no coincidía. Entender cómo funciona cuentas por pagar elimina la mayoría de esos retrasos.`,
    image: {
      src: `/images/guides/purchase-order-invoice-matching.svg`,
      alt: `Una orden de compra, una entrada de mercancía y una factura comparadas línea por línea`,
    },
    intro: [
      `Facturación a clientes · 7 min de lectura`,
      `Cuando una gran empresa te paga tarde, casi nunca es una decisión. Es una factura atascada en una cola de excepciones porque un campo no coincidía. Entender cómo funciona cuentas por pagar elimina la mayoría de esos retrasos.`,
      `![Una orden de compra, una entrada de mercancía y una factura comparadas línea por línea](https://best-invoicegenerator.com/images/guides/purchase-order-invoice-matching.svg)`,
      `Las pequeñas empresas pagan las facturas leyéndolas. Las grandes empresas las pagan cotejándolas. Esa diferencia explica por qué la misma factura que un estudio de diez personas paga en tres días puede pasar siete semanas parada en un cliente corporativo, con respuestas amables y sin que el dinero se mueva.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: una factura que se habría atascado`,
      body: `Un fabricante contrata a un profesional independiente para un proyecto de dos fases. Se crea la orden de compra 4500219883 con dos líneas: «Fase 1 — evaluación del sitio, 1 ud., 4,000» y «Fase 2 — apoyo a la implementación, 1 ud., 11,000». 1. **La factura que se atasca:** una sola línea que dice «Servicios profesionales — septiembre» por 15,000, dirigida al grupo matriz, con el número de orden de compra únicamente en el asunto del correo. 2. **La factura que se aprueba:** dirigida a la razón social exacta de la entidad contratante; la orden de compra 4500219883 en un campo rotulado en la parte superior; dos líneas que coinciden exactamente con la redacción y los importes de la orden; una nota que confirma que la Fase 1 fue aceptada el 12 de septiembre; y enviada al buzón de cuentas por pagar con el número de la orden en el nombre del archivo. 3. **Mismo trabajo, mismo total.** Una entra en un lote de pagos; la otra entra en una cola.`,
      rows: [],
    },
    diagram: {
      title: `Números de orden de compra y conciliación de tres vías: cómo cobrar a clientes grandes — flujo de decisión`,
      caption: undefined,
      steps: [
        `Cómo procesa realmente tu factura el departamento de cuentas por pagar`,
        `Los campos que provocan rechazos`,
        `Qué hacer antes de que empiece el trabajo`,
        `Cuando una factura queda retenida de todos modos`,
      ],
    },
    sections: [
      {
        heading: `Cómo procesa realmente tu factura el departamento de cuentas por pagar`,
        paragraphs: [
          `En cualquier organización que supere cierto tamaño, tu factura no la lee primero una persona. Se escanea o se ingiere, se extraen sus campos y el sistema intenta cotejarla con un compromiso aprobado. Solo si el cotejo falla interviene una persona, y esa persona está trabajando con una cola que incluye también los cotejos fallidos de todos los demás.`,
          `El cotejo suele ser una conciliación de tres vías (*three-way matching*):`,
          `- **La orden de compra:** lo que el comprador autorizó, a qué precio y en qué cantidad.`,
          `- **La recepción:** una nota de recepción de mercancía o una confirmación del servicio, que registra lo que realmente llegó o fue aceptado.`,
          `- **La factura:** lo que tú estás cobrando.`,
          `Si los tres documentos coinciden dentro de la tolerancia, la factura se aprueba para el siguiente lote de pagos sin que nadie la toque. Si discrepan, aunque sea por poco, la factura queda retenida.`,
          `Algunas organizaciones usan una conciliación de dos vías para los servicios, comparando solo la orden de compra y la factura. La implicación práctica para ti es la misma: la orden de compra es el ancla.`,
        ],
      },
      {
        heading: `Los campos que provocan rechazos`,
        paragraphs: [
          `Casi todos los fallos de cotejo provienen de uno de estos motivos:`,
          `- **Número de orden de compra ausente o incorrecto.** Es la causa más común. Los errores tipográficos importan: puede que PO-88214 y PO88214 no se traten como equivalentes.`,
          `- **Entidad legal equivocada.** Los clientes globales suelen tener decenas de entidades registradas. Facturar a «Acme Group» cuando la orden la emitió «Acme Services Ltd» hace fallar el cotejo.`,
          `- **El total de la factura supera el saldo de la orden de compra.** Incluso por una diferencia de redondeo.`,
          `- **Líneas que no se corresponden.** Si la orden tiene tres líneas y tu factura tiene una sola línea resumen, el sistema no puede conciliarlas.`,
          `- **Falta la recepción.** Tu trabajo se entregó, pero nadie del lado del cliente lo confirmó en su sistema. Tu factura es correcta y, aun así, no se puede pagar.`,
          `- **Enviada a la dirección equivocada.** Las facturas enviadas por correo a tu contacto del día a día, en lugar de al buzón de cuentas por pagar, muchas veces ni siquiera llegan a entrar en el sistema.`,
          `- **Formato de archivo no compatible.** Algunos portales rechazan imágenes escaneadas, PDF protegidos con contraseña o facturas incrustadas en el cuerpo de un correo.`,
        ],
      },
      {
        heading: `Qué hacer antes de que empiece el trabajo`,
        paragraphs: [
          `Casi todo esto se puede prevenir en la fase de incorporación. Cuando aceptes a un cliente lo bastante grande como para tener una función de cuentas por pagar, hazle cuatro preguntas:`,
          `- ¿Con qué entidad legal estoy contratando y cuál es su razón social y dirección exactas?`,
          `- ¿Se emitirá una orden de compra y cuándo recibiré el número?`,
          `- ¿Adónde van las facturas: un correo de cuentas por pagar, un portal de proveedores o una red de facturación electrónica?`,
          `- ¿Cuáles son las fechas de los lotes de pago y cuál es la fecha de corte para que una factura se incluya?`,
          `Esta última pregunta es la que la mayoría de los proveedores nunca hace, y con frecuencia marca la diferencia entre 14 y 45 días. Si un cliente ejecuta los pagos el día 25 con un plazo de aprobación de 10 días, una factura enviada el día 20 no se pagará hasta el mes siguiente, sin importar lo que digan tus condiciones.`,
        ],
      },
      {
        heading: `Cuando una factura queda retenida de todos modos`,
        paragraphs: [
          `Persigue el bloqueo, no el saldo. Preguntar «¿puedes revisar en qué punto de vuestro proceso está la factura NS-2026-151 contra la orden de compra 4500219883?» obtiene una respuesta útil. Preguntar «¿cuándo me van a pagar?» suele obtener un correo reenviado.`,
          `Los dos bloqueos más comunes tienen soluciones específicas:`,
          `- **Falta la recepción.** Pídele a tu contacto del proyecto (no a cuentas por pagar) que confirme la recepción en su sistema. Cuentas por pagar no puede hacerlo por él.`,
          `- **Diferencia de precio o de cantidad.** Pregunta qué línea y por cuánto. Después, acredita la diferencia o solicita una modificación de la orden de compra, según quién tenga la razón.`,
          `Mantén informado a tu contacto del día a día, pero dirige las preguntas sobre el proceso a cuentas por pagar. Confundir los dos roles ralentiza las cosas para todos.`,
        ],
      },
      {
        heading: `El principio de fondo`,
        paragraphs: [
          `Tu factura tiene que poder ser verificada por alguien que no participó en el trabajo. Un número de orden de compra es simplemente la forma más limpia de conseguirlo. Cuando un cliente no tiene un sistema de órdenes de compra, aporta el equivalente: la referencia de un presupuesto firmado, un número de contrato o el nombre y la fecha de la aprobación. Cuanto más fácil sea confirmar que tu factura es legítima, más rápido avanzará.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué pasa si olvido el número de orden de compra en una factura?`,
        answer: `En la mayoría de los sistemas de cuentas por pagar, la factura no se puede cotejar, así que va a una cola de excepciones en lugar de al lote de pagos. Nadie se niega a pagarte: la factura simplemente no tiene adónde ir. Algunos sistemas la rechazan automáticamente y te envían un correo; otros la retienen en silencio. Vuelve a enviar una factura corregida con el número de orden de compra en lugar de pedir que lo añadan manualmente.`,
      },
      {
        question: `¿Qué es la conciliación de tres vías?`,
        answer: `Es un control en el que el comprador coteja tres documentos entre sí antes de pagar: la orden de compra (lo que se pidió), la recepción de mercancía o la confirmación del servicio (lo que realmente se recibió) y tu factura (lo que se está cobrando). Si las cantidades y los precios coinciden en los tres, el pago se libera automáticamente. Si alguno discrepa, la factura se retiene para revisión humana.`,
      },
      {
        question: `¿Puedo facturar por más del importe de la orden de compra?`,
        answer: `No sin que antes se modifique la orden. Facturar por encima del valor de la orden hará fallar el cotejo y se estancará, aunque el trabajo adicional se haya pedido de verdad y se haya aprobado de palabra. Pide a tu contacto que emita una modificación de la orden o una segunda orden que cubra el alcance adicional y factura después contra la cifra actualizada.`,
      },
      {
        question: `¿Debo enviar una factura por cada orden de compra?`,
        answer: `Sí, como norma general. Combinar varias órdenes en una sola factura obliga al cliente a dividirla manualmente y es una causa frecuente de retrasos. Una factura por orden, con las líneas en el mismo orden y con la misma redacción que en la orden, es la disposición que la mayoría de los sistemas gestionan sin intervención.`,
      },
      {
        question: `Mi cliente no usa órdenes de compra. ¿Me afecta algo de esto?`,
        answer: `El principio sigue aplicándose: dale a quien paga una referencia que conecte tu factura con algo que ya aprobó. Puede ser el número de un presupuesto firmado, una referencia de contrato, un código de proyecto o el nombre de la persona que autorizó el trabajo. El objetivo es que quien abra tu factura pueda verificarla sin tener que preguntarle a nadie.`,
      },
    ],
    related: [
      `factura-recibo-u-orden-de-compra`,
      `condiciones-de-pago`,
      `facturacion-agencia-subcontratistas`,
    ],
  },
  {
    slug: `facturacion-electronica-formatos-y-cumplimiento`,
    title: `La facturación electrónica explicada: formatos estructurados, PDF y cumplimiento`,
    description: `Un PDF no es una factura electrónica. Comprende los formatos de factura estructurados, redes como Peppol y qué cambia cuando un cliente o un país exige la facturación electrónica.`,
    category: `Estándares de documentos`,
    readingTime: `8 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Enviar un PDF por correo no es facturación electrónica. Entender la diferencia importa a medida que más clientes y más autoridades fiscales pasan a datos de factura estructurados.`,
    image: {
      src: `/images/guides/e-invoicing-formats-compliance.svg`,
      alt: `Una factura en PDF legible por personas junto a una factura XML estructurada que consume un sistema`,
    },
    intro: [
      `Estándares de documentos · 8 min de lectura`,
      `Enviar un PDF por correo no es facturación electrónica. Entender la diferencia importa a medida que más clientes y más autoridades fiscales pasan a datos de factura estructurados.`,
      `![Una factura en PDF legible por personas junto a una factura XML estructurada que consume un sistema](https://best-invoicegenerator.com/images/guides/e-invoicing-formats-compliance.svg)`,
      `La mayoría de las pequeñas empresas ya facturan de forma electrónica en el sentido cotidiano: crean un PDF y lo envían por correo. Cuando un cliente o un gobierno habla de «facturación electrónica», suele referirse a algo bastante distinto, y la distancia entre ambas cosas es donde se producen la confusión y el pánico de última hora.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `La facturación electrónica explicada: formatos estructurados, PDF y cumplimiento en la práctica`,
      body: `Enviar un PDF por correo no es facturación electrónica. Entender la diferencia importa a medida que más clientes y más autoridades fiscales pasan a datos de factura estructurados. | Campo | Contenido | |---|---| | Requisito | Cumplimiento y documentación claros | | Acción | Seguir las normas contables habituales y confirmarlo con el cliente |`,
      rows: [],
    },
    diagram: {
      title: `La facturación electrónica explicada: formatos estructurados, PDF y cumplimiento — flujo de decisión`,
      caption: undefined,
      steps: [
        `La distinción clave: legible frente a estructurado`,
        `Los formatos de los que oirás hablar`,
        `Validación previa o control posterior: dos modelos regulatorios`,
        `Qué cambia en la práctica`,
      ],
    },
    sections: [
      {
        heading: `La distinción clave: legible frente a estructurado`,
        paragraphs: [
          `Una factura en PDF está pensada para una persona. El diseño es lo que aporta el significado: sabes que 1,240.00 es el total por el lugar que ocupa en la página y por la palabra que tiene encima. Una máquina que lee ese PDF tiene que deducir lo mismo, y por eso las herramientas de captura automática se equivocan con la frecuencia suficiente como para que una persona deba revisar las excepciones.`,
          `Una factura electrónica estructurada elimina las conjeturas. La misma factura se expresa como datos etiquetados: un campo rotulado explícitamente como el total, otro como el importe del impuesto, otro como el número de registro del proveedor. El sistema receptor lo lee con exactitud, siempre, sin ninguna interpretación del diseño.`,
          `Conviene distinguir tres categorías:`,
          `- **Papel o imagen escaneada.** Sin ningún contenido legible por máquina. Requiere OCR o captura manual.`,
          `- **PDF enviado por correo.** Entrega electrónica de un documento legible por personas. Es cómodo y lo aceptan universalmente los clientes pequeños, pero no son datos estructurados.`,
          `- **Factura electrónica estructurada.** Datos legibles por máquina, normalmente en XML, que se intercambian a través de una red o un portal. Es lo que las normativas entienden por facturación electrónica.`,
        ],
      },
      {
        heading: `Los formatos de los que oirás hablar`,
        paragraphs: [
          `**UBL y CII:**`,
          `Dos sintaxis XML muy extendidas para documentos comerciales. La mayoría de las especificaciones de factura nacionales y de red se construyen sobre una de ellas en lugar de inventar algo nuevo.`,
          `**La norma europea de facturación electrónica:**`,
          `Un modelo semántico común que define lo que debe contener una factura (proveedor, comprador, líneas, desglose de impuestos, datos de pago) para que distintos países puedan implementar versiones compatibles en lugar de sistemas totalmente independientes.`,
          `**Peppol:**`,
          `Más que un formato, es una red de entrega con especificaciones de documentos acordadas por encima. Te conectas una sola vez a través de un proveedor de punto de acceso y a partir de ahí puedes intercambiar documentos con cualquier otro participante. Es una columna vertebral habitual de la contratación del sector público y de varios sistemas nacionales.`,
          `**Factur-X y ZUGFeRD:**`,
          `Formatos híbridos. Un único archivo PDF que una persona puede abrir con normalidad, con XML estructurado incrustado en su interior para las máquinas. Resultan prácticos cuando tu cartera de clientes es mixta.`,
          `**Sistemas específicos de cada país:**`,
          `Varios países operan sus propias plataformas, y algunos exigen que las facturas se validen o se comuniquen a una autoridad tributaria antes de su emisión o poco después. Los nombres, los umbrales y los plazos varían y cambian, por lo que aquí no se enumeran: consulta cuál es la situación actual en tu país.`,
        ],
      },
      {
        heading: `Validación previa o control posterior: dos modelos regulatorios`,
        paragraphs: [
          `En líneas generales, las administraciones tributarias adoptan uno de estos dos enfoques.`,
          `- **Control posterior (*post-audit*).** Tú emites las facturas por tu cuenta y conservas los registros. La autoridad puede examinarlos más adelante. Es el modelo tradicional en muchos países.`,
          `- **Validación previa o reporte continuo (*clearance*).** Los datos de la factura se envían a una plataforma gubernamental, o pasan por ella, en el momento de la emisión o muy cerca de él. Es posible que la factura no sea válida hasta que haya sido procesada.`,
          `En muchas jurisdicciones, la tendencia ha ido del primer modelo hacia el segundo, pero los calendarios cambian y el alcance varía según el tamaño de la empresa y el tipo de operación. Considera cualquier fecha concreta que leas en cualquier sitio, incluido este, como algo que debes verificar.`,
        ],
      },
      {
        heading: `Qué cambia en la práctica`,
        paragraphs: [
          `Si pasas a la facturación estructurada, varios hábitos tienen que volverse más estrictos:`,
          `- **Los datos del cliente deben ser exactos.** Las razones sociales, las direcciones, los identificadores fiscales y los identificadores de red se validan. Lo aproximado se rechaza.`,
          `- **Los códigos sustituyen al texto libre.** Las unidades de medida, las categorías de impuestos y los medios de pago suelen tener que usar listas de códigos prescritas en lugar de tu propia redacción.`,
          `- **Los campos obligatorios pasan a serlo de verdad.** Una omisión que un cliente humano habría pasado por alto hará fallar la validación.`,
          `- **Las correcciones siguen un camino definido.** Notas de crédito estructuradas que hacen referencia a la factura original, no un reenvío editado.`,
          `- **Pueden aplicarse requisitos de archivo al archivo estructurado,** y no solo a la versión legible.`,
        ],
      },
      {
        heading: `Qué significa esto si facturas a clientes pequeños`,
        paragraphs: [
          `Para un profesional independiente que factura a negocios locales y a consumidores, es probable que un PDF bien estructurado, con campos completos y exactos, siga siendo viable durante bastante tiempo, y además es la mejor preparación posible. Cada campo que ya registras correctamente es un campo que no tendrás que reconstruir más adelante.`,
          `El error que hay que evitar es suponer que, como la facturación electrónica suena a infraestructura empresarial, nunca te llegará a ti. El primer paso práctico no es comprar software: es asegurarte de que los datos de tus facturas sean lo bastante exactos y coherentes como para ser legibles por máquina si alguna vez hace falta.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Una factura en PDF es una factura electrónica?`,
        answer: `Normalmente no, en el sentido normativo. Un PDF es una imagen de una factura pensada para que la lea una persona. Una factura electrónica son datos estructurados pensados para que los lea una máquina, normalmente XML, de modo que el sistema receptor pueda extraer cada campo sin adivinar. Enviar un PDF por correo es entrega electrónica, no facturación electrónica. Algunos formatos híbridos incrustan datos estructurados dentro de un PDF y sí cumplen los requisitos.`,
      },
      {
        question: `¿Qué es Peppol?`,
        answer: `Peppol es una red y un conjunto de especificaciones que permite a las empresas intercambiar facturas estructuradas y otros documentos de compras entre países sin construir una conexión directa con cada socio comercial. Te conectas una sola vez a través de un proveedor de punto de acceso y esa conexión llega a todos los demás miembros de la red. Se utiliza ampliamente en la contratación del sector público y en varios sistemas nacionales de facturación electrónica.`,
      },
      {
        question: `¿Necesito facturación electrónica si soy profesional independiente o tengo una empresa pequeña?`,
        answer: `Depende por completo de dónde estéis tú y tus clientes y de a quién vendas. Los compradores del sector público de muchos países ya la exigen, y un número creciente de autoridades tributarias está extendiendo los requisitos a las operaciones entre empresas. Los requisitos y las fechas cambian con frecuencia, así que consulta la situación actual de tu país y tu sector en lugar de fiarte de una guía general.`,
      },
      {
        question: `¿Qué es un formato de factura híbrido?`,
        answer: `Un formato híbrido empaqueta ambas versiones en un solo archivo: un PDF normal que una persona puede abrir y leer, con datos XML estructurados incrustados que una máquina puede extraer. Factur-X y ZUGFeRD son ejemplos conocidos. Son populares porque un único archivo sirve tanto para un cliente grande con procesamiento automatizado como para un cliente pequeño que solo quiere verlo.`,
      },
      {
        question: `¿Puedo seguir enviando facturas en PDF?`,
        answer: `Para muchas empresas y muchos clientes, sí, y un PDF bien hecho sigue siendo el formato más práctico para gran parte de la facturación. Lo que hay que vigilar es si un cliente concreto o una jurisdicción concreta exigen facturación estructurada para tus operaciones. Es una cuestión con respuesta local, así que confírmalo para tu situación antes de dar nada por sentado en un sentido o en otro.`,
      },
    ],
    related: [
      `generacion-factura-pdf`,
      `facturacion-multidivisa-internacional`,
      `registros-de-facturas-conservacion-y-auditoria`,
    ],
  },
  {
    slug: `metodos-de-pago-y-comisiones-en-facturas`,
    title: `Métodos de pago y comisiones en las facturas: cómo permitir que tus clientes te paguen`,
    description: `¿Transferencia bancaria, tarjeta, débito directo o monedero digital? Compara velocidad, costo y riesgo de disputa, y aprende a presentar las opciones de pago en una factura.`,
    category: `Cobros`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `El método de pago que indicas en una factura influye en lo rápido que cobras, en cuánto del importe te queda y en lo expuesto que estás a devoluciones meses después. Merece más atención de la que suele recibir.`,
    image: {
      src: `/images/guides/invoice-payment-methods-fees.svg`,
      alt: `Métodos de pago representados según su velocidad, costo y riesgo de reversión`,
    },
    intro: [
      `Cobros · 7 min de lectura`,
      `El método de pago que indicas en una factura influye en lo rápido que cobras, en cuánto del importe te queda y en lo expuesto que estás a devoluciones meses después. Merece más atención de la que suele recibir.`,
      `![Métodos de pago representados según su velocidad, costo y riesgo de reversión](https://best-invoicegenerator.com/images/guides/invoice-payment-methods-fees.svg)`,
      `La mayoría de la gente elige un método de pago una sola vez, al principio, y no vuelve a revisarlo. Eso está bien hasta que cambia la mezcla de trabajos (facturas más grandes, clientes internacionales, igualas recurrentes) y el método que resultaba cómodo con facturas de 400 empieza a costar dinero de verdad con facturas de 8,000.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: ajustar la combinación de métodos`,
      body: `Un consultor factura aproximadamente 6,000 al mes en una mezcla de trabajos y acepta pagos con tarjeta para todo porque es sencillo. 1. **Facturas de menos de 1,000:** enlace de pago con tarjeta como opción predeterminada. La rapidez vale más que la comisión. 2. **Facturas de más de 1,000:** transferencia bancaria como opción predeterminada, con la tarjeta disponible si se solicita. 3. **Las dos igualas mensuales:** pasadas a débito directo, lo que además elimina la necesidad de estar reclamando el pago.`,
      rows: [],
    },
    diagram: {
      title: `Métodos de pago y comisiones en las facturas: cómo permitir que tus clientes te paguen — flujo de decisión`,
      caption: undefined,
      steps: [
        `Tres cosas que sopesar, no una`,
        `Las principales opciones`,
        `Cómo presentar los datos de pago en la factura`,
        `La moneda, no solo el método`,
      ],
    },
    sections: [
      {
        heading: `Tres cosas que sopesar, no una`,
        paragraphs: [
          `El costo es el factor obvio y rara vez el más importante. Compara los métodos según tres ejes:`,
          `- **Costo:** el porcentaje y la comisión fija, más cualquier diferencial de conversión de divisas, que en los pagos internacionales suele ser el costo oculto más grande.`,
          `- **Rapidez y fricción:** cuántos pasos hay entre que el cliente decide pagar y que el dinero llega. Un método gratuito pero que obliga al cliente a iniciar sesión, volver a teclear tus datos y obtener una segunda aprobación no es barato si añade dos semanas.`,
          `- **Riesgo de reversión:** durante cuánto tiempo se puede reclamar el dinero una vez que ha llegado. Los pagos con tarjeta conllevan exposición a contracargos durante un periodo prolongado; una transferencia bancaria ya liquidada, por lo general, no.`,
        ],
      },
      {
        heading: `Las principales opciones`,
        paragraphs: [
          `**Transferencia bancaria:**`,
          `Bajo costo, sin porcentaje y esencialmente irreversible una vez liquidada. Los inconvenientes son la fricción y la conciliación: el cliente tiene que iniciarla y los pagos llegan sin contexto a menos que use tu referencia. La transferencia nacional es la opción predeterminada para la mayor parte de la facturación B2B en la mayoría de los mercados.`,
          `*Ideal para:* clientes empresariales, facturas grandes y cualquier caso en que el porcentaje de comisión pique.`,
          `**Pagos con tarjeta:**`,
          `Rápidos y sin fricción, sobre todo con un enlace de pago en la factura. Pagas un porcentaje más una comisión fija y asumes el riesgo de contracargos. En las facturas pequeñas, la comodidad suele justificar el costo sin más.`,
          `*Ideal para:* consumidores, facturas pequeñas, clientes que pagan con una tarjeta corporativa y situaciones en que la rapidez importa más que el margen.`,
          `**Débito directo y mandatos de cuenta a cuenta:**`,
          `El cliente te autoriza a cobrar según un calendario acordado. Bajo costo y muy fiable para el trabajo recurrente, porque el cobro deja de depender de que alguien se acuerde. La configuración tarda más y requiere el consentimiento activo del cliente.`,
          `*Ideal para:* igualas, suscripciones y cualquier facturación repetida y predecible.`,
          `**Sistemas de pago inmediato nacionales:**`,
          `Muchos mercados cuentan ya con sistemas en tiempo real (esquemas de transferencia instantánea, redes de tipo UPI, funciones de solicitud de pago) que combinan un costo casi nulo con una rapidez similar a la de la tarjeta. La disponibilidad varía enormemente de un país a otro, así que comprueba qué es lo habitual donde están tus clientes.`,
          `*Ideal para:* clientes nacionales en mercados donde el sistema está muy extendido.`,
          `**Plataformas de pago y monederos digitales:**`,
          `Cómodos y familiares, sobre todo para clientes internacionales o consumidores. Los costos suelen ser más altos que los de una transferencia bancaria y los márgenes de conversión de divisas pueden ser considerables. Algunos también retienen fondos o congelan cuentas durante una revisión, lo que es un riesgo operativo real si es tu único canal.`,
          `*Ideal para:* pagos internacionales pequeños y clientes que no operan de ninguna otra forma.`,
          `**Cheques y efectivo:**`,
          `Todavía presentes en algunos mercados y sectores. Lentos, manuales y difíciles de conciliar. Solo vale la pena aceptarlos si un cliente realmente no puede pagar de otra manera.`,
        ],
      },
      {
        heading: `Cómo presentar los datos de pago en la factura`,
        paragraphs: [
          `La forma de mostrar las opciones importa tanto como cuáles ofreces.`,
          `- **Encabeza con un método preferido.** Dale todos los datos y prominencia visual. Enumera como máximo una alternativa.`,
          `- **Haz que la referencia sea imposible de pasar por alto.** «Utiliza NS-2026-151 como referencia de pago» evita que lleguen a tu cuenta pagos sin identificar, sin ninguna indicación de quién los envió.`,
          `- **Incluye todo lo necesario en un solo lugar.** Nombre de la cuenta, identificadores de la cuenta, nombre del banco y, para los pagos internacionales, los códigos que pedirá el banco emisor.`,
          `- **Indica quién paga los cargos transfronterizos.** Las transferencias internacionales pueden llegar con un importe menor si se deducen comisiones de bancos intermediarios. Di de forma explícita que el cliente cubre los gastos de la transferencia para que llegue el importe completo de la factura.`,
          `- **Añade un enlace de pago si aceptas tarjetas.** Eliminar el paso de teclear los datos resulta eficaz de forma medible.`,
          `- **Mantén los datos idénticos en todas las facturas.** La coherencia es lo que hace que destaque un cambio fraudulento.`,
        ],
      },
      {
        heading: `La moneda, no solo el método`,
        paragraphs: [
          `En las facturas internacionales, el diferencial de conversión suele costar más que la comisión de la transacción. Dos hábitos ayudan: indica con claridad en qué moneda se debe pagar la factura y plantéate tener una cuenta en la moneda de tu cliente si facturas con regularidad al mismo mercado. Convertir una sola vez en tus propios términos suele salir mejor que convertir en cada pago al tipo de cambio de otro.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Puedo trasladar a mi cliente las comisiones de procesamiento de tarjetas?`,
        answer: `A veces. El recargo por el uso de tarjetas está restringido o prohibido en varios países y también puede estar limitado por el contrato con tu red de tarjetas. Donde se permite, el recargo suele tener que comunicarse antes del pago y no puede superar tu costo real. Una alternativa habitual es ofrecer un pequeño descuento por pagar con transferencia bancaria, que logra un resultado parecido sin las mismas restricciones. Comprueba qué se aplica en tu país.`,
      },
      {
        question: `¿Cuál es la forma más barata de cobrar?`,
        answer: `Una transferencia bancaria nacional suele ser la más barata, a menudo gratuita o casi, porque ningún intermediario se lleva un porcentaje. La contrapartida es que el cliente tiene que iniciarla manualmente, lo que puede traducirse en un pago más lento. Para el trabajo recurrente, el débito directo suele ofrecer un costo bajo con la fiabilidad del cobro automático.`,
      },
      {
        question: `¿Debo aceptar tarjetas de crédito en facturas grandes?`,
        answer: `Sopesa el costo porcentual frente al beneficio de la rapidez. En una factura pequeña, la comisión de la tarjeta es un error de redondeo y la comodidad suele hacer que cobres el mismo día. En una factura grande, el mismo porcentaje puede ser una cantidad significativa, y además las tarjetas conllevan exposición a contracargos durante meses. Muchos negocios aceptan tarjetas por debajo de un umbral y transferencia bancaria por encima.`,
      },
      {
        question: `¿Cuántas opciones de pago debo ofrecer?`,
        answer: `Dos suele ser lo adecuado: una predeterminada que sirva a la mayoría de los clientes y una alternativa. Enumerar cinco opciones hace que la factura sea más difícil de leer y no aumenta la probabilidad de cobrar. Presenta primero tu método preferido con todos los datos y menciona la alternativa en una sola línea.`,
      },
      {
        question: `¿Es seguro poner mis datos bancarios en una factura?`,
        answer: `Los datos de una cuenta bancaria para recibir pagos se comparten habitualmente en las facturas y, por sí solos, se consideran en general de bajo riesgo. El riesgo real es la suplantación: los delincuentes interceptan o falsifican facturas y sustituyen los datos por los de su propia cuenta. Mantén tus datos coherentes en todas las facturas, no anuncies nunca un cambio solo por correo electrónico e indica a tus clientes desde el principio que verifiquen por teléfono cualquier cambio aparente.`,
      },
    ],
    related: [
      `condiciones-de-pago`,
      `fraude-con-facturas`,
      `facturacion-multidivisa-internacional`,
    ],
  },
  {
    slug: `descuentos-por-pronto-pago-y-recargos-por-mora`,
    title: `Descuentos por pronto pago y recargos por mora: cómo fijar el precio de tus condiciones`,
    description: `Cuánto cuestan realmente los descuentos 2/10 neto 30, cuándo funcionan los recargos por mora y cómo incluir incentivos en las condiciones de pago sin dañar la relación con tus clientes.`,
    category: `Cobros`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Un descuento por pagar antes y un recargo por pagar tarde son las dos palancas que puedes fijar antes de enviar una factura. Ambas suelen usarse mal: una cuesta más de lo que parece y la otra a menudo no se aplica.`,
    image: {
      src: `/images/guides/early-payment-discounts-late-fees.svg`,
      alt: `Una línea de tiempo de factura con la ventana del descuento por pronto pago y el umbral del recargo por mora`,
    },
    intro: [
      `Cobros · 7 min de lectura`,
      `Un descuento por pagar antes y un recargo por pagar tarde son las dos palancas que puedes fijar antes de enviar una factura. Ambas suelen usarse mal: una cuesta más de lo que parece y la otra a menudo no se aplica.`,
      `![Una línea de tiempo de factura con la ventana del descuento por pronto pago y el umbral del recargo por mora](https://best-invoicegenerator.com/images/guides/early-payment-discounts-late-fees.svg)`,
      `Perseguir una factura vencida es un trabajo que haces una vez pasados los hechos. Las condiciones son el trabajo que haces por adelantado. Fijarlas bien no elimina los pagos tardíos, pero cambia el lugar que ocupa tu factura en la cola del cliente, que suele ser la única variable que realmente importa.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: dos clientes, dos enfoques`,
      body: `El cliente A es un pequeño estudio que paga a los pocos días de recibir una factura. No necesita un incentivo. Condiciones: neto 14, cláusula de recargo por mora en el contrato, que nunca se aplica. Ofrecerle un descuento solo te costaría dinero a cambio de un comportamiento que ya obtienes. El cliente B es un gran fabricante que paga en un lote mensual, de forma constante hacia el día 45 pese a tener condiciones de neto 30. Un recargo por mora no cambiará un ciclo de pagos programado. Aquí, las opciones que funcionan son negociar una fecha límite de presentación más temprana para que la factura entre en el lote vigente, u ofrecer un descuento específico para sacar el pago del ciclo normal. Compara el costo del descuento con el costo de financiar el desfase y decide con números. La lección es que las mismas condiciones sirven mal a estos dos clientes. Los incentivos deben ajustarse al motivo por el que un cliente es lento, no aplicarse de manera uniforme.`,
      rows: [],
    },
    diagram: {
      title: `Descuentos por pronto pago y recargos por mora: cómo fijar el precio de tus condiciones — flujo de decisión`,
      caption: undefined,
      steps: [
        `Descuentos por pronto pago: efectivo más barato, pero con un precio`,
        `Recargos por mora: primero una señal, después ingresos`,
        `Qué hacer antes de recurrir a cualquiera de las dos palancas`,
      ],
    },
    sections: [
      {
        heading: `Descuentos por pronto pago: efectivo más barato, pero con un precio`,
        paragraphs: [
          `Un descuento por pronto pago ofrece al cliente una reducción si liquida antes de la fecha de vencimiento. La notación clásica es 2/10 neto 30: descuenta el 2 % si pagas en 10 días; de lo contrario, paga el importe completo en 30.`,
          `**Calcula cuánto te cuesta realmente:**`,
          `El instinto es leer ese 2 % como algo pequeño. Míralo más bien como el precio de 20 días de dinero: estás pagando el 2 % de la factura para cobrar 20 días antes. Repetido a lo largo de un año, eso equivale a un costo anual efectivo de entre el 35 y el 40 %, bastante más que la mayoría de las formas de endeudamiento.`,
          `Ese planteamiento no significa que los descuentos sean un error. Significa que deben ser una decisión con una razón detrás:`,
          `- **Buenas razones:** de lo contrario tendrías que recurrir a una línea de crédito cara; el lote de pagos de un cliente grande concreto es impredecible y la certeza vale lo que cuesta; necesitas financiar materiales antes del siguiente trabajo.`,
          `- **Razones débiles:** un competidor ofrece uno; parece un buen servicio al cliente; esperas que mejore el comportamiento de un mal pagador crónico.`,
          `**Cómo estructurar uno que funcione:**`,
          `- **Haz que la ventana sea corta y el ahorro visible.** Un descuento disponible durante 10 días crea una fecha límite; uno disponible durante 25 de 30 días no lo hace.`,
          `- **Muestra la cifra con descuento en dinero, no solo como porcentaje.** «Paga 1,470 antes del 28 de septiembre, o 1,500 antes del 18 de octubre» es mucho más eficaz que «2/10 neto 30».`,
          `- **Define cuándo empieza a contar el plazo:** la fecha de la factura o la fecha de recepción, y dilo.`,
          `- **Indica que el descuento depende de que el pago se haya completado dentro de la ventana,** no de que se haya iniciado una transferencia.`,
          `- **Aplícalo de manera coherente.** Los clientes hablan entre sí, y una política de descuentos incoherente se percibe como arbitraria.`,
          `- **Gestiona bien el papeleo:** si el descuento se aplica después de emitida la factura, lo normal es reflejarlo mediante una nota de crédito y no con una edición.`,
          `Cuidado con el hábito corporativo de aplicarse el descuento pagando en el plazo estándar. Si un cliente lo hace, plantéaselo de inmediato y por escrito; de lo contrario, el descuento se convierte en una rebaja permanente de precio.`,
        ],
      },
      {
        heading: `Recargos por mora: primero una señal, después ingresos`,
        paragraphs: [
          `Un recargo por pago tardío (un importe fijo, un tipo de interés o ambas cosas) cumple otra función. Su utilidad práctica es comunicar que vigilas las fechas de vencimiento. Esa señal, por sí sola, sube las facturas de posición en la cola de las empresas que pagan primero a quienes se dan cuenta.`,
          `**Cómo tener una base legal sólida:**`,
          `Esta es la parte que más varía según el país. Varias jurisdicciones otorgan a los proveedores un derecho legal a intereses y a costos fijos de recuperación en los pagos comerciales tardíos, a veces con independencia de que el contrato lo mencione. Otras limitan lo que puedes cobrar, tratan de forma distinta las operaciones con consumidores o exigen que el término se haya acordado de antemano para que sea exigible.`,
          `Debido a esa variación, las reglas generales útiles son estas:`,
          `- **Acuerda el término antes de que empiece el trabajo,** en tu presupuesto o contrato, no por primera vez en la factura.`,
          `- **Indícalo con claridad tanto en el acuerdo como en la factura,** con el tipo y el detonante.`,
          `- **Comprueba la situación local sobre tipos máximos, derechos legales y normas de consumo** antes de fijar una cifra.`,
          `**Cómo redactar una cláusula que los clientes acepten:**`,
          `Mantén un tono factual y sin emociones. Una cláusula que suena a amenaza invita a negociar; una que suena a trámite administrativo suele pasar sin comentarios. Algo como: «Las facturas que sigan impagadas 14 días después de la fecha de vencimiento podrán estar sujetas a un recargo por mora de [X] conforme a la ley aplicable».`,
          `Dos notas prácticas. Primera: un periodo de gracia de una o dos semanas antes de aplicar cualquier recargo evita penalizar a un cliente cuyo banco simplemente tardó un día más. Segunda: decide de antemano tu política de condonación: renunciar al recargo la primera vez, indicando claramente por escrito que correspondía y que se ha condonado como caso excepcional, preserva la señal sin generar fricción.`,
        ],
      },
      {
        heading: `Qué hacer antes de recurrir a cualquiera de las dos palancas`,
        paragraphs: [
          `Los descuentos y los recargos por mora son ajustes marginales. Funcionan mejor sobre un proceso de facturación que ya es rápido y preciso, y no pueden compensar uno que no lo es.`,
          `- **Factura de inmediato.** La causa más común del pago lento es la facturación lenta.`,
          `- **Acorta el plazo predeterminado.** Es gratis y, a menudo, basta por sí solo.`,
          `- **Haz llegar la factura al destinatario correcto y con la referencia correcta,** para que nunca entre en una cola de excepciones.`,
          `- **Pregunta por las fechas de los lotes de pago** y ajusta a ellas el momento de tu envío.`,
          `- **Pide un anticipo en los nuevos encargos** en lugar de ofrecer un descuento sobre el saldo más adelante.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué significa 2/10 neto 30?`,
        answer: `Significa que el cliente puede descontar el 2 % si paga en un plazo de 10 días, y que, en caso contrario, el importe completo vence en 30 días. La notación es habitual en el comercio mayorista y en la industria. Si la usas, escribe al lado la versión en lenguaje llano, porque muchos clientes pequeños no reconocerán la abreviatura y puede que simplemente la ignoren.`,
      },
      {
        question: `¿Un descuento por pronto pago del 2 % es caro?`,
        answer: `Más de lo que parece. Renunciar al 2 % para cobrar 20 días antes equivale a una tasa anual efectiva muy alta, muy por encima de la mayoría de los costos de endeudamiento. Eso no lo hace incorrecto, pero significa que el descuento debe justificarse por algo concreto, como evitar una línea de crédito o convertir de forma fiable a un pagador lento, y no ofrecerse por defecto.`,
      },
      {
        question: `¿Puedo cobrar intereses por las facturas vencidas?`,
        answer: `En muchas jurisdicciones, sí, y en algunas existe un derecho legal a intereses y a costos de recuperación en los pagos comerciales tardíos incluso sin una cláusula contractual. Los tipos, los límites y los requisitos difieren mucho de un país a otro, y las operaciones con consumidores suelen tratarse de forma distinta a las empresariales. Comprueba las normas del lugar donde operas antes de indicar un tipo en tu factura.`,
      },
      {
        question: `¿Los recargos por mora hacen que las facturas se paguen antes?`,
        answer: `Su principal valor suele ser el de una expectativa declarada más que el de un ingreso. Una cláusula de recargo visible indica que vigilas las fechas de pago, lo que tiende a subirte en la lista de prioridades de un cliente. Cobrarlo de verdad es una decisión que hay que valorar cada vez, y muchos proveedores lo condonan la primera vez, dejando claro que se ha condonado.`,
      },
      {
        question: `¿Debo ofrecer un descuento o acortar mis condiciones de pago?`,
        answer: `Prueba primero con plazos más cortos, ya que no cuestan nada. Pasar de 30 a 14 días en los nuevos encargos suele lograr lo que lograría un descuento, en particular con clientes más pequeños que pagan cuando llega la factura y no en un lote programado. Reserva los descuentos para los clientes cuyo momento de pago depende realmente de un proceso que no puedes cambiar.`,
      },
    ],
    related: [
      `condiciones-de-pago`,
      `recuperacion-facturas-vencidas`,
      `metodos-de-pago-y-comisiones-en-facturas`,
    ],
  },
  {
    slug: `facturas-en-disputa-y-pagos-incompletos`,
    title: `Facturas en disputa y pagos incompletos: cómo resolver desacuerdos de facturación`,
    description: `Un cliente pagó menos de lo facturado o cuestiona una línea. Una forma serena y estructurada de distinguir una disputa genuina de una táctica dilatoria.`,
    category: `Facturación a clientes`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una factura en disputa es un problema distinto de una factura impagada. El cliente no te está evitando: no está de acuerdo con lo que se debe. Manejar bien esa distinción protege tanto el dinero como la relación.`,
    image: {
      src: `/images/guides/invoice-disputes-short-payments.svg`,
      alt: `Una factura dividida en un saldo acordado y una única línea en disputa`,
    },
    intro: [
      `Facturación a clientes · 7 min de lectura`,
      `Una factura en disputa es un problema distinto de una factura impagada. El cliente no te está evitando: no está de acuerdo con lo que se debe. Manejar bien esa distinción protege tanto el dinero como la relación.`,
      `![Una factura dividida en un saldo acordado y una única línea en disputa](https://best-invoicegenerator.com/images/guides/invoice-disputes-short-payments.svg)`,
      `Las tácticas de cobranza que funcionan con un mal pagador perjudican de forma activa una disputa. Enviar recordatorios cada vez más severos a alguien que cree de verdad que le cobraron de más se interpreta como una negativa a escuchar y, por lo general, hace que el importe sea más difícil de cobrar, no más fácil.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un estudio factura 5,000 por un proyecto de sitio web. El cliente paga 4,200 sin dar ninguna explicación. 1. La diferencia de 800 coincide con una línea de «plantillas de páginas adicionales — 4 a 200». El estudio revisa sus registros y descubre que las plantillas adicionales se pidieron por correo, pero nunca se confirmaron como un cambio de alcance con un precio. 2. La respuesta: acusar recibo el mismo día, confirmar que se recibieron 4,200 y dar las gracias, citar el correo en el que se pedían las páginas adicionales y reconocer con honestidad que el precio no se había confirmado por escrito de antemano. Ofrecer cerrar el asunto en 400 como un resultado compartido, con una nota que indique que los futuros cambios de alcance se confirmarán con un precio antes de empezar el trabajo. 3. El cliente acepta. El estudio emite una nota de crédito por 400 contra la factura original, y los 400 restantes se pagan en una semana. Más útil aún: la plantilla de presupuesto ahora incluye una cláusula de cambios de alcance, y esa disputa concreta no vuelve a repetirse.`,
      rows: [],
    },
    diagram: {
      title: `Facturas en disputa y pagos incompletos: cómo resolver desacuerdos de facturación — flujo de decisión`,
      caption: undefined,
      steps: [
        `Primero, averigua qué problema tienes`,
        `Pagos incompletos: lee la cifra`,
        `Una respuesta estructurada`,
        `Cómo evitar la siguiente`,
      ],
    },
    sections: [
      {
        heading: `Primero, averigua qué problema tienes`,
        paragraphs: [
          `Tres situaciones se parecen en tu contabilidad y exigen respuestas totalmente distintas.`,
          `- **Un bloqueo de proceso.** Nadie discrepa de nada. La factura está atascada porque un campo no coincidía o porque nunca se confirmó una recepción. Es un asunto administrativo.`,
          `- **Una disputa genuina.** El cliente cree que el importe, el alcance o la calidad no son lo que se acordó.`,
          `- **Una maniobra dilatoria.** El cliente tiene un problema de liquidez y plantea una consulta para ganar tiempo.`,
          `La forma más rápida de distinguirlas es la especificidad. Un bloqueo de proceso produce un motivo concreto al que se puede responder. Una disputa genuina produce una objeción concreta a una línea concreta. Una maniobra dilatoria produce una insatisfacción vaga que cambia cada vez que la abordas.`,
        ],
      },
      {
        heading: `Pagos incompletos: lee la cifra`,
        paragraphs: [
          `Cuando un cliente paga menos de lo facturado, la propia diferencia suele indicarte lo que pasó. Antes de contactar a nadie, comprueba si la diferencia corresponde a:`,
          `- Una línea concreta que el cliente no aceptó.`,
          `- Un importe de impuestos, lo que sugiere un desacuerdo sobre el tratamiento fiscal o una retención.`,
          `- Un descuento por pronto pago aplicado, con razón o sin ella.`,
          `- Una nota de crédito anterior que el cliente ha aplicado sin avisarte.`,
          `- Una comisión bancaria o de un banco intermediario descontada en tránsito en una transferencia internacional.`,
          `- Una diferencia de conversión de divisas en una factura emitida en otra moneda.`,
          `- Un error de redondeo o de captura de datos, sobre todo si la diferencia es pequeña y extraña.`,
          `Varios de estos casos no son disputas en absoluto. Llegar a la conversación sabiendo ya qué línea está afectada cambia por completo el tono y, a menudo, lo resuelve en un solo mensaje.`,
        ],
      },
      {
        heading: `Una respuesta estructurada`,
        paragraphs: [
          `**1. Acusa recibo con rapidez:**`,
          `Responde en un día, aunque sea solo para decir que estás revisándolo. El silencio después de que un cliente plantea una inquietud se interpreta como actitud defensiva y endurece su postura.`,
          `**2. Pide la objeción por escrito, de forma concreta:**`,
          `«¿Qué línea estás cuestionando y cuál esperabas que fuera?». Una queja verbal sobre que «la factura es más alta de lo esperado» no se puede resolver; una objeción escrita a una línea con nombre, sí.`,
          `**3. Separa lo acordado de lo disputado:**`,
          `Este es el paso más importante. Si 4,500 de una factura de 5,000 no se discuten, esos 4,500 no deberían quedar sin pagar mientras se debate el resto. Pide que se pague la parte no disputada en el plazo original.`,
          `En la práctica, muchos sistemas de cuentas por pagar no pueden hacer pagos parciales. La solución es acreditar la factura original y emitir dos nuevas: una por el importe acordado, pagadera ahora, y otra por el importe en disputa, retenida hasta que se resuelva.`,
          `**4. Revisa tus propias pruebas antes de discutir:**`,
          `Reúne el presupuesto, la aprobación, cualquier confirmación de cambio de alcance y el registro de entrega. Hazlo antes de responder sobre el fondo. Los proveedores que defienden una línea y luego descubren que se equivocaban pierden mucha más credibilidad que los que ceden pronto.`,
          `**5. Responde con los hechos, en un solo mensaje:**`,
          `Cita el acuerdo, adjunta la aprobación y expón tu postura con claridad. Evita volver a contar toda la historia: parece que estás armando un caso en lugar de resolver un problema.`,
          `**6. Fija una fecha de resolución:**`,
          `«¿Podemos cerrar esto para el viernes 26?». Una disputa sin plazo se va alargando, y alargarse favorece a quien tiene el dinero.`,
          `**7. Ciérrala por escrito:**`,
          `Sea cual sea el resultado, confírmalo: qué se acordó, qué se acreditará o pagará y para cuándo. Después emite de inmediato la documentación, porque una disputa resuelta sin nota de crédito es una disputa que reaparecerá al cierre del año.`,
        ],
      },
      {
        heading: `Cómo evitar la siguiente`,
        paragraphs: [
          `- Fija el precio de los cambios de alcance antes de hacerlos, por escrito, aunque sea de manera informal.`,
          `- Detalla lo suficiente como para que se pueda comprobar. Una única línea que diga «Consultoría — 8,400» invita a un escrutinio que un desglose detallado no provoca.`,
          `- Envía un borrador de las facturas grandes para que se confirmen antes de emitirlas.`,
          `- Nombra en la factura a quien aprobó cuando el trabajo se autorizó verbalmente.`,
          `- Registra cada disputa con su causa. Los patrones aparecen rápido y casi siempre se pueden corregir en el origen.`,
          `Cuando una disputa no se puede resolver y el importe es significativo, existen vías formales (mediación, procesos de reclamaciones de menor cuantía, recobro de deudas), pero varían según la jurisdicción y conviene pedir asesoramiento específico. Para la mayoría de los desacuerdos, una pregunta concreta, un acuse de recibo rápido y la disposición a separar lo acordado de lo disputado lo resuelven mucho antes de llegar a ese punto.`,
        ],
      },
    ],
    faq: [
      {
        question: `Un cliente pagó menos que la factura. ¿Qué debo hacer primero?`,
        answer: `Calcula la diferencia exacta y comprueba si coincide con una línea concreta, una cifra de impuestos, una conversión de divisas o una comisión bancaria descontada en tránsito. El importe suele identificar la causa. Después, hazle al cliente una sola pregunta directa sobre esa cifra concreta en lugar de enviar un recordatorio general, porque un recordatorio general invita a una respuesta general que no dice nada.`,
      },
      {
        question: `¿Debo dejar de trabajar cuando una factura está en disputa?`,
        answer: `No de forma automática. Detener el trabajo convierte un desacuerdo sobre una línea en un desacuerdo sobre toda la relación. Es más eficaz mantener la disputa acotada, pedir que se pague a tiempo la parte no disputada y fijar un plazo corto para resolver el resto. Si la disputa sigue sin resolverse y el saldo es significativo, entonces pausar el trabajo nuevo es un siguiente paso razonable, idealmente comunicado de antemano y por escrito.`,
      },
      {
        question: `¿Puedo pedirle al cliente que pague la parte de la factura con la que está de acuerdo?`,
        answer: `Sí, y deberías hacerlo. Dividir la factura en una parte acordada y otra disputada evita que el importe total quede como rehén de un desacuerdo pequeño. Muchos sistemas de cuentas por pagar solo pueden procesar una factura completa, así que lo más limpio suele ser acreditar la factura original y emitir dos: una por el importe acordado y otra por el importe en disputa.`,
      },
      {
        question: `¿Y si el cliente plantea la disputa solo después de la fecha de vencimiento?`,
        answer: `Tómala como genuina, pero deja constancia por escrito del momento en que se planteó. Las disputas que surgen tarde a veces son reales y a veces son una forma de reiniciar el reloj del pago. Responde de fondo al punto planteado y, al mismo tiempo, confirma la fecha de vencimiento original y que el saldo no disputado sigue siendo pagadero. Mantener ambos hilos en un solo mensaje evita dar la impresión de que aceptas un plazo nuevo.`,
      },
      {
        question: `¿Cómo evito que se repita la misma disputa?`,
        answer: `Fíjate en dónde se abrió la brecha de expectativas. La mayoría de las disputas que se repiten se deben a una redacción del alcance que para ti era clara y para el cliente ambigua, o a un trabajo aprobado de palabra que nunca se confirmó por escrito. Corregir la plantilla del presupuesto o añadir un breve paso de confirmación por escrito suele eliminar toda una categoría de desacuerdos.`,
      },
    ],
    related: [
      `recuperacion-facturas-vencidas`,
      `notas-de-credito-y-correcciones-de-facturas`,
      `presupuesto-vs-factura`,
    ],
  },
  {
    slug: `registros-de-facturas-conservacion-y-auditoria`,
    title: `Registros de facturas: conservación, copias de seguridad y una pista de auditoría útil`,
    description: `Cómo guardar las facturas para que sigan siendo fáciles de encontrar y de leer años después: nombres, formatos, copias de seguridad y qué debe mostrar realmente una pista de auditoría.`,
    category: `Contabilidad e impuestos`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Guardar facturas es fácil. Lo que exige un sistema es poder encontrar una concreta de hace cuatro años, con el pago al que se refiere y la nota de crédito que la ajustó.`,
    image: {
      src: `/images/guides/invoice-record-retention-audit-trail.svg`,
      alt: `Facturas, notas de crédito y registros de pago organizados por año en un archivo en el que se puede buscar`,
    },
    intro: [
      `Contabilidad e impuestos · 7 min de lectura`,
      `Guardar facturas es fácil. Lo que exige un sistema es poder encontrar una concreta de hace cuatro años, con el pago al que se refiere y la nota de crédito que la ajustó.`,
      `![Facturas, notas de crédito y registros de pago organizados por año en un archivo en el que se puede buscar](https://best-invoicegenerator.com/images/guides/invoice-record-retention-audit-trail.svg)`,
      `La mayoría de los consejos sobre conservación de registros lo plantean como una obligación de cumplimiento. Lo es, pero el valor cotidiano es más inmediato: un cliente cuestiona un cargo de hace dos años, un contador pregunta por qué se movió una cifra, una disputa depende de lo que se acordó. En todos los casos, el costo se mide en cuánto tardas en presentar el documento.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Registros de facturas: conservación, copias de seguridad y una pista de auditoría útil en la práctica`,
      body: `Guardar facturas es fácil. Lo que exige un sistema es poder encontrar una concreta de hace cuatro años, con el pago al que se refiere y la nota de crédito que la ajustó. | Campo | Contenido | |---|---| | Requisito | Cumplimiento y documentación claros | | Acción | Seguir las normas contables habituales y confirmarlo con el cliente |`,
      rows: [],
    },
    diagram: {
      title: `Registros de facturas: conservación, copias de seguridad y una pista de auditoría útil — flujo de decisión`,
      caption: undefined,
      steps: [
        `Cuánto tiempo conservar las cosas`,
        `Qué conservar, y no solo la factura`,
        `Nombres de archivo y estructura de carpetas`,
        `Copias de seguridad que funcionan de verdad`,
      ],
    },
    sections: [
      {
        heading: `Cuánto tiempo conservar las cosas`,
        paragraphs: [
          `No hay una respuesta universal, y quien te da una única cifra está describiendo las normas de un solo país. Los plazos de conservación difieren según la jurisdicción, el tipo de impuesto y, a veces, la naturaleza de la operación. Más allá de lo fiscal, pueden estar corriendo otros plazos más largos:`,
          `- Los plazos de prescripción de los contratos, durante los cuales aún podría presentarse una reclamación.`,
          `- Las obligaciones de garantía sobre bienes y sobre algunos servicios.`,
          `- Las condiciones de subvenciones, ayudas o contratos públicos, que a menudo imponen sus propios plazos de conservación.`,
          `- Los registros laborales y de nómina, cuando interviene la facturación de subcontratistas.`,
          `La regla práctica: averigua qué se aplica donde operas y, cuando dos requisitos difieran, ajústate al más largo. El almacenamiento es barato; reconstruir un registro destruido no lo es.`,
        ],
      },
      {
        heading: `Qué conservar, y no solo la factura`,
        paragraphs: [
          `Una factura por sí sola responde a muy pocas preguntas. La unidad útil es la cadena que la rodea:`,
          `- El presupuesto, la orden de compra o el acuerdo firmado que autorizó el trabajo.`,
          `- Cualquier cambio de alcance o aprobación por escrito.`,
          `- La factura tal como se envió, en la forma exacta en que la recibió el cliente.`,
          `- La prueba de cuándo y a quién se envió.`,
          `- Las notas de crédito o correcciones, con referencia a la original.`,
          `- El registro del pago y el apunte bancario correspondiente.`,
          `- La correspondencia sobre disputas o ajustes acordados.`,
          `La prueba es sencilla: ¿podría alguien que no sabe nada del trabajo empezar en el apunte bancario y remontarse hasta el acuerdo sin preguntarte nada?`,
        ],
      },
      {
        heading: `Nombres de archivo y estructura de carpetas`,
        paragraphs: [
          `La búsqueda solo funciona si tus nombres de archivo son coherentes. Una estructura que aguanta años:`,
          `\`2026/NombreCliente/2026-09-08_NS-2026-151_NombreCliente_3600.pdf\``,
          `Por qué está cada parte:`,
          `- **La fecha en formato ISO primero (AAAA-MM-DD),** para que los archivos se ordenen cronológicamente en cualquier sistema.`,
          `- **El número de factura,** para poder encontrar un documento solo a partir de una referencia.`,
          `- **El nombre del cliente,** para que la búsqueda siga funcionando aunque no haya carpetas.`,
          `- **El importe,** para poder relacionar a simple vista una línea del banco con un documento.`,
          `Usa la misma convención para las notas de crédito, con el prefijo CN-, y guarda las pruebas de pago en la misma carpeta, no en una aparte. Una sola carpeta por cliente y año es más fácil de mantener que una estructura con muchos niveles cuya lógica nadie recuerda.`,
        ],
      },
      {
        heading: `Copias de seguridad que funcionan de verdad`,
        paragraphs: [
          `Dos copias en el mismo lugar son una sola copia. Un mínimo viable para una empresa pequeña:`,
          `- Una copia de trabajo que usas a diario.`,
          `- Una copia sincronizada en la nube, que protege frente a la pérdida de un dispositivo.`,
          `- Una copia sin conexión o guardada por separado, actualizada periódicamente, que protege frente al robo de la cuenta y frente a que la sincronización replique fielmente un borrado.`,
          `El punto que la mayoría pasa por alto es que la sincronización en la nube no es una copia de seguridad. Si los archivos se borran o se cifran en local, la sincronización propaga ese cambio. El historial de versiones ayuda, pero solo dentro de su ventana de conservación.`,
          `Prueba una restauración una vez al año. Elige una factura al azar de hace tres años e intenta presentarla, junto con su registro de pago, en menos de cinco minutos. La mayoría descubre un fallo la primera vez que lo intenta, y precisamente para eso sirve hacerlo cuando no hay nada en juego.`,
        ],
      },
      {
        heading: `Cómo es una pista de auditoría limpia`,
        paragraphs: [
          `Tres señales importan más que el volumen de documentación:`,
          `- **Sin saltos en la numeración de las facturas.** Si un número se anuló, la nota de crédito que lo explica debe ocupar su lugar. Los números que faltan invitan a hacer preguntas.`,
          `- **Cada ajuste, documentado.** Una nota de crédito con un motivo indicado y una referencia a la factura original.`,
          `- **Los pagos concilian con las facturas.** Los cobros sin identificar que permanecen en una cuenta bancaria son lo que con más frecuencia convierte una revisión rutinaria en una más larga.`,
        ],
      },
      {
        heading: `Tareas de mantenimiento que merece la pena hacer`,
        paragraphs: [
          `- **Cada trimestre:** archiva los documentos sueltos, concilia los pagos sin identificar y comprueba que la secuencia de numeración no tenga interrupciones.`,
          `- **Cada año:** cierra la carpeta del ejercicio, exporta los datos de cualquier software de terceros, verifica una restauración y actualiza tu copia sin conexión.`,
          `- **Ante cualquier cambio de sistema:** exporta todo del sistema antiguo antes de migrar, no después.`,
          `- **Antes de desechar nada:** confirma el plazo de conservación que se aplica y anota qué se desechó y cuándo.`,
          `Nada de esto lleva mucho tiempo una vez montado. El trabajo consiste casi por completo en decidir una convención y aplicarla con coherencia, y por eso mismo se suele posponer hasta el momento en que hace falta.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Cuánto tiempo debo conservar las facturas?`,
        answer: `Los plazos de conservación los fija la ley y difieren mucho entre países, y a veces entre impuestos de un mismo país. Los plazos de prescripción de los contratos, las obligaciones de garantía y las condiciones de financiación de subvenciones pueden exigirte conservar los registros más tiempo que las normas fiscales por sí solas. Comprueba los requisitos que se aplican a tu negocio y, cuando dos normas entren en conflicto, sigue la más larga.`,
      },
      {
        question: `¿Puedo tirar las facturas en papel si las he escaneado?`,
        answer: `Muchas jurisdicciones permiten llevar los registros solo en formato digital siempre que la copia esté completa, sea legible y no pueda alterarse sin dejar rastro, pero las condiciones varían y algunas categorías de documentos reciben un trato distinto. Antes de desechar los originales, confirma lo que exigen las normas locales y mantén un proceso de escaneo documentado. Si hay dudas sobre un documento concreto, conservar el original cuesta muy poco.`,
      },
      {
        question: `¿Qué se considera una pista de auditoría en la facturación?`,
        answer: `Una cadena que conecta cada venta desde el acuerdo hasta el dinero recibido: el presupuesto o la orden de compra, la factura, las notas de crédito, el registro del pago y el apunte bancario. Alguien que no conozca el trabajo debería poder empezar en cualquier punto de esa cadena y llegar a los demás sin hacerte preguntas. Lo que llama la atención son los saltos en la numeración de facturas, los créditos sin explicar y los pagos que no encajan con ninguna factura.`,
      },
      {
        question: `¿Es suficiente guardar las facturas en mi bandeja de entrada de correo?`,
        answer: `Es un sistema débil. Las cuentas de correo se cierran, los proveedores cambian sus políticas, la búsqueda falla con documentos cuyos asuntos son incoherentes y pierdes el acceso por completo si la cuenta se ve comprometida. Mantén un archivo de facturas específico, organizado por año y cliente, y usa el hilo de correo como contexto de apoyo, no como registro principal.`,
      },
      {
        question: `¿En qué formato de archivo debo archivar las facturas?`,
        answer: `Un PDF basado en texto es la opción práctica por defecto: se lee en cualquier parte, es autocontenido y permite buscar sin OCR. Evita archivar solo en un formato editable propietario o como una fotografía de una pantalla. Si además generas datos de factura electrónica estructurados, guarda ese archivo junto con el PDF, porque en algunos sistemas la versión estructurada es el registro que hace fe.`,
      },
    ],
    related: [
      `facturacion-fiscal-pequenas-empresas`,
      `generacion-factura-pdf`,
      `numeracion-de-facturas`,
    ],
  },
  {
    slug: `fraude-con-facturas`,
    title: `Fraude con facturas: cómo detectar facturas falsas y desvíos de pagos`,
    description: `Cómo funcionan el fraude con facturas y las estafas de desvío de pagos, las señales de alerta en ambos lados y los controles sencillos que los detienen.`,
    category: `Cobros`,
    readingTime: `8 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `El fraude con facturas más eficaz no parece un fraude. Parece un correo rutinario de un proveedor con el que ya trabajas, sobre una factura que ya esperabas pagar.`,
    image: {
      src: `/images/guides/invoice-fraud-prevention.svg`,
      alt: `Una factura genuina junto a una copia fraudulenta con los datos bancarios alterados resaltados`,
    },
    intro: [
      `Cobros · 8 min de lectura`,
      `El fraude con facturas más eficaz no parece un fraude. Parece un correo rutinario de un proveedor con el que ya trabajas, sobre una factura que ya esperabas pagar.`,
      `![Una factura genuina junto a una copia fraudulenta con los datos bancarios alterados resaltados](https://best-invoicegenerator.com/images/guides/invoice-fraud-prevention.svg)`,
      `El fraude con facturas funciona porque apunta a un proceso, no al criterio de una persona. Pagar a los proveedores es una rutina, se hace con prisa y todos los implicados intentan ser eficientes. Una solicitud fraudulenta que encaja en la rutina la procesa la propia rutina.`,
      `Esto importa en cualquiera de los dos lados de la factura. Si emites facturas, alguien que se haga pasar por ti puede costarle dinero a tu cliente y costarte la relación. Si las pagas, un solo pago desviado puede ser considerable y, a menudo, imposible de recuperar.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico: el cambio que no ocurrió`,
      body: `Una agencia de diseño lleva dos años facturando cada mes al mismo cliente del sector manufacturero. En septiembre, el equipo de cuentas del cliente recibe un correo que parece venir del gerente de cuenta de la agencia: una nota amistosa que dice que la agencia ha cambiado de banco, con los datos actualizados, y pide que la factura de septiembre se pague en la nueva cuenta. 1. La firma del correo es la correcta. El tono es el adecuado. La factura adjunta es genuina. 2. El proceso del cliente lo frena en un solo paso. Su registro de proveedor contiene datos bancarios verificados, y cualquier cambio exige una confirmación por voz en el número que ya consta en el registro. El empleado de cuentas llama a la línea principal de la agencia (no al número de la firma) y el gerente de cuenta confirma que no se ha hecho ningún cambio. El dominio del remitente resulta diferir del real en un solo carácter. 3. Aquí no hubo nada ingenioso. Lo detectó una sola regla, aplicada sin excepciones.`,
      rows: [],
    },
    diagram: {
      title: `Fraude con facturas: cómo detectar facturas falsas y desvíos de pagos — flujo de decisión`,
      caption: undefined,
      steps: [
        `Los patrones principales`,
        `Controles que realmente lo previenen`,
        `Cómo proteger a tus clientes de alguien que se haga pasar por ti`,
        `Si el pago ya se ha realizado`,
      ],
    },
    sections: [
      {
        heading: `Los patrones principales`,
        paragraphs: [
          `**Desvío de pagos:**`,
          `Es el más dañino y el más común. Un estafador, tras acceder al correo de un proveedor o imitarlo de forma convincente, notifica al comprador que los datos bancarios han cambiado. La siguiente factura se paga en la cuenta del estafador. El comprador no tiene motivos para dudar: la factura es real, el importe es correcto y el remitente parece el adecuado.`,
          `La pista casi siempre está en el detalle y no en el contenido: un dominio con un carácter transpuesto o sustituido, una dirección de respuesta que difiere del nombre que se muestra, o un aviso de cambio que llega por separado, sin ninguna factura.`,
          `**Facturas falsas de proveedores:**`,
          `Llega una factura de una empresa que nunca has utilizado, por algo plausible y modesto: un listado en un directorio, la renovación de un software, material de oficina, un servicio de dominios. El importe es deliberadamente lo bastante pequeño como para pasar sin escrutinio. Se envían en masa con la esperanza de que un pequeño porcentaje se pague sin comprobarlo.`,
          `**Facturas legítimas alteradas:**`,
          `Una factura genuina se intercepta en tránsito y se modifica, normalmente solo en los datos de pago, antes de reenviarla. Todo lo demás es auténtico, porque lo es.`,
          `**Solicitudes de pago urgentes:**`,
          `Un mensaje que parece proceder de un alto cargo ordena a alguien realizar un pago urgente al margen del proceso habitual, a menudo presentado como confidencial. La urgencia y la autoridad existen precisamente para impedir que se apliquen los controles habituales.`,
        ],
      },
      {
        heading: `Controles que realmente lo previenen`,
        paragraphs: [
          `Son deliberadamente sencillos, porque los controles complejos se saltan bajo presión.`,
          `- **Verifica por voz todo cambio de datos bancarios,** usando un número que ya tenías antes de que llegara la solicitud. Nunca un número del correo o de la factura.`,
          `- **Aplica la regla de las dos personas** a partir de un umbral que tú fijes. Una persona prepara y otra distinta autoriza.`,
          `- **Cotea las facturas con algo que hayas aprobado:** una orden de compra, un presupuesto firmado, un contrato. Una factura que no coincide con nada nunca debe pagarse solo porque parezca plausible.`,
          `- **Mantén un registro de proveedores con datos bancarios verificados** y trata cualquier desviación como una parada, no como una anotación.`,
          `- **Haz un pago de prueba de importe pequeño** tras cualquier cambio verificado y confirma la recepción antes de liberar el saldo.`,
          `- **Usa la verificación del nombre del titular de la cuenta** cuando tu sistema bancario la ofrezca, y toma en serio una discrepancia en lugar de pasarla por alto.`,
          `- **Quita a la urgencia el poder de saltarse el proceso.** La norma debe ser que nada se salta el proceso. Dilo de forma explícita, para que un empleado junior no tenga que decidir solo.`,
        ],
      },
      {
        heading: `Cómo proteger a tus clientes de alguien que se haga pasar por ti`,
        paragraphs: [
          `Si emites facturas, tanto tu cuenta de correo como tu plantilla de factura son superficies de ataque. Varios hábitos reducen el riesgo de forma sustancial:`,
          `- Avisa a tus clientes al incorporarlos de que tus datos bancarios nunca cambiarán por correo electrónico. Inclúyelo en tus condiciones y repítelo en el pie de tus facturas.`,
          `- Mantén tus datos de pago visualmente coherentes en todas las facturas, en la misma posición y con el mismo formato, para que una sustitución se note al instante.`,
          `- Protege tu correo con una autenticación multifactor sólida. La mayoría de las suplantaciones de proveedores empiezan con un buzón comprometido o con un dominio muy parecido al tuyo.`,
          `- Plantéate registrar los dominios parecidos más obvios si el nombre de tu empresa es fácil de imitar.`,
          `- Envía las facturas desde una dirección constante, para que los clientes tengan una expectativa estable.`,
          `- Responde con rapidez si un cliente consulta por una factura que no esperaba. Esa consulta suele ser la primera señal de que alguien te está imitando.`,
        ],
      },
      {
        heading: `Si el pago ya se ha realizado`,
        paragraphs: [
          `La rapidez importa más que cualquier otra cosa, porque los fondos suelen moverse a otras cuentas con rapidez.`,
          `- Contacta de inmediato con el equipo de fraude de tu banco y pídele que intente una recuperación del pago.`,
          `- Informa al proveedor o cliente genuino, para que pueda avisar a otras personas que estén siendo objetivo al mismo tiempo.`,
          `- Denúncialo a la autoridad correspondiente de tu país; la vía difiere según la jurisdicción, así que comprueba cuál es la correcta.`,
          `- Conserva todo: los correos originales con todos sus encabezados, los adjuntos y una cronología. No borres nada.`,
          `- Comprueba si sigue habiendo acceso. Si un buzón se vio comprometido, cambia las credenciales y revisa las reglas de reenvío, que con frecuencia se dejan instaladas.`,
          `Después, analiza cuál fue la brecha en los controles en lugar de quién cometió el error. Estos fraudes están diseñados para pasar desapercibidos a personas cuidadosas que trabajan con rapidez, y una corrección en el proceso te protege mucho mejor que cualquier aumento de la vigilancia.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué es una estafa de desvío de pagos?`,
        answer: `Un estafador se hace pasar por un proveedor y le dice al comprador que los datos bancarios han cambiado, de modo que el siguiente pago va a una cuenta que él controla. El mensaje suele llegar como un correo convincente desde una dirección casi idéntica, a veces con referencia a una factura real. Como el comprador cree que está pagando una deuda legítima, el pago se autoriza con normalidad y puede ser muy difícil de recuperar.`,
      },
      {
        question: `¿Cómo puedo saber si una factura que recibí es genuina?`,
        answer: `Compruébala con algo que ya tengas, no con el mensaje que la entregó. ¿Coincide con una orden de compra o con un acuerdo que tienes archivado? ¿Los datos bancarios coinciden con los usados en pagos anteriores a ese proveedor? ¿El dominio del correo del remitente es exactamente el correcto, carácter por carácter? Si algo difiere, verifícalo llamando a un número que ya tenías, nunca a uno impreso en la propia factura.`,
      },
      {
        question: `Un proveedor me escribió para decir que cambiaron sus datos bancarios. ¿Qué debo hacer?`,
        answer: `Trátalo como no verificado hasta que lo hayas confirmado por voz con un contacto conocido, en un número que ya tenías. No respondas al correo ni llames a un número que este te proporcione, porque ambos pueden estar controlados por el estafador. Haz primero un pago de prueba de importe pequeño cuando sea viable y confirma la recepción antes de liberar algo mayor. Los proveedores legítimos esperan esto y no se ofenderán.`,
      },
      {
        question: `¿Cómo protejo a mis propios clientes de alguien que se haga pasar por mí?`,
        answer: `Dile a tus clientes al incorporarlos que tus datos bancarios nunca cambiarán por correo electrónico y que cualquier mensaje de ese tipo debe verificarse por teléfono. Mantén tus datos visualmente coherentes en todas las facturas para que un cambio destaque. Protege tu cuenta de correo con una autenticación multifactor sólida, ya que la mayoría de las suplantaciones de proveedores empiezan con un buzón comprometido o suplantado con una dirección muy parecida.`,
      },
      {
        question: `¿Qué debo hacer si un pago ya ha llegado a una cuenta fraudulenta?`,
        answer: `Actúa de inmediato, porque las probabilidades de recuperación caen bruscamente en cuestión de horas. Contacta con el equipo de fraude de tu banco y pídele que intente recuperar el pago, avisa al proveedor o cliente genuino para que pueda alertar a otros y denúncialo a la autoridad competente de tu país. Conserva los correos y archivos originales en lugar de borrarlos, porque son pruebas. Las vías de denuncia difieren según la jurisdicción, así que comprueba la correcta en tu localidad.`,
      },
    ],
    related: [
      `metodos-de-pago-y-comisiones-en-facturas`,
      `orden-de-compra-y-conciliacion-de-tres-vias`,
      `registros-de-facturas-conservacion-y-auditoria`,
    ],
  },
  {
    slug: `cuentas-por-cobrar-por-antiguedad`,
    title: `Cuentas por cobrar por antigüedad: cómo leer tu libro de facturas para controlar el flujo de caja`,
    description: `Cómo construir una vista de cuentas por cobrar por antigüedad, calcular tu plazo medio real de cobro y decidir qué facturas impagadas perseguir primero.`,
    category: `Contabilidad e impuestos`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Perseguir facturas una por una es reactivo. Mirarlas todas juntas te dice cuáles perseguir, qué clientes te están costando dinero en silencio y cuánto efectivo puedes esperar realmente este mes.`,
    image: {
      src: `/images/guides/accounts-receivable-aging-cash-flow.svg`,
      alt: `Facturas impagadas agrupadas por tramos de antigüedad, con los totales de cada uno`,
    },
    intro: [
      `Contabilidad e impuestos · 7 min de lectura`,
      `Perseguir facturas una por una es reactivo. Mirarlas todas juntas te dice cuáles perseguir, qué clientes te están costando dinero en silencio y cuánto efectivo puedes esperar realmente este mes.`,
      `![Facturas impagadas agrupadas por tramos de antigüedad, con los totales de cada uno](https://best-invoicegenerator.com/images/guides/accounts-receivable-aging-cash-flow.svg)`,
      `La mayoría de las pequeñas empresas sabe más o menos cuánto le deben y tiene una idea vaga de quién es lento. Esa vaguedad sale cara. La versión concreta (cuánto, quién y desde cuándo) lleva unos veinte minutos de elaborar y normalmente cambia lo que haces a continuación.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un estudio revisa su libro de facturas a finales de septiembre. Total adeudado: 62,400. | Tramo | Importe | |---|---| | Aún no vencidas | 31,000 repartidas en cinco facturas | | De 1 a 30 días | 18,200, de las cuales 16,000 corresponden a una sola factura de un cliente de largo recorrido | | De 31 a 60 días | 4,900 repartidas en tres facturas pequeñas de un mismo cliente | | Más de 90 días | 8,300, una sola factura, con un cliente que no responde desde junio |`,
      rows: [],
    },
    diagram: {
      title: `Cuentas por cobrar por antigüedad: cómo leer tu libro de facturas para controlar el flujo de caja — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Construir la vista`,
        `La cifra que vale la pena seguir`,
        `Decidir qué perseguir`,
        `Usar el libro para hacer previsiones`,
      ],
    },
    sections: [
      {
        heading: `Construir la vista`,
        paragraphs: [
          `Necesitas seis columnas y nada más:`,
          `- Número de factura`,
          `- Cliente`,
          `- Fecha de emisión`,
          `- Fecha de vencimiento`,
          `- Importe`,
          `- Fecha de pago (en blanco si no está pagada)`,
          `Cada fila sin pagar es una cuenta por cobrar. Agrúpalas según cuánto se han pasado de la fecha de vencimiento:`,
          `- **Aún no vencidas:** ingreso esperado, sin necesidad de actuar.`,
          `- **De 1 a 30 días de retraso:** suele ser un asunto administrativo; un recordatorio normalmente lo resuelve.`,
          `- **De 31 a 60 días:** pasa algo de verdad; averigua qué.`,
          `- **De 61 a 90 días:** recuperar el importe es cada vez más difícil y exige una decisión deliberada.`,
          `- **Más de 90 días:** da por hecho que no ocurrirá nada sin una escalada.`,
          `Suma cada tramo. La forma de esa distribución importa más que la cifra total: 40,000 adeudados con casi todo en el tramo aún no vencido es un negocio sano, mientras que 40,000 con la mitad pasada de los 60 días es un problema que lleva meses acumulándose.`,
        ],
      },
      {
        heading: `La cifra que vale la pena seguir`,
        paragraphs: [
          `Tus condiciones de pago declaradas son una intención. Tu plazo medio de cobro es lo que realmente ocurre. Se calcula de forma sencilla: para cada factura cobrada en los últimos tres meses, cuenta los días desde la emisión hasta el pago y calcula el promedio.`,
          `La diferencia entre esa cifra y tus condiciones es lo que puedes trabajar. Algunas causas habituales y lo que indica cada una:`,
          `- **Una brecha grande en todos los clientes:** tus condiciones se ignoran en general. Revisa la rapidez con que facturas y si las fechas de vencimiento se indican como fechas de calendario.`,
          `- **Una brecha grande causada por dos o tres clientes:** es un problema de cliente, no de proceso. Trata esas relaciones de forma específica.`,
          `- **Pagos constantes a un intervalo fijo sin relación con tus condiciones:** estás en un lote de pagos. Averigua la fecha de corte y presenta la factura antes de ella.`,
          `Haz el seguimiento del promedio cada mes. La tendencia te dice más que el valor de cualquier mes aislado.`,
        ],
      },
      {
        heading: `Decidir qué perseguir`,
        paragraphs: [
          `La antigüedad por sí sola es un mal orden de prioridad. Ordena por valor dentro de cada tramo y hazte dos preguntas sobre cada factura: cuánto está en riesgo y qué probabilidad hay de recuperarla con el esfuerzo disponible.`,
          `- **Grande, vencida hace poco, buen pagador:** un mensaje breve y concreto. Normalmente es un bloqueo administrativo.`,
          `- **Grande, vencida hace mucho, cliente que responde:** pon a una persona al teléfono. Los hilos escritos se estancan; las conversaciones no.`,
          `- **Grande, vencida hace mucho, sin respuesta:** es el mejor uso de tu tiempo. Escala de forma deliberada.`,
          `- **Pequeña, vencida hace mucho:** decide si la persigues o la cierras. Dejarla abierta indefinidamente cuesta atención cada mes sin ningún retorno.`,
          `Reserva un hueco fijo (una hora, una vez por semana) y trabaja la lista en ese orden. El trabajo de cobranza hecho en momentos sueltos de frustración es menos eficaz y más desagradable que el mismo trabajo hecho con un calendario.`,
        ],
      },
      {
        heading: `Usar el libro para hacer previsiones`,
        paragraphs: [
          `Una previsión sencilla es mejor que ninguna. Para cada factura impagada, estima una fecha de pago realista basada en el historial real de ese cliente y no en la fecha de vencimiento indicada. Un cliente que siempre paga a los 45 días pagará a los 45 días.`,
          `Suma los cobros esperados por semana, compáralos con tus pagos conocidos y tendrás una imagen útil a cuatro o seis semanas vista. El valor está en ver un déficit mientras aún tienes opciones (facturar algo antes, pedirle a un cliente que pague por adelantado o aplazar una compra) en lugar de descubrirlo el mismo día.`,
        ],
      },
      {
        heading: `Lo que el libro revela sobre los clientes`,
        paragraphs: [
          `Revisados a lo largo de unos meses, los patrones se vuelven evidentes: quién paga a tiempo, a quién siempre hay que recordarle dos veces, quién discute algo de cada tres facturas. Esa información debería realimentar la forma en que fijas precios y estructuras el trabajo. Un cliente que paga sistemáticamente con 40 días de retraso es más caro de atender que uno que paga a tiempo, y esa diferencia puede reflejarse razonablemente en anticipos, condiciones o tarifas.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué es un informe de cuentas por cobrar por antigüedad?`,
        answer: `Es una lista de todas las facturas impagadas agrupadas según el tiempo que llevan pendientes, normalmente en tramos como aún no vencidas, de 1 a 30 días de retraso, de 31 a 60 y más de 60. Te dice de un vistazo cuánto dinero te deben, desde cuándo y qué clientes concentran los saldos más antiguos. Para la mayoría de las pequeñas empresas, es la vista financiera más útil que pueden mantener.`,
      },
      {
        question: `¿Cómo calculo mi plazo medio de cobro?`,
        answer: `En su versión sencilla, toma todas las facturas cobradas en los últimos meses, calcula los días entre la fecha de emisión y la fecha de pago de cada una y saca el promedio. Compara esa cifra con tus condiciones declaradas. Un negocio con condiciones a 14 días que promedia 38 no tiene un problema de condiciones; tiene un problema de proceso, y esa diferencia es lo que realmente puedes trabajar.`,
      },
      {
        question: `¿Qué facturas vencidas debo perseguir primero?`,
        answer: `No simplemente las más antiguas. Ordénalas según el importe en riesgo y lo recuperable que parezca cada una. Una factura grande con una semana de retraso de un cliente que siempre paga normalmente necesita un mensaje breve. Una factura pequeña de hace cuatro meses de un cliente que no responde puede exigir que decidas si sigues dedicándole tiempo. Ordenar por valor dentro de cada tramo de antigüedad te lleva rápido al orden correcto.`,
      },
      {
        question: `¿Cuándo debo dar una factura por deuda incobrable?`,
        answer: `Cuando el costo realista de la recuperación, incluido tu tiempo, supera lo que esperas cobrar. Es una decisión comercial y no un plazo fijo. El tratamiento contable y fiscal de una deuda dada de baja varía según la jurisdicción y conviene confirmarlo con un contador, porque en algunos sistemas el beneficio depende de que se cumplan y se documenten condiciones específicas.`,
      },
      {
        question: `¿Necesito un software de contabilidad para esto?`,
        answer: `No. Una hoja de cálculo con número de factura, cliente, fecha de emisión, fecha de vencimiento, importe y fecha de pago te da todo lo descrito aquí. El software ayuda cuando el volumen crece o cuando quieres que el informe se genere automáticamente, pero la disciplina de mantener el registro actualizado importa mucho más que la herramienta en la que lo guardes.`,
      },
    ],
    related: [
      `recuperacion-facturas-vencidas`,
      `registros-de-facturas-conservacion-y-auditoria`,
      `descuentos-por-pronto-pago-y-recargos-por-mora`,
    ],
  },
  {
    slug: `configuracion-de-facturacion-cliente-nuevo`,
    title: `Configuración de la facturación con un cliente nuevo: qué acordar antes de la primera factura`,
    description: `Los datos que debes recabar al aceptar a un cliente (razón social, contacto de facturación, proceso de órdenes de compra, fechas de los lotes de pago) y por qué cada uno evita un retraso más adelante.`,
    category: `Facturación a clientes`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Casi todos los retrasos de pago se crean antes de que exista la primera factura. Diez minutos de preguntas al inicio de un encargo eliminan la mayoría.`,
    image: {
      src: `/images/guides/client-billing-onboarding.svg`,
      alt: `Una lista de comprobación de configuración de facturación completada al inicio de un encargo con un cliente`,
    },
    intro: [
      `Facturación a clientes · 7 min de lectura`,
      `Casi todos los retrasos de pago se crean antes de que exista la primera factura. Diez minutos de preguntas al inicio de un encargo eliminan la mayoría.`,
      `![Una lista de comprobación de configuración de facturación completada al inicio de un encargo con un cliente](https://best-invoicegenerator.com/images/guides/client-billing-onboarding.svg)`,
      `Perseguir una factura es un trabajo costoso: lleva tiempo, es desagradable y ocurre justo en el momento en que menos quieres hablar de dinero con un cliente. La alternativa no es perseguir mejor. Es hacer una lista breve de preguntas antes de empezar a trabajar, cuando ambas partes están entusiasmadas y nada es polémico.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Un mensaje de incorporación de ejemplo`,
      body: `No hace falta que sea un formulario. Con un correo basta. Estas son las cosas que pide: - La razón social registrada completa y la dirección de facturación para las facturas. - La mejor dirección de correo para enviar las facturas (un buzón de cuentas por pagar, si lo tienen). - Si se emitirá una orden de compra y, cuando exista, su número. - Si hay un formulario de alta de proveedor que deba completar ya. - Las fechas de sus lotes de pago, si las facturas se procesan en un ciclo fijo.`,
      rows: [],
    },
    diagram: {
      title: `Configuración de la facturación con un cliente nuevo: qué acordar antes de la primera factura — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Por qué esta conversación es fácil al principio y difícil más tarde`,
        `Las preguntas que importan`,
        `Qué debes indicar tú a cambio`,
        `Valorar el riesgo de forma proporcionada`,
      ],
    },
    sections: [
      {
        heading: `Por qué esta conversación es fácil al principio y difícil más tarde`,
        paragraphs: [
          `Al comienzo de un encargo, las preguntas sobre facturación se interpretan como profesionalidad. El cliente acaba de decidir trabajar contigo, y alguien que pregunta cómo funciona su proceso de facturación parece alguien que ya ha pasado por esto.`,
          `Las mismas preguntas formuladas ocho semanas después, con una factura vencida, se interpretan como una acusación. La información es idéntica; el enfoque no.`,
        ],
      },
      {
        heading: `Las preguntas que importan`,
        paragraphs: [
          `**¿A quién estoy facturando exactamente?**`,
          `A la razón social legal registrada y su dirección de facturación, no al nombre comercial. Las grandes organizaciones suelen operar con muchas entidades de nombres casi idénticos, y aquella con la que tratas puede no ser la que firma el contrato. Facturar a la entidad equivocada es uno de los pocos errores que no se pueden parchear: normalmente significa anular y volver a emitir.`,
          `**¿Quién procesa las facturas y adónde van?**`,
          `Consigue un nombre y un correo, o la dirección del buzón de cuentas por pagar o del portal de proveedores. Enviar las facturas solo a tu contacto del día a día es una de las causas más comunes de que una factura nunca llegue a entrar en el sistema del cliente. Pon en copia a tu contacto, por supuesto, pero la factura debe llegar a quien realmente la procesa.`,
          `**¿Habrá una orden de compra?**`,
          `Si la respuesta es sí, necesitas el número antes de facturar, y tu factura debe citarlo exactamente. Si es no, pregunta qué referencia espera su proceso en su lugar: un número de contrato, un código de proyecto o el nombre de quien aprueba.`,
          `**¿Cuándo ejecutan los pagos?**`,
          `La pregunta que casi nadie hace y, a menudo, la que más importa. Muchas organizaciones pagan en fechas fijas, con una fecha de corte para presentar facturas unos días antes. Una factura enviada dos días después de la fecha de corte espera al siguiente ciclo, lo que puede suponer cuatro semanas más sin importar tus condiciones declaradas.`,
          `**¿Hay un proceso de alta de proveedor que completar?**`,
          `Formularios, verificación bancaria, controles de cumplimiento, registro en un portal. En las grandes organizaciones pueden llevar semanas, y una factura de un proveedor que todavía no está dado de alta no se puede pagar. Empieza esto al inicio del encargo, no cuando venza la primera factura.`,
          `**¿Qué necesitan que figure en la factura?**`,
          `Números de identificación fiscal, centros de costo, códigos de proyecto, redacciones concretas. Incluirlo es barato si lo sabes; descubrirlo después de que rechacen una factura es caro.`,
        ],
      },
      {
        heading: `Qué debes indicar tú a cambio`,
        paragraphs: [
          `La incorporación funciona en ambos sentidos. Confirma por escrito:`,
          `- Tus condiciones de pago y cómo se calcula la fecha de vencimiento.`,
          `- Tu ritmo de facturación: al terminar, mensualmente por periodo vencido o por hitos.`,
          `- Qué es facturable además de tus honorarios y los umbrales de aprobación de gastos.`,
          `- Cualquier anticipo y qué desencadena.`,
          `- Cómo se fija el precio de los cambios de alcance, la mayor fuente de disputas posteriores.`,
          `- Tus datos bancarios, y que nunca cambiarán por correo electrónico. Dilo una vez al principio y protege a ambas partes frente a una suplantación posterior.`,
        ],
      },
      {
        heading: `Valorar el riesgo de forma proporcionada`,
        paragraphs: [
          `La diligencia que conviene aplicar depende de a qué estés expuesto:`,
          `- **Trabajo pequeño, pagadero al terminar:** con las preguntas anteriores es suficiente.`,
          `- **Proyecto grande con costos iniciales:** añade un anticipo y considera una comprobación básica de cuánto tiempo lleva operando la empresa y de si sus registros públicos están al día.`,
          `- **Encargo largo con un cliente nuevo:** escalona la facturación para no tener nunca sin cobrar más del trabajo de un periodo.`,
          `- **Cualquier cliente que se resista a confirmar datos básicos de facturación:** trata la propia resistencia como información.`,
        ],
      },
      {
        heading: `Conserva el registro`,
        paragraphs: [
          `Guarda las respuestas en un lugar donde de verdad vayas a mirar: razón social, correo de facturación, requisito de orden de compra, fechas de los lotes de pago, condiciones acordadas. Revísalo siempre que cambie tu contacto, porque los contactos de facturación rotan con frecuencia y una factura enviada a alguien que se fue hace seis meses no llega tarde: es invisible.`,
          `Nada de esto es complicado. Simplemente se hace al principio, y por eso tantas veces se omite, y por eso mismo las empresas que lo hacen de manera constante dedican mucho menos tiempo a perseguir cobros.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué datos de facturación debo recopilar de un cliente nuevo?`,
        answer: `Como mínimo: la razón social legal registrada exacta y la dirección de facturación, el nombre y el correo de quien procesa las facturas, cualquier número de identificación fiscal que necesiten que figure, si se emitirá una orden de compra y adónde deben enviarse las facturas. En el caso de organizaciones más grandes, pregunta también por las fechas de los lotes de pago y las fechas de corte de presentación, ya que a menudo determinan cuándo cobras más que tus condiciones.`,
      },
      {
        question: `¿Por qué importa el nombre legal exacto de la entidad?`,
        answer: `Porque una factura dirigida a la entidad equivocada a menudo no se puede pagar en absoluto, y corregirla suele significar anularla y volver a emitirla en lugar de editarla. Las grandes organizaciones operan con frecuencia muchas entidades registradas con nombres parecidos, y la marca con la que tratas puede no ser la que firma el contrato. Pregunta qué entidad contrata y confírmalo por escrito.`,
      },
      {
        question: `¿Debo hacer una consulta de solvencia a un cliente nuevo?`,
        answer: `Es proporcionado en encargos grandes o cuando asumes costos iniciales significativos. En la mayoría de los mercados hay informes de crédito formales, pero unas comprobaciones más sencillas ayudan mucho: cuánto tiempo llevan operando, si sus registros públicos están al día y si otros proveedores dicen que cobran a tiempo. En los trabajos pequeños, un anticipo te da más protección que un informe.`,
      },
      {
        question: `¿Y si el cliente me pide que complete sus formularios de alta de proveedor?`,
        answer: `Complétalos antes de empezar a trabajar, no cuando venza tu primera factura. El alta de proveedores en las grandes organizaciones puede llevar varias semanas, y una factura de un proveedor que todavía no está dado de alta en su sistema no se puede pagar por muy correcta que sea. Trata el formulario de alta como parte del encargo, no como un papeleo que resolver más tarde.`,
      },
      {
        question: `¿Cómo hago estas preguntas sin parecer desconfiado?`,
        answer: `Plantéalas como una configuración y no como un escrutinio. Un mensaje breve que diga que quieres asegurarte de que las facturas llegan al lugar correcto y se procesan sin problemas suena a orden, no a sospecha. A la mayoría de los contactos de facturación les alivia que se les pregunte, porque las facturas de proveedores que llegan mal dirigidas también les dan trabajo a ellos.`,
      },
    ],
    related: [
      `orden-de-compra-y-conciliacion-de-tres-vias`,
      `anticipos-y-pagos-adelantados`,
      `fraude-con-facturas`,
    ],
  },
  {
    slug: `anticipos-y-pagos-adelantados`,
    title: `Anticipos y pagos adelantados: cuánto pedir y cómo facturarlos`,
    description: `Cómo fijar un anticipo que te proteja sin que pierdas el trabajo, cómo redactar la solicitud y cómo encajan la factura de anticipo y la final.`,
    category: `Cobros`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Un anticipo no es un porcentaje que eliges porque lo usa todo el mundo. Es una cifra que debe corresponder a algo concreto: lo que pierdes si el trabajo se detiene después de haber empezado.`,
    image: {
      src: `/images/guides/deposits-advance-payments.svg`,
      alt: `Una factura de anticipo seguida de una factura final que muestra el anticipo descontado del saldo`,
    },
    intro: [
      `Cobros · 7 min de lectura`,
      `Un anticipo no es un porcentaje que eliges porque lo usa todo el mundo. Es una cifra que debe corresponder a algo concreto: lo que pierdes si el trabajo se detiene después de haber empezado.`,
      `![Una factura de anticipo seguida de una factura final que muestra el anticipo descontado del saldo](https://best-invoicegenerator.com/images/guides/deposits-advance-payments.svg)`,
      `La mayoría de los problemas de pagos tardíos se intentan resolver al final, con recordatorios y escaladas. Los anticipos resuelven otro problema desde el principio: eliminan la situación en la que has entregado todo lo que debías y el cliente no ha entregado nada.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un carpintero presupuesta 9,200 por una cocina a medida instalada: 5,000 en materiales y 4,200 en mano de obra a lo largo de tres semanas. 1. Un anticipo fijo del 50 % serían 4,600, menos que la factura de materiales. En su lugar, el presupuesto indica: materiales completos (5,000) al aceptar y saldo de 4,200 al terminar. 2. El cliente ve exactamente para qué es el dinero, por lo que la cifra mayor resulta más fácil de aceptar que un porcentaje menor sin explicar. El carpintero nunca se queda sin cubrir los materiales. La factura de anticipo JW-2026-031 se emite al aceptar; la factura final JW-2026-047 muestra 9,200, menos 5,000 recibidos el 2 de septiembre, con un saldo de 4,200.`,
      rows: [],
    },
    diagram: {
      title: `Anticipos y pagos adelantados: cuánto pedir y cómo facturarlos — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Para qué sirve realmente un anticipo`,
        `Fijar el importe`,
        `Pedirlo sin fricción`,
        `La documentación`,
      ],
    },
    sections: [
      {
        heading: `Para qué sirve realmente un anticipo`,
        paragraphs: [
          `Bajo una misma palabra se agrupan tres propósitos distintos, y cada uno justifica un importe diferente:`,
          `- **Cubrir costos comprometidos.** Materiales, subcontratistas, licencias de software, viajes. Dinero que gastas antes de cobrar y que no puedes recuperar si el proyecto se detiene.`,
          `- **Cubrir la capacidad comprometida.** Tiempo que has reservado y por el que has rechazado otros trabajos.`,
          `- **Establecer compromiso.** Un cliente que ha pagado algo se comporta de otra manera que uno que no. La ampliación descontrolada del alcance, la lentitud en los comentarios y las desapariciones silenciosas disminuyen de forma notable.`,
          `Tener claro cuál de estos casos se aplica facilita la conversación, porque puedes explicar la cifra en lugar de tener que defenderla.`,
        ],
      },
      {
        heading: `Fijar el importe`,
        paragraphs: [
          `En lugar de partir de un porcentaje, parte de tu exposición y calcula hacia atrás.`,
          `**Trabajo con costos directos:**`,
          `Si estás comprando materiales o pagando a subcontratistas, el anticipo debe cubrir como mínimo esos costos comprometidos más una parte de tus honorarios. Un cliente que lo cuestiona suele aceptarlo cuando ve el desglose: «materiales 2,400 más el 20 % de los honorarios» es mucho más persuasivo que «50 %».`,
          `**Trabajo basado en tiempo:**`,
          `Cuando tu principal aportación es tu propio tiempo, la exposición es el trabajo que rechazas. Un anticipo de aproximadamente una fase del proyecto, o del primer mes de un encargo largo, suele ser defendible.`,
          `**Trabajo con fecha reservada:**`,
          `En todo aquello en lo que reservas una fecha concreta (eventos, sesiones fotográficas, instalaciones), el anticipo está comprando la fecha. Debe reflejar lo que vale esa fecha, porque no puedes revenderla a última hora.`,
          `Los rangos habituales se sitúan entre el 25 y el 50 %, pero tómalos como una comprobación de sensatez, no como punto de partida. Los clientes nuevos, los plazos de entrega largos y un alto impacto de las cancelaciones empujan la cifra al alza. Los clientes consolidados con buen historial de pagos pueden justificar razonablemente una cifra menor.`,
        ],
      },
      {
        heading: `Pedirlo sin fricción`,
        paragraphs: [
          `La forma de presentar un anticipo importa más que el importe. Algunas cosas ayudan de manera constante:`,
          `- **Plantéalo en el presupuesto, no después de que lo acepten.** Un anticipo que aparece por primera vez cuando el cliente ya ha dicho que sí se siente como un cambio de condiciones.`,
          `- **Preséntalo como una práctica estándar.** «Los proyectos comienzan al recibir el anticipo» es lo normal. «¿Podrías pagar algo por adelantado?» invita a negociar.`,
          `- **Vincúlalo a la fecha de inicio.** El anticipo es lo que activa la programación, lo que lo convierte en un paso del cliente y no en un obstáculo que le has impuesto.`,
          `- **Explica qué cubre** si la cifra es grande o el cliente no está acostumbrado a trabajar así.`,
          `- **Facilita el pago.** Una factura de anticipo con un enlace de pago le quita días al comienzo del proyecto.`,
        ],
      },
      {
        heading: `La documentación`,
        paragraphs: [
          `Dos documentos, en este orden:`,
          `**1. La factura de anticipo:**`,
          `Una factura real, con su propio número dentro de tu secuencia habitual, una fecha de vencimiento y una línea que describa qué es: «Anticipo — 40 % del valor del proyecto, proyecto de identidad de marca». No solo «Anticipo», que a un equipo de finanzas no le dice nada.`,
          `Si el proceso del cliente exige un documento antes de que se deba nada, envía en su lugar una factura proforma y sigue con la factura cuando se comprometa.`,
          `**2. La factura final:**`,
          `Muestra el panorama completo, no solo el saldo:`,
          `- El valor total del proyecto desglosado en líneas.`,
          `- Una línea de deducción: «Menos anticipo pagado, factura NS-2026-088, recibido el 12 de septiembre».`,
          `- El saldo a pagar, con su propia fecha de vencimiento.`,
          `Facturar solo el saldo sin ninguna explicación es el error más común con los anticipos. Tus registros muestran 4,800 de ingresos repartidos en dos facturas; los del cliente muestran una factura de 2,880 y un pago que quizá haya archivado como algo totalmente distinto.`,
        ],
      },
      {
        heading: `Reembolso y cancelación`,
        paragraphs: [
          `Decide tu postura antes de cobrar el dinero, déjala escrita en el presupuesto y repítela en la factura de anticipo. Una opción razonable por defecto es que el anticipo sea reembolsable hasta que comience el trabajo o se comprometan costos, y no reembolsable a partir de ese momento, ya que es entonces cuando has perdido algo de verdad.`,
          `Dos advertencias. Primera: las normas de protección al consumidor de muchos países limitan lo que una empresa puede retener a un consumidor, y una cláusula abusiva puede no ser exigible diga lo que diga. Segunda: si conservas anticipos de trabajos muy lejanos en el tiempo, pide asesoramiento sobre cómo deben tratarse en tu contabilidad, porque el dinero recibido pero aún no devengado no es lo mismo que un ingreso.`,
        ],
      },
      {
        heading: `Cuándo un anticipo no es la herramienta adecuada`,
        paragraphs: [
          `- **Grandes organizaciones con políticas de no pagar por adelantado.** No es una señal de alarma, solo una limitación. Propón en su lugar un primer hito corto, entregado en dos semanas y facturado de inmediato.`,
          `- **Clientes consolidados que pagan con fiabilidad.** Añadir un anticipo a una buena relación aporta poco y puede leerse como desconfianza.`,
          `- **Trabajos muy pequeños en los que la gestión cuesta más que el riesgo.**`,
          `La pregunta de fondo es siempre la misma: si esto se detuviera mañana, ¿qué habría gastado que no pueda recuperar? Responde a eso con honestidad y el anticipo adecuado suele ser evidente.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Cuánto anticipo debo pedir?`,
        answer: `Fíjalo en función de lo que perderías realmente si el cliente se echara atrás después de que empieces. Un rango habitual es del 25 al 50 %, pero el ancla útil es tu propia exposición: si compras materiales o reservas un mes de capacidad, el anticipo debe cubrir eso, no un porcentaje redondo. En proyectos con costos iniciales elevados, pedir la parte de costos completa más una parte de los honorarios es razonable y fácil de justificar.`,
      },
      {
        question: `¿Debe ser reembolsable un anticipo?`,
        answer: `Decídelo antes de cobrarlo y déjalo por escrito. Lo habitual es que un anticipo pase a ser no reembolsable una vez que empiezas a trabajar o te comprometes a costos, porque en ese momento has perdido algo de verdad. Un anticipo cobrado únicamente para reservar una fecha es un caso distinto. Las normas de protección al consumidor de algunos países limitan lo que se puede retener, así que comprueba lo que se aplica en lugar de dar por hecho que una cláusula es exigible.`,
      },
      {
        question: `¿Facturo el anticipo o envío una proforma?`,
        answer: `Cualquiera de las dos sirve, y la elección depende de lo que necesite el cliente. Una factura de anticipo es una factura real con fecha de vencimiento, lo que es adecuado cuando el anticipo se debe por contrato. Una proforma es lo indicado cuando el cliente necesita un documento para obtener una aprobación interna antes de que se deba nada. Si tienes dudas, pregúntale al cliente cuál espera su proceso de finanzas.`,
      },
      {
        question: `¿Cómo muestro el anticipo en la factura final?`,
        answer: `Muestra el valor total del proyecto, después una línea de deducción claramente rotulada que haga referencia al número de la factura de anticipo y a la fecha en que se pagó y, por último, el saldo a pagar. Nunca factures solo el saldo sin explicación, porque los registros del cliente mostrarán un total que no coincide con el tuyo y la diferencia saldrá a la luz al cierre del año.`,
      },
      {
        question: `¿Qué hago si un cliente se niega a pagar un anticipo?`,
        answer: `Averigua por qué antes de ceder. Algunas grandes organizaciones no pueden pagar antes de la entrega por política, lo que es una limitación de proceso y no una señal sobre el cliente. En ese caso, un primer hito corto funciona mejor que un anticipo. Si un cliente pequeño simplemente no quiere, considera su reticencia como información sobre cómo es probable que vaya el resto de la relación de pago.`,
      },
    ],
    related: [
      `facturacion-por-hitos-contratistas`,
      `factura-proforma`,
      `condiciones-de-pago`,
    ],
  },
  {
    slug: `envio-de-la-factura-por-correo`,
    title: `Envío de la factura: asuntos de correo, destinatarios y momento oportuno`,
    description: `Una factura correcta enviada de mala manera se sigue pagando tarde. Cómo nombrar el archivo, redactar el asunto, elegir a los destinatarios y decidir el momento del envío.`,
    category: `Cobros`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Una factura perfecta enviada a la persona equivocada, con un asunto vago y un archivo llamado documento1.pdf, se paga tarde. El envío no es un añadido al documento: es la mitad de él.`,
    image: {
      src: `/images/guides/invoice-email-delivery.svg`,
      alt: `Un correo de factura con un asunto fácil de buscar y un PDF adjunto con un nombre claro`,
    },
    intro: [
      `Cobros · 6 min de lectura`,
      `Una factura perfecta enviada a la persona equivocada, con un asunto vago y un archivo llamado documento1.pdf, se paga tarde. El envío no es un añadido al documento: es la mitad de él.`,
      `![Un correo de factura con un asunto fácil de buscar y un PDF adjunto con un nombre claro](https://best-invoicegenerator.com/images/guides/invoice-email-delivery.svg)`,
      `La mayoría de los consejos para cobrar se centran en la factura en sí. Pero una factura que nunca llega a la persona que procesa las facturas no llega tarde: es invisible, y ninguna cantidad de condiciones de pago bien redactadas te ayudará.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Envío de la factura: asuntos de correo, destinatarios y momento oportuno en la práctica`,
      body: `Una factura perfecta enviada a la persona equivocada, con un asunto vago y un archivo llamado documento1.pdf, se paga tarde. El envío no es un añadido al documento: es la mitad de él. | Campo | Contenido | |---|---| | Requisito | Cumplimiento y documentación claros | | Acción | Seguir las convenciones habituales de facturación y confirmarlas con el cliente |`,
      rows: [],
    },
    diagram: {
      title: `Envío de la factura: asuntos de correo, destinatarios y momento oportuno — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Envíala al lugar correcto`,
        `Redacta un asunto pensado para la búsqueda, no para la conversación`,
        `Ponle un nombre adecuado al archivo`,
        `Mantén breve el mensaje de acompañamiento`,
      ],
    },
    sections: [
      {
        heading: `Envíala al lugar correcto`,
        paragraphs: [
          `El fallo de envío más común es mandar la factura solo a tu contacto del día a día. A esa persona no la contrataron para procesar facturas; tiene su propio trabajo, y reenviar la tuya compite con todo lo demás.`,
          `- **Destinatario principal:** el buzón de cuentas por pagar o un contacto de finanzas con nombre.`,
          `- **En copia:** tu contacto del proyecto, para que sepa que se ha enviado y pueda desbloquear lo que haga falta.`,
          `- **Clientes con portal:** presenta la factura a través del portal y envía una copia por correo solo si ese es su proceso indicado.`,
          `Si no sabes adónde deben ir las facturas, es una pregunta para el inicio del encargo, no para el final del mes.`,
        ],
      },
      {
        heading: `Redacta un asunto pensado para la búsqueda, no para la conversación`,
        paragraphs: [
          `Los equipos de finanzas viven en las búsquedas y los filtros. Reciben decenas de facturas al día y volverán a buscar la tuya semanas después. En ese contexto, un asunto simpático es un inconveniente.`,
          `- Débil: «Seguimiento del proyecto»`,
          `- Débil: «Aquí tienes la factura :)»`,
          `- Bueno: «Factura NS-2026-151 de Northside Studio — vence el 22 de septiembre»`,
          `- Bueno, con orden de compra: «Factura NS-2026-151 — OC 4500219883 — Northside Studio»`,
          `Cuatro elementos hacen el trabajo: la palabra «Factura», el número, el nombre de tu negocio y la fecha de vencimiento o la referencia de la orden de compra. Ese asunto se encuentra con cualquiera de esos términos.`,
        ],
      },
      {
        heading: `Ponle un nombre adecuado al archivo`,
        paragraphs: [
          `El adjunto se descargará, se archivará y quizá se abra meses después sin ningún contexto alrededor. Un nombre como factura.pdf se convierte en factura(3).pdf en la carpeta de descargas de alguien y, en la práctica, queda perdido.`,
          `Usa: \`Factura_NS-2026-151_Northside-Studio.pdf\``,
          `Añade el número de la orden de compra cuando exista. Algunos sistemas leen el nombre del archivo durante la ingesta, y cualquier persona que lo archive agradecerá no tener que renombrarlo.`,
        ],
      },
      {
        heading: `Mantén breve el mensaje de acompañamiento`,
        paragraphs: [
          `El cuerpo del correo tiene un solo trabajo: permitir que quien lo lee actúe sin abrir el adjunto. Cuatro líneas:`,
          `> Hola Sam:`,
          `>`,
          `> Adjunto la factura NS-2026-151 por el trabajo de la campaña de septiembre, por un importe de 3,600, con vencimiento el 22 de septiembre de 2026. La orden de compra 4500219883 figura en la factura.`,
          `>`,
          `> Los datos de pago están en la factura; por favor, usa NS-2026-151 como referencia. Avísame si necesitas algo más para procesarla.`,
          `>`,
          `> Gracias,`,
          `> Alex`,
          `Lo que hace que funcione: el importe y la fecha de vencimiento se ven sin abrir nada, la referencia se indica de forma explícita y la frase final invita a una respuesta rápida si falta algo, en lugar de a una retención silenciosa.`,
          `Qué dejar fuera: las disculpas por enviar una factura, los largos resúmenes del trabajo y cualquier cosa que haga que un documento rutinario parezca una imposición. No estás pidiendo un favor.`,
        ],
      },
      {
        heading: `El momento del envío`,
        paragraphs: [
          `Envíala en cuanto se produzca el hecho de facturación. El retraso es la causa autoinfligida más común de los pagos tardíos, y una factura que llega semanas después del trabajo también da la señal de que no lo estás siguiendo de cerca.`,
          `El día de la semana importa mucho menos de lo que se suele pensar. El único factor de tiempo que realmente cambia cuándo cobras es la fecha de corte del lote de pagos del cliente. Si un cliente ejecuta los pagos el día 25 con un plazo de aprobación de diez días, una factura que llega el día 20 espera al mes siguiente, sin importar tus condiciones. Pregúntalo una vez y organiza tus envíos en torno a esa fecha.`,
        ],
      },
      {
        heading: `Confirma que llegó`,
        paragraphs: [
          `Las facturas enviadas por correo fallan en silencio con más frecuencia de la que la mayoría cree: filtros de spam, buzones llenos, reglas de las pasarelas y contactos que ya se han ido. Un breve hábito de confirmación cuesta poco:`,
          `- Anota la fecha de envío en tu libro, junto a la factura.`,
          `- Si no hay ningún acuse de recibo en unos días, envía una nota breve para preguntar si se recibió y si está en el proceso de aprobación. Esto no es perseguir: la factura todavía no ha vencido.`,
          `- Si un contacto ha cambiado, actualiza tu registro de inmediato, porque la siguiente factura fallará de la misma forma.`,
          `Esa única comprobación, hecha antes de la fecha de vencimiento y no después, convierte la mayoría de los fallos silenciosos en un retraso de dos días en lugar de dos meses.`,
        ],
      },
    ],
    faq: [
      {
        question: `¿Qué debe decir el asunto de un correo de factura?`,
        answer: `Incluye la palabra «Factura», el número de factura, el nombre de tu negocio y la fecha de vencimiento. Algo como «Factura NS-2026-151 de Northside Studio, vence el 22 de septiembre» funciona porque se puede buscar, ordenar y se explica por sí solo. Evita los asuntos conversacionales, ya que los equipos de cuentas suelen filtrar y buscar más que leer, y un asunto simpático es más difícil de encontrar tres semanas después.`,
      },
      {
        question: `¿A quién debo enviar la factura?`,
        answer: `Envíala a quien realmente procesa las facturas (un buzón de cuentas por pagar o un contacto de finanzas con nombre) y pon en copia a tu contacto del día a día. Enviarla solo a tu contacto del proyecto es una de las causas más comunes de que una factura nunca entre en el sistema del cliente, porque reenviarla depende de que se acuerde de hacerlo mientras está ocupado con otra cosa.`,
      },
      {
        question: `¿Debo poner la factura en el cuerpo del correo o adjuntarla?`,
        answer: `Adjúntala como PDF. Muchos sistemas de cuentas por pagar ingieren automáticamente los adjuntos y no pueden procesar una factura pegada en el cuerpo de un correo. Resume los datos clave en el cuerpo (número, importe, fecha de vencimiento) para que una persona pueda actuar sin abrir el archivo, pero el documento es el adjunto.`,
      },
      {
        question: `¿Cómo debo nombrar el archivo de la factura?`,
        answer: `Usa un nombre que la identifique sin contexto, como Factura_NS-2026-151_Northside-Studio.pdf. Si el cliente usa órdenes de compra, incluye también el número de la orden. Los nombres genéricos como factura.pdf o documento1.pdf se pierden en una carpeta de descargas y hacen que el archivo sea inútil como registro para ambas partes.`,
      },
      {
        question: `¿Cuál es el mejor momento para enviar una factura?`,
        answer: `En cuanto se produzca el hecho de facturación: la entrega, un hito o el cierre del periodo. La rapidez importa mucho más que el día de la semana. El único factor de tiempo que realmente cambia cuándo cobras es la fecha de corte del lote de pagos del cliente, así que, si procesan los pagos por ciclos, averigua la fecha de corte y asegúrate de que tu factura llegue antes.`,
      },
    ],
    related: [
      `lista-verificacion-factura`,
      `configuracion-de-facturacion-cliente-nuevo`,
      `generacion-factura-pdf`,
    ],
  },
  {
    slug: `lineas-de-factura-que-se-aprueben-sin-preguntas`,
    title: `Cómo redactar líneas de factura que se aprueben sin preguntas`,
    description: `Cómo describir el trabajo en una factura para que quien la aprueba, aunque no lo haya encargado, pueda darle el visto bueno: nivel de detalle, redacción y ejemplos prácticos de antes y después.`,
    category: `Fundamentos de facturación`,
    readingTime: `6 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo describir el trabajo en una factura para que quien la aprueba, aunque no lo haya encargado, pueda darle el visto bueno: nivel de detalle, redacción y ejemplos prácticos de antes y después.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Cómo redactar líneas de factura que se aprueben sin preguntas`,
    },
    intro: [
      `La persona que aprueba tu factura muchas veces no es quien te contrató. Escribe las líneas pensando en ella y la mayoría de las consultas sobre el pago dejarán de aparecer.`,
      `![Una línea de factura vaga reescrita como una descripción específica y verificable](https://best-invoicegenerator.com/images/guides/invoice-line-item-descriptions.svg)`,
      `Una línea de factura tiene una sola función: permitir que alguien confirme que ese cargo es legítimo. Si lo logra, la factura avanza. Si no, vuelve a tu contacto con una pregunta y pierdes una semana, a veces un ciclo de pago completo.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Cómo redactar líneas de factura que se aprueben sin preguntas, en la práctica`,
      body: `La persona que aprueba tu factura muchas veces no es quien te contrató. Escribe las líneas pensando en ella y la mayoría de las consultas sobre el pago dejarán de aparecer. Cumplimiento y documentación claros Seguir las convenciones de facturación habituales y confirmarlas con el cliente`,
      rows: [
        [
          `Requisito`,
          `Cumplimiento y documentación claros`,
        ],
        [
          `Acción a seguir`,
          `Seguir las convenciones de facturación habituales y confirmarlas con el cliente`,
        ],
      ],
    },
    diagram: {
      title: `Cómo redactar líneas de factura que se aprueben sin preguntas: flujo de trabajo`,
      caption: undefined,
      steps: [
        `Escribe para quien aprueba, no para el cliente`,
        `Qué contiene una buena línea`,
        `Cómo encontrar el nivel de detalle adecuado`,
        `Antes y después`,
      ],
    },
    sections: [
      {
        heading: `Escribe para quien aprueba, no para el cliente`,
        paragraphs: [
          `Tu contacto del día a día sabe exactamente qué hiciste. Con frecuencia, no es quien autoriza el pago. Quien aprueba puede ser un gerente de finanzas, el director de un área o un sistema que cruza tu factura con una orden de compra, y ninguno de ellos participó en el proyecto.`,
          `Por eso la prueba para cada línea es esta: ¿podría verificarla alguien que no estuvo involucrado? No «¿es exacta?» —la exactitud se da por sentada—, sino «¿se puede comprobar?».`,
          `«Servicios de consultoría — 8400» es exacto, pero no verificable. «Revisión operativa: mapeo de procesos, entrevistas al personal y recomendaciones por escrito, agosto de 2026 — 8400» es ambas cosas.`,
        ],
      },
      {
        heading: `Qué contiene una buena línea`,
        paragraphs: [
          `No todas las líneas necesitan los cuatro elementos. Un entregable de precio fijo requiere una descripción clara y poco más; un cargo por horas requiere cantidad y tarifa; un gasto refacturado requiere una fecha y un motivo.`,
          `- ✓ **Qué se entregó**, en el lenguaje del cliente y no en tu jerga interna`,
          `- ✓ **Cuándo**, si una fecha o un período ayuda a ubicarlo`,
          `- ✓ **Cuánto**, como cantidad y tarifa cuando el cargo se calcula por unidad`,
          `- ✓ **Una referencia**, si existe: línea de la orden de compra, hito, código de proyecto`,
        ],
        checklist: [
          `**Qué se entregó**, en el lenguaje del cliente y no en tu jerga interna`,
          `**Cuándo**, si una fecha o un período ayuda a ubicarlo`,
          `**Cuánto**, como cantidad y tarifa cuando el cargo se calcula por unidad`,
          `**Una referencia**, si existe: línea de la orden de compra, hito, código de proyecto`,
        ],
      },
      {
        heading: `Cómo encontrar el nivel de detalle adecuado`,
        paragraphs: [
          `Ambos extremos causan problemas.`,
          `Con muy poco detalle, quien aprueba no tiene nada que verificar, así que solo puede aprobar a ciegas o preguntarte. La mayoría de las organizaciones ha enseñado a su gente a no aprobar a ciegas.`,
          `Con demasiado detalle, el fallo es otro. Cuarenta filas de una hoja de horas invitan al lector a buscar algo que objetar y convierten una sola decisión de aprobación en cuarenta decisiones pequeñas. Detalle no es lo mismo que transparencia.`,
          `En la mayoría del trabajo profesional, el rango útil está entre tres y ocho líneas: suficiente estructura para mostrar en qué se fue el dinero, sin llegar a convertirlo en una negociación.`,
        ],
      },
      {
        heading: `Antes y después`,
        paragraphs: [
          `**Trabajo de diseño:**`,
          `- Débil: «Diseño — 3200»`,
          `- Mejor: «Identidad de marca: logotipo principal, dos variantes y manual de uso — 2400» y «Diseño de papelería: tarjeta de presentación, hoja membretada y firma de correo — 800»`,
          `**Trabajo de desarrollo:**`,
          `- Débil: «Desarrollo, septiembre — 6800»`,
          `- Mejor: «Reconstrucción del flujo de pago (checkout), 48 horas a 100 — 4800» y «Integración y pruebas de la pasarela de pago, 20 horas a 100 — 2000»`,
          `**Trabajo de oficios:**`,
          `- Débil: «Mano de obra y materiales — 4150»`,
          `- Mejor: «Mano de obra: instalación de baño, 3 días a 450 — 1350», «Materiales: sanitarios y accesorios según la cotización Q-2026-018 — 2600» y «Retiro y eliminación de residuos — 200»`,
          `**Trabajo por iguala:**`,
          `- Débil: «Iguala mensual — 2500»`,
          `- Mejor: «Iguala de marketing, período de servicio del 1 al 30 de septiembre de 2026: producción de contenido, gestión de campañas e informe mensual — 2500»`,
          `El patrón es constante: nombra el entregable, agrega el período y muestra el cálculo cuando lo haya.`,
        ],
      },
      {
        heading: `Que coincida con lo aprobado`,
        paragraphs: [
          `Siempre que exista una cotización o una orden de compra, replica su redacción y su estructura de líneas. Quien aprueba compara las facturas con el documento que autorizó el gasto, y una diferencia de redacción hace fallar esa comprobación aunque el total sea correcto.`,
          `Esto importa sobre todo con las órdenes de compra, donde el cruce puede ser automático. Una orden de compra de tres líneas y una factura con una sola línea de resumen no van a conciliar, por muy clara que esté redactada esa línea.`,
        ],
      },
      {
        heading: `Cómo manejar los extras y los cambios de alcance`,
        paragraphs: [
          `El trabajo adicional es donde se origina la mayoría de las consultas sobre facturas, porque quien aprueba no tiene ningún registro de él. Dos cosas lo resuelven:`,
          `- ✓ Cita la autorización en la propia línea: «Plantillas de página adicionales, 4 a 200, aprobadas por correo el 9 de septiembre — 800».`,
          `- ✓ Separa visualmente los extras del alcance acordado, con su propio subtotal, para que quien aprueba vea que el precio original no cambió.`,
          `Un extra que indica quién lo aprobó y cuándo rara vez se cuestiona. Ese mismo cargo escondido entre las líneas acordadas casi siempre se cuestiona.`,
        ],
        checklist: [
          `Cita la autorización en la propia línea: «Plantillas de página adicionales, 4 a 200, aprobadas por correo el 9 de septiembre — 800».`,
          `Separa visualmente los extras del alcance acordado, con su propio subtotal, para que quien aprueba vea que el precio original no cambió.`,
        ],
      },
      {
        heading: `Una revisión rápida antes de enviar`,
        paragraphs: [
          `Lee tu factura como alguien que nunca ha oído hablar del proyecto. ¿Se entiende qué se compró? ¿Se ve de dónde sale cada cifra? ¿Hay alguna línea sobre la que tendrías que preguntar?`,
          `Si una línea no pasa esa prueba, volverá convertida en pregunta. Reescribirla toma treinta segundos ahora y te ahorra una semana después.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `lista-verificacion-factura`,
      `orden-de-compra-y-conciliacion-de-tres-vias`,
      `facturas-en-disputa-y-pagos-incompletos`,
    ],
  },
  {
    slug: `facturar-sin-empresa-registrada`,
    title: `Facturar sin una empresa registrada: tu primera factura`,
    description: `Qué poner en una factura cuando no tienes número de registro de empresa, cómo proyectar una imagen profesional desde el primer trabajo y qué datos debes cuidar de todos modos.`,
    category: `Freelancers y servicios`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Qué poner en una factura cuando no tienes número de registro de empresa, cómo proyectar una imagen profesional desde el primer trabajo y qué datos debes cuidar de todos modos.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturar sin una empresa registrada: tu primera factura`,
    },
    intro: [
      `No necesitas una empresa para enviar una factura. Sí necesitas que el proceso de pago del cliente la acepte, y eso depende sobre todo de completar bien unos pocos campos.`,
      `![Una primera factura limpia emitida por una persona física, con nombre legal, referencia y datos de pago](https://best-invoicegenerator.com/images/guides/invoicing-without-registered-business.svg)`,
      `La primera factura intimida sobre todo por los campos que no puedes llenar. Hay una casilla para el número de empresa y no tienes uno. Hay una línea para el domicilio social y trabajas desde la mesa de la cocina. Sientes que estás fingiendo.`,
      `No es así. Una factura es, simplemente, una solicitud de pago que identifica quién le cobra a quién, por qué concepto y cómo pagar. Las personas que trabajan por cuenta propia las emiten constantemente, y la mayoría de los clientes no notará nada fuera de lo común mientras el documento esté completo y sea coherente.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `El primer trabajo comercial de una fotógrafa, realizado para un restaurante local:`,
      rows: [],
    },
    diagram: {
      title: `Facturar sin una empresa registrada: flujo de trabajo`,
      caption: undefined,
      steps: [
        `Qué verificar antes de facturar`,
        `Qué va en la factura`,
        `Cómo proyectar solidez sin fingir`,
        `Registros desde la primera factura`,
      ],
    },
    sections: [
      {
        heading: `Qué verificar antes de facturar`,
        paragraphs: [
          `La factura es la parte fácil. Lo que varía según el país, y que de verdad importa, es tu propia situación:`,
          `- ✓ ¿Necesitas registrarte como trabajador independiente y en qué plazo desde que empiezas?`,
          `- ✓ ¿Necesitas un número de identificación fiscal que figure en las facturas?`,
          `- ✓ ¿Existe un umbral de registro para el impuesto sobre las ventas o el IVA y dónde estás tú respecto de él?`,
          `- ✓ ¿Hay restricciones sobre el nombre con el que puedes operar?`,
          `- ✓ ¿Se aplica alguna licencia a tu actividad concreta?`,
          `Estas preguntas tienen respuestas locales, no universales, y por eso esta guía no da cifras. Averígualo una sola vez, al principio: suele bastar una conversación breve con un contador o una hora en un sitio web oficial, y elimina la ansiedad de fondo que de otro modo persiste durante meses.`,
        ],
        checklist: [
          `¿Necesitas registrarte como trabajador independiente y en qué plazo desde que empiezas?`,
          `¿Necesitas un número de identificación fiscal que figure en las facturas?`,
          `¿Existe un umbral de registro para el impuesto sobre las ventas o el IVA y dónde estás tú respecto de él?`,
          `¿Hay restricciones sobre el nombre con el que puedes operar?`,
          `¿Se aplica alguna licencia a tu actividad concreta?`,
        ],
      },
      {
        heading: `Qué va en la factura`,
        paragraphs: [
          `**Quién eres:**`,
          `Tu nombre legal completo, una dirección, un correo electrónico y un número de teléfono. Si operas bajo un nombre comercial y tu país lo permite, muestra el nombre comercial de forma destacada y tu nombre legal debajo: el cliente necesita saber con quién está contratando realmente.`,
          `Omite los campos que no puedas completar. Una factura sin número de registro de empresa se ve normal. Una factura con uno inventado es fraude.`,
          `**Quién es el cliente:**`,
          `Su razón social registrada, no la marca con la que lo conoces, y su dirección de facturación. Si te dieron un número de orden de compra o una referencia de proyecto, va cerca de la parte superior.`,
          `**Número y fechas de la factura:**`,
          `Empieza ahora una secuencia y no la rompas nunca. Algo como 2026-001 es suficiente. Incluye la fecha de emisión y una fecha de vencimiento explícita, como fecha de calendario y no solo «pago a 14 días».`,
          `**Qué hiciste:**`,
          `Una línea por cada trabajo, descrita en términos que el cliente reconozca. Cantidades y tarifas cuando correspondan. Una sola línea que diga «Servicios» invita a preguntas.`,
          `**Impuestos:**`,
          `Si estás registrado para cobrar un impuesto sobre las ventas o IVA, muéstralo en una línea aparte con tu número de registro. Si no estás registrado, no lo cobres. Agregar un porcentaje que no tienes derecho a cobrar genera un problema real, y los clientes que recuperan el impuesto notarán de inmediato la ausencia del número de registro.`,
          `**Cómo pagar:**`,
          `Nombre del titular de la cuenta, datos de la cuenta y una referencia, normalmente tu número de factura. Indica de forma explícita qué referencia debe usar el cliente, porque los pagos que llegan a una cuenta personal sin poder asociarse a una factura son realmente difíciles de identificar después.`,
        ],
      },
      {
        heading: `Cómo proyectar solidez sin fingir`,
        paragraphs: [
          `Los detalles pequeños pesan de forma desproporcionada:`,
          `- ✓ **Coherencia.** La misma plantilla, la misma numeración y la misma redacción cada vez transmiten que existe un sistema.`,
          `- ✓ **Una fecha de vencimiento real.** Las facturas amateur suelen no tener ninguna.`,
          `- ✓ **Una dirección de correo dedicada,** en lugar de una personal compartida con todo lo demás.`,
          `- ✓ **Un PDF, no un archivo de procesador de textos.** Los formatos editables parecen provisionales y pueden alterarse.`,
          `- ✓ **Envío puntual.** Facturar el mismo día en que terminas transmite orden. Facturar seis semanas después, no.`,
          `Lo que no ayuda es inflar. No uses «nosotros» si eres una sola persona, no inventes un domicilio registrado ni sugieras una estructura empresarial que no tienes. Los clientes que lo descubren después pierden la confianza en todo lo demás del documento.`,
        ],
        checklist: [
          `**Coherencia.** La misma plantilla, la misma numeración y la misma redacción cada vez transmiten que existe un sistema.`,
          `**Una fecha de vencimiento real.** Las facturas amateur suelen no tener ninguna.`,
          `**Una dirección de correo dedicada,** en lugar de una personal compartida con todo lo demás.`,
          `**Un PDF, no un archivo de procesador de textos.** Los formatos editables parecen provisionales y pueden alterarse.`,
          `**Envío puntual.** Facturar el mismo día en que terminas transmite orden. Facturar seis semanas después, no.`,
        ],
      },
      {
        heading: `Registros desde la primera factura`,
        paragraphs: [
          `Prepara esto antes de tener algo que organizar, porque ahora toma diez minutos y después, horas:`,
          `- ✓ Una carpeta por año, con los PDF nombrados de forma coherente.`,
          `- ✓ Una hoja de cálculo sencilla: número de factura, fecha, cliente, monto y fecha de pago. Esa columna de espacios en blanco es tu lista de cobros pendientes.`,
          `- ✓ Una cuenta bancaria aparte o, como mínimo, una cuenta que uses solo para estos ingresos.`,
          `- ✓ Aparta dinero para impuestos desde el primer pago. El problema más común del primer año entre los trabajadores independientes es una deuda de impuestos sobre dinero que ya se gastó.`,
          `- ✓ Conserva los recibos de todo lo que compres para el trabajo.`,
        ],
        checklist: [
          `Una carpeta por año, con los PDF nombrados de forma coherente.`,
          `Una hoja de cálculo sencilla: número de factura, fecha, cliente, monto y fecha de pago. Esa columna de espacios en blanco es tu lista de cobros pendientes.`,
          `Una cuenta bancaria aparte o, como mínimo, una cuenta que uses solo para estos ingresos.`,
          `Aparta dinero para impuestos desde el primer pago. El problema más común del primer año entre los trabajadores independientes es una deuda de impuestos sobre dinero que ya se gastó.`,
          `Conserva los recibos de todo lo que compres para el trabajo.`,
        ],
      },
      {
        heading: `Cuándo formalizar`,
        paragraphs: [
          `Varias señales indican que es momento de considerar registrar una empresa o adoptar una estructura formal: ingresos que pasan de ocasionales a estables, clientes que exigen que sus proveedores sean entidades registradas, trabajos con una responsabilidad significativa, la cercanía de un umbral de registro fiscal o la incorporación de otras personas.`,
          `Ninguna de estas señales es urgente el primer día. La secuencia correcta casi siempre es empezar a facturar como es debido como persona física, ver si el trabajo se sostiene y formalizar cuando los hechos lo justifiquen, con asesoría específica de tu país, ya que las ventajas y desventajas varían considerablemente.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `facturacion-autonomos`,
      `lista-verificacion-factura`,
      `facturacion-fiscal-pequenas-empresas`,
    ],
  },
  {
    slug: `facturas-en-otro-idioma`,
    title: `Facturar en otro idioma: facturas bilingües y localizadas`,
    description: `Cuándo traducir una factura, cómo diseñar un documento bilingüe y qué convenciones de formato —fechas, números, nombres— causan confusión real.`,
    category: `Negocios internacionales`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cuándo traducir una factura, cómo diseñar un documento bilingüe y qué convenciones de formato —fechas, números, nombres— causan confusión real.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturar en otro idioma: facturas bilingües y localizadas`,
    },
    intro: [
      `Una factura que el equipo de finanzas de tu cliente no puede leer se aparta hasta que la atienda alguien que sí pueda. En una factura transfronteriza, el idioma no es una cortesía: influye en la rapidez con que te pagan.`,
      `![Una factura bilingüe con cada etiqueta de campo mostrada en dos idiomas](https://best-invoicegenerator.com/images/guides/multilingual-invoices.svg)`,
      `Quien te contrató probablemente habla tu idioma. Quien procesa el pago muchas veces no, y es de esa persona de quien depende cuándo llega el dinero. Esa brecha es donde se originan la mayoría de los retrasos de pago relacionados con el idioma.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un estudio de un país factura mensualmente a un fabricante de otro. Su factura muestra: 1. Las etiquetas de los campos en ambos idiomas, con el segundo idioma en gris más claro 2. Las fechas escritas como «22 de septiembre de 2026 / 22 September 2026» 3. Los importes con dos decimales y el código de moneda junto al total 4. Las descripciones de las líneas en el idioma del cliente, idénticas a la redacción de la orden de compra, con la descripción propia del estudio debajo, en letra más pequeña 5. El número de factura, el número de orden de compra, la identificación fiscal y los datos bancarios, sin tocar 6. Las condiciones de pago indicadas en ambos idiomas, con la fecha de vencimiento como fecha de calendario`,
      rows: [],
    },
    diagram: {
      title: `Facturar en otro idioma: facturas bilingües y localizadas — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Cuándo importa realmente traducir`,
        `Un documento, no dos`,
        `Las convenciones que causan confusión real`,
        `Qué mantener sin traducir`,
      ],
    },
    sections: [
      {
        heading: `Cuándo importa realmente traducir`,
        paragraphs: [
          `No todas las facturas internacionales necesitan traducirse. Lo que hay que considerar:`,
          `- ✓ **Requisito legal.** Algunos países exigen que las facturas se emitan o estén disponibles en un idioma oficial local, en particular en operaciones nacionales o con compradores del sector público. La respuesta es local: verifícala para el país al que facturas.`,
          `- ✓ **Quién la procesa.** Un cliente pequeño en el que tu contacto también paga las cuentas necesita menos que una organización grande donde la factura pasa por un centro de servicios compartidos.`,
          `- ✓ **Volumen.** Una sola factura al año rara vez justifica una plantilla bilingüe. La facturación mensual a un mismo mercado, sí.`,
          `- ✓ **Automatización.** Si el sistema del cliente extrae los campos de forma automática, las etiquetas en el idioma local se leen con más fiabilidad.`,
          `Un criterio razonable por defecto: mantén las etiquetas de los campos en versión bilingüe, haz que las descripciones de las líneas coincidan con lo que el cliente aprobó y traduce por completo cuando factures con regularidad a un mismo mercado.`,
        ],
        checklist: [
          `**Requisito legal.** Algunos países exigen que las facturas se emitan o estén disponibles en un idioma oficial local, en particular en operaciones nacionales o con compradores del sector público. La respuesta es local: verifícala para el país al que facturas.`,
          `**Quién la procesa.** Un cliente pequeño en el que tu contacto también paga las cuentas necesita menos que una organización grande donde la factura pasa por un centro de servicios compartidos.`,
          `**Volumen.** Una sola factura al año rara vez justifica una plantilla bilingüe. La facturación mensual a un mismo mercado, sí.`,
          `**Automatización.** Si el sistema del cliente extrae los campos de forma automática, las etiquetas en el idioma local se leen con más fiabilidad.`,
        ],
      },
      {
        heading: `Un documento, no dos`,
        paragraphs: [
          `Emitir versiones separadas por idioma parece más ordenado, pero causa más problemas. Dos archivos pueden divergir —una corrección aplicada a uno y no al otro— y, si alguna vez se detecta una discrepancia, nadie puede decir cuál de las dos versiones prevalece.`,
          `Una sola factura bilingüe evita esto por completo. El enfoque habitual son las etiquetas pareadas:`,
          `- ✓ Factura / Invoice`,
          `- ✓ Número de factura / Invoice number`,
          `- ✓ Fecha de emisión / Issue date`,
          `- ✓ Fecha de vencimiento / Due date`,
          `- ✓ Subtotal / Subtotal`,
          `- ✓ Impuesto / Tax`,
          `- ✓ Total a pagar / Total due`,
          `Pon el segundo idioma un poco más pequeño o con un peso más ligero, para que el documento no parezca el doble de denso. Si el diseño se satura, traduce solo las etiquetas que intervienen en el procesamiento —fechas, totales, impuestos y condiciones de pago— y deja el resto en un solo idioma.`,
        ],
        checklist: [
          `Factura / Invoice`,
          `Número de factura / Invoice number`,
          `Fecha de emisión / Issue date`,
          `Fecha de vencimiento / Due date`,
          `Subtotal / Subtotal`,
          `Impuesto / Tax`,
          `Total a pagar / Total due`,
        ],
      },
      {
        heading: `Las convenciones que causan confusión real`,
        paragraphs: [
          `Con frecuencia, el idioma da menos problemas que el formato. Cuatro cosas causan errores reales:`,
          `**Fechas:**`,
          `Una fecha escrita como 09/07/2026 significa 9 de julio para unos lectores y 7 de septiembre para otros. En una fecha de vencimiento, eso es una causa directa de pagos tardíos. Escribe el mes con letras o usa una forma inequívoca de año-mes-día. Es el cambio individual más valioso en cualquier factura internacional.`,
          `**Separadores decimales y de miles:**`,
          `El punto y la coma intercambian sus funciones entre países, de modo que 1.500 puede leerse como mil quinientos o como uno y medio. Reduce el riesgo usando un espaciado claro, mostrando siempre dos decimales e indicando de forma explícita el código de moneda junto al total.`,
          `**Orden de los nombres e identidad legal:**`,
          `El orden entre apellido y nombre de pila varía según la cultura, y los sufijos que indican la forma jurídica de una empresa tienen significados específicos. Usa la razón social del cliente exactamente como te la den, en su orden, en lugar de reformatearla para que te resulte familiar.`,
          `**Formato de las direcciones:**`,
          `La posición del código postal, el orden de las líneas y la ubicación del país varían. Reproduce la dirección en el formato local en lugar de forzarla al formato que usas en tu país.`,
        ],
      },
      {
        heading: `Qué mantener sin traducir`,
        paragraphs: [
          `Algunos elementos deben quedarse exactamente como se emitieron, sea cual sea el idioma del documento:`,
          `- ✓ Números de factura y referencias: nunca localices los dígitos ni los separadores`,
          `- ✓ Números de orden de compra: carácter por carácter`,
          `- ✓ Números de identificación fiscal: en su formato oficial`,
          `- ✓ Datos bancarios, incluidos los nombres de las cuentas tal como están registrados`,
          `- ✓ Razones sociales registradas, que son identidades legales y no palabras`,
          `- ✓ Códigos de moneda: el código de tres letras es universal e inequívoco`,
        ],
        checklist: [
          `Números de factura y referencias: nunca localices los dígitos ni los separadores`,
          `Números de orden de compra: carácter por carácter`,
          `Números de identificación fiscal: en su formato oficial`,
          `Datos bancarios, incluidos los nombres de las cuentas tal como están registrados`,
          `Razones sociales registradas, que son identidades legales y no palabras`,
          `Códigos de moneda: el código de tres letras es universal e inequívoco`,
        ],
      },
      {
        heading: `Cómo crear una plantilla reutilizable`,
        paragraphs: [
          `La forma eficiente es separar las partes que cambian de las que no.`,
          `- ✓ Haz una lista de tus etiquetas de campo; normalmente son menos de veinte.`,
          `- ✓ Pide que las traduzca una sola vez un hablante nativo, idealmente alguien que haya visto facturas locales. La traducción automática es razonable para etiquetas estandarizadas y arriesgada para la terminología fiscal y de pago.`,
          `- ✓ Guarda las traducciones en una sola tabla en lugar de dispersarlas por las plantillas, para que agregar un idioma más adelante sea un trabajo pequeño.`,
          `- ✓ Localiza las reglas de formato junto con las palabras: formato de fecha, separadores y posición de la moneda.`,
          `- ✓ Revisa por separado la redacción fiscal. Los términos fiscales no se traducen de forma directa y a menudo tienen una forma local prescrita.`,
          `Como las etiquetas rara vez cambian, se trata de un costo único que se amortiza en cada factura que envíes a ese mercado.`,
        ],
        checklist: [
          `Haz una lista de tus etiquetas de campo; normalmente son menos de veinte.`,
          `Pide que las traduzca una sola vez un hablante nativo, idealmente alguien que haya visto facturas locales. La traducción automática es razonable para etiquetas estandarizadas y arriesgada para la terminología fiscal y de pago.`,
          `Guarda las traducciones en una sola tabla en lugar de dispersarlas por las plantillas, para que agregar un idioma más adelante sea un trabajo pequeño.`,
          `Localiza las reglas de formato junto con las palabras: formato de fecha, separadores y posición de la moneda.`,
          `Revisa por separado la redacción fiscal. Los términos fiscales no se traducen de forma directa y a menudo tienen una forma local prescrita.`,
        ],
      },
      {
        heading: `Una nota sobre el tono`,
        paragraphs: [
          `Las expectativas sobre la franqueza en las comunicaciones de pago difieren entre culturas empresariales. Lo que en un mercado se lee como eficiente puede parecer brusco en otro, y lo que en uno resulta cortés puede parecer poco claro en otro. Si facturas con regularidad a un mercado que no conoces, vale la pena pedirle a alguien que trabaje allí que lea una vez tu correo de acompañamiento habitual. La factura en sí debe limitarse a los hechos en todas partes.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `facturacion-multidivisa-internacional`,
      `facturacion-electronica-formatos-y-cumplimiento`,
      `retencion-de-impuestos-en-facturas`,
    ],
  },
  {
    slug: `refacturacion-de-gastos-a-clientes`,
    title: `Refacturación de gastos a clientes: márgenes, kilometraje y suplidos`,
    description: `Cómo cobrar a un cliente los viajes, los materiales y los costos de terceros: qué conviene marcar con margen, qué trasladar al costo y qué comprobantes adjuntar.`,
    category: `Facturación a clientes`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo cobrar a un cliente los viajes, los materiales y los costos de terceros: qué conviene marcar con margen, qué trasladar al costo y qué comprobantes adjuntar.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Refacturación de gastos a clientes: márgenes, kilometraje y suplidos`,
    },
    intro: [
      `Los costos que trasladas a un cliente reciben más escrutinio que tus propios honorarios, porque el cliente puede comparar precios. Presentarlos bien marca la diferencia entre una aprobación rápida y una discusión línea por línea.`,
      `![Una factura con los honorarios profesionales y una sección de gastos aparte, con su propio subtotal](https://best-invoicegenerator.com/images/guides/rebilling-expenses-disbursements.svg)`,
      `Nadie cuestiona una tarifa por hora que ya aceptó. Todos cuestionan un vuelo de 340, porque pueden averiguar cuánto costó. Los gastos refacturados son la parte más escrutada de la mayoría de las facturas, y también la que casi todos preparan con menos cuidado.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un consultor imparte un taller de dos días en las instalaciones de un cliente en otra ciudad. La factura dice: Diseño y realización del taller, 2 días a 1400 → 2800 - Vuelo de ida y vuelta, 14–16 de sept., realización del taller — 186 - Alojamiento, 2 noches, 14–16 de sept. — 240 - Cuadernillos de trabajo impresos, 24 ejemplares — 96 (aprobado por correo el 9 de sept.) - Traslados al aeropuerto, 4 trayectos — 52`,
      rows: [
        [
          `Honorarios profesionales`,
          `Diseño y realización del taller, 2 días a 1400 → 2800`,
        ],
        [
          `Gastos (al costo)`,
          `- Vuelo de ida y vuelta, 14–16 de sept., realización del taller — 186 - Alojamiento, 2 noches, 14–16 de sept. — 240 - Cuadernillos de trabajo impresos, 24 ejemplares — 96 (aprobado por correo el 9 de sept.) - Traslados al aeropuerto, 4 trayectos — 52`,
        ],
      ],
    },
    diagram: {
      title: `Refacturación de gastos a clientes: márgenes, kilometraje y suplidos — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Acuerda las reglas antes de gastar nada`,
        `¿Al costo o con margen?`,
        `Kilometraje y tarifas por unidad`,
        `Costos pagados por cuenta del cliente`,
      ],
    },
    sections: [
      {
        heading: `Acuerda las reglas antes de gastar nada`,
        paragraphs: [
          `Casi todas las disputas por gastos se remontan a algo que nunca se acordó. Define cinco cosas en la etapa de cotización:`,
          `- ✓ **Qué es facturable.** Viajes, alojamiento, materiales, software, subcontratistas, mensajería, impresión: enumera las categorías en lugar de dejarlo abierto.`,
          `- ✓ **Qué está incluido en tus honorarios.** Traslados locales, software de uso general, tu propio equipo. Decir qué no es facturable evita más discusiones que decir qué sí lo es.`,
          `- ✓ **Si algo lleva margen y de cuánto.**`,
          `- ✓ **Umbrales de aprobación.** «Los costos superiores a 250 requieren aprobación previa por escrito» protege a ambas partes.`,
          `- ✓ **Expectativas de comprobantes.** Recibos por encima de un umbral, adjuntos a la factura.`,
          `Dos frases en una cotización cubren la mayor parte de esto: «Los viajes y los materiales se facturan al costo más un 10 % de gestión. Los conceptos individuales superiores a 250 se aprobarán por adelantado».`,
        ],
        checklist: [
          `**Qué es facturable.** Viajes, alojamiento, materiales, software, subcontratistas, mensajería, impresión: enumera las categorías en lugar de dejarlo abierto.`,
          `**Qué está incluido en tus honorarios.** Traslados locales, software de uso general, tu propio equipo. Decir qué no es facturable evita más discusiones que decir qué sí lo es.`,
          `**Si algo lleva margen y de cuánto.**`,
          `**Umbrales de aprobación.** «Los costos superiores a 250 requieren aprobación previa por escrito» protege a ambas partes.`,
          `**Expectativas de comprobantes.** Recibos por encima de un umbral, adjuntos a la factura.`,
        ],
      },
      {
        heading: `¿Al costo o con margen?`,
        paragraphs: [
          `Ambas opciones son legítimas. El problema es siempre la versión no declarada.`,
          `**Trasladar al costo:**`,
          `Es lo más limpio en servicios profesionales donde los gastos son incidentales: un pasaje de tren, la renovación de un dominio. Es fácil de justificar, no requiere explicaciones y da a entender que no ganas dinero con lo que gasta el cliente.`,
          `**Costo más gestión:**`,
          `Es apropiado cuando conseguir y administrar el costo es realmente parte del trabajo: especificar materiales, dar instrucciones a un subcontratista y revisar su calidad, asumir el riesgo de flujo de caja de pagarle a un proveedor antes de que te pague el cliente. Los porcentajes habituales están en el rango del 10 al 20 %, según el oficio y tu grado de participación.`,
          `Si aplicas un margen, dilo en la factura. Una línea que diga «Materiales (al costo más 15 % de gestión)» es transparente y rara vez se cuestiona. El mismo margen, descubierto por un cliente que reconoce el precio del proveedor, se percibe como algo oculto, aunque se haya acordado meses antes.`,
          `**La alternativa: incorporarlo a los honorarios:**`,
          `Para gastos pequeños y predecibles, incluirlos en tu tarifa elimina toda la carga administrativa. Menos líneas, menos recibos, menos preguntas. Funciona mal con costos variables o elevados, donde el cliente razonablemente quiere ver por qué está pagando.`,
        ],
      },
      {
        heading: `Kilometraje y tarifas por unidad`,
        paragraphs: [
          `Para los desplazamientos recurrentes en vehículo, una tarifa por distancia declarada es más sencilla que reunir recibos de combustible. Indica el trayecto y la distancia en la línea, no solo un total. Muchos países publican tarifas estándar de kilometraje que suelen usarse como referencia, y el tratamiento fiscal difiere según la jurisdicción: confirma qué se aplica en tu caso y luego usa una misma tarifa de forma coherente con todos los clientes.`,
        ],
      },
      {
        heading: `Costos pagados por cuenta del cliente`,
        paragraphs: [
          `Hay una diferencia importante entre un costo en el que incurres para prestar tu servicio y un costo que pagas por cuenta del cliente, donde en realidad él es el cliente del tercero; por ejemplo, una tasa de registro o un cargo legal pagado a su nombre. En algunas jurisdicciones reciben un tratamiento fiscal distinto. Si pagar costos por cuenta de los clientes es parte habitual de tu trabajo, conviene confirmarlo una sola vez en lugar de improvisar factura por factura.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `facturacion-agencia-subcontratistas`,
      `lineas-de-factura-que-se-aprueben-sin-preguntas`,
      `facturas-en-disputa-y-pagos-incompletos`,
    ],
  },
  {
    slug: `facturacion-oficios-servicio-en-campo`,
    title: `Facturación de oficios y servicio en campo: trabajos, modificaciones y visitas`,
    description: `Cómo facturar el trabajo en sitio: fijar el precio de las visitas, gestionar las modificaciones, separar mano de obra y materiales, y conseguir la conformidad antes de irte del lugar.`,
    category: `Oficios y servicio en campo`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Cómo facturar el trabajo en sitio: fijar el precio de las visitas, gestionar las modificaciones, separar mano de obra y materiales, y conseguir la conformidad antes de irte del lugar.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Facturación de oficios y servicio en campo: trabajos, modificaciones y visitas`,
    },
    intro: [
      `El trabajo en sitio tiene un problema de facturación que el trabajo de oficina no tiene: el trabajo cambia mientras lo haces, y la persona que aprobó el cambio está a tu lado sin dejar ningún registro.`,
      `![Una factura de trabajo con mano de obra, materiales y una modificación aprobada por separado](https://best-invoicegenerator.com/images/guides/trades-field-service-invoicing.svg)`,
      `Electricistas, plomeros, constructores, instaladores e ingenieros de campo comparten el mismo patrón de facturación: un trabajo cotizado, un sitio que resulta ser distinto de lo que mostró la inspección previa, trabajo adicional acordado de palabra y una factura que llega con una cifra que el cliente no esperaba.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un plomero cotiza 2400 por reemplazar un baño. El segundo día se descubre que el desagüe principal existente está fallando.`,
      rows: [],
    },
    diagram: {
      title: `Facturación de oficios y servicio en campo: flujo de trabajo`,
      caption: undefined,
      steps: [
        `Cierra la brecha entre acordar y registrar`,
        `Estructura la factura en torno al trabajo`,
        `Cobra más rápido en trabajos para particulares`,
        `El trabajo comercial y de contratistas es distinto`,
      ],
    },
    sections: [
      {
        heading: `Cierra la brecha entre acordar y registrar`,
        paragraphs: [
          `La disciplina central en la facturación de oficios es asegurarte de que nada se fije por primera vez en la factura. Todo lo que aparezca en ese documento debe ser algo que el cliente ya conoce.`,
          `Eso significa que, cuando encuentras trabajo adicional, ocurren tres cosas antes de empezarlo:`,
          `- ✓ Explica qué encontraste y por qué hay que hacerlo.`,
          `- ✓ Ponle precio en el momento, aunque sea aproximado, con un rango declarado si no puedes ser exacto.`,
          `- ✓ Consigue un «sí» al que puedas remitirte después: un mensaje, una firma en la hoja de trabajo o una fotografía de una nota que ambos vieron.`,
          `Un mensaje de texto que confirme «tablero eléctrico adicional — 380, acordado en sitio el 14 de sept.» es suficiente. Lo que no basta es recordar que la conversación tuvo lugar.`,
        ],
        checklist: [
          `Explica qué encontraste y por qué hay que hacerlo.`,
          `Ponle precio en el momento, aunque sea aproximado, con un rango declarado si no puedes ser exacto.`,
          `Consigue un «sí» al que puedas remitirte después: un mensaje, una firma en la hoja de trabajo o una fotografía de una nota que ambos vieron.`,
        ],
      },
      {
        heading: `Estructura la factura en torno al trabajo`,
        paragraphs: [
          `Una factura de oficios se lee mejor en cuatro bloques:`,
          `- ✓ **Identificación del trabajo:** dirección del sitio, referencia del trabajo y fechas de atención. La dirección de facturación muchas veces no es la del sitio, y ambas importan.`,
          `- ✓ **Trabajo cotizado:** el alcance acordado, al precio acordado, redactado como estaba en la cotización.`,
          `- ✓ **Modificaciones:** por separado, cada una con su referencia de aprobación. Dale a este bloque su propio subtotal.`,
          `- ✓ **Materiales, visitas y otros cargos:** claramente identificados, con cantidades.`,
          `Mantener las modificaciones visualmente separadas logra algo importante: le muestra al cliente que el precio que acordó no ha cambiado. Lo que aumentó es el trabajo que aprobó además de ese precio. Enterrado entre las líneas originales, el mismo cargo se lee como si la cotización se hubiera excedido.`,
        ],
        checklist: [
          `**Identificación del trabajo:** dirección del sitio, referencia del trabajo y fechas de atención. La dirección de facturación muchas veces no es la del sitio, y ambas importan.`,
          `**Trabajo cotizado:** el alcance acordado, al precio acordado, redactado como estaba en la cotización.`,
          `**Modificaciones:** por separado, cada una con su referencia de aprobación. Dale a este bloque su propio subtotal.`,
          `**Materiales, visitas y otros cargos:** claramente identificados, con cantidades.`,
        ],
      },
      {
        heading: `Cobra más rápido en trabajos para particulares`,
        paragraphs: [
          `Los clientes particulares suelen pagar cuando se les pide, si pedirlo es fácil. La mejora individual más grande es facturar al terminar, en lugar de esa misma noche o ese fin de semana.`,
          `- ✓ **Genera la factura en el sitio,** mientras el trabajo está fresco y el cliente puede verlo.`,
          `- ✓ **Consigue una confirmación de finalización:** una firma en la hoja de trabajo o una fotografía del trabajo terminado con la fecha.`,
          `- ✓ **Ofrece el pago inmediato:** un enlace de pago o una transferencia mientras recoges tus cosas elimina por completo el problema de perseguir el cobro.`,
          `- ✓ **Fotografía lo que hiciste,** sobre todo lo que quedará oculto detrás de una pared o un piso. Estas fotografías resuelven al instante la mayoría de las disputas posteriores.`,
        ],
        checklist: [
          `**Genera la factura en el sitio,** mientras el trabajo está fresco y el cliente puede verlo.`,
          `**Consigue una confirmación de finalización:** una firma en la hoja de trabajo o una fotografía del trabajo terminado con la fecha.`,
          `**Ofrece el pago inmediato:** un enlace de pago o una transferencia mientras recoges tus cosas elimina por completo el problema de perseguir el cobro.`,
          `**Fotografía lo que hiciste,** sobre todo lo que quedará oculto detrás de una pared o un piso. Estas fotografías resuelven al instante la mayoría de las disputas posteriores.`,
        ],
      },
      {
        heading: `El trabajo comercial y de contratistas es distinto`,
        paragraphs: [
          `Cuando trabajas para un contratista principal, un administrador de instalaciones o un cliente empresarial, la factura tiene que satisfacer un proceso y no a una persona:`,
          `- ✓ Cita la orden de compra o el número de trabajo exactamente como se emitió.`,
          `- ✓ Envíala al área de cuentas por pagar, no al jefe de obra que te dio las instrucciones.`,
          `- ✓ Espera que se exija una hoja firmada como prueba de finalización: consíguela antes de irte.`,
          `- ✓ Verifica si se aplica una retención. Si se retiene un porcentaje, muéstralo en la factura y regístralo por separado, porque una retención liberada meses después es muy fácil de olvidar y con frecuencia nunca se reclama.`,
          `- ✓ Verifica si se aplica algún esquema fiscal para contratistas a tu oficio, ya que varios países tienen esquemas de deducción específicos para los pagos de la construcción. Las reglas son locales, así que confírmalas en lugar de darlas por sentadas.`,
        ],
        checklist: [
          `Cita la orden de compra o el número de trabajo exactamente como se emitió.`,
          `Envíala al área de cuentas por pagar, no al jefe de obra que te dio las instrucciones.`,
          `Espera que se exija una hoja firmada como prueba de finalización: consíguela antes de irte.`,
          `Verifica si se aplica una retención. Si se retiene un porcentaje, muéstralo en la factura y regístralo por separado, porque una retención liberada meses después es muy fácil de olvidar y con frecuencia nunca se reclama.`,
          `Verifica si se aplica algún esquema fiscal para contratistas a tu oficio, ya que varios países tienen esquemas de deducción específicos para los pagos de la construcción. Las reglas son locales, así que confírmalas en lugar de darlas por sentadas.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `facturacion-por-hitos-contratistas`,
      `facturacion-movil`,
      `refacturacion-de-gastos-a-clientes`,
    ],
  },
  {
    slug: `retencion-de-impuestos-en-facturas`,
    title: `Retención de impuestos en las facturas: cuando un cliente te paga menos`,
    description: `Por qué algunos clientes descuentan impuestos antes de pagar, cómo mostrarlo en la factura y qué certificado pedir para poder recuperarlo o compensarlo.`,
    category: `Contabilidad e impuestos`,
    readingTime: `7 min de lectura`,
    reviewed: ``,
    author: ``,
    editor: ``,
    summary: `Por qué algunos clientes descuentan impuestos antes de pagar, cómo mostrarlo en la factura y qué certificado pedir para poder recuperarlo o compensarlo.`,
    image: {
      src: `/images/guides/default.svg`,
      alt: `Retención de impuestos en las facturas: cuando un cliente te paga menos`,
    },
    intro: [
      `Llega un pago que es menor por un porcentaje exacto. La factura no tiene ningún error y el cliente no ha disputado nada: la ley le exigía descontar impuestos antes de pagarte.`,
      `![Una factura que muestra el monto bruto, el impuesto retenido en la fuente y el monto neto a pagar](https://best-invoicegenerator.com/images/guides/withholding-tax-on-invoices.svg)`,
      `La retención de impuestos sorprende constantemente a los proveedores, sobre todo la primera vez que facturan a una organización grande o a un cliente de otro país. El instinto es reclamar la diferencia como un pago incompleto. Esa suele ser la respuesta equivocada y puede derivar en una conversación incómoda en la que el cliente te explica una obligación legal que debiste conocer.`,
    ],
    example: {
      label: `Ejemplo práctico`,
      title: `Ejemplo práctico`,
      body: `Un consultor factura 100 000 a un cliente corporativo por un proyecto. El pago llega como 90 000. El consultor: 1. Registra la factura como saldada por completo en 100 000: 90 000 cobrados y 10 000 como impuesto pagado por su cuenta. 2. Solicita de inmediato el certificado de retención, indicando el número de factura y la fecha del pago. 3. Archiva el certificado junto con la factura cuando llega. 4. Agrega una nota en el registro del cliente para que las facturas futuras muestren la retención esperada en el propio documento.`,
      rows: [],
    },
    diagram: {
      title: `Retención de impuestos en las facturas: cuando un cliente te paga menos — flujo de trabajo`,
      caption: undefined,
      steps: [
        `Qué es la retención de impuestos`,
        `Cuándo suele aplicarse`,
        `Cómo mostrarla en la factura`,
        `Cómo obtener el certificado`,
      ],
    },
    sections: [
      {
        heading: `Qué es la retención de impuestos`,
        paragraphs: [
          `En muchos países, una empresa que realiza ciertos tipos de pago a un proveedor debe descontar una parte y entregarla directamente a la autoridad tributaria en nombre de ese proveedor. El proveedor recibe el monto neto y obtiene el crédito por el impuesto ya pagado cuando presenta su propia declaración.`,
          `El mecanismo existe porque recaudar el impuesto en el momento del pago es más fiable que cobrarlo después a muchos proveedores pequeños. Desde tu lado, se derivan tres consecuencias:`,
          `- ✓ **El dinero no se pierde.** Se ha pagado a cuenta de tus impuestos; el cliente no se lo queda.`,
          `- ✓ **Igualmente ganaste el monto bruto.** Tus ingresos son el total de la factura, no lo neto que recibes.`,
          `- ✓ **Necesitas evidencia para reclamarlo.** Sin un certificado o una constancia, tienes un costo de flujo de caja que no puedes compensar.`,
          `Las tasas, los umbrales, los pagos que quedan comprendidos y el nombre del certificado varían enormemente según el país. Esta guía no da esas cifras a propósito, porque un número que es correcto en un mercado induce a error en todos los demás. Averigua cuál es la situación en tu país y en cualquier país al que le factures.`,
        ],
        checklist: [
          `**El dinero no se pierde.** Se ha pagado a cuenta de tus impuestos; el cliente no se lo queda.`,
          `**Igualmente ganaste el monto bruto.** Tus ingresos son el total de la factura, no lo neto que recibes.`,
          `**Necesitas evidencia para reclamarlo.** Sin un certificado o una constancia, tienes un costo de flujo de caja que no puedes compensar.`,
        ],
      },
      {
        heading: `Cuándo suele aplicarse`,
        paragraphs: [
          `Situaciones comunes, sujetas por completo a las reglas locales:`,
          `- ✓ Servicios profesionales y técnicos facturados a empresas, en particular por encima de un umbral`,
          `- ✓ Pagos transfronterizos por servicios, cuando el país del pagador grava los ingresos generados allí`,
          `- ✓ Regalías e ingresos por licencias`,
          `- ✓ Trabajos por contrato y de construcción, que con frecuencia tienen su propio esquema`,
          `- ✓ Alquileres, comisiones y otros pagos recurrentes determinados`,
          `El patrón que la mayoría de los proveedores observa es que los clientes pequeños rara vez retienen y los grandes con frecuencia sí, porque la obligación normalmente recae en quien paga y las organizaciones grandes cuentan con los sistemas para cumplirla.`,
        ],
        checklist: [
          `Servicios profesionales y técnicos facturados a empresas, en particular por encima de un umbral`,
          `Pagos transfronterizos por servicios, cuando el país del pagador grava los ingresos generados allí`,
          `Regalías e ingresos por licencias`,
          `Trabajos por contrato y de construcción, que con frecuencia tienen su propio esquema`,
          `Alquileres, comisiones y otros pagos recurrentes determinados`,
        ],
      },
      {
        heading: `Cómo mostrarla en la factura`,
        paragraphs: [
          `Si sabes que se aplicará una deducción, inclúyela en el documento. Evita que el pago parezca una disputa y facilita la conciliación. Una estructura que funciona:`,
          `- ✓ **Honorarios:** el trabajo, descrito con normalidad — 100 000`,
          `- ✓ **Impuesto sobre las ventas / IVA,** si corresponde: se muestra como de costumbre sobre los honorarios brutos`,
          `- ✓ **Total de la factura:** el monto total adeudado`,
          `- ✓ **Menos impuesto retenido en la fuente:** la deducción esperada, identificada de forma explícita`,
          `- ✓ **Monto neto a pagar:** lo que esperas recibir`,
          `Dos puntos que importan para tus registros. Primero, la cuenta por cobrar en tus libros es el total bruto de la factura, no el neto; la deducción es un impuesto pagado en tu nombre, no una reducción del precio. Segundo, la retención por lo general se aplica sobre los honorarios y no sobre el impuesto a las ventas que se suma encima, pero la interacción entre ambos difiere según el país y conviene confirmarla una sola vez.`,
          `Si no estás seguro de si un cliente retendrá, factura el monto bruto con normalidad y agrega una nota breve pidiéndole que confirme si se aplica alguna deducción. Esa sola frase evita que la diferencia llegue sin explicación.`,
        ],
        checklist: [
          `**Honorarios:** el trabajo, descrito con normalidad — 100 000`,
          `**Impuesto sobre las ventas / IVA,** si corresponde: se muestra como de costumbre sobre los honorarios brutos`,
          `**Total de la factura:** el monto total adeudado`,
          `**Menos impuesto retenido en la fuente:** la deducción esperada, identificada de forma explícita`,
          `**Monto neto a pagar:** lo que esperas recibir`,
        ],
      },
      {
        heading: `Cómo obtener el certificado`,
        paragraphs: [
          `Esta es la parte que les cuesta dinero real a los proveedores, porque una deducción sin evidencia es simplemente una pérdida.`,
          `- ✓ **Pídelo en el momento de la deducción, no a fin de año.** El contacto que procesó el pago sabe qué se descontó; la persona que lo reemplace en marzo no lo sabrá.`,
          `- ✓ **Averigua el ciclo de emisión.** Algunos certificados se emiten por pago y otros de forma periódica. Anótalo en tu agenda según corresponda.`,
          `- ✓ **Revisa los datos cuando llegue:** tu nombre, tu identificación fiscal, el monto y el período. Los errores son comunes y es mucho más fácil corregirlos de inmediato.`,
          `- ✓ **Archívalo junto con la factura,** no en otro lugar. La factura, el aviso de pago y el certificado van juntos.`,
          `- ✓ **Da seguimiento a los certificados esperados** en el mismo libro que usas para las facturas impagas. Un certificado faltante es una partida pendiente exactamente igual que una factura sin pagar.`,
        ],
        checklist: [
          `**Pídelo en el momento de la deducción, no a fin de año.** El contacto que procesó el pago sabe qué se descontó; la persona que lo reemplace en marzo no lo sabrá.`,
          `**Averigua el ciclo de emisión.** Algunos certificados se emiten por pago y otros de forma periódica. Anótalo en tu agenda según corresponda.`,
          `**Revisa los datos cuando llegue:** tu nombre, tu identificación fiscal, el monto y el período. Los errores son comunes y es mucho más fácil corregirlos de inmediato.`,
          `**Archívalo junto con la factura,** no en otro lugar. La factura, el aviso de pago y el certificado van juntos.`,
          `**Da seguimiento a los certificados esperados** en el mismo libro que usas para las facturas impagas. Un certificado faltante es una partida pendiente exactamente igual que una factura sin pagar.`,
        ],
      },
      {
        heading: `Retenciones transfronterizas`,
        paragraphs: [
          `Facturar a un país que retiene impuestos sobre los pagos de servicios a proveedores extranjeros puede generar una deducción significativa. Vale la pena saber dos cosas:`,
          `- ✓ Los tratados fiscales pueden reducir o eliminar la retención, pero por lo general solo si los trámites se presentan antes del pago. Las reclamaciones retroactivas suelen ser posibles en principio y difíciles en la práctica.`,
          `- ✓ El crédito en tu país por el impuesto extranjero pagado depende de tus normas locales y de lo que establezca el tratado, y requiere documentación.`,
          `Si facturas con regularidad a un mercado extranjero, este es un caso en el que una sola conversación con un contador que conozca ambos países se paga sola rápidamente.`,
        ],
        checklist: [
          `Los tratados fiscales pueden reducir o eliminar la retención, pero por lo general solo si los trámites se presentan antes del pago. Las reclamaciones retroactivas suelen ser posibles en principio y difíciles en la práctica.`,
          `El crédito en tu país por el impuesto extranjero pagado depende de tus normas locales y de lo que establezca el tratado, y requiere documentación.`,
        ],
      },
      {
        heading: `Cómo planificarlo`,
        paragraphs: [
          `Cuando la retención se aplica a una parte significativa de tus ingresos, es un tema de flujo de caja más que un costo. Recibes menos durante el año y lo recuperas al presentar la declaración. Tenlo en cuenta en tus proyecciones, pregunta a los clientes nuevos durante la incorporación si retienen y pon la recolección de certificados en la misma rutina que tu revisión de cuentas por cobrar.`,
        ],
      },
    ],
    faq: undefined,
    related: [
      `facturacion-multidivisa-internacional`,
      `facturacion-fiscal-pequenas-empresas`,
      `facturas-en-disputa-y-pagos-incompletos`,
    ],
  },
];

export function getGuideEs(slug: string): Guide | undefined {
  return guidesEs.find((g) => g.slug === slug);
}
