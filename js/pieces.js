import "/chess.js"

/**
 * PieceType
 * @author x1111101101
 *
 * @param mover{(board: Board, color: Color, location: Location)->Location[]}: a function returning the possible moves of a piece but not guaranted to be valid in the current state
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

export class Piece {
  id;
  type;
  color;
}

export class Location {
  static x;
  static y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}