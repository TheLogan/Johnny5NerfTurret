const {Board, Stepper} = require("johnny-five");
const board = new Board();

board.on("ready", () => {

  /**
   * In order to use the Stepper class, your board must be flashed with
   * either of the following:
   *
   * - AdvancedFirmata https://github.com/soundanalogous/AdvancedFirmata
   * - ConfigurableFirmata https://github.com/firmata/arduino/releases/tag/v2.6.2
   *
   */

  const stepper = new Stepper({
    type: Stepper.TYPE.DRIVER,
    stepsPerRev: 200,
    pins: {
      step: 12,
      dir: 11
    }
  });

  // Set stepper to 180 RPM, counter-clockwise with acceleration and deceleration
  stepper.rpm(600).ccw().accel(16000).decel(16000);
  
  // Make 10 full revolutions
  stepper.step(6000, () => {

    console.log("Done moving CCW");

    // once first movement is done, make 10 revolutions clockwise at previously
    //      defined speed, accel, and decel by passing an object into stepper.step
    stepper.step({
      steps: 6000,
      direction: Stepper.DIRECTION.CW
    }, () => console.log("Done moving CW"));
  });
});