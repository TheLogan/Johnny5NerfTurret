import { Board } from "johnny-five";
import { EscController } from "./components/EscController";
import StepperController from "./components/StepperController";
import { vector2 } from "./utils/helperClasses";

export default class BoardController {
  board = new Board();
  isReady = false;
  stepperController: StepperController;
  escController: EscController;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    await new Promise((res, rej) => {
      this.board.on("ready", () => {
        res(null);
      });
    });
    
    this.stepperController = new StepperController();
    await this.stepperController.init(this.board);
    this.escController = new EscController();
    await this.escController.init();

    this.isReady = true;
  }
}