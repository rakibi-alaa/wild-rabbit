<template>
  <section class="hebergement" id="accommodation">
    <div class="container mx-auto px-4 pt-24">
      <h2 class="text-4xl font-bold mb-10 text-center">{{$t('our_accommodations')}}</h2>
      <!--<p class="text-gray-600 text-center mb-10">hebergement description</p>-->
      <div class="grid grid-cols-2 sm:grid-cols-4 md:w-9/12 mx-auto gap-10">
        <div v-for="(image, index) in hebergements.slice(0, 8)" @click="showModal(index)" :key="index" class="transition-all mx-auto rounded-md w-32 lg:w-48 h-32 cursor-pointer bg-cover bg-center shadow-sm transform hover:shadow-xl hover:scale-105" :style="{ backgroundImage: `url(${image})` , }"></div>
      </div>
      <div v-if="showGallery" class="fixed flex items-center top-0 left-0 bottom-0 right-0 z-50">
        <div class="bg-black bg-opacity-75 absolute top-0 left-0 bottom-0 right-0" ></div>
        <div class="relative mx-auto max-w-3xl">
          <div>
            <button
              class="text-white text-3xl fixed top-1/2 -translate-y-1/2 left-2 md:left-16"
              @click="previousImage"
            >
              &larr;
            </button>
            <button
              class="text-white text-3xl fixed top-1/2 -translate-y-1/2 right-2 md:right-16"
              @click="nextImage"
            >
              &rarr;
            </button>
            <button class="text-white fixed text-4xl top-0 right-0 mt-5 mr-5" @click="closeModal">
              &times;
            </button>
            <img :src="hebergements[currentImage]" class="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "HebergementSection",
        props: {
            hebergements: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                showGallery: false,
                currentImage: 0
            };
        },
        methods: {
            showModal(index) {
                this.showGallery = true;
                this.currentImage = index;
            },
            closeModal() {
                this.showGallery = false;
            },
            previousImage() {
                this.currentImage =
                    this.currentImage === 0
                        ? this.hebergements.length - 1
                        : this.currentImage - 1;
            },
            nextImage() {
                this.currentImage =
                    this.currentImage === this.hebergements.length - 1
                        ? 0
                        : this.currentImage + 1;
            }
        }
    }
</script>
