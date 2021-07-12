const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const noticeTitleInput = document.querySelector('#title');
const noticePriceInput = document.querySelector('#price');

const checkTitleValidity = () => {
  const valueLength = noticeTitleInput.value.length;
  noticeTitleInput.removeAttribute('maxlength');

  if (noticeTitleInput.value === '') {
    noticeTitleInput.setCustomValidity('Обязательное поле');
  } else if (valueLength < MIN_TITLE_LENGTH) {
    noticeTitleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    noticeTitleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } символов`);
  } else {
    noticeTitleInput.setCustomValidity('');
  }
  noticeTitleInput.reportValidity();
};

const checkPriceValidity = () => {
  if (noticePriceInput.value === '') {
    noticePriceInput.setCustomValidity('Обязательное поле');
  } else if (noticePriceInput.value > MAX_PRICE) {
    noticePriceInput.setCustomValidity(`Цена не может быть больше ${ MAX_PRICE }`);
  }
  noticePriceInput.reportValidity();
};

export { checkTitleValidity, checkPriceValidity };
