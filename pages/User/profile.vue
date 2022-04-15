<template>
  <v-bottom-navigation
    color="#63bef7"
    grow
  >
  
    <v-btn>
      <span>{{title1}}</span>
      <nuxt-link to="/User/profile" nuxt router exact 
      class="text-decoration-none" replace v-bind:class="size"><v-icon>{{icon1}}</v-icon></nuxt-link>
    </v-btn>

    <v-btn>
      <span>{{title2}}</span>
      <nuxt-link to="/User/product" nuxt router exact 
      class="text-decoration-none" replace><v-icon>{{icon2}}</v-icon></nuxt-link>
    </v-btn>

    <v-btn>
      <span>{{title3}}</span>
      <nuxt-link to="/User/history" nuxt router exact
      class="text-decoration-none" replace><v-icon>{{icon3}}</v-icon></nuxt-link>
    </v-btn>
  </v-bottom-navigation>




</template>

<script>
  export default {
    data () {
      return {
         value: 1,
         title1: "Introduction",
         icon1: "mdi-history",
         size: "50px",

         title2: "Product",
         icon2: "mdi-bag-personal",

         title3: "recect",
         icon3: "mdi-map-marker",

     }

            }
  }
</script>