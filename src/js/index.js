import Shapes from './models/Shapes';
import { elements, elementsString } from './views/base';
import * as rulesView from './views/rulesView';
import * as shapesView from './views/shapesView';

/**
 Global state of our APP
 -Rules State
 -Shapes State
 */
// Shapes Controller
const state = {};
state.shape = new Shapes();
// render game Menu

shapesView.renderShapes(state.shape.shapes, elements.main);
// render Rules Button
rulesView.renderRulesBTN(elements.main);
elements.main.addEventListener('click', (e) => {
  const clickedElement = e.target;
  console.log(e.target);
  if (
    clickedElement.matches(
      `.${elementsString.shapes}, .${elementsString.shapes} *`
    )
  ) {
    //**************************************************** */
    // Shapes Controller
    const playerShape = clickedElement.closest(`.${elementsString.shapes}`)
      .dataset.items;
    // set player pick
    state.shape.getPlayerPick(playerShape);
    // set house pick
    state.shape.getHousePick();
    // delete Game shape menu
    shapesView.deletePlayersMenu();
    // render Play Game container
    shapesView.renderPlayContainer(elements.main);
    // render the player Pick
    shapesView.renderPlayerPick(state.shape.playerPick);
    console.log(state);
    // render The House Pick
    shapesView.renderHousePick();
    // render the result
    shapesView.renderResult();
  }

  //**************************************************** */
  // rulesView controller ;

  if (
    clickedElement.matches(
      `.${elementsString.rulesBTN}, .${elementsString.rulesBTN} *`
    )
  ) {
    console.log(elements.main);
    // render rules PopUp to the UI
    rulesView.renderRules(elements.main);
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
