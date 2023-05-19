<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-0 flex flex-wrap md:flex-nowrap md:flex-row justify-start lg:mx-auto md:items-center py-5 px-0 md:px-2 lg:px-4 ">
      <!-- App Name -->
      <router-link
        class="text-white font-bold md:font-bold uppercase ml-8 md:mx-2 lg:mx-2 hidden md:block lg:block  text-xl md:text-xl lg:text-2xl "
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >SoundScape
        </router-link
      >
      <div class="ml-auto w-full flex justify-center md:ml-0 md:w-0 md:no-flex md:justify-start">
        <div class="inline-block sm:block">
          <router-link
        class="text-white w-screen font-bold md:font-bold uppercase opacity-1 z-50 md:opacity-0 md:invisible mr-0 md:mx-2 lg:mx-2"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >
          <i class="fas fa-headphones text-green-500 text-2xl"></i>
       
        </router-link
      >
        </div>
      
    </div>
      <div class="flex w-full justify-center md:w-auto md:items-center md:flex-row md:ml-4">
        <div class="block md:flex">
        <!-- Primary Navigation -->
        <!-- <button type="button" class="visible fully-roundede z-50 w-5 h-5 bg-white md:hidden">
          <i class="fas fa-bars text-xl ml-auto"></i>
        </button> -->
        <ul class="flex flex-grow md:mt-1 lg:flex-row">
          <!-- Navigation Links -->
          <li>
            <router-link :to="{ name: 'about' }" class="px-2 text-white"
              >About</router-link
            >
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }"
                >Manage</router-link
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut"
                >Logout</a
              >
            </li>
          </template>
        </ul>
        <ul class="flex justify-center md:items-center sm:hidden">
          <li class="mt-1 inline-block md:block">
            <a href="#" class="px-2 text-white" @click.prevent="changeLocale">{{
              currentLocale
            }}</a>
          </li>
        </ul>
        </div>
      </div>
      <div class="flex justify-center w-full">
      <ul class="inline-block md:ml-auto md:items-center hidden sm:block ">
              <li class="mt-1 inline-block">
                <a href="#" class="px-2 text-white" @click.prevent="changeLocale">{{
                  currentLocale
                }}</a>
              </li>
            </ul>
      </div>
      
    </nav>
  </header>
</template>
<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";
export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === "fr" ? "French" : "English";
    },
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.modalStore.isOpen);
    },
    signOut() {
      this.userStore.signOutUser();
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === "fr" ? "en" : "fr";
    },
  },
};
</script>
<style></style>
