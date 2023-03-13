<template>
  <header class="p-3 bg-yellow-600 sticky top-0 z-10 shadow-lg">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center mr-10">
        <button class="block p-1 border border-solid border-white rounded-sm sm:hidden navbar-burger mr-2" @click="isActive = !isActive">
          <span class="block w-4 mb-1  bg-white"></span>
          <span class="block w-4 mb-1 h-px bg-white"></span>
          <span class="block w-4 h-px bg-white"></span>
        </button>
        <a class="text-white text-xl font-bold">Wild Rabbit</a>
      </div>
      <div class="block sm:hidden">

      </div>
      <div class="w-max sm:w-auto sm:flex sm:items-center sm:justify-end" >
        <div class="bg-yellow-800 h-full sm:bg-transparent sm:translate-x-0 translate-all transform fixed sm:relative top-0 left-0 w-full flex flex-col sm:flex-row items-center pt-24 sm:pt-0 z-10 text-sm md:flex-grow"
             :class="{ 'translate-x-0 ': isActive, '-translate-x-full': !isActive}">
          <a @click="isActive = !isActive" href="#intro" class="block mt-8 sm:inline-block  sm:mt-0 text-xl sm:text-sm lg:text-base text-white mr-2 lg:mr-6">{{$t('about')}}</a>
          <a @click="isActive = !isActive" href="#equipments" class="block mt-8  sm:mt-0 text-xl sm:text-sm lg:text-base  text-white mr-2 lg:mr-6">{{$t('our_equipments')}}</a>
          <a @click="isActive = !isActive" href="#accommodation" class="block mt-8  sm:mt-0 text-xl sm:text-sm lg:text-base text-white mr-2 lg:mr-6">{{$t('our_accommodations')}}</a>
          <a @click="isActive = !isActive" href="#common" class="block mt-8  sm:mt-0 text-xl sm:text-sm lg:text-base text-white mr-2 lg:mr-6">{{$t('common_spaces')}}</a>
          <a @click="isActive = !isActive" href="#activities" class="block mt-8  sm:mt-0 text-xl sm:text-sm lg:text-base text-white mr-2 lg:mr-6">{{$t('our_activities')}}</a>
          <button class="sm:hidden text-white fixed text-4xl top-0 right-0 mt-5 mr-5" @click="isActive = !isActive">
            &times;
          </button>
        </div>
        <!--<div class="h-auto">

          <ul class="dropdown-content" v-if="showLangDropdown">
            <li @click="changeLang('en')">English</li>
            <li @click="changeLang('fr')">Français</li>
          </ul>
        </div>-->
        <button @click="changeLang($i18n.locale === 'fr' ? 'en' : 'fr')" class="btn-dropdown">
          <img v-if="$i18n.locale === 'fr'" :src="require('@/assets/images/lang/gb.svg')" class="w-6 block" alt="English">
          <img v-else :src="require('@/assets/images/lang/fr.svg')" class="w-6" alt="French">
        </button>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'AppHeader',
        data () {
            return {
                isActive: false,
                showLangDropdown: false
            }
        },
        methods: {
            toggleLangDropdown () {
                this.showLangDropdown = !this.showLangDropdown
            },
            changeLang (lang) {
                this.$i18n.locale = lang
                this.showLangDropdown = false
            }
        }
    }
</script>

<style>
  .navbar-burger span{
    height: 2px;
  }
</style>
