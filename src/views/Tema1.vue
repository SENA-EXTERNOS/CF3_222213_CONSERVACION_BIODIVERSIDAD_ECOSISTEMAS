<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El agua
    
    .row.justify-content-center.align-items-center.BGIMG02.p-4.mb-5(data-aos="flip-up")
      .col-lg-3.col-6.mb-lg-0.mb-4
        img.w-75(src="@/assets/curso/tema1/img01.png")
      .col-lg-7
        p.text-white.mb-0 El agua es el recurso primordial para el mantenimiento de la vida en el planeta, es indispensable en muchos procesos, como por ejemplo la agricultura.  Gracias a su estructura química conformada por dos átomos de hidrógeno y uno de oxígeno, adopta diferentes comportamientos que lo hacen un recurso accesible para la población.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Ciclo hidrológico y disponibilidad de agua
    
    p El agua circula en el planeta gracias a la influencia de la energía solar y la gravedad, lo hace mediante un proceso conocido como ciclo hidrológico en el que se generan cambios de estado físico, estos se conocen como estado líquido, sólido y gaseoso.

    .row.justify-content-center.align-items-center.BGIMG03.mb-5(data-aos="flip-up")
      .col-lg-7.p-4.order-lg-1.order-2
        p.mb-0 Estos cambios de estado inician cuando el sol calienta la superficie de las aguas existentes en el planeta, lo que la evapora y sublima el hielo. De ésta manera el recurso hídrico se mueve a la atmósfera en estado gaseoso, posteriormente se condensa en las nubes y por efecto de la gravedad se precipita en estado líquido. Al tener contacto con la superficie de la tierra, puede tomar diferentes rutas: nuevamente evaporación, infiltración en el suelo o simplemente fluir sobre la superficie (escorrentía). 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        img(src="@/assets/curso/tema1/img02.png")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Ciclo del Agua
        
    .row.justify-content-center.mb-4
      .col-lg-6.col-10(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img03.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            p.ms-5 En síntesis, los procesos que mueven el agua de un depósito a otro son: evaporación, condensación, precipitación, sedimentación, escorrentía, infiltración, transpiración. Gracias a éstos procesos puede almacenarse en los océanos, la atmósfera, de formas subterráneas, entre otros en condiciones naturales, sin embargo, cuando se presentan alteraciones como el cambio climático se altera su disponibilidad afectando la población a nivel mundial.
      .col-lg-6.col-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img03.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            p.ms-5 Con el fin de comprender su disponibilidad para todas las especies, es necesario conocer que del 100 % presente en el planeta, el 97% es salada y se encuentra en los océanos, mientras que el 3% restante es dulce y se encuentra accesible para el consumo humano, después de sufrir una serie de tratamientos en los que se capta, desinfecta, conduce y contiene se hace consumible y aprovechable para las especies animales y vegetales.
            
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características de calidad
    
    p La calidad es definida por la RAE como
      span.etiqueta #[b “la propiedad o conjunto de propiedades inherentes a algo que permitan juzgar su valor”.] 
      | Cuando se conoce el valor que tiene el agua como recurso fundamental para la subsistencia en el planeta, el concepto de calidad toma fuerza y genera que se establezcan parámetros de medición que arrojen información acerca de las características idóneas con las que debe contar el agua para llegar a las especies vegetales y animales que la consumen.

    .row.justify-content-center.align-items-center.BGIMG04.mb-5(data-aos="flip-up")
      .col-lg-3.col-6.mb-lg-0.mb-4
        img(src="@/assets/curso/tema1/img04.png")
      .col-lg-7.p-4
        p.mb-0 Así es posible establecer la calidad del agua como una medida de las características físicas, químicas y microbiológicas, con el fin de establecer si es apta para el consumo libre de las especies bióticas, todo de acuerdo con estándares que cumplan con la salud, el equilibrio de los ecosistemas y la seguridad de los seres humanos.

    .BGIMG05.p-md-5.p-4.mb-4
      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Caracterización físico-química y microbiológica
      
      p Para determinar la calidad del agua es necesario establecer una serie de parámetros que se encargan de reportar las características del agua de acuerdo con estándares establecidos a nivel mundial para un óptimo aprovechamiento del recurso, dentro de estos parámetros se tienen los siguientes:

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-9
          .tabla-a.color-acento-contenido.mb-5 
            table
              thead
                tr
                  th(style="background-color: #C2BDB5;") Parámetros físico-químicos
                  th(style="background-color: #C2BDB5;").text-end Parámetros microbiológicos
              tbody
                tr
                  td pH
                  td.text-end Bacterias coliformes totales (BCT)
                tr
                  td Temperatura
                  td.text-end Bacterias coliformes fecales (BCF)
                tr
                  td Oxígeno disuelto
                  td 
                tr
                  td Conductividad
                  td 
                tr
                  td Dureza
                  td 
                tr
                  td Presencia de metales
                  td 
                tr
                  td Plaguicidas
                  td 
                tr
                  td Olor
                  td 
                tr
                  td Color
                  td 
                tr
                  td Sólidos sedimentables
                  td 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .cajon.color-acento-contenido.p-4
            p.mb-0 De manera general, cada uno de los parámetros aporta la información específica que se necesita conocer en los procesos de análisis de calidad del agua, así por ejemplo, la #[b conductividad] hace referencia a la cantidad de sales disueltas y a la capacidad para conducir la corriente eléctrica; el #[b pH] se encarga de determinar el grado de acidez o alcalinidad que posee, la #[b dureza] se reporta de acuerdo a las sales de magnesio y calcio presentes; el #[b oxígeno disuelto] se mide con el fin de determinar la cantidad de oxígeno presente, fundamental para la subsistencia de diferentes especies; la #[b temperatura] permite identificar la idoneidad del cuerpo hídrico para ser hábitat de diferentes especies; la #[b presencia de metales y plaguicidas] se determina para evaluar los residuos que se vierten al cuerpo hídrico y la viabilidad de uso del recurso; el #[b olor, color y sólidos sedimentables] son características que se pueden determinar a simple vista, garantizando en un primer momento la alteración del recurso; las #[b BCT] y #[b BCF] son parámetros más profundos y específicos que permiten determinar la potabilidad del agua.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img05.png")



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
