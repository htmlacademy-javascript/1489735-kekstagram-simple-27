import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonCancel = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const submitButton = document.querySelector('#upload-submit');
const previewImg = document.querySelector('.img-upload__preview > img');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileField.value = '';
};

const resetPage = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
};

const onCancelButtonClick = () => {
  previewImg.src = previewImg.dataset.src ? previewImg.dataset.src : '';

  fileField.value = '';

  closeModal();
};

const onFileInputChange = () => {
  const file = fileField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImg.src = URL.createObjectURL(file);

    showModal();
  }
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        closeModal();
        resetPage();
        showSuccessMessage();
        unblockSubmitButton();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
};

fileField.addEventListener('change', onFileInputChange);
buttonCancel.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

export { onFormSubmit };
