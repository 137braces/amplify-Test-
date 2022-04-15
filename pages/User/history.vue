<template>
  <div>
      <v-bottom-navigation
    color="#63bef7"
    grow
  >
  
    <v-btn>
      <span>{{title1}}</span>
      <nuxt-link to="profile" nuxt router exact 
      class="text-decoration-none" replace><v-icon>{{icon1}}</v-icon></nuxt-link>
    </v-btn>

    <v-btn>
      <span>{{title2}}</span>
      <nuxt-link to="product" nuxt router exact 
      class="text-decoration-none" replace><v-icon>{{icon2}}</v-icon></nuxt-link>
    </v-btn>

    <v-btn>
      <span>{{title3}}</span>
      <nuxt-link to="/User/history" nuxt router exact
      class="text-decoration-none" replace><v-icon>{{icon3}}</v-icon></nuxt-link>
    </v-btn>
  </v-bottom-navigation>
    <v-switch
      v-model="reverse"
      label="Toggle reverse"
    ></v-switch>
    <v-timeline
      :reverse="reverse"
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="n in 2"
        :key="n"
      >
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Lorem ipsum
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline
      :reverse="reverse"
      dense
    >
      <v-timeline-item
        v-for="n in 2"
        :key="n"
      >
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            Lorem ipsum
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
  export default {
    data () {
      return {
         value: 1,
         title1: "recect",
         icon1: "mdi-history",

         title2: "recect",
         icon2: "mdi-heart",

         title3: "recect",
         icon3: "mdi-map-marker",

     }

            }
  }
</script>