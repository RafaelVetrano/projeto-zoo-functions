const data = require('../data/zoo_data');

function categorizeEntrantAge(entrant) {
  if (entrant.age < 18) return 'child';
  if (entrant.age < 50) return 'adult';
  return 'senior';
}

function countEntrants(entrants) {
  return entrants.reduce((acc, entrant) => {
    acc[categorizeEntrantAge(entrant)] += 1;
    return acc;
  },
  {
    child: 0,
    adult: 0,
    senior: 0,
  });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const cEntrants = Object.entries(countEntrants(entrants));
  return cEntrants.reduce((acc, entrant) => acc + entrant[1] * data.prices[entrant[0]], 0);
}

module.exports = { calculateEntry, countEntrants };
