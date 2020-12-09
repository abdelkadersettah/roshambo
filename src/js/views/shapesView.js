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
export const renderRulesBTN = (container) => {
  const markup = `
    <button class="game-menu__btn btn btn__rules secondary-text">Rules</button>

    `;
  container.insertAdjacentHTML('beforeend', markup);
};
export const renderPlayerPick = (shape) => {
  const markup = `
    <ul class="game-play__user">
        <li class="game-shapes" data-items="${shape}">
            <img class="game-shapes__img" src="./images/icon-${shape}.svg" alt="${shape}" srcset="">
      </li>
        <h2 class="secondary-text game-shapes__text">You picked</h2>
    </ul> 
    
    `;
  elements.playContainer.insertAdjacentHTML('afterbegin', markup);
};
export const deletePlayersMenu = () => {
  const gameMenuContainer = document.querySelector(
    '.' + elementsString.gameMenuContainer
  );
  gameMenuContainer.parentElement.removeChild(gameMenuContainer);
};
