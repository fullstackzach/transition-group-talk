import OfflinePokemon from './OfflinePokemon.json'

export const getRandomNumber = (top) => Math.floor(Math.random() * top);

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const mapPokemon = ({name, abilities, height, weight, sprites: { front_default } }) => ({
  name: capitalizeFirstLetter(name),
  abilities, 
  height, 
  weight,
  img: front_default
})

export const getOfflinePokemon = (id) => 
  mapPokemon(OfflinePokemon.find(pokemon => pokemon.id === (id || getRandomNumber(11))))
