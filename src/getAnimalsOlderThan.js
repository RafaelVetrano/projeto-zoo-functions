const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findSpecie = species.filter((specie) => specie.name === animal);
  const [specieFound] = findSpecie;
  const trueFalse = specieFound.residents.map((specie) => specie.age > age);
  const result = trueFalse.reduce((final) => (final === true));
  return result;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
