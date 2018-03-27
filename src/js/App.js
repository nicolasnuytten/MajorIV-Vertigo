import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import Test from './Components/Test.jsx';  // eslint-disable-line

const img = document.querySelector(`.intro-image`);
let imageCount = 0;
let firstTime = false;

const cornerImage = document.querySelector(`.corner-image`);

const tm2article1 = document.querySelector(`.tm2-article1`);
const tm2article2 = document.querySelector(`.tm2-article2`);
const tm2article3 = document.querySelector(`.tm2-article3`);
const tm2img1 = document.querySelector(`.tm2-img2`);
const tm2img2 = document.querySelector(`.tm2-img3`);
const tm2img3 = document.querySelector(`.tm2-img4`);


const init = () => {
  setupLogs();
  setupListeners();
  setupIntroductionTimer();
  setupReactElements();
};

const setupLogs = () => {
  console.log(`hello world`);
  console.log(`hallo`);
};

const setupListeners = () => {
  window.addEventListener(`scroll`, scrollCorner);
  window.addEventListener(`scroll`, tm2scrollEffect);
};

const setupIntroductionTimer = () => {
  const interval = 1000; //miliseconden
  setInterval(changeImage, interval);
};

const setupReactElements = () => {
  //ReactDOM.render(<Test />, document.getElementById(`reactcontent`));
};

const tm2scrollEffect = () => {
  console.log(window.scrollY);
  const scroll = window.scrollY;
  if (scroll <= 3200) {
    tm2article1.classList.remove(`tm2-articleEffect`);
    tm2article2.classList.add(`tm2-articleEffect`);
    tm2article3.classList.add(`tm2-articleEffect`);
    tm2img1.classList.remove(`tm2-imgBGEffect`);
    tm2img2.classList.add(`tm2-imgBGEffect`);
    tm2img3.classList.add(`tm2-imgBGEffect`);
  } else if (scroll <= 3300) {
    tm2article1.classList.add(`tm2-articleEffect`);
    tm2article2.classList.remove(`tm2-articleEffect`);
    tm2article3.classList.add(`tm2-articleEffect`);
    tm2img1.classList.add(`tm2-imgBGEffect`);
    tm2img2.classList.remove(`tm2-imgBGEffect`);
    tm2img3.classList.add(`tm2-imgBGEffect`);
  } else if (scroll >= 3500) {
    tm2article1.classList.add(`tm2-articleEffect`);
    tm2article2.classList.add(`tm2-articleEffect`);
    tm2article3.classList.remove(`tm2-articleEffect`);
    tm2img1.classList.add(`tm2-imgBGEffect`);
    tm2img2.classList.add(`tm2-imgBGEffect`);
    tm2img3.classList.remove(`tm2-imgBGEffect`);
  }
};

const scrollCorner = () => {
  const scroll = window.scrollY;
  //console.log(window.scrollY);
  if (scroll <= 2800) {
    cornerImage.src = `/assets/img/corners/corner_1.png`;
  } else if (scroll <= 4300) {
    cornerImage.src = `/assets/img/corners/corner_2.png`;
  } else if (scroll <= 5000) {
    cornerImage.src = `/assets/img/corners/corner_3.png`;
  } else if (scroll <= 6000) {
    cornerImage.src = `/assets/img/corners/corner_4.png`;
  } else {
    cornerImage.src = `/assets/img/corners/corner_4.png`;
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
