const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_INITIAL = 100;

const increaseScale = document.querySelector('.scale__control--bigger');
const decreaseScale = document.querySelector('.scale__control--smaller');
const inputScale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const imageScale = (value = SCALE_INITIAL) => {
  imagePreview.style.transform = `scale(${value / SCALE_MAX})`;
  inputScale.value = `${value}%`;
};

const onDecreaseScaleClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  imageScale(newValue);
};

const onIncreaseScaleClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  imageScale(newValue);
};

const resetScale = () => {
  imageScale();
};

increaseScale.addEventListener('click', onIncreaseScaleClick);
decreaseScale.addEventListener('click', onDecreaseScaleClick);

export { resetScale };
