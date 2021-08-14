import { Board, Stepper } from "johnny-five";
import { vector2 } from "../utils/helperClasses";

export default class StepperController {
  // this.board.io.accelStepperStop(0);
  // await delay(100);

  baseId = 0;
  turretId = 1;
  baseStepsPerRev = 200;
  board: Board;

  async init(board: Board) {
    this.board = board;
    
    //Setup stepper Base
    board.io.accelStepperConfig({
      deviceNum: this.baseId,
      type: board.io.STEPPER.TYPE.DRIVER,
      stepPin: 12,
      directionPin: 11,
      stepSize: board.io.STEPPER.STEP_SIZE.WHOLE,
    });
    board.io.accelStepperSpeed(this.baseId, 1200);

    board.io.accelStepperConfig({
      deviceNum: this.turretId,
      type: board.io.STEPPER.TYPE.DRIVER,
      stepPin: 7,
      directionPin: 6,
      stepSize: board.io.STEPPER.STEP_SIZE.WHOLE,
    });
    board.io.accelStepperSpeed(this.turretId, 1200);
  }

  setPosition(position: vector2) {
    // this.board.io.accelStepperStop(0);
    // await delay(100);

    if (position.x != null) {
      this.board.io.accelStepperTo(this.baseId, position.x, () => {
        console.log("done");
      });
    }
    if (position.y != null) {
      this.board.io.accelStepperTo(this.turretId, position.y, () => {
        console.log("done");
      });
    }
  }

  async resetPosition() {
    this.board.io.accelStepperStop(0);
    // await delay(100);
    this.board.io.accelStepperTo(0, 0, () => {
      console.log("done");
    });
  }
}
