<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.BGIMG01.mb-5(data-aos="flip-up")
      .col-lg-7.p-4.order-lg-1.order-2
        p.text-white.mb-0 Apreciado aprendiz, bienvenido a este componente, enfocado en describir las características y muestreo del recurso hídrico, para la conservación de la biodiversidad y los ecosistemas. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        img(src="@/assets/curso/intro/img01.png")
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jOwvLrD1Csc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
