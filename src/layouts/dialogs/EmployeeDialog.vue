<template>
  <!-- <v-main> -->
    <v-card
    class="mx-auto my-auto"
    width="1000"
    >
    <template v-slot:prepend>
      <v-avatar color="surface-variant"></v-avatar>
    </template>
    <v-card-title>
      {{destination.surname}}
      {{destination.name}}
    </v-card-title>
      <v-card-text>
        Age: {{ getAge() }} 
      </v-card-text>
      <v-card-text>
        Passport series: {{ destination.passport }}
      </v-card-text>
      <v-card-text>
        Gender: {{ destination.gender }}
      </v-card-text>
      <v-card-text>
        Actived: {{ (destination.active)? "actived": "not actived" }}
      </v-card-text>
    </v-card>

  <!-- </v-main> -->
  
</template>

<script>
export default {
  computed:{
    workers(){
      return this.$store.getters.employees
    },
    
    destinationId(){
      return parseInt(this.$route.params.id)
    },

    destination(){
      return this.workers.find(destination => destination.id === this.destinationId)
    },
  },
  methods: {
    getAge(){
      let date = new Date(this.destination.dBirth)
      let now = new Date();
      var ageDifMs = now.getFullYear() - date.getFullYear();
      return ageDifMs
    }
    
  },

}
</script>

<style>

</style>