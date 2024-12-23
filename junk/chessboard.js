import { Chess } from 'https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.13.4/chess.js';

/**
 *  move props
 * const move = {
        from: 'e2', string
        to: 'e4',  string
    };
 * 
 */

export class ChessBoard {
    constructor(map, scene) {
        this.board = this.defaultBoard();
        this.map = map;
        this.scene = scene;
        this.chess = new Chess();
    }

    defaultBoard() {
        return [
            ["R", "N", "B", "Q", "K", "B", "N", "R"], // White pieces (top row)
            ["P", "P", "P", "P", "P", "P", "P", "P"], // White pawns
            [" ", " ", " ", " ", " ", " ", " ", " "], // Empty rows
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["p", "p", "p", "p", "p", "p", "p", "p"], // Black pawns
            ["r", "n", "b", "q", "k", "b", "n", "r"]  // Black pieces (bottom row)
        ];
    }

    checkIfMoveLegit(move) {
        return chess.move(move);
    }

    printMap() {
        console.log(this.map)
    }

    printScene() {
        console.log(this.scene)
    }

    movePiece(name) {

    }

    printBoard() {
        console.log(this.board.map(row => row.join(" ")).join("\n"));
    }
}
