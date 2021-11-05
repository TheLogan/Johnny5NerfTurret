import { Board } from "johnny-five";
import PiezoController from "./components/PiezoController";
import ServoController from "./components/ServoController";

export default class BoardController {
  board = new Board();
  isReady = false;
  servoController: ServoController;
  // piezoController: PiezoController;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    await new Promise((res, rej) => {
      this.board.on("ready", () => {
        res(null);
      });
    });

    this.servoController = new ServoController();
    await this.servoController.init(this.board);
    // this.piezoController = new PiezoController();
    // await this.piezoController.init(this.board);
    this.isReady = true;
  }
}