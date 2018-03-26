import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import Test from './Components/Test.jsx';  // eslint-disable-line

const img = document.querySelector(`.image`);
const imgPath = `assets/img/`;
let imageCount = 0;
let firstTime = false;

const cornerImage = document.querySelector(`.corner-image`);

const init = () => {
  console.log(`hello world`);
  console.log(`hallo`);
  ReactDOM.render(<Test />, document.getElementById(`reactcontent`));

  window.addEventListener(`scroll`, scrollFunc);
  setInterval(changeImage, 1000);
};

const scrollFunc = () => {
  console.log(window.scrollY);
  const scroll = window.scrollY;
  if (scroll <= 25) {
    cornerImage.src = `/assets/img/corners/corner_1.png`;
  } else if (scroll <= 200) {
    cornerImage.src = `/assets/img/corners/corner_2.png`;
  } else if (scroll <= 400) {
    cornerImage.src = `/assets/img/corners/corner_3.png`;
  } else if (scroll <= 500) {
    cornerImage.src = `/assets/img/corners/corner_4.png`;
  }

};

const changeImage = () => {
  const oldImageCount = imageCount;
  if (imageCount >= 3) {
    imageCount = 0;
  }
  //console.log(`${oldImageCount} old`);
  imageCount ++;
  //console.log(`${imageCount} new`);
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
