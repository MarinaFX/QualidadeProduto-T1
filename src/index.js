function parserAge2Days(numberOfDays) {
  const yearToDay = 365;
  const monthInDays = 30;

  let years = Math.floor(numberOfDays / yearToDay);
  let months = Math.floor((numberOfDays % yearToDay) / monthInDays);
  let days = Math.floor((numberOfDays % yearToDay) % monthInDays);

  return `\n ${years} ano(s) \n ${months} mes(es) \n ${days} dia(s)`
}

module.exports = parserAge2Days
