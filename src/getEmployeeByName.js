const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const filter = employees.filter((emp) =>
    emp.firstName === employeeName || emp.lastName === employeeName);
  return !employeeName ? {} : filter[0];
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
