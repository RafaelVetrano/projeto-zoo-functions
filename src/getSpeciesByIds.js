const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function getSpeciesByIds(a1, a2) {
  return species.filter((specie) => specie.id === a1 || specie.id === a2);
}

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
