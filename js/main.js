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

const ID = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const URL = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg'
];

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

const LIKES = function(startNumber, endNumber) {
  return getRandomPositiveInteger(startNumber, endNumber);
};

const COMMENTS = function(startNumber, endNumber) {
  return getRandomPositiveInteger(startNumber, endNumber);
};

const createPhotoList = () => {
  const arrPhoto = [];

  for(let i = 0; i < 25; i++) {
    arrPhoto.push({
      id: ID[i],
      url: URL[i],
      decription: DESCRIPTION[i],
      likes: LIKES(15, 200),
      comments: COMMENTS(0, 200)
    });
  }

  return arrPhoto;
};

createPhotoList();

