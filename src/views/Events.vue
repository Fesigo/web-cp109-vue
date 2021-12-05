<template>
  <v-app id="inspire">

    <system-bar/>

    <v-main style="margin-left: 20px; margin-right: 20px">
      <div class="row">

        <h1 style="margin-left: 30px">{{title}}</h1>

      <v-row>
        <v-col
          v-for="(data, i) in events"
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
import FooterComp from '../components/Footer.vue'
import SystemBar from '../components/SystemBar.vue'

  export default {
  components: { BottomNavigation, CardComp, FooterComp, SystemBar },
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      myCards() {
        return this.$store.state.cards
      },
      title() {
        return this.$store.getters.bigTitleEvent
      },
      events() {
        return this.$store.state.events
      }
    },
    async created() {
      this.$store.dispatch("fetchEvents")
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
