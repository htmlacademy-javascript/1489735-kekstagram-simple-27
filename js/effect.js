const EFFECTS = [
  {
    name:'none',
    min:0,
    max:100,
    step: 1,
  },
  {
    name: 'chrome',
    style:'grayscale',
    min:0,
    max:1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style:'sepia',
    min:0,
    max:1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style:'invert',
    min:0,
    max:100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style:'blur',
    min:0,
    max:3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style:'brightness',
    min:1,
    max:3,
    step: 0.1,
    unit: '',
  },
];

const INITIAL_EFFECT = EFFECTS[0];

const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const slider = document.querySelector('.effect-level__slider');
const levelEffect = document.querySelector('.effect-level__value');

let selectEffect = INITIAL_EFFECT;

const isInitial = () => selectEffect === INITIAL_EFFECT;

const updateSlider = () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min:selectEffect.min,
      max:selectEffect.max,
    },
    step:selectEffect.step,
    start:selectEffect.max,
  });

  if (isInitial()) {
    slider.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  selectEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imagePreview.style.filter = 'none';
  imagePreview.className = '';
  levelEffect.value = '';
  if (isInitial()) {
    return;
  }

  const sliderValue = slider.noUiSlider.get();
  imagePreview.style.filter = `${selectEffect.style}(${sliderValue}${selectEffect.unit})`;
  imagePreview.classList.add(`effects__preview--${selectEffect.name}`);
  levelEffect.value = sliderValue;
};

const resetEffects = () => {
  selectEffect = INITIAL_EFFECT;
  updateSlider();
};

noUiSlider.create(slider, {
  range: {
    min: INITIAL_EFFECT.min,
    max: INITIAL_EFFECT.max,
  },
  start: INITIAL_EFFECT.max,
  step: INITIAL_EFFECT.step,
  connect: 'lower',
});
updateSlider();

form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };

