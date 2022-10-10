const PHOTOS_DESCRIPTION_COUNT = 25;

const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 200;

const DESCRIPTION = [
  'Вид сверху на воду и пляж с шезлонгами.',
  'Табличка с указанием входа на пляж.',
  'Вид с берега на горизонт.',
  'Девушка в купальнике с фотоаппаратом.',
  'Суп с рисовыми человечками.',
  'Черная машина с открывающейся дверью наверх.',
  'Деревянная тарелка с двумя клубничками и вилкой со сложенной скатертью на столе.',
  'Два стакана клюквенного сока и веточка клюквы на белой салфетке.',
  'Девушка машущая руками пролетающему самолету над морем',
  'Выдвижная подставка с обувью.',
  'Песчаная дорожка между двумя заборчиками ведущая к морю',
  'Машина Audi белого цвета и зелеными фарами',
  'Филе рыбное с овощами',
  'Котосуши',
  'Теплые комнатные угги',
  'Свмолет пролетающий над облаками',
  'Выступление хора',
  'Красная ретро машина в гараже из красного кирпича',
  'Тапочки с фонариками светящимися в темноте',
  'Пальмы в вечернем городе',
  'Керамическая тарелка с гарниром и долькой лайма',
  'Закат солнца на море',
  'Краб на дереве',
  'Огненное шоу',
  'Машина в диких джунглях'
];

// источник: https://up.htmlacademy.ru/profession/frontender/12/javascript/27/module/2/item/23 (Ретроспектива)
function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger(1, 0);

function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('', 140);

const createPhotoList = () => {
  const arrPhoto = [];

  for (let i = 0; i < PHOTOS_DESCRIPTION_COUNT; i++) {
    arrPhoto.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      decription: DESCRIPTION[i],
      likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
      comments: getRandomPositiveInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)
    });
  }

  return arrPhoto;
};

createPhotoList();
