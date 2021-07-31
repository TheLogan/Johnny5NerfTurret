import { Board, ESC, Sensor, Servo } from "johnny-five";
export default class boardController {
  board: Board;
  servoX: Servo;
  servoY: Servo;
  boardReady = false;
  constructor() {
    this.board = new Board();
    this.board.on("ready", () => {
      this.servoX = new Servo({
        controller: "PCA9685",
        range: [0, 180],
        pin: 0
       });
       
       this.servoY = new Servo({
         controller: "PCA9685",
         range: [0, 180],
         pin: 1
       });
       
      this.boardReady = true;
     });
  }
  
  moveToPosition(pos: { x: number, y: number }) {
    if (!this.boardReady) return;
    this.servoX.to(pos.x)
    this.servoY.to(pos.y)
  }
}