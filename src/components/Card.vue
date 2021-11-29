<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title v-if="cardInfo">{{cardInfo.title}}</v-card-title>
    <v-card-title v-else>{{myCards[cId - 1].title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4" v-if="cardInfo">
          {{cardInfo.rating}} (413)
        </div>
        <div class="grey--text ms-4" v-else>
          {{myCards[cId - 1].rating}} (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        <!-- $ • Italian, Cafe -->
      </div>

      <div v-if="cardInfo">{{cardInfo.description}}</div>
      <div v-else>{{myCards[cId - 1].description}}</div>
    </v-card-text>

  </v-card>
</template>

<script>

import store from '../store/index.js'
  export default {
    props: ['cardId', 'cardInfo'],
    name: 'CardComp',
    data: () => ({
      loading: false,
      selection: 1,
      cId: window.location.pathname.substr(13)
    }),

    computed: {
      myCards() {
        return store.state.cards
      },
      title() {
        return store.getters.bigTitle
      }
    },

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>