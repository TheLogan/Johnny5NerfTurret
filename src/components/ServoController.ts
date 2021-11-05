import { Board, Servo } from "johnny-five";
import { vector2 } from "../utils/helperClasses";


export default class ServoController {
  board: Board;
  x: Servo;
  y: Servo;
  controller = "PCA9685";

  async init(board: Board) {
    this.board = board;
    this.x = new Servo({
      controller: this.controller,
      pin: 0,
    });

    this.y = new Servo({
      controller: this.controller,
      range: [0, 180],
      pin: 1,
    });

    board.repl.inject({
      xTo: (pos: number) => this.x.to(pos),
      yTo: this.y.to
    });
  

    this.x.to(70);
    this.y.to(70);
  }
  setPosition(pos: vector2) {
    this.x.to(pos.x);
    this.y.to(pos.y);
  }
}