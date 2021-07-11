import {
  getRandomPositiveInteger,
  getRandomPositiveDecimal,
  makeUniqueRandomPositiveIntegerGenerator
} from './utils.js';

const SIMILAR_NOTICES_COUNT = 10;

const AVATAR_NUMBER_RANGE = {
  from: 1,
  to: 10,
};

const PRICE_RANGE = {
  from: 1000,
  to: 100000,
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS_RANGE = {
  from: 1,
  to: 10,
};

const GUESTS_RANGE = {
  from: 1,
  to: 10,
};

const LATITUDES_RANGE = {
  from: 35.65000,
  to: 35.70000,
  decimal : 5,
};

const LONGITUDES_RANGE = {
  from: 139.70000,
  to: 139.80000,
  decimal : 5,
};

const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getUniqueRandomInteger = makeUniqueRandomPositiveIntegerGenerator(AVATAR_NUMBER_RANGE.from, AVATAR_NUMBER_RANGE.to);
const getAuthorAvatarNumber = () => {
  const avatarNumber = getUniqueRandomInteger();
  if (avatarNumber < 10) {
    return `0${  avatarNumber}`;
  }
  return avatarNumber;
};

const locationLat = getRandomPositiveDecimal(LATITUDES_RANGE.from, LATITUDES_RANGE.to, LATITUDES_RANGE.decimal);
const locationLng = getRandomPositiveDecimal(LONGITUDES_RANGE.from, LONGITUDES_RANGE.to, LONGITUDES_RANGE.decimal);

const renderSimilarNotice = () => ({
  author: {
    avatar:`img/avatars/user${getAuthorAvatarNumber()}.png`,
  },
  offer: {
    title: 'すべてにうんざりしている',
    address: `${locationLat}, ${locationLng}`,
    price: getRandomPositiveInteger(PRICE_RANGE.from, PRICE_RANGE.to),
    type: TYPES[getRandomPositiveInteger(0, TYPES.length -1)],
    rooms: getRandomPositiveInteger(ROOMS_RANGE.from, ROOMS_RANGE.to),
    guests: getRandomPositiveInteger(GUESTS_RANGE.from, GUESTS_RANGE.to),
    checkin: CHECKS[getRandomPositiveInteger(0, CHECKS.length -1)],
    checkout: CHECKS[getRandomPositiveInteger(0, CHECKS.length -1)],
    features: FEATURES.slice(getRandomPositiveInteger(0, FEATURES.length)),
    description: 'あなたのお父さんは酔っている',
    photos: PHOTOS.slice(getRandomPositiveInteger(0, PHOTOS.length)),
  },
  location: {
    lat: locationLat,
    lng: locationLng,
  },
});

const renderSimilarNotices = () => new Array(SIMILAR_NOTICES_COUNT).fill(null).map(() => renderSimilarNotice());

export { renderSimilarNotices };
