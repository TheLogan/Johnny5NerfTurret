import { Board, Servo } from "johnny-five";


export default class ServoController {
  board = new Board();
  controller = "PCA9685";

  async init(board: Board) {
    const a = new Servo({
      controller: this.controller,
      pin: 0,
    });

    const b = new Servo({
      controller: this.controller,
      range: [0, 180],
      pin: 1,
    });

    a.to(0);
    b.to(0);
  }

  setPosition() { }
}