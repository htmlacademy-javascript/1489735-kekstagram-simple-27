import { renderPictures } from './picture.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';


getData((pictures) => {
  renderPictures(pictures);
}, showAlert);
