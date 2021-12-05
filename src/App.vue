<template>
  <v-app>

    <app-bar style="margin-top: 64px;margin-bottom: 30px" />

    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>

</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
  name: 'App',
  components: { AppBar },
  
  data: () => ({
    //
  }),
};
</script>

<style>
html{
  font-family: Roboto;
}
</style>
