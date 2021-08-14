import { Board, ESC, Fn, Led } from "johnny-five";
import { delay } from "../utils/helperClasses";

// import keypress from "keypress";

export class EscController {
  board = new Board();
  led: Led;
  esc: ESC;
  spinningUp = false;
  currentSpeed = 1000;

  async init() {
    this.esc = new ESC({
      device: "FORWARD",
      pin: 9,
    });
    this.esc.throttle(1000);
  }

  async spinUp() {
    while (this.spinningUp && this.currentSpeed < 2000) {
      this.currentSpeed += 20;
      this.esc.throttle(this.currentSpeed);
      await delay(20);
    }
  }

  stop() {
    this.spinningUp = false;
    this.currentSpeed = 1000;
    this.esc.brake();
  }
}
