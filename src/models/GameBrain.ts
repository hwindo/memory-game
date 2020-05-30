export interface Game {
    numberOfSquares: number;
    highlightedSquares: number[];
    word: string;
    words: string[];
}

export default class GameBrain {
    static games: Game[] = [
        {
            numberOfSquares: 9,
            highlightedSquares: [0, 4, 6],
            word: 'xyz',
            words: ['abc', 'xyz', 'ghi', 'kum']
        },
        {
            numberOfSquares: 16,
            highlightedSquares: [6, 10, 11, 13, 14],
            word: 'foo',
            words: ['bar', 'xyz', 'ghi', 'foo']
        }
    ]
    
}

console.log(GameBrain.games);