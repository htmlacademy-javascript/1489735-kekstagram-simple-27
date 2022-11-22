import './form.js';

const successMessageTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessageTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onErrorButtonClick = () => {
  closeMessage();
};

const onOverlayClick = () => {
  closeMessage();
};

const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  body.append(successMessage);
  body.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorMessage.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('click', onOverlayClick);
  body.append(errorMessage);
  body.style.overflow = 'hidden';
};

function closeMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  body.style.overflow = 'hidden';
}

export { showSuccessMessage, showErrorMessage };
