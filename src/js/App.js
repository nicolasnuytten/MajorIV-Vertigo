import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import Test from './Components/Test.jsx';  // eslint-disable-line

const img = document.querySelector(`.intro-image`);
let imageCount = 0;
let firstTime = false;

const cornerImage = document.querySelector(`.corner-image`);

const init = () => {
  console.log(`hello world`);
  console.log(`hallo`);
  //ReactDOM.render(<Test />, document.getElementById(`reactcontent`));
  window.addEventListener(`scroll`, scrollFunc);
  const interval = 10000; //miliseconden
  setInterval(changeImage, interval);
};

const scrollFunc = () => {
  console.log(window.scrollY);
  const scroll = window.scrollY;
  if (scroll <= 1800) {
    cornerImage.src = `/assets/img/corners/corner_1.png`;
  } else if (scroll <= 2400) {
    cornerImage.src = `/assets/img/corners/corner_2.png`;
  } else if (scroll <= 2800) {
    cornerImage.src = `/assets/img/corners/corner_3.png`;
  } else if (scroll <= 3200) {
    cornerImage.src = `/assets/img/corners/corner_4.png`;
  } else {
    cornerImage.src = ``;
  }

};

const changeImage = () => {
  const imgPath = `assets/img/intro/`;
  const oldImageCount = imageCount;
  if (imageCount >= 5) {
    imageCount = 0;
  }
  //console.log(`${oldImageCount} old`);
  imageCount ++;
  //console.log(`${imageCount} new`);
  img.src = `${imgPath}${imageCount}.png`;

  if (imageCount !== 0) {
    document.querySelector(`.markering${imageCount}`).classList.add(`markering-intro`);
    if (firstTime) {
      document.querySelector(`.markering${oldImageCount}`).classList.remove(`markering-intro`);
    }
  }
  firstTime = true;
};


init();
