const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(sp1, sp2) {
  return species.filter((specie) => specie.id === sp1 || specie.id === sp2);
}

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
