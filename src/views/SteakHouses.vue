<template>
  <v-app id="inspire">
    <system-bar />

    <v-main>
      <v-img
        height="250"
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQFPzgP88bl7Zg/company-background_10000/0/1519797995489?e=2159024400&v=beta&t=N95SrUVSJrE0w3DHkDp-W3zPMuIgUhrXonUmbrvMl70"
      ></v-img>
      <div class="row">
        <v-row>
          <v-col v-for="(data, i) in myCards" :key="i" cols="12" sm="4">
            <card-comp
              v-if="data.tipo == 'Churrascaria'"
              :cardInfo="data"
            ></card-comp>
          </v-col>
        </v-row>
      </div>
    </v-main>

    <footer-comp />

    <bottom-navigation />
  </v-app>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation.vue";
import CardComp from "../components/Card.vue";
import FooterComp from "../components/Footer.vue";
import SystemBar from "../components/SystemBar.vue";
import store from "../store/index.js";

export default {
  components: { BottomNavigation, CardComp, FooterComp, SystemBar },
  data: () => ({
    drawer: false,
    group: null,
    titleView: store.state.title,
  }),
  computed: {
    myCards() {
      return store.state.cards;
    },
    title() {
      return store.getters.bigTitle;
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
