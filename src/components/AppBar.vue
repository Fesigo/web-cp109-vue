<template>
    <div>
        
    <v-app-bar style="margin-top: -40px"
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="margin-right: 220px">Page title</v-toolbar-title>

      <v-spacer>
          <a style="color: white;margin-right:100px">Home</a>
          <a style="color: white;margin-right:100px">Restaurantes</a>
          <a style="color: white;margin-right:100px">Churrascarias</a>
          <a style="color: white;margin-right:100px">Sobre</a>
      </v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Todos os Restaurantes</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Churrascarias</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
    
</template>

<script>
export default {
    name: 'AppBar',
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