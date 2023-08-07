<template>

  <v-main>

    <v-table>

      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Surname
          </th>
          <th class="text-left">
            Passport
          </th>
          <th class="text-left">
            View
          </th>
        </tr>
      </thead>

      <tbody>
      <tr
        v-for="item in show10"
        :key="item"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.surname }}</td>
        <td>{{ item.passport }}</td>
        <td>
          <v-btn @click="show(item.id)">
            Show
          </v-btn>

        </td>
      </tr>
    </tbody>

    </v-table>

    
    <v-pagination
      v-model="page"
      class="text-left"
      :length="lengthDb()"
    >
    </v-pagination>


  </v-main>

</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      page: 1,
    }
  },
  computed:{
    workers(){
      return this.$store.getters.employees
    },
    show10(){
        let startIndex = (this.page - 1) * 10
        let endIndex  = startIndex + 10
        return this.workers.slice(startIndex, endIndex)
    },
    destinationId(){
      return this.$route.params.id
    }
  },
  methods: {
    d(d){
      let date = new Date(d)
      console.log(date)
      return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    },
    show(id){
      this.dialog = true
      this.$router.push(`employees/${id}`)
    },
    lengthDb(){
      return Math.ceil(this.workers.length/10)
    }
    
  },
  mounted() {
  },

}
</script>