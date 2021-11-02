import { Board, ESC, Fn, Led } from "johnny-five";
import { delay } from "../utils/helperClasses";

export class EscController {
  board = new Board();
  led: Led;
  escA: ESC;
  escB: ESC;
  spinningUp = false;
  currentSpeed = 1000;

  async init() {
    this.escA = new ESC({
      device: "FORWARD",
      pin: 9,
    });
    this.escB = new ESC({
      device: "FORWARD",
      pin: 10
    })
    
    this.escA.throttle(1000);
  }

  run() {
    this.spinningUp = true;
    this.currentSpeed = 1000;
    this.spinUp();
  }

  async spinUp() {
    while (this.spinningUp && this.currentSpeed < 1500) {
      this.currentSpeed += 20;
      this.escA.throttle(this.currentSpeed);
      this.escB.throttle(this.currentSpeed);
      await delay(20);
    }
  }

  stop() {
    this.spinningUp = false;
    this.currentSpeed = 1000;
    this.escA.brake();
    this.escB.brake();
  }
}
