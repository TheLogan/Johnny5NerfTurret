import { Board, Stepper } from "johnny-five";

export default class StepperController {
  board = new Board();
  isReady = false;
  stepsPerRev = 200;

  constructor(stepsPerRevolution: number) {
    this.board.on("ready", () => {
      this.board.io.accelStepperConfig({
        deviceNum: 0,
        type: this.board.io.STEPPER.TYPE.DRIVER,
        stepPin: 12,
        directionPin: 11,
        stepSize: this.board.io.STEPPER.STEP_SIZE.WHOLE,
      });
      this.board.io.accelStepperSpeed(0, 1200);
      this.stepsPerRev = stepsPerRevolution;
      this.isReady = true;
    });
  }

  async moveToPosition(movePos: { x: number; y: number }) {
    if (!this.isReady) return;
    this.board.io.accelStepperStop(0);
    await delay(100);
    this.board.io.accelStepperTo(0, movePos.x, () => {
      console.log("done");
    });
  }

  async resetPosition() {
    if (!this.isReady) return;
    this.board.io.accelStepperStop(0);
    await delay(100);
    this.board.io.accelStepperTo(0, 0, () => {
      console.log("done");
    });
  }
}

async function delay(miliseconds: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, miliseconds);
  });
}
