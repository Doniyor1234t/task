<template>
  <v-card>
    <v-layout class="h-screen ">
    <default-bar />
      <router-view></router-view>
    </v-layout>
  </v-card>
  <!-- <v-app> -->

  <!-- </v-app> -->
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
</script>
