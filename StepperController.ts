import { Board, Stepper, } from "johnny-five";

export default class StepperController {
  board = new Board();
  stepperX: Stepper | null;
  isReady = false;
  CCW = 0;
  CW = 1;
  
  constructor() {
    this.board.on("ready", () => {
      
      this.stepperX = new Stepper({
        type: Stepper.TYPE.DRIVER,
        stepsPerRev: 180,
        pins: {
          step: 12,
          dir: 11,
        },
      });

      // Set stepper to 180 RPM, counter-clockwise with acceleration and deceleration
      // this.stepperX.rpm(720).ccw().accel(87500).decel(87500);
      // this.stepperX.rpm(180).ccw().step(2000, () => console.log("done"));
      // this.stepperX.rpm(180).cw().step(2000, () => console.log("done"));
      this.isReady = true;
      // Make 10 full revolutions
      // stepper.step(6000, () => {
      //   console.log("Done moving CCW");

      //   // once first movement is done, make 10 revolutions clockwise at previously
      //   //      defined speed, accel, and decel by passing an object into stepper.step
      //   stepper.step(
      //     {
      //       steps: 6000,
      //       // @ts-ignore
      //       direction: Stepper.DIRECTION.CW,
      //     },
      //     () => console.log("Done moving CW")
      //   );
      // });
    });
  }

  moveToPosition(movePos: { x: number, y: number }) {
    let directionX = movePos.x > 0 ? 0 : 1;
    let stepX = Math.abs(movePos.x);
    if (directionX) {
      this.stepperX.rpm(180).ccw().step(stepX, () => {});
    } else {
      this.stepperX.rpm(180).cw().step(stepX, () => {});
    }

    // this.stepperX.step({ steps: stepX, direction: directionX }, () => {
    //   console.log("done moving")
    // })
  }
}
