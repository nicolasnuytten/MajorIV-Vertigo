import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import Test from './Components/Test.jsx';  // eslint-disable-line

const img = document.querySelector(`.image`);
const imgPath = `assets/img/`;
let imageCount = 0;
let firstTime = false;

const init = () => {
  console.log(`hello world`);
  console.log(`hallo`);
  ReactDOM.render(<Test />, document.getElementById(`reactcontent`));



  setInterval(changeImage, 1000);

};


const changeImage = () => {
  const oldImageCount = imageCount;
  if (imageCount >= 3) {
    imageCount = 0;
  }

  console.log(`${oldImageCount} old`);
  imageCount ++;
  console.log(`${imageCount} new`);
  img.src = `${imgPath}${imageCount}.png`;

  if (imageCount !== 0) {
    document.querySelector(`.markering${imageCount}`).classList.add(`markering`);
    if (firstTime) {
      document.querySelector(`.markering${oldImageCount}`).classList.remove(`markering`);
    }
  }
  firstTime = true;



};


init();
