import Rules from './models/Rules';
import { elements, elementsString } from './views/base';
import * as rulesView from './views/rulesView';
/**
 Global state of our APP
 -Rules State
 */
const state = {};
// Rules controller ;
state.rules = new Rules();
state.rules.addRules(elements.rulesButtons);
state.rules.rulesBTN.forEach((btn) => {
  btn.ad;
});
elements.body.addEventListener('click', (e) => {
  if (
    e.target.matches(
      `.${elementsString.rulesBTN}, .${elementsString.rulesBTN} *`
    )
  ) {
    rulesView.renderRules(elements.body);
  } else if (
    e.target.matches(
      `.${elementsString.rulesCloseBTN}, .${elementsString.rulesCloseBTN} *`
    )
  ) {
    rulesView.deleteRules();
  }
});
