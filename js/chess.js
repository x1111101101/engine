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

  getLocation(id) {
    for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) {
      if (this.#board.pieces[x][y].id == id) return new Location(x, y)
    }
    throw "Illegal Argument id"
  }

  isLegal(id, location) {

  }

  makeMove(id, location) {

  }
}

export class Board {
  static pieces;

  constructor() {
    this.pieces = new Array(8);
    for (let i = 0; i < 8; i++) this.pieces[i] = new Array(8);
  }
}

export class BoardScan {
  static #attack;

  constructor(board) {
    this.attack = new Array(8);
    for (let i = 0; i < 8; i++) {
      this.attack[i] = new Array(8);
      this.attack[i].fill(0)
    }
    for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) {
      var piece = board.pieces[x][y]
      if (piece == null) continue;
      var type = piece.type
      var moves = type.mover(board, piece.color, new Location(x, y))
      for (let i in moves) {
        var move = moves[i]
        if (move.isAttacking) this.attack[move.x][move.y]++
      }
    }
  }

  getAttackAt(x, y) {
    return attack[x][y];
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