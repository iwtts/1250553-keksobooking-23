import { renderNotices } from './random-data.js';

const mapCanvas = document.querySelector('#map-canvas');
const noticeTemplate = document.querySelector('#card').content;
const notices = renderNotices();
const noticeFragment = document.createDocumentFragment();

const renderSimilarNotices = () => {
  notices.forEach(({offer, author}) => {
    const notice = noticeTemplate.cloneNode(true);
    const noticeFeatures = notice.querySelector('.popup__features');
    const noticePhotosContainer = notice.querySelector('.popup__photos');

    notice.querySelector('.popup__title').textContent = offer.title;
    notice.querySelector('.popup__text--address').textContent = offer.address;
    notice.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    notice.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    notice.querySelector('.popup__text--time').textContent = `${offer.checkin}, выезд до ${offer.checkout}`;
    notice.querySelector('.popup__description').textContent = offer.description;
    if (offer.description === undefined) {
      notice.querySelector('.popup__description').classList.add('hidden');
    }
    notice.querySelector('.popup__avatar').src = author.avatar;

    notice.querySelector('.popup__type').textContent = (function () {
      switch (offer.type) {
        case 'flat':
          return 'Квартира';
        case 'bungalow':
          return 'Бунгало';
        case 'house':
          return 'Дом';
        case 'palace':
          return 'Дворец';
        case 'hotel':
          return 'Отель';
        default:
          return 'Жилье';
      }}());

    noticeFeatures.innerHTML = '';
    // eslint-disable-next-line id-length
    for (let i = 0; i < offer.features.length; i++) {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature');
      feature.classList.add(`popup__feature--${offer.features[i]}`);

      noticeFeatures.appendChild(feature);
    }

    noticePhotosContainer.innerHTML = '';
    // eslint-disable-next-line id-length
    for (let i = 0; i < offer.photos.length; i++) {
      const photo = document.createElement('img');
      photo.src = offer.photos[i];
      photo.alt = 'Фотография жилья';
      photo.width = 45;
      photo.width = 40;
      photo.classList.add('popup__photo');

      noticePhotosContainer.appendChild(photo);
    }
    noticeFragment.appendChild(notice);
  });

  const noticesTempContainer = document.createElement('div');
  noticesTempContainer.appendChild(noticeFragment);
  mapCanvas.appendChild(noticesTempContainer.firstElementChild);
};

export{ renderSimilarNotices };
