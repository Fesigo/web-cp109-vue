<template>
  <v-app id="inspire" :style=" {'background-image':'url(https://www.peruforless.com/blog/wp-content/uploads/2013/06/maras-restaurant-interior-1.jpg)', 'margin-top': '-30px'}">

    <system-bar/>

    <v-main >
      <div class="row">

        <v-container style="width: 9900px;  background-color: black; margin-top: 100px; opacity: 0.7">
            
            <h1 style="color: white; text-align: center; font-size: 25px; margin-bottom: 20px; margin-top: 20px;opacity: 1 !important">Encontre os melhores restaurantes e churrascarias!</h1>
            <p style="color: white; text-align: justify; margin-right: 150px; margin-left: 150px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error temporibus sequi ducimus rerum, voluptatibus, non nihil unde reiciendis eveniet repellendus modi mollitia sunt qui facilis aliquid, consequatur in ad deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aperiam eaque necessitatibus recusandae dolorum est similique, quam nam. Eaque debitis rem modi cupiditate labore totam sapiente molestiae voluptates iure. Nemo!</p>
            <p style="color: white; text-align: justify; margin-right: 150px; margin-left: 150px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sunt. Ad eos ea commodi? Facilis quas reiciendis earum quibusdam soluta tenetur amet omnis aspernatur, eum voluptatum? Vel porro quos corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas dolores laboriosam a eum tempore quibusdam dolore tenetur, quis facilis perspiciatis pariatur voluptatum sunt debitis quod? Et, alias magni? Ab, aspernatur.</p>

        </v-container>

      </div>
    </v-main>

    <footer-comp style="margin-top: 150px"/>

    <bottom-navigation/>

  </v-app>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import FooterComp from '../components/Footer.vue'
import SystemBar from '../components/SystemBar.vue'
import store from '../store/index.js'

  export default {
  components: { BottomNavigation, FooterComp, SystemBar },
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
