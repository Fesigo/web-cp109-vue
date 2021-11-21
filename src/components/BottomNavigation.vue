<template>

    <v-bottom-navigation
        fixed
        :value="value"
        color="primary"
        horizontal
    >
        <v-btn>
            <span>Recents</span>

            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
            <span>Favorites</span>

            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
            <span>Nearby</span>

            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-bottom-navigation>

</template>

<script>
export default {
    name: 'BottomNavigation',
    data: () => ({
      value: 0
    }),
}
</script>