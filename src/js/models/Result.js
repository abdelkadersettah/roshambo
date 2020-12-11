/*
- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper
*/
/*
- Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Paper beats Spock
- Rock beats Scissors
- Lizard beats Paper
- Spock beats Rock
*/
export default class Result {
  constructor() {
    this.resultRules = {
      paper: {
        win: ['rock', 'spock'],
        lose: ['scissors', 'lizard'],
      },
      rock: {
        win: ['scissors', 'lizard'],
        lose: ['paper', 'spock'],
      },
      scissors: {
        win: ['paper', 'lizard'],
        lose: ['rock', 'spock'],
      },
      lizard: {
        win: ['paper', 'spock'],
        lose: ['rock', 'scissors'],
      },
      spock: {
        win: ['rock', 'scissors'],
        lose: ['paper', 'lizard'],
      },
    };
  }
  checkResult(user, house) {
    const userPick = this.resultRules[user];
    const housePick = this.resultRules[house];
    for (let i in userPick) {
      if (~userPick[i].indexOf(house)) {
        this.result = i;
        console.log((this.result = i));
      }
    }
  }
}
