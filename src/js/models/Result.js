/*
- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper
*/
export default class Result {
  constructor() {
    this.resultRules = {
      paper: {
        win: ['rock'],
        lose: ['scissors'],
      },
      rock: {
        win: ['scissors'],
        lose: ['paper'],
      },
      scissors: {
        win: ['paper'],
        lose: ['rock'],
      },
    };
  }
  checkResult(user, house) {
    const userPick = this.resultRules[user];
    const housePick = this.resultRules[house];
    for (let i in userPick) {
      if (~userPick[i].indexOf(house)) {
        this.result = i;
      }
    }
  }
}
