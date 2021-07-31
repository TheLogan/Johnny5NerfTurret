import { Board, ESC, Sensor, Servo } from "johnny-five";
const board = new Board();

/*
* J5 needs to do the following
* Rotate axes for aiming
* Spin up BLDC's for firing
* Feed ammo to firing mechanism
*/

board.on("ready", () => {
  const esc1 = new ESC({
    controller: "PCA9685",
    device: "FORWARD",
    pin: 0
  });
  const esc2 = new ESC({
    controller: "PCA9685",
    device: "FORWARD",
    pin: 1
  });

  const servoX = new Servo({
    controller: "PCA9685",
    range: [0, 180],
    pin: 3
  });

  const servoY = new Servo({
    controller: "PCA9685",
    range: [0, 180],
    pin: 4
  });

  const ammoFeeder = new Servo({
    controller: "PCA9685",
    type:"continuous",
    pin: 5
  });

  const sensorX = new Sensor("A0");
  const sensorY = new Sensor("A1");
  const fireCommand = new Sensor("A2");
  const feedAmmo = new Sensor("A3");

  sensorX.on("data", (data) => {
    console.log('data', data);
    servoX.to(data);
  })

  sensorY.on("data", (data) => {
    console.log('data', data);
    servoY.to(data);
  })

  fireCommand.on("change", () => {
    esc1.throttle(fireCommand.scaleTo(esc1.pwmRange)); // scales changed data to esc1's pwmRange ()
    esc2.throttle(fireCommand.scaleTo(esc2.pwmRange)); // scales changed data to esc2's pwmRange ()
  });

  feedAmmo.on("data", (data) => {
    ammoFeeder.ccw(1); // What sort of speed should we use?
  });
});
