<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Muestreo de agua
    
    p.mb-5 El proceso de muestreo se efectúa para establecer criterios de calidad del agua, se realiza mediante la toma de cantidades específicas en lugares determinados para luego generar un análisis de parámetros físico-químicos y microbiológicos. De ésta manera se establece la viabilidad del recurso de acuerdo al uso que se le vaya a destinar. El muestreo puede darse de tres tipos: 

    .BGIMG06.p-md-5.p-4
      .row.justify-content-center.mb-4
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img01.png")
        .col-lg-7(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="BGR02")
            .row(titulo="Muestreo manual")
              p Es realizado en lugares de fácil acceso, donde el encargado de la muestra puede realizar un primer análisis de características netamente físicas como el olor, el color y la turbidez.
            .row(titulo="Muestreo automático")
              p Es realizado en lugares de difícil acceso mediante herramientas y/o dispositivos tecnológicos que permiten un análisis profundo y específico.
            .row(titulo="Muestreo mixto")
              p Brinda mayor precisión, ya que se pueden verificar manualmente los resultados obtenidos de forma automática.
      
      separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Medición de parámetros
      
      p Para realizar el análisis de calidad de una fuente hídrica, es necesario tener en cuenta que en ella se desarrollan procesos y actividades que reflejan el uso del recurso y se pueden evidenciar de manera cuantitativa en los siguientes parámetros:

      .BGIMG07.p-4.mb-4(data-aos="zoom-in")
        LineaTiempoC.color-acento-contenido(text-small)
          .row.justify-content-center.align-items-center(titulo="pH")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 pH
              p Es la medida de la concentración de iones hidronio en el agua. #[u Se reporta en una escala numérica de 0 a 14, siendo 7 el valor aproximado a la neutralidad, por lo tanto, entre más cercano al valor 0, mayor acidez y entre más cercano al 14 mayor alcalinidad. Se puede medir mediante el uso de un instrumento conocido como potenciómetro o también mediante el uso de tiras tornasol]. En los análisis de agua, es necesario medirlo para determinar el hábitat adecuado para la especie y de igual forma reportar los grados de contaminación del cuerpo hídrico. 
              p.mb-0 Se sugiere medirlo “in situ” ya que durante la manipulación de la muestra se puede ver afectado por condiciones externas.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img02.svg")
          .row.justify-content-center.align-items-center(titulo="Temperatura")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 Temperatura
              p Es la medida que permite reconocer los indicios de vida acuática (plantas y animales). Mediante estos valores también es posible identificar el oxígeno disuelto en un cuerpo de agua y las características de la especie que allí habita.
              p #[u Se puede medir con un instrumento conocido como termómetro que funciona en rangos de -50 a 150 °C].
              p.mb-0 Al igual que el pH, es recomendable medir la temperatura “in situ”, para mantener el valor reportado durante su transporte y posterior análisis. 
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img03.png")
          .row.justify-content-center.align-items-center(titulo="Conductividad")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 Conductividad
              p Reporta la corriente eléctrica que puede transmitir el agua, esta se debe a la cantidad de iones disueltos, a mayor cantidad de iones, mayor conductividad. 
              p Así como reporta la cantidad de iones disueltos, se encuentra estrechamente relacionada con el total de sólidos disueltos, que es un indicador del grado de contaminación que puede tener el recurso hídrico.
              p #[u Se puede medir mediante un instrumento conocido como conductímetro, el cual consta de dos electrodos que aplican corriente en la solución y reporta los valores en miliSiemens/centímetro].
              p.mb-0 Se recomienda cuantificar “in situ” y el análisis en el laboratorio, ya que es importante tener el rango para establecer la cantidad de sólidos disueltos.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img04.png")
          .row.justify-content-center.align-items-center(titulo="Dureza")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 Dureza
              p Hace referencia a la presencia de magnesio y calcio que desencadena en problemas agrícolas e industriales. #[u Se puede identificar por métodos colorimétricos en el laboratorio]. 
              p.mb-0 En altos reportes de dureza, aumenta la conductividad eléctrica y por ende se reportan índices contaminantes. 
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img05.png")
          .row.justify-content-center.align-items-center(titulo="Turbidez")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 Turbidez
              p Informa acerca de la cantidad de partículas disueltas en el agua, estas se identifican a simple vista, debido a la opacidad que genera. 
              p Para determinarla, es necesario atravesar un haz de luz y cuantificar las partículas que quedan en suspensión. 
              p #[u También se puede medir gracias a un instrumento conocido como disco Secchi, el cual permite conocer el grado de penetración luminosa y por ende la turbidez]. 
              p Se sugiere determinarla “in situ” para obtener la información en mayor proporción.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img06.png")
          .row.justify-content-center.align-items-center(titulo="Oxígeno Disuelto (OD)")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 Oxígeno Disuelto (OD)
              p Es una medida de la presencia de oxígeno en el agua, se puede ver influenciado por el ejercicio fotosintético de las plantas acuáticas y por la combinación del aire. 
              p #[u Se cuantifica mediante una sonda y un medidor, y se reporta en Partes Por Millón (ppm) = miligramos de gas/litros de agua]. 
              p.mb-0 Se recomienda reportar sus valores en diferentes ocasiones durante el día, ya que depende de las cantidades de luz que atraviesan la superficie para que las plantas realicen la fotosíntesis. 
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img07.png")
          .row.justify-content-center.align-items-center(titulo="Normatividad vs Parámetros")
            .col-lg-8.p-4.order-lg-1.order-2
              .h4 Normatividad vs Parámetros
              p Los parámetros mencionados permiten evidenciar el uso que se le da al recurso hídrico, sin embargo, también es necesario contar con la normatividad ambiental vigente para realizar el muestreo y posterior análisis. 
              p.mb-0 En ese sentido, en Colombia se cuenta con el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), que se encarga de establecer ciertos protocolos para la conservación y manejo de muestras de agua. 
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img08.png")
          .row.justify-content-center.align-items-center(titulo="NTC-ISO 5667")
            .col-lg-7.p-4.order-lg-1.order-2
              .h4 NTC-ISO 5667
              p Actualmente se cuenta con un grupo de normas en gestión ambiental previstas para usar en conjunto, la primera de ellas es la NTC-ISO 5667-1 “#[b Gestión ambiental. Calidad del agua. Muestreo. Directrices para el diseño de programas de muestreo]”.
              p La segunda es la NTC-ISO 5667-2 “#[b Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo]”. 
              p.mb-0 La tercera es la NTC-ISO 5667-3 “Gestión ambiental. Calidad del agua. Muestreo. Directrices para la conservación y manejo de muestras”, en donde se establecen los principios generales para la toma de muestras y evaluación de condiciones de calidad del agua e identificación de las fuentes de contaminación.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img09.png")

    
    .BGIMG06.p-md-5.p-4
      .row.mt-5
        h3 Muestreo

        p Para llevar a cabo el muestreo es necesario contar con diferentes equipos, materiales e insumos que facilitarán el proceso de recolección, almacenamiento y análisis de las características fisicoquímicas y microbiológicas de la muestra de agua. Dependiendo del tipo de muestra ya sea puntual o integrada se seleccionarán los recursos necesarios. A continuación un listado general de los utilizados en diferentes muestreos:
      
      .row.justify-content-center.align-items-center
        .col-lg-7.cajon.color-acento-contenido.p-4
          p #[b Equipos]

          ul.lista-ul--color
            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Cronómetro.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Equipos portátiles para mediciones de temperatura, pH y conductividad eléctrica.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Geoposicionador.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Altímetro.

        .col-lg-3
            img(src="@/assets/curso/tema2/img1.svg")

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-3
            img(src="@/assets/curso/tema2/img3.svg")

        .col-lg-7.cajon.color-acento-contenido.p-4
          p #[b Materiales]

          ul.lista-ul--color
            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Baldes plásticos con y sin llave.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Recipientes de vidrio y/o plástico para la toma de muestra.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Neveras de icopor o poliuretano para mantener la temperatura de las muestras sobre los 4°C.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Equipo de protección y seguridad personal (Botas de caucho, overol y/o bata, impermeable, guantes, gafas de seguridad).

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Frasco lavador.

      .row.justify-content-center.align-items-center.mt-5

        .col-lg-7.cajon.color-acento-contenido.p-4
          p #[b Insumos]

          ul.lista-ul--color
            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Formatos para registro de datos.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Documentos de identificación del personal encargado de la toma de muestras. 

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Reactivos necesarios para la preservación de las muestras.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Bolsa plástica para almacenamiento de formatos.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Cuerda de nylon o cabuya para manipular los baldes en la caja de inspección.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Bolígrafo y marcador de tinta indeleble.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Rótulos.

            li
              <i class="fas fa-circle" style="color:#E26C1E; font-size:x-small;"></i>
              p.mb-0 Cinta de enmascarar.

        .col-lg-3
            img(src="@/assets/curso/tema2/img4.svg")

  

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Asegurar las condiciones de salud y seguridad en el trabajo
    
    p El proceso de muestreo de aguas, conlleva una serie de riesgos para la seguridad y la salud, desde lesiones físicas hasta intoxicaciones por inhalación de gases e ingestión de sustancias. 

    .row.justify-content-center.align-items-center.BGIMG01.mb-5(data-aos="flip-up")
      .col-lg-7.p-4.order-lg-1.order-2
        p.text-white Es por ello necesario cumplir con regulaciones de seguridad que incluyan equipos de protección personal, uso de chaqueta y cuerda salvavidas de acuerdo con las condiciones climáticas del lugar de muestreo, tener en cuenta los riesgos en terrenos inestables y peligros naturales, considerar los desechos presentes en el lugar de muestreo (tóxicos, inflamables, entre otros), contar con equipo de protección especializado de acuerdo a las condiciones del lugar de muestreo. 
        p.text-white.mb-0 Ésta información se puede ampliar en la norma NTC-ISO 5667-1 “#[b GESTIÓN AMBIENTAL. CALIDAD DEL AGUA. MUESTREO. DIRECTRICES PARA EL DISEÑO DE PROGRAMAS DE MUESTREO]”, el cual se encuentra en el material complementario.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        img(src="@/assets/curso/tema2/img11.png")

    

</template>

<script>
export default {
  name: 'Tema2',
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
