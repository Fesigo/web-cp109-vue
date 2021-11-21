<template>
    <v-system-bar
      dark
      color="indigo lighten-2 white--text"
      fixed
      style="z-index: 10"
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>{{ new Date().getHours() }}:{{ new Date().getMinutes() }}</span>
    </v-system-bar>
</template>

<script>
export default {
    name: 'SystemBar',
    data: () => ({
      
    }),
}
</script>