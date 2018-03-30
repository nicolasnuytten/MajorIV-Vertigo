import React from 'react'; // eslint-disable-line



const handleToggleImageFilter = () => {
  const button = document.querySelector(`.tm4-button`);
  const image = document.querySelector(`.tm4-image`);
  if (button.textContent === `Toggle  on`) {
    button.textContent = `Toggle  Off`;
    image.classList.add(`filter`);
  } else {
    button.textContent = `Toggle  on`;
    image.classList.remove(`filter`);
  }

};

const Element2 = () => {
  return <div className='tm4-colorblind'>
    <picture className='button2'>
      <source  type='image/webp' srcSet='assets/img/tm4/thejoker.webp' />
      <img className='tm4-image' src='assets/img/tm4/thejoker.jpg' alt='Christopher Nolan kleurenblind' />
    </picture>
    <button className='tm4-button' onClick={handleToggleImageFilter}>Toggle  on</button>
  </div>;
};



export default Element2;
