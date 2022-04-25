// noinspection LanguageDetectionInspection

const data = require('../data/zoo_data');

function getSpeciesByLocation() {
  return data.species.reduce((acc, specie) => {
    acc[specie.location].push(specie);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function getResidentsNames(specie, sex = null, sorted = false) {
  const residents = specie.residents
    .reduce((acc, resident) => {
      if (!sex || sex === resident.sex) acc.push(resident.name);
      return acc;
    }, []);
  const obj = {};
  if (sorted) residents.sort();
  obj[specie.name] = residents;
  return obj;
}

function getAnimalMap(options) {
  const output = { NE: [], NW: [], SE: [], SW: [] };
  const speciesByLocation = getSpeciesByLocation();
  Object.keys(speciesByLocation)
    .forEach(
      (key) => {
        output[key] = speciesByLocation[key]
          .map(
            (specie) => (!options || !options.includeNames
              ? specie.name
              : getResidentsNames(specie, options.sex || null, options.sorted || false)),
          );
      },
    );
  return output;
}

module.exports = getAnimalMap;
