import { Board, ESC, Sensor, Servo } from "johnny-five";
const board = new Board();

/*
* J5 needs to do the following
* Rotate axes for aiming
* Spin up BLDC's for firing
* Feed ammo to firing mechanism
*/

board.on("ready", () => {
  const servoX = new Servo({
    controller: "PCA9685",
    range: [0, 180],
    pin: 0
  });

  const servoY = new Servo({
    controller: "PCA9685",
    range: [0, 180],
    pin: 1
  });

  servoX.to(90);
  servoY.to(90);
  board.repl.inject({
    x: servoX,
    y: servoY
  })
});
