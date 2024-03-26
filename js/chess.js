import { PieceType, Piece } from "/pieces.js"


export class Game {
  #board = new Board();

}

export class Board {
  static pieces;

  constructor() {
    this.pieces = new Array(8);
    for (let i = 0; i < 8; i++) this.pieces[i] = new Array(8);
  }
}

/**
 * enum
 */
export const Color = {
  WHITE: 0,
  BLACK: 1,
  opposit(color) {
    return 1 - color
  }
}