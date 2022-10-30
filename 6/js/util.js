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


export {getRandomPositiveInteger};
