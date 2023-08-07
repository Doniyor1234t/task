<template>
  <v-navigation-drawer
        floating
        permanent
        class="height-100"
      >
        <v-list
          density="compact"
          nav
        >
        <v-list-subheader href="/">REPORTS</v-list-subheader>
        <v-list-item href="/employees" prepend-icon="mdi-account-group" value="employees">
          <v-list-item-title >Employees</v-list-item-title>
        </v-list-item>
          <v-list-item href="/documents" prepend-icon="mdi-file-outline" title="Documents" value="documents"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
  //
</script>
