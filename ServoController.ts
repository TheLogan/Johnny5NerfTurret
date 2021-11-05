import { Board, ESC, Sensor, Servo } from "johnny-five";
export default class boardController {

  board: Board;
  servoX: Servo | null = null;
  servoY: Servo | null = null;
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
      this.servoX.to(90)
      this.servoY.to(90)
      this.boardReady = true;
    });
  }

  moveToPosition(pos: { x: number, y: number }) {
    if (!this.boardReady || this.servoX == null || this.servoY == null) return;
    let servoXPos = this.servoX.position;
    let servoYPos = this.servoY.position;

    if (servoXPos == -1) servoXPos = 90
    if (servoYPos == -1) servoYPos = 90

    servoXPos = [0, servoXPos + pos.x, 180].sort((a, b) => a - b)[1];
    servoYPos = [0, servoYPos + pos.y, 140].sort((a, b) => a - b)[1];
    console.log("x:", servoXPos, ", y:", servoYPos);

    this.servoX.to(servoXPos);
    this.servoY.to(servoYPos);
  }

  resetPos() {
    this.servoX.to(90);
    this.servoY.to(90);
  }
}