<template>
  <v-app id="inspire">

    <system-bar/>

    <v-app-bar app style="margin-top: 23px;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      temporary
      style="margin-top: 25px"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <carousel-comp/>
      <div class="row">

      <card-comp/>
      <card-comp/>
      <card-comp/>
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

  export default {
  components: { BottomNavigation, CardComp, CarouselComp, FooterComp, SystemBar },
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
