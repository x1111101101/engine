import { PieceType, Piece } from "/pieces.js"


export class Game {
  #board = new Board();
  #turn = Color.WHITE;
  #state = State.IN_PROGRESS

  getTurn() {
    return this.#turn;
  }

  getState() {
    return this.#state
  }
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

/**
 * enum
 */
export const State = {
  IN_PROGRESS: 0,
  WHITE_WIN: 1,
  BLACK_WIN: 2,
  STALEMATE: 3,
  DRAW: 4
}