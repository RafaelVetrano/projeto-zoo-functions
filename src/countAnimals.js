const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function countAnimals(animal) {
  const getAllSpecies = species.reduce((acc, spc) => {
    acc[spc.name] = spc.residents.length;
    return acc;
  }, {});
  if (!animal) {
    return getAllSpecies;
  }
  const getSpecie = species.filter((spc) => spc.name === animal.specie)[0];
  if (!animal.sex) {
    return getSpecie.residents.length;
  }
  const getSpecieBySex = getSpecie.residents.filter((rsd) => rsd.sex === animal.sex);
  if (animal.sex) {
    return getSpecieBySex.length;
  }
}
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
