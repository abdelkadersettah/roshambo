import { elements, elementsString } from './base';
export const renderGameScore = (score) => {
  elements.gameScore.innerHTML = score;
};
export const addScoreToLocalStorage = (score) => {
  if (score <= 0) {
    localStorage.setItem('score', 0);
  }
  localStorage.setItem('score', score);
};
export const getScoreFromLocalStorage = () => {
  let score = 0;
  if (+localStorage.score) {
    score = +localStorage.score;
  }
  return score;
};
