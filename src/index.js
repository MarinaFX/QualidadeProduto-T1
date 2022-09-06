var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var numberOfDays = parseInt(lines.shift());
console.log(parserAge2Days(numberOfDays));

function parserAge2Days(numberOfDays) {
  const yearToDay = 365;
  const monthInDays = 30;

  let years = Math.floor(numberOfDays / yearToDay);
  let months = Math.floor((numberOfDays % yearToDay) / monthInDays);
  let days = Math.floor((numberOfDays % yearToDay) % monthInDays);

  return formattPrint(years, months, days)
}

function formattPrint(years, months, days) {
  return `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`
}

module.exports = parserAge2Days
