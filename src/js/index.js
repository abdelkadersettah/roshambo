import Shapes from './models/Shapes';
import Result from './models/Result';
import Score from './models/Score';
import { elements, elementsString } from './views/base';
import * as rulesView from './views/rulesView';
import * as shapesView from './views/shapesView';
import * as resultView from './views/resultView';
import * as scoreView from './views/scoreView';

/**
 Global state of our APP
 -Rules State
 -Shapes State
 */
// Shapes Controller
const state = {};
// render game Menu
state.shape = new Shapes();
state.score = new Score();

shapesView.renderShapes(state.shape.shapes, elements.main);
// render Rules Button
rulesView.renderRulesBTN(elements.main);
window.addEventListener('click', (e) => {
  const clickedElement = e.target;
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
    if (!elements.main.firstElementChild.classList.contains('game-play')) {
      shapesView.renderPlayContainer(elements.main);
      // render the player Pick
      shapesView.renderPlayerPick(state.shape.playerPick);
      // render The House Pick
      shapesView.renderHousePick(state.shape.housePick);
      //**************************************************** */
      // Result Controller
      state.result = new Result();
      state.result.checkResult(state.shape.playerPick, state.shape.housePick);
      // render the result
      resultView.renderResult(state.result.result);
      //**************************************************** */
      // Score Controller
      // update the score number
      state.score.updateScores(state.result.result);
      // Render the score in UI
      scoreView.renderGameScore(state.score.score);
    }
  }
  // Reset THE Game:
  if (
    clickedElement.matches(
      `.${elementsString.resetBTN}, .${elementsString.resetBTN} *`
    )
  ) {
    e.preventDefault();
    console.log('reset clicked');
    state.shape.resetGame();
    shapesView.deleteGamePlay();
    shapesView.renderShapes(state.shape.shapes, elements.main);
    console.log(state.shape);
  }

  //**************************************************** */
  // rulesView controller ;
  if (
    clickedElement.matches(
      `.${elementsString.rulesBTN}, .${elementsString.rulesBTN} *`
    )
  ) {
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
