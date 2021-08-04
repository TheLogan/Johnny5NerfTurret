import { Board, Stepper } from "johnny-five";

export default class BoardController {
  board = new Board();
  isReady = false;

  constructor() {
        
  }

  // stepsPerRev = 200;
  // brushlessController = 0;
  // StepperController = 0;

  // constructor() {
  //   this.board.on("ready", () => {

  //     this.board.io.accelStepperConfig({
  //       deviceNum: 0,
  //       type: this.board.io.STEPPER.TYPE.DRIVER,
  //       stepPin: 12,
  //       directionPin: 11,
  //       stepSize: this.board.io.STEPPER.STEP_SIZE.WHOLE,
  //     });
  //     this.board.io.accelStepperSpeed(0, 1200);
  //     this.isReady = true;
  //   });
  // }

  // async moveToPosition(movePos: { x: number; y: number }) {
  //   if (!this.isReady) return;
  //   this.board.io.accelStepperStop(0);
  //   await delay(100);
  //   this.board.io.accelStepperTo(0, movePos.x, () => {
  //     console.log("done");
  //   });
  // }

  // async resetPosition() {
  //   if (!this.isReady) return;
  //   this.board.io.accelStepperStop(0);
  //   await delay(100);
  //   this.board.io.accelStepperTo(0, 0, () => {
  //     console.log("done");
  //   });
  // }
}

async function delay(miliseconds: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, miliseconds);
  });
}
