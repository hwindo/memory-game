export interface Game {
  numberOfSquares: number;
  highlightedSquares: number[];
  word: string;
  words: string[];
}

export default class GameBrain {
  private static instance: GameBrain;
  private score: number;
  private currentGameNumber: number;
  private oneScoreValue: number;
  private selectedSquares: number[] = [];
  games: Game[] = [
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
    {
        numberOfSquares: 36,
        highlightedSquares: [6, 10, 11, 13, 14, 18, 19, 20, 22],
        word: "Hello",
        words: ["Hello", "World", "Twelve", "Person"],
      },
  ];

  private constructor() {
    this.score = 0;
    this.currentGameNumber = 0;
    this.oneScoreValue = 100;
  }

  public reset() {
    this.score = 0;
    this.currentGameNumber = 0;
    this.oneScoreValue = 100;
    this.selectedSquares = [];
  }

  public static getInstance(): GameBrain {
    if (!GameBrain.instance) {
      GameBrain.instance = new GameBrain();
    }
    return GameBrain.instance;
  }

  public currentGame(): Game {
      return this.games[this.currentGameNumber];
  }

  public getScore() {
      return this.score;
  }

  private incrementScore() {
      this.score += this.oneScoreValue;
  }

  public addSquare(num: number) {
    if (this.selectedSquares.includes(num)) {
      this.selectedSquares.splice(this.selectedSquares.indexOf(num), 1);
    } else if (this.canSelectSquare()) {
      this.selectedSquares.push(num);
    }
  }

  public calculateSquare() {
    const rightSquares: number[] = this.games[this.currentGameNumber]
      .highlightedSquares;
    this.selectedSquares.forEach((squareNum) => {
      if (rightSquares.includes(squareNum)) {
        this.incrementScore();
      }
    });
  }

  public getSelectedSquareLength() {
      return this.selectedSquares.length;
  }

  public canSelectSquare() {
      return this.selectedSquares.length < this.games[this.currentGameNumber].highlightedSquares.length;
  }

  public calculateWord(word: string, callback: (result: boolean) => void) {
    if (this.games[this.currentGameNumber].word === word) {
        this.incrementScore();
        this.incrementLevel();
        callback(true);
    } else {
        callback(false);
    }
  }

  public incrementLevel() {
    this.currentGameNumber += 1;
    this.selectedSquares = [];
  }

  public nextLevel():boolean {
    return this.currentGameNumber < this.games.length;
  }
}
