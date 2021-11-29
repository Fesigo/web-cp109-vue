<template>
  <v-app id="inspire">

    <system-bar/>

    <v-main>
      <div class="row">
        
        <card-comp></card-comp>

      </div>
    </v-main>

    <footer-comp/>

    <bottom-navigation/>

  </v-app>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import CardComp from '../components/Card.vue'
import FooterComp from '../components/Footer.vue'
import SystemBar from '../components/SystemBar.vue'
import store from '../store/index.js'

  export default {
  components: { BottomNavigation, CardComp, FooterComp, SystemBar },
    data: () => ({
      drawer: false,
      group: null,
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

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
