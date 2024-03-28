import { Color } from "./chess";
import "/chess.js"

/**
 * PieceType
 * @author x1111101101
 *
 * @field mover{(board: Board, color: Color, location: Location)->Move[]}: a function returning the possible moves of a piece but not guaranted to be valid in the current state
 *
 */
export class PieceType {
  static name;
  static value;
  static mover;

  constructor(name, value, mover) {
    this.name = name;
    this.value = value;
    this.mover = mover;
  }
}

export class Move extends Location {
  static isAttack;

  constructor(x, y, isAttack) {
    super(x, y)
    this.isAttack = isAttack
  }
}

export class Piece {
  static id;
  static type;
  static color;

  constructor(id, type, color) {
    this.id = id;
    this.type = type;
    this.color = color;
  }
}

export class Location {
  static x;
  static y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function isInside(x, y) {
  return 0 <= x && x < 8 && 0 <= y && y < 8;
}

function isAttacking(board, color, x, y) {
  var target = board.getPiece(x, y)
  return target == null || target.color != color;
}

let BISHOP_OFFSET = [[1, 1], [-1, -1], [1, -1], [-1, 1]]
let BISHOP = new PieceType("Bishop", 3, (board, color, location) => {
  var result = []
  for (var i = 1; i <= 8; i++) {
    for (var k = 0; k < BISHOP_OFFSET.length; k++) {
      var offset = BISHOP_OFFSET[k]
      var x = location.x + offset[0] * i
      var y = location.y + offset[1] * i
      if (!isInside(x, y)) continue;
      result.push(new Move(x, y, true))
    }
  }
  return result
})

let ROOK_OFFSET = [[0, 1], [0, -1], [1, 0], [1, -1]]
let ROOK = new PieceType("Rook", 5, (board, color, location) => {
  var result = []
  for (var i = 1; i <= 8; i++) {
    for (var k = 0; k < ROOK_OFFSET.length; k++) {
      var offset = ROOK_OFFSET[k]
      var x = location.x + offset[0] * i
      var y = location.y + offset[1] * i
      if (!isInside(x, y)) continue;
      result.push(new Move(x, y, true))
    }
  }
  return result
})

let QUEEN = new PieceType("Queen", 9, (board, color, location) => {
  var rook = ROOK.mover(board, color, location)
  var bishop = BISHOP.mover(board, color, location)
  for (let i in bishop) rook.push(bishop[i])
  return rooks
})

let KNIGHT_OFFSET = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
let KNIGHT = new PieceType("Knight", 3, (board, color, location) => {
  var result = []
  for (var k = 0; k < KNIGHT_OFFSET.length; k++) {
    var offset = KNIGHT_OFFSET[k]
    var x = location.x + offset[0] * i
    var y = location.y + offset[1] * i
    if (!isInside(x, y)) continue;
    result.push(new Move(x, y, true))
  }
  return result
})

let KING_OFFSET = function() {
  var rook = ROOK_OFFSET.slice()
  var bishop = BISHOP_OFFSET
  for (let i in bishop) rook.push(bishop[i])
  return rook
}()
let KING = new PieceType("King", -1, (board, color, location) => {
  var result = []
  for (var k = 0; k < KNIGHT_OFFSET.length; k++) {
    var offset = KNIGHT_OFFSET[k]
    var x = location.x + offset[0] * i
    var y = location.y + offset[1] * i
    if (!isInside(x, y)) continue;
    result.push(new Move(x, y, true))
  }
  return result
})

// 