<template>
  <v-app id="inspire">

    <system-bar/>

    <v-main>
      <carousel-comp/>
      <div class="row">

      <v-row>
        <v-col
          v-for="(data, i) in myCards"
          :key="i"
          cols="12"
          sm="4"
        >
        
        <card-comp :cardId="i" :cardInfo="data"></card-comp>
          
        </v-col>
      </v-row>

      </div>
    </v-main>

    <footer-comp/>

    <bottom-navigation/>

  </v-app>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import CardComp from '../components/Card.vue'
import CarouselComp from '../components/Carousel.vue'
import FooterComp from '../components/Footer.vue'
import SystemBar from '../components/SystemBar.vue'
import store from '../store/index.js'

  export default {
  components: { BottomNavigation, CardComp, CarouselComp, FooterComp, SystemBar },
    data: () => ({
      titleView: store.state.title
    }),
    computed: {
      myCards() {
        return store.state.cards
      },
      title() {
        return store.getters.bigTitle
      }
    },
  }
</script>
