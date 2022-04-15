<template>
  <v-app dark >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      
<!-- ////////////////////右上アイコン集↓↓↓////////////////// -->
      <v-btn>
      <v-icon>mdi-magnify</v-icon><!-- サーチアイコン -->
      </v-btn>

      <v-btn @click="dialog = true">
      <v-icon>mdi-pencil-box-outline</v-icon><!-- 投稿アイコン -->
      </v-btn>
      
      <v-menu
            bottom
            left
          >

      <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        <v-icon>mdi-account</v-icon><!-- ユーザーアイコン -->
      </v-btn>
      </template>
<!-- ////////////////////ホップアップ////////////////// --> 
  <v-card
    class="mx-auto"
    width="256"
    tile
    padding-top="100px"
  >
    <v-navigation-drawer permanent>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>

  </v-menu>
<!-- ////////////////////右上アイコン集↑↑↑////////////////// -->

      
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
   
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

<!-- ////////////////////ここからのテンプレートは『投稿画面モーダル』////////////////// --> 
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
     
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
       
      

        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </v-app>

  
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      dialog: false,
      clipped: false,
      drawer: false,
      fixed: false,

      // ホップアップ一覧
      absolute: true,
      hopup: false,
      // ///////////////////////////////////

      items: [
        {
          icon: 'mdi-apps',
          title: 'ホーム',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'プロフィール',
          to: '/User/profile'
        },
        // ホップアップ一覧
       
        // /////////////////////////////////////////////////////////
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Quick-E'
    }
  },
}

</script>

