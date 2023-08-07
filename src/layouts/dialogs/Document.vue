<template>
  <!-- <v-main> -->
    <v-card
    class="mx-auto my-auto"
    width="1000">
    <template v-slot:prepend>
      <v-avatar color="surface-variant"></v-avatar>
    </template>
    <v-card-title>
      {{ destination.typeDoc }}  
      {{(destination.typeDoc === "procuration") ? "Доверенность" : "(Счет-фактура)" }}
    </v-card-title>
      <v-card-text>
        Document id: {{ destination.postId }}
      </v-card-text>
      <v-card-text>
        Date: {{ getDate(destination.date) }}
      </v-card-text>
      <v-card-text>
        Description: {{ destination.desc}}
      </v-card-text>
      <v-card-text v-if="destination.madeBy">
        Trusted: {{ destination.madeBy }}
      </v-card-text>
    </v-card>
  <!-- </v-main> -->
</template>

<script>
export default {
  computed:{
    documents(){
      return this.$store.getters.documents
    },
    
    destinationId(){
      return parseInt(this.$route.params.id)
    },

    destination(){
      return this.documents.find(destination => destination.id === this.destinationId)
    },
  },
  methods: {
    getDate(d){
      let date = new Date(this.destination.date)
      console.log(date);
      return `${date.getDate()}.${(date.getMonth() + 1 < 9) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1)}.${date.getFullYear()}`
    }
    
  },

}
</script>

<style>

</style>