const { species, hours } = require('../data/zoo_data');

function getSpecieByName(specieName) {
  return species.find((specie) => specie.name === specieName);
}

function getDayOfficeHour(day) {
  return day !== 'Monday'
    ? `Open from ${hours[day].open}am until ${hours[day].close}pm`
    : 'CLOSED';
}

function getDayExhibition(day) {
  return day !== 'Monday'
    ? species.reduce((acc, specie) => {
      if (specie.availability.includes(day)) acc.push(specie.name);
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
  return Object.keys(hours).reduce((acc, day) => {
    if (!filter || scheduleTarget === day) {
      acc[day] = {
        officeHour: getDayOfficeHour(day),
        exhibition: getDayExhibition(day),
      };
    }
    return acc;
  }, {});
}

module.exports = getSchedule;
