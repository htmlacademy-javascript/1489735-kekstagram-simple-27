// import './data.js';
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const containter = document.querySelector('.pictures');

const createPicture = (data) => {
  const { comments, description, likes, url } = data;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  containter.append(fragment);
};

export { renderPictures };
