<template>
  <AppHeader />

 <router-view></router-view>

  <app-player/>

  <!-- Auth Modal -->
  <Auth />
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import Auth from "./components/Auth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import {auth} from "@/includes/firebase";
import AppPlayer from "@/components/Player.vue"
export default {
  name: "App",
  components: {
    AppHeader,
    AppPlayer,
    Auth,
  },
  computed:{
    ...mapWritableState(useUserStore, ["userLoggedIn"])
  },
  created(){
    if(auth.currentUser){
      this.userLoggedIn = true;
    } 
  }
};
</script>
