import { elements, elementsString } from './base';

// render the winners
export const renderResult = (result) => {
  const beforeSibling = document.querySelector('.game-play__user');

  const markup = `
      <ul class="game-play__result">
      <li><h2 class="game-play__result--text primary-text">You ${result}</h2></li>
      <li><button class="btn btn__reset secondary-text game-play__btn--reset">Play again</button></li>
    </ul>
      `;
  setTimeout(() => {
    beforeSibling.insertAdjacentHTML('afterend', markup);
  }, 500);
};
