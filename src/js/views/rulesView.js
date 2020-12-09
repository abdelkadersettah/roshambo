import { elements, elementsString } from './base';

// function that render rules popup
export const renderRules = (parent) => {
  // markup for our Rules-popup
  const markup = `
    <div class="rules-popup">
    <h2 class="rules-popup__text">Rules</h2>
  <img src="./images/image-rules.svg" alt="" class="rules-popup__img">  
  <button class="rules-popup__btn rules-popup__btn--close"><img src="./images/icon-close.svg " alt="close Icone" srcset=""></button>
  </div> 
    `;

  parent.insertAdjacentHTML('beforeend', markup);
};
// delete rules popup elements from the dom
export const deleteRules = () => {
  const rulesContainer = document.querySelector(
    `.${elementsString.rulesPopupContainer}`
  );
  rulesContainer.parentElement.removeChild(rulesContainer);
};
