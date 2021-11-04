import { Board } from "johnny-five";
import { EscController } from "./components/EscController";
import ServoController from "./components/ServoController";
import StepperController from "./components/StepperController";

export default class BoardController {
  board = new Board();
  isReady = false;
  stepperController: StepperController;
  escController: EscController;
  servoController: ServoController;

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
    
    // this.stepperController = new StepperController();
    // await this.stepperController.init(this.board);
    // this.escController = new EscController();
    // await this.escController.init();

    this.isReady = true;
  }
}