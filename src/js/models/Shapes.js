export default class Shapes {
  constructor() {
    this.shapes = ['paper', 'scissors', 'rock', 'spock', 'lizard'];
    this.playerPick = null;
  }
  getPlayerPick(shape) {
    this.playerPick = shape;
  }
  // method that return the house choose
  getHousePick() {
    if (this.playerPick) {
      const newShapes = this.shapes.filter(
        (shape) => shape !== this.playerPick
      );
      const randomIndex = Math.floor(Math.random() * newShapes.length);
      this.housePick = newShapes[randomIndex];
    }
  }
  resetGame() {
    this.playerPick = null;
    this.housePick = null;
  }
}
