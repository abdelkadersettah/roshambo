import { elements, elementsString } from './views/base';
import * as rulesView from './views/rulesView';
/**
 Global state of our APP
 -Rules State
 */
const state = {};
// rulesView controller ;
elements.body.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (
    clickedElement.matches(
      `.${elementsString.rulesBTN}, .${elementsString.rulesBTN} *`
    )
  ) {
    // render rules PopUp to the UI
    rulesView.renderRules(elements.body);
  } else if (
    // delete RUles PopUP from the UI
    // if the users click on Close btn
    clickedElement.matches(
      `.${elementsString.rulesCloseBTN}, .${elementsString.rulesCloseBTN} *`
    ) ||
    //or outside popup container
    !clickedElement.matches(
      `.${elementsString.rulesPopupContainer}, .${elementsString.rulesPopupContainer} *`
    )
  ) {
    rulesView.deleteRules();
  }
});
