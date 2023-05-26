<template>
      <body>
    <header>
      <tope-pagina> </tope-pagina>
    </header>
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Pokemon Iniciales</h1>
          <p class="lead text-muted"></p>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
          <pokemon-card-vue   v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon"/>
          </div>
        </div>
      </div>
    </main>
</body>
</template>

<script>
import PokemonCard from "../components/PokemonCard.vue"
import { showPokemonNum1_4_7 } from "../services/service.js";
import TopePagina from '../components/topePagina.vue';
import axios from 'axios';


export default {
  name: "PagPrincipal",
  components: {
    PokemonCard,
    TopePagina,
  },
  data() {
    return {
      pokemons: Array,
    };
  },
  async mounted() {
    const pokemonPrincipales = await showPokemonNum1_4_7();
    this.pokemons = pokemonPrincipales;
  },
  };
</script>

<style>

</style>