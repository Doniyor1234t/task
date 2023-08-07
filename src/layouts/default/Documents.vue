<template>

  <v-main>

    <v-table>

      <thead>
        <tr>
          <th class="text-left">
            №
          </th>
          <th class="text-left">
            Тип документа
          </th>
          <th class="text-left">
            Номер документа
          </th>
          <th class="text-left">
            Дата документа
          </th>
          <th class="text-left">
            Описание
          </th>
        </tr>
      </thead>

      <tbody>
      <tr
        v-for="item in show10"
        :key="item"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.typeDoc }}</td>
        <td>{{ getDate(item.date) }}</td>
        <td>{{ item.desc }}</td>
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
    documents(){
      return this.$store.getters.documents
    },
    show10(){
        let startIndex = (this.page - 1) * 10
        let endIndex  = startIndex + 10
        return this.documents.slice(startIndex, endIndex)
    },
    destinationId(){
      return this.$route.params.id
    },
  },
  methods: {
    getDate(d){
      let date = new Date(d)
      return `${date.getDate()}.${(date.getMonth() + 1 < 9) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1)}.${date.getFullYear()}`
      // return d
    },
    show(id){
      this.dialog = true
      this.$router.push(`documents/${id}`)
    },
    lengthDb(){
      return Math.ceil(this.documents.length/10)
    }
    
  },
  mounted() {
  },

}
</script>