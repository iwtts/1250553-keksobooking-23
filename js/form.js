const noticeForm = document.querySelector('.ad-form');
const noticeFormElements = document.querySelectorAll('ad-form__element');
const mapFiltersList = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');

const makePageInactive = () => {
  noticeForm.classList.add('ad-form--disabled');
  noticeFormElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  mapFiltersList.classList.add('ad-form--disabled');
  mapFilters.forEach((filters) => {
    filters.setAttribute('disabled', 'disabled');
  });
};

const makePageActive = () => {
  noticeForm.classList.remove('ad-form--disabled');
  noticeFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFiltersList.classList.remove('ad-form--disabled');
  mapFilters.forEach((filters) => {
    filters.removeAttribute('disabled');
  });
};

export { makePageInactive, makePageActive };
