<template>
  <div id="app">
    <AppHeader />
    <HeroSection :title="$t('hero.title')"
                 :description="$t('hero.description')"
                 :heroBgs="heroBgs"/>
    <IntroSection />
    <EquipmentSection :equipmentBgs="equipments" />
    <HebergementSection :hebergements="hebergements" />
    <EspaceCommunsSection :images="espacesCommuns" />
    <ActivitiesSection :images="activities" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './layout/Header'
import AppFooter from './layout/Footer'
import HeroSection from './components/HeroSection'
import IntroSection from './components/Intro'
import EquipmentSection from './components/Equipment'
import HebergementSection from './components/Hebergement'
import EspaceCommunsSection from './components/EspaceCommuns'
import ActivitiesSection from './components/Activities'

export default {
  name: 'App',
  components: {
      AppHeader,
      HeroSection,
      IntroSection,
      EquipmentSection,
      HebergementSection,
      EspaceCommunsSection,
      ActivitiesSection,
      AppFooter
  },
  data () {
      return {
          heroBgs: [
              require('@/assets/images/cover/cover-1.jpg'),
              require('@/assets/images/cover/cover-2.jpg'),
              require('@/assets/images/cover/cover-3.jpg'),
              require('@/assets/images/cover/cover-4.jpg'),
          ],
          equipments:[
              require('@/assets/images/cover/cover-3.jpg'),
              require('@/assets/images/cover/cover-4.jpg'),
              require('@/assets/images/hebergements/heber-0.jpg'),
              require('@/assets/images/hebergements/heber-1.jpg'),
              require('@/assets/images/hebergements/heber-2.jpg'),
              require('@/assets/images/espaces/salles/salle-1.jpg'),
              require('@/assets/images/espaces/salles/salle-3.jpg'),
              require('@/assets/images/espaces/terraces/terrace-1.jpg'),
              require('@/assets/images/espaces/terraces/terrace-2.jpg'),
              require('@/assets/images/activities/naturel/naturel-2.jpg'),
              require('@/assets/images/activities/jeux/jeux-1.jpg'),
              require('@/assets/images/activities/jeux/jeux-2.jpg'),
          ],
          hebergements: [
              require('@/assets/images/hebergements/heber-0.jpg'),
              require('@/assets/images/hebergements/heber-1.jpg'),
              require('@/assets/images/hebergements/heber-2.jpg'),
              require('@/assets/images/hebergements/heber-3.jpg'),
              require('@/assets/images/hebergements/heber-4.jpg'),
              require('@/assets/images/hebergements/heber-5.jpg'),
              require('@/assets/images/hebergements/heber-6.jpg'),
              require('@/assets/images/hebergements/heber-7.jpg'),
              require('@/assets/images/hebergements/heber-8.jpg'),
              require('@/assets/images/hebergements/heber-9.jpg'),
          ],
          espacesCommuns:[
              [
                  require('@/assets/images/espaces/salles/salle-1.jpg'),
                  require('@/assets/images/espaces/salles/salle-2.jpg'),
                  require('@/assets/images/espaces/salles/salle-3.jpg'),
                  require('@/assets/images/espaces/salles/salle-4.jpg'),
              ],
              [
                  require('@/assets/images/espaces/terraces/terrace-1.jpg'),
                  require('@/assets/images/espaces/terraces/terrace-2.jpg'),
              ]
          ],
          activities:[
              [
                  require('@/assets/images/activities/naturel/naturel-1.jpg'),
                  require('@/assets/images/activities/naturel/naturel-2.jpg'),
                  require('@/assets/images/activities/naturel/naturel-3.jpg'),
                  require('@/assets/images/activities/naturel/naturel-4.jpg'),
              ],
              [
                  require('@/assets/images/activities/scolaire/scolaire-1.jpg'),
                  require('@/assets/images/activities/scolaire/scolaire-2.jpg'),
                  require('@/assets/images/activities/scolaire/scolaire-4.jpg'),
              ],
              [
                  require('@/assets/images/activities/jeux/jeux-1.jpg'),
                  require('@/assets/images/activities/jeux/jeux-2.jpg'),
                  require('@/assets/images/activities/jeux/jeux-3.jpg'),
                  require('@/assets/images/activities/jeux/jeux-4.jpg'),
                  require('@/assets/images/activities/jeux/jeux-5.jpg'),
                  require('@/assets/images/activities/jeux/jeux-6.jpg'),
                  require('@/assets/images/activities/jeux/jeux-7.jpg'),
                  require('@/assets/images/activities/jeux/jeux-8.jpg'),
                  require('@/assets/images/activities/jeux/jeux-10.jpg'),
                  require('@/assets/images/activities/jeux/jeux-11.jpg'),
              ],
              [
                  require('@/assets/images/activities/golf/golf-1.jpg'),
                  require('@/assets/images/activities/golf/golf-2.jpg'),
                  require('@/assets/images/activities/golf/golf-3.jpg'),
                  require('@/assets/images/activities/golf/golf-4.jpg'),
              ]
              ,
              [
                  require('@/assets/images/activities/school/activite-1.jpg'),
                  require('@/assets/images/activities/school/activite-2.jpg'),
                  require('@/assets/images/activities/school/activite-3.jpg'),
                  require('@/assets/images/activities/school/activite-4.jpg'),
                  require('@/assets/images/activities/school/activite-5.jpg'),
                  require('@/assets/images/activities/school/activite-6.jpg'),
                  require('@/assets/images/activities/school/activite-7.jpg'),
                  require('@/assets/images/activities/school/activite-8.jpg'),
                  require('@/assets/images/activities/school/activite-9.jpg'),
                  require('@/assets/images/activities/school/activite-10.jpg'),
                  require('@/assets/images/activities/school/activite-11.jpg'),
                  require('@/assets/images/activities/school/activite-12.jpg'),
                  require('@/assets/images/activities/school/activite-13.jpg'),
                  require('@/assets/images/activities/school/activite-14.jpg'),
                  require('@/assets/images/activities/school/activite-15.jpg'),
                  require('@/assets/images/activities/school/activite-16.jpg'),
                  require('@/assets/images/activities/school/activite-17.jpg'),
                  require('@/assets/images/activities/school/activite-18.jpg'),
                  require('@/assets/images/activities/school/activite-19.jpg'),
                  require('@/assets/images/activities/school/activite-20.jpg'),
                  require('@/assets/images/activities/school/activite-21.jpg'),
                  require('@/assets/images/activities/school/activite-22.jpg'),
                  require('@/assets/images/activities/school/activite-23.jpg'),
                  require('@/assets/images/activities/school/activite-24.jpg'),
              ]
          ]
      }
  }
}
</script>
