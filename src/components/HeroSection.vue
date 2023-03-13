<template>
  <section class="hero">
    <carousel :perPage="1" :navigationEnabled="false" autoplay loop :paginationEnabled="false">
      <slide v-for="(bg, index) in heroBgs" :key="index">
        <div class="image bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }"></div>
      </slide>
    </carousel>
  </section>
</template>

<script>
    export default {
        name:'HeroSection',
        props: {
            heroBgs: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style lang="css">

  @media only screen and (max-width: 600px){
    .hero .image {
      height: 20rem;
    }
  }
  @media only screen and (min-width: 601px){
    .hero .image {
      height: 40rem;
    }
  }

</style>
