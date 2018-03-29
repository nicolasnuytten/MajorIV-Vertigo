import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import Test from './Components/Test.jsx';  // eslint-disable-line
import Element1 from './Components/Element1.jsx';  // eslint-disable-line
import Element2 from './Components/Element2.jsx';  // eslint-disable-line

const cornerImage = document.querySelector(`.corner-image`);

const tm2article1 = document.querySelector(`.tm2-article1`);
const tm2article2 = document.querySelector(`.tm2-article2`);
const tm2article3 = document.querySelector(`.tm2-article3`);
const tm2img1 = document.querySelector(`.tm2-img1`);
const tm2img2 = document.querySelector(`.tm2-img2`);
const tm2img3 = document.querySelector(`.tm2-img3`);
const tm2img4 = document.querySelector(`.tm2-img4`);

const outroText = document.querySelector(`.outro`);
const outroCups = document.querySelector(`.cups`);
let outroCount = 1;

const tm3gif = document.querySelector(`.trademark3-content-image-container`);


const init = () => {
  setupLogs();
  setupListeners();
  setupOutroTimer();
  setupReactElements();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 1150) {
    cornerImage.classList.add(`hide`);
  }

};

const setupLogs = () => {
  console.log(`hello world`);
  console.log(`hallo`);
};

const setupListeners = () => {
  window.addEventListener(`scroll`, scrollCorner);
  window.addEventListener(`scroll`, tm2scrollEffect);
  window.addEventListener(`scroll`, tm3scrollEffect);
};

const setupOutroTimer = () => {
  console.log(outroCount);
  const interval = 10000; //miliseconden
  setInterval(countOutro, interval);
};

const setupReactElements = () => {
  //ReactDOM.render(<Test />, document.getElementById(`reactcontent`));
  ReactDOM.render(<Element1 />, document.getElementById(`reactcontent`));
  ReactDOM.render(<Element2 />, document.getElementById(`reactcontent2`));
};

const countOutro = () => {
  if (outroCount <= 1) {
    outroCups.innerHTML = `kopje`;
  } else {
    outroCups.innerHTML = `kopjes`;
  }
  outroText.innerHTML = outroCount;
  outroCount ++;
};

const tm3scrollEffect = () => {
  const scroll = window.scrollY;
  if (scroll >= 4886 && scroll < 5400) {
    tm3gif.style.display = `block`;
    tm3gif.style.backgroundImage = `url(/assets/img/tm3/tm3_1.gif)`;
  } else if (scroll >= 5400 && scroll <= 5800) {
    tm3gif.style.backgroundImage = `url(/assets/img/tm3/tm3_2.gif)`;
  } else if (scroll > 5800) {
    tm3gif.style.backgroundImage = `url(/assets/img/tm3/tm3_3.gif)`;
  }
};

const tm2scrollEffect = () => {
  //console.log(window.scrollY);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 960) {
    tm2article1.classList.remove(`tm2-articleEffect`);
    tm2article2.classList.remove(`tm2-articleEffect`);
    tm2article3.classList.remove(`tm2-articleEffect`);
    tm2img1.classList.add(`hide`);
    tm2img2.classList.remove(`tm2-imgBGEffect`);
    tm2img3.classList.remove(`tm2-imgBGEffect`);
    tm2img4.classList.remove(`tm2-imgBGEffect`);
  } else {
    const scroll = window.scrollY;
    tm2img1.classList.remove(`hide`);
    if (scroll >= 3000 && scroll < 3300) {
      tm2article1.classList.remove(`tm2-articleEffect`);
      tm2article2.classList.add(`tm2-articleEffect`);
      tm2article3.classList.add(`tm2-articleEffect`);
      tm2img2.classList.remove(`tm2-imgBGEffect`);
      tm2img3.classList.add(`tm2-imgBGEffect`);
      tm2img4.classList.add(`tm2-imgBGEffect`);
    } else if (scroll >= 3300 && scroll < 3500) {
      tm2article1.classList.add(`tm2-articleEffect`);
      tm2article2.classList.remove(`tm2-articleEffect`);
      tm2article3.classList.add(`tm2-articleEffect`);
      tm2img2.classList.add(`tm2-imgBGEffect`);
      tm2img3.classList.remove(`tm2-imgBGEffect`);
      tm2img4.classList.add(`tm2-imgBGEffect`);
    } else if (scroll >= 3500) {
      tm2article1.classList.add(`tm2-articleEffect`);
      tm2article2.classList.add(`tm2-articleEffect`);
      tm2article3.classList.remove(`tm2-articleEffect`);
      tm2img2.classList.add(`tm2-imgBGEffect`);
      tm2img3.classList.add(`tm2-imgBGEffect`);
      tm2img4.classList.remove(`tm2-imgBGEffect`);
    }
  }
};

const scrollCorner = () => {
  const scroll = window.scrollY;
  //console.log(window.scrollY);
  if (scroll <= 2800) {
    cornerImage.src = `/assets/img/corners/corner_1.png`;
  } else if (scroll <= 4350) {
    cornerImage.src = `/assets/img/corners/corner_2.png`;
  } else if (scroll <= 6900) {
    cornerImage.src = `/assets/img/corners/corner_3.png`;
  } else if (scroll <= 7100) {
    cornerImage.src = `/assets/img/corners/corner_4.png`;
  } else {
    cornerImage.src = `/assets/img/corners/corner_4.png`;
  }

};


init();
