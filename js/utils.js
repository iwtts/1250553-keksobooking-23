function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

const getRandomPositiveInteger = (from, to) => {
  from = Math.ceil(Math.abs(from));
  to = Math.floor(Math.abs(to));
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const getRandomPositiveDecimal = (from, to, decimalPartLength) => {
  from = Math.abs(from);
  to = Math.abs(to);
  return (Math.random() * (to - from + 1) + from).toFixed(decimalPartLength);
};

const makeUniqueRandomPositiveIntegerGenerator = (from, to) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(from, to);
    while (previousValues.includes(currentValue)) {
      if (previousValues.length >= (to - from + 1)) {
        break;
      }
      currentValue = getRandomPositiveInteger(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {
  debounce,
  throttle,
  getRandomPositiveInteger,
  getRandomPositiveDecimal,
  makeUniqueRandomPositiveIntegerGenerator
};
