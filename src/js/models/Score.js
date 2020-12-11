export default class Score {
  constructor() {
    this.score = 0;
  }
  // update score
  updateScores(result) {
    if (result === 'win') {
      this.score += 10;
    } else {
      this.score -= 10;
    }
    if (this.score < 0) {
      this.score = 0;
    }
  }
}
