import { elements, elementsString } from './base';
export const renderShapes = (shapes, container) => {
  let shapesMarkup = '';
  shapes.forEach((shape) => {
    shapesMarkup += `
       <li class="game-shapes" data-items="${shape}"><img class="game-shapes__img" src="./images/icon-${shape}.svg" alt=" ${shape}" srcset=""></li>
       `;
  });
  const markup = `
    <section class="game-select">
    <ul class="game-menu">
      ${shapesMarkup}
    </ul>
  </section>
    `;
  container.insertAdjacentHTML('afterbegin', markup);
};
// render Menu play Container
export const renderPlayContainer = (parent) => {
  const markup = `
    <section class="game-play">
   
    </section>
    `;
  parent.insertAdjacentHTML('afterbegin', markup);
};
// render the shipe that clicked by users
export const renderPlayerPick = (shape) => {
  const markup = `
      <ul class="game-play__user">
          <li class="game-shapes" data-items="${shape}">
              <img class="game-shapes__img" src="./images/icon-${shape}.svg" alt="${shape}" srcset="">
        </li>
          <h2 class="secondary-text game-shapes__text">You picked</h2>
      </ul> 
      
      `;
  document
    .querySelector(`.${elementsString.playContainer}`)
    .insertAdjacentHTML('afterbegin', markup);
};
// Render the house choose
export const renderHousePick = (shape = '') => {
  const markup = `
    <ul class="game-play__house">
        <li class="game-shapes" data-items="">

      </li>
        <h2 class="secondary-text game-shapes__text">The house picked</h2>
    </ul> 
    
    `;
  document.querySelector(
    `.${elementsString.playContainer}`
  ).innerHTML += markup;
  setTimeout(() => {
    const markup = `
        <li class="game-shapes" data-items="${shape}">
        <img class="game-shapes__img" src="./images/icon-${shape}.svg" alt="${shape}" srcset="">

      </li>
        <h2 class="secondary-text game-shapes__text">The house picked</h2>
    
    `;
    document.querySelector('.game-play__house').innerHTML = markup;
  }, 250);
};

// delete Play Menu
export const deletePlayersMenu = () => {
  const gameMenuContainer = document.querySelector(
    '.' + elementsString.gameMenuContainer
  );
  if (!gameMenuContainer) return;
  gameMenuContainer.parentElement.removeChild(gameMenuContainer);
};
// delete Game-play
export const deleteGamePlay = () => {
  const gamePlayContainer = document.querySelector(
    `.${elementsString.playContainer}`
  );
  if (!gamePlayContainer) return;
  gamePlayContainer.parentElement.removeChild(gamePlayContainer);
};
