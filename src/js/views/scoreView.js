import { elements, elementsString } from './base';
export const renderGameScore = (score) => {
  console.log(score);
  elements.gameScore.innerHTML = score;
};
