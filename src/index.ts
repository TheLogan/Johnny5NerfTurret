const {Board, Servo} = require("johnny-five");
const board = new Board();
const controller = "PCA9685";

board.on("ready", () => {
  console.log("Connected");

  // Initialize the servo instance
  const a = new Servo({
    controller,
    pin: 0,
  });

  const b = new Servo({
    controller,
    range: [0, 180],
    pin: 1,
  });

  a.to(90);
  b.to(90);
  
});

// import express from 'express'
// import bodyParser from 'body-parser'
// import BoardController from './BoardController'
// import { vector2 } from './utils/helperClasses'

// const app = express()
// const board = new BoardController()
// app.use(bodyParser.json())

// app.post('/setposition', (req, res) => {
//   board.servoController.setPosition();
// })


// // app.get('/esc/spinup', function (req, res) {
// //   board.escController.run();
// //   board.escController.spinUp();
// //   res.send();
// // })

// // app.get('/esc/stop', function (req, res) {
// //   board.escController.stop();
// //   res.send();
// // })

// // app.get('/feedammo', (req, res) => {
// //   res.send();
// // })

// // app.post('/stepper/setposition', (req, res) => {
// //   let movePos: vector2 = req.body;
// //   if (isNaN(movePos.x) || isNaN(movePos.y)) {
// //     return res.sendStatus(400);
// //   }
// //   board.stepperController.setPosition(movePos);
// //   res.send();
// // })

// // app.get('/stepper/resetposition', (req, res) => {
// //   board.stepperController.resetPosition();
// //   res.send();
// // })

// app.listen(3000)