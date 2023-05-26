import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2';

  function showPokemonNum1_4_7() {
    const pokemonNumbers = [1, 4, 7];
    const requests = pokemonNumbers.map((number) =>axios.get(`${BASE_URL}/pokemon/${number}`));
    return axios.all(requests).then((datas) => datas.map((data) => data.data));
  }
  
  async function getPokemonId(name) {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data.data.id;
  }

  export {getPokemonId, showPokemonNum1_4_7};

 
  