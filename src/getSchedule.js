const { species, hours } = require('../data/zoo_data');

function getSpecieByName(specieName) {
  return species.find((specie) => specie.name === specieName);
}

function getDayOfficeHour(dia) {
  return dia !== 'Monday'
    ? `Open from ${hours[dia].open}am until ${hours[dia].close}pm`
    : 'CLOSED';
}

function getDayExhibition(dia) {
  return dia !== 'Monday'
    ? species.reduce((acc, specie) => {
      if (specie.availability.includes(dia)) acc.push(specie.name);
      return acc;
    }, [])
    : 'The zoo will be closed!';
}

function getScheduleFilterType(filter = null) {
  const days = Object.keys(hours);
  const animals = species.map((specie) => specie.name);
  if (!filter) return null;
  if (days.includes(filter)) return 'day';
  if (animals.includes(filter)) return 'animal';
  return null;
}

function getSchedule(scheduleTarget) {
  const filter = getScheduleFilterType(scheduleTarget);
  if (filter === 'animal') {
    return getSpecieByName(scheduleTarget).availability;
  }
  return Object.keys(hours).reduce((acc, dia) => {
    if (!filter || scheduleTarget === dia) {
      acc[dia] = {
        officeHour: getDayOfficeHour(dia),
        exhibition: getDayExhibition(dia),
      };
    }
    return acc;
  }, {});
}

module.exports = getSchedule;
