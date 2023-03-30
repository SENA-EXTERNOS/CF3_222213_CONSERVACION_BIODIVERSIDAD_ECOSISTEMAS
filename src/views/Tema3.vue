<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protocolo y procedimientos
    
    p.mb-5 Los protocolos de ejecución permiten establecer los procedimientos a seguir en los procesos de análisis de agua, teniendo en cuenta el tipo de muestra, el seguimiento a la recolección, almacenamiento, transporte y análisis. De ésta manera se espera minimizar el porcentaje de error y optimizar resultados, te invitamos a ver el siguiente video donde se abordan los tipos de muestra y el plan de muestreo.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Tipo de muestra y plan de muestreo
            
    p Le invitamos a ver el siguiente video, donde se abordan los tipos de muestra y el plan de muestreo:


    .BGIMG06.p-md-5.p-4

      figure.mb-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/AIJAsAriN4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.p-4.order-lg-1.order-2(data-aos="fade-right")
          .h4 Características específicas del muestreo:
          p En algunas situaciones puntuales es necesario dar un tratamiento particular a las muestras dependiendo del análisis que se vaya a generar, si se trata de análisis fisicoquímico se debe cerrar el frasco sin dejar cámara de aire, si se trata de análisis microbiológico se llena el frasco hasta ¾ de su capacidad y se tapa dentro del agua. De ésta manera se garantiza la estabilidad y calidad del muestreo.
          p Posteriormente se guarda la muestra en lugar fresco y seco libre de agentes contaminantes, se adicionan preservantes (de ser necesario) y se llevan al laboratorio en el menor tiempo posible, máximo 24 horas después de recolección de la muestra.
          p.mb-0 Finalmente, se realiza el análisis de la muestra en los laboratorios de aseguramiento de la calidad.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img01.png")

      
      separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Recolección y transporte de las muestras
      
      p Para realizar una correcta recolección sin afectar las condiciones normales es necesario disponer de los materiales indicados y almacenar adecuadamente la muestra mientras es llevada al correspondiente análisis. Algunas de las recomendaciones son:

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img02.png')

          .tarjeta.color-secundario.p-3(x="15%" y="40%" numero="1")
              p.text-white.mb-0 Los envases deben estar libres de impurezas, también disponer de diferentes tipos y cantidades debidamente rotulados antes de iniciar el muestreo.
          
          .tarjeta.color-secundario.p-3(x="25%" y="64%" numero="2")
              p.text-white.mb-0 Realizar el alistamiento de los equipos, materiales e insumos a utilizar en el momento de la recolección. Llevar consigo los manuales de los equipos para efectos de calibración.
          
          .tarjeta.color-secundario.p-3(x="54%" y="50%" numero="3")

              p.text-white.mb-0 Es importante tener en cuenta que para retardar los cambios químicos y biológicos de algunas muestras es necesario contar con reactivos preservantes, para el buen manejo de estos, se deben mantener en contenedores adecuados y deben ser manipulados con elementos de protección personal, de acuerdo al tipo de muestra (Guantes, gafas, overol o bata, botas de caucho). 
          
          .tarjeta.color-secundario.p-3(x="60%" y="73%" numero="4")

              p.text-white.mb-0 Es recomendable tomar medidas de algunos parámetros como temperatura, pH, turbidez, conductividad, color, olor “in situ” con el fin de mantener las condiciones iniciales de la muestra.
          
          .tarjeta.color-secundario.p-3(x="72%" y="10%" numero="5")

              p.text-white.mb-0 Luego del muestreo, se registra en los formatos las características climáticas del lugar en el que se encuentra el cuerpo de agua y las consideraciones pertinentes con respecto a la primera observación de la muestra de agua.
          
          .tarjeta.color-secundario.p-3(x="79%" y="17%" numero="6")

              p.text-white.mb-0 Es necesario tener en cuenta los requisitos de análisis, ya sean físicos, químicos o microbiológicos, con o sin preservantes, para así mismo definir la cantidad de muestra a recolectar.
          
          .tarjeta.color-secundario.p-3(x="77%" y="46%" numero="7")

              p.text-white.mb-0 Para iniciar la cadena de transporte, las muestras deben ser embaladas en una nevera que mantenga la temperatura sobre los 4 °C, y que esté sellada con cinta para evitar el derrame y pérdida de la muestra.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Recepción y análisis de muestra

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.p-4.order-lg-1.order-2(data-aos="fade-right")
        p En ésta etapa se corrobora la información que se encuentra descrita en el rótulo de las muestras, se evalúa si el volumen es adecuado para el análisis, si tiene agentes preservantes, si sufrió algún cambio de condiciones durante el tiempo de transporte. De esta manera se garantiza que el análisis de las muestras se realiza bajo estándares de calidad. Para ello las muestras deben registrarse en cuanto lleguen al laboratorio con la siguiente información:
        .BGR04.p-4
          ol.lista-ol.text-white
            li 
              span.text-bold a. 
              p.mb-0 Código de la muestra.
            li 
              span.text-bold b. 
              p.mb-0 Nombre de la entidad prestadora.
            li 
              span.text-bold c. 
              p.mb-0 Nombre de los recolectores de la muestra.
            li 
              span.text-bold d. 
              p.mb-0 Número del método de muestreo.
            li 
              span.text-bold e. 
              p.mb-0 Localización de almacenamiento de la muestra (Programa de Vigilancia por Laboratorio de la Calidad de Agua para Consumo Humano, 2011).
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img03.png")
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span Análisis de muestra
    
    
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Elaboración de la cadena de custodia 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img04.png") 
      .col-lg-7(data-aos="fade-left")
        p La cadena de custodia es el proceso de control y seguimiento a la integridad de la muestra que inicia desde la recolección de la muestra hasta que es desechada después de tomar los análisis y reportar resultados. Para el diligenciamiento de la cadena de custodia se deben tener en cuenta los siguientes datos:

        p Razón social, dirección, atención, referencia, datos de contacto, identificación de la muestra (fuente y denominación del punto en el que se tomó la muestra), muestreo: fecha y hora en la que se realizó, envase: tipo y cantidad, análisis “in situ”: pH, temperatura, turbidez, conductividad, observaciones generales, firmas: de quien tomó el muestreo y del cliente. 

    .BGIMG05.p-md-5.p-4

      separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Disposición de los residuos generados
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.p-4.order-lg-1.order-2(data-aos="fade-right")
          p En este caso en particular, sobre los análisis de aguas, los residuos son los que provienen específicamente de los procedimientos que se realizan con algún tipo de preservante o reactivo químico; de acuerdo con lo anterior, se establecen las rutas para la disposición de dichos residuos y, tener en cuenta, si es posible, recuperarlos y reutilizarlos. 
          
          p Los métodos más usados para dar tratamiento a los residuos son:
          ul.lista-ul--color.ms-4
            li
              <i class="fas fa-circle" style="color:#FDA829; font-size:x-small;"></i>
              | Vertido: se realiza un proceso de neutralización del residuo y posteriormente se deposita en el vertedero.
            li
              <i class="fas fa-circle" style="color:#FDA829; font-size:x-small;"></i>
              | Recuperación: se aplica tratamiento al residuo con el fin de recuperar alguno de sus componentes, que comúnmente es de alta peligrosidad.
            li
              <i class="fas fa-circle" style="color:#FDA829; font-size:x-small;"></i>
              | Reutilización: como su nombre lo indica, se reutiliza el compuesto recuperado.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img05.png")

      separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Informes

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img06.png") 
        .col-lg-7(data-aos="fade-left")
          p La elaboración del informe debe describir con detalle los hallazgos en las muestras de agua, es necesario hacer la descripción de los análisis químicos, físicos y microbiológicos con el fin de establecer las condiciones iniciales de la muestra y posteriormente los agentes externos presentes en la misma. Esto permitirá determinar la vía de disposición del cuerpo de agua analizado. 
          p.mb-0 Es indispensable que en el informe se encuentre consignado el sitio del muestreo, sus características, las condiciones climáticas, la fecha, método y tiempo que se uso para la recolección, los datos  de la persona que recolectó, naturaleza del tratamiento previo, preservantes agregados (de ser el caso) y datos recogidos en el campo. (Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC], 1995)
      .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
        .col-lg-10.BG05.p-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
