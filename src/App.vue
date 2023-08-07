<template>
  <router-view />
</template> 

<script>
export default {
  mounted() {
    this.$store.dispatch("allEmployees")
    this.$store.dispatch("allDocuments")
  }

}
</script>
