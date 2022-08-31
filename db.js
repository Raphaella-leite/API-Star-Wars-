const axios = require("axios");

const db = [];

const api = axios.create({
  baseURL: "http://swapi.dev/api",
});

const carregarFilms = async () => {
  try {
    const { data } = await api.get("/films");

    const adicionarVersion = data.results.map((filme) => {
      filme.populate = popularFilme.bind(filme);
      filme.version = 1;
      return filme;
    });

    db.push(...adicionarVersion);

    console.log(`total de Films Add: ${db.length}`);
  } catch (error) {
    if (error.isAxiosError) console.log(error.response);

    console.log(error.message);
  }
};

const popularCampo = async (campo) => {
  const resultado = await Promise.all(
    campo.map(async (url) => {
      const { data } = await api.get(url);
      return data;
    })
  );

  return resultado;
};

async function popularFilme() {
  const planets = await popularCampo(this.planets);
  const characters = await popularCampo(this.characters);
  const starships = await popularCampo(this.starships);
  const vehicles = await popularCampo(this.vehicles);
  const species = await popularCampo(this.species);
  return Object.assign(this, {
    planets,
    characters,
    starships,
    vehicles,
    species,
  });
}
const buscarPorId = (episode_id) =>
  db.find((filme) => filme.episode_id == episode_id);

db.buscarPorId = buscarPorId;
db.carregarFilms = carregarFilms;
module.exports = db;
