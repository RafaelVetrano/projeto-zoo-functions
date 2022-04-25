const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];
console.log(managers);

function isManager(id) {
  const filter = managers.filter((manager) => manager === id);
  return filter.length !== 0;
}
console.log(isManager(burlId));

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmployees = employees.filter((emp) =>
    emp.managers.includes(managerId));
  const relatedNames = relatedEmployees.map((emp) =>
    `${emp.firstName} ${emp.lastName}`);
  return isManager(managerId) ? relatedNames : false;
}
console.log(getRelatedEmployees(burlId));

module.exports = { isManager, getRelatedEmployees };
