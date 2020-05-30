export interface Game {
  numberOfSquares: number;
  highlightedSquares: number[];
  word: string;
  words: string[];
}

export default class GameBrain {
  static score = 0;
  static oneScoreValue = 100;
  static currentGame = 0;
  static games: Game[] = [
    {
      numberOfSquares: 9,
      highlightedSquares: [0, 4, 6],
      word: "xyz",
      words: ["abc", "xyz", "ghi", "kum"],
    },
    {
      numberOfSquares: 16,
      highlightedSquares: [6, 10, 11, 13, 14],
      word: "foo",
      words: ["bar", "xyz", "ghi", "foo"],
    },
  ];
  static addSquare(num: number) {
    if (this.selectedSquares.includes(num)) {
      this.selectedSquares.splice(this.selectedSquares.indexOf(num), 1);
    } else {
      GameBrain.selectedSquares.push(num);
    }
    console.log(this.selectedSquares);
  }
  static calculateSquare() {
    const rightSquares: number[] =
      GameBrain.games[GameBrain.currentGame].highlightedSquares;
    GameBrain.selectedSquares.forEach((squareNum) => {
      if (rightSquares.includes(squareNum)) {
        GameBrain.score += GameBrain.oneScoreValue;
      }
    });
    console.log(GameBrain.score);
  }
  static selectedSquares: number[] = [];
}
