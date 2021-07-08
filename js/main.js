const getRandomPositiveInteger = (from, to) => {
  from = Math.ceil(Math.abs(from));
  to = Math.floor(Math.abs(to));
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

getRandomPositiveInteger();

const getRandomPositiveDecimal = (from, to, decimalPartLength) => {
  from = Math.ceil(Math.abs(from));
  to = Math.floor(Math.abs(to));
  return (Math.random() * (to - from + 1) + from).toFixed(decimalPartLength);
};

getRandomPositiveDecimal();
