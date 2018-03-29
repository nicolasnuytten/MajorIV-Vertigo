import React from 'react'; // eslint-disable-line

let imageCount = 1;
const imgPath = `assets/img/intro/`;
let oldImageCount;
let firstTime = false;

const HandleLeftClick = () => {
  if (imageCount <= 1) {
    imageCount = 5;
  } else {
    oldImageCount = imageCount;
    imageCount --;
  }
  const introImage = document.querySelector(`.intro-image`);
  const introImageWebp = document.querySelector(`.intro-webp`);
  console.log(introImage);
  introImage.src = `${imgPath}/${imageCount}.png`;
  introImageWebp.srcset = `${imgPath}/${imageCount}.webp`;
  checkMarking(oldImageCount);
};

const HandleRightClick = () => {
  if (imageCount >= 5) {
    imageCount = 1;
  } else {
    oldImageCount = imageCount;
    imageCount ++;
  }
  const introImage = document.querySelector(`.intro-image`);
  const introImageWebp = document.querySelector(`.intro-webp`);
  console.log(introImage);
  introImage.src = `${imgPath}/${imageCount}.png`;
  introImageWebp.srcset = `${imgPath}/${imageCount}.webp`;
  checkMarking(oldImageCount);
};
const checkMarking = oldImageCount => {
  console.log(oldImageCount);

  if (imageCount === 1) {
    document.querySelector(`.markering5`).classList.remove(`markering-intro`);
  } else if (imageCount === 5) {
    document.querySelector(`.markering1`).classList.remove(`markering-intro`);
  }

  if (imageCount !== 0) {
    document.querySelector(`.markering${imageCount}`).classList.add(`markering-intro`);
    if (firstTime) {
      document.querySelector(`.markering${oldImageCount}`).classList.remove(`markering-intro`);
    }
    firstTime = true;
  }
};


const Element1 = () => {
  return (
    <article className='introduction-container center'>
      <div className='introduction-text-container'>
        <h1 className='title introduction-title'>Introduction</h1>
        <p className='paragraph introduction-paragraph'>Christopher James Nolan (Londen, 30 juli 1970) is een Innovatieve Engels-Amerikaans filmregisseur en scenarioschrijver,
            bekend van films als
        <span className='markering5'>The Prestige</span>,
        <span className='markering3'>Inception</span>,
        <span className='markering4'>Interstellar</span>,
        <span className='markering2'>Dunkirk</span> en de succesvolle
        <span className='markering1'>Batman-reboots Batman Begins, The Dark Knight en The Dark Knight Rises</span>. Leer Christopher Nolan via een
            ander perspectief kennen, wat maakt hem juist uniek en waarom zijn zijn films anders.</p>
      </div>
      <div className='introduction-image-container'>
        <picture>
          <source className='intro-webp' type='image/webp' srcSet='/assets/img/intro/default.webp' />
          <img className='intro-image' src='/assets/img/intro/default.png' width='550' height='550' alt='Chrisopher Nolan' />
        </picture>
      </div>
      <div className='buttonContainer'>
        <div className='button1' onClick={HandleLeftClick}></div>
        <div className='button2' onClick={HandleRightClick}></div>
      </div>
    </article>
  );
};

export default Element1;
