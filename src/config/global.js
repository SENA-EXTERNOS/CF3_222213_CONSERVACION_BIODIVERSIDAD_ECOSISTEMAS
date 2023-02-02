export default {
  global: {
    componenteFormativo: 'Características y muestreo del recurso hídrico',
    descripcionCurso:
      'El recurso hídrico, cuenta con una serie de propiedades que lo convierten en un elemento fundamental; es de suma importancia promover la preservación del mismo, a partir del reconocimiento de sus características, los factores y los agentes que lo impactan, mediante procesos de parametrización, para establecer criterios de calidad, aprovechamiento y sostenibilidad, los cuales benefician el ecosistema y los procesos que proporcionarán su sostenibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ciclo hidrológico y disponibilidad de agua',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de calidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Caracterización físico-química y microbiológica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Muestreo de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Medición de parámetros',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Asegurar las condiciones de salud y seguridad en el trabajo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Protocolo y procedimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipo de muestra y plan de muestreo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Recolección y transporte de las muestras',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Recepción y análisis de muestra',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Elaboración de la cadena de custodia',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Disposición de los residuos generados',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Informes',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Medición de parámetros',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (1995). Gestión Ambiental. Calidad del agua: muestreo. Directrices para el diseño de programas de muestreo. EMCALI.',
      tipo: 'Norma',
      link:
        'https://www.emcali.com.co/documents/148832/183512/NTC+ISO+5667+-1+1995.pdf/c299f60c-2aed-b4d0-35da-81ddbae286b9?t=1532940931582&download=true',
    },
    {
      tema: 'Medición de parámetros',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (1995). Gestión ambiental. Calidad del agua: muestreo. Técnicas generales de muestreo. StuDocu.',
      tipo: 'Norma',
      link:
        'https://www.studocu.com/co/document/universidad-central-colombia/sistemas-de-tratamiento-de-aguas/ntc-iso-5667-02-1995-tecnicas-generales-de-muestreo/17122760',
    },
    {
      tema: 'Medición de parámetros',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (1995). Gestión ambiental. Calidad del agua: muestreo. Directrices para la conservación y manejo de las muestras. IDEAM.',
      tipo: 'Norma',
      link:
        'http://documentacion.ideam.gov.co/cgi-bin/koha/opac-detail.pl?biblionumber=7960',
    },
    {
      tema: 'Ciclo hidrológico y disponibilidad de agua',
      referencia: 'Ordoñez, J. (2011). Cartilla Técnica: Ciclo Hidrológico.',
      tipo: 'Cartilla',
      link:
        'https://www.gwp.org/globalassets/global/gwp-sam_files/publicaciones/varios/ciclo_hidrologico.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Altímetro',
      significado:
        'instrumento para medir la altura de un punto con respecto a uno de referencia.',
    },
    {
      termino: 'Cadena de Custodia',
      significado:
        'conjunto de elementos encargados de vigilar y asegurar las muestras de agua.',
    },
    {
      termino: 'Geoposicionador',
      significado:
        'instrumento de medida que tiene la capacidad de ubicar en latitud y longitud cualquier parte del planeta.',
    },
    {
      termino: '<em>in situ</em>',
      significado:
        'hace referencia al lugar en el que sucede algún evento específico. El lugar en el que se realiza la recolección de la muestra de agua.',
    },
    {
      termino: 'Escorrentía',
      significado:
        'agua de lluvia que discurre por la superficie de un terreno.',
    },
    {
      termino: 'Microbiología',
      significado:
        'ciencia que le proporciona la hombre las herramientas para el estudio de los microorganismos.',
    },
    {
      termino: 'Muestra',
      significado:
        'porción, cantidad representativa extraída de un objeto de análisis (cuerpos de agua).',
    },
    {
      termino: 'Parámetro',
      significado:
        'dato o información relevante que se examina de un tema en particular.',
    },
    {
      termino: 'pH',
      significado:
        'valor numérico que indica el grado de acidez o basicidad de una sustancia.',
    },
    {
      termino: 'Preservante',
      significado:
        'sustancia química que detiene la alteración química y/o biológica de la muestra de agua.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corantioquia. (2014). Manual Piragüero: Calidad fisicoquímica y microbiológica del agua.',
      link:
        'https://piragua.corantioquia.gov.co/wp-content/uploads/2016/11/5.Manual_Calidad_Fisicoquimica.pdf',
    },
    {
      referencia:
        'Instituto de Hidrología, Metereología y Estudios Ambientales. (2007). Toma de muestras de aguas residuales.',
      link:
        'http://www.ideam.gov.co/documents/14691/38158/Toma_Muestras_AguasResiduales.pdf/f5baddf0-7d86-4598-bebd-0e123479d428#:~:text=La%20siguiente%20es%20una%20lista,Dorn%2C%20Kemmerer%20o%20balde',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología Agropecuaria. (2011). Protocolo de Muestreo, Transporte y Conservación de Muestras de Agua con Fines Múltiples (consumo humano, abrevado animal y riego).',
      link:
        'https://inta.gob.ar/sites/default/files/script-tmp-protocolo_de_muestreo_de_aguas_inta.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Calidad.',
      link:
        'https://www.minambiente.gov.co/gestion-integral-del-recurso-hidrico/calidad/',
    },
    {
      referencia:
        'Programa de Vigilancia por Laboratorio de la Calidad de Agua para Consumo Humano. (2011). Manual de Instrucciones para la Toma, Preservación y Transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio.',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia:
        'Sistema de Agua Potable y Alcantarillado Municipal. (2021). Ciclo hidrológico y disponibilidad de agua. SAPAM.',
      link:
        'http://sapam.gob.mx/site/ciclo-hidrologico-y-disponibilidad-de-agua/',
    },
    {
      referencia:
        'Torres, P., Cruz, C. y Patiño, J. (2009). Índices de calidad de agua en fuentes superficiales utilizadas en la producción de agua para consumo humano. Una revisión humana. Revista Ingenierías Universidad de Medellín, 8(5), pp. 79-94.',
      link: 'http://www.scielo.org.co/pdf/rium/v8n15s1/v8n15s1a09.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
