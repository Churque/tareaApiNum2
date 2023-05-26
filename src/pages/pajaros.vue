<template>
  <div>
<tope-pagina> </tope-pagina>
    <ul>
      <div class="container" v-for="pajaro in pajaros" :key="pajaro.id">
        <a> {{ pajaro.name.spanish }}</a>
        <img :src="pajaro.images.main" alt="Pajaro" />
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import topePagina from "../components/topePagina.vue"
export default {
  data() {
    return {
      pajaros: [],
    };
  },
   components: {
    topePagina,
  },
  
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://aves.ninjas.cl/api/birds")
        .then((result) => {
          this.pajaros = result.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
