<template>
  <section class="intro" id="intro">
    <div class="container mx-auto px-4 pt-16 sm:pt-24">
      <div class="flex flex-col-reverse sm:flex-row">
        <div class="w-full md:w-1/2">
          <img :src="require('@/assets/images/cover/cover-1.jpg')" class="rounded-md shadow-md lg:h-72 lg:ml-auto" alt="Image">
        </div>
        <div class="w-full md:w-1/2 lg:p-6 mb-6 lg:mb-0">
          <h1 class="text-4xl font-bold mb-4">Wild Rabbit</h1>
          <p class="text-gray-600 lg:w-2/3">{{$t('about_us')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "IntroSection"
    }
</script>