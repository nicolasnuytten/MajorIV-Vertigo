import React from 'react'; // eslint-disable-line

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
          <source className='intro-webp' type='image/webp' srcset='/assets/img/intro/default.webp' />
          <img className='intro-image' src='/assets/img/intro/default.png' width='550' height='550' alt='Chrisopher Nolan' />
        </picture>
      </div>
    </article>
  );
};

export default Element1;
