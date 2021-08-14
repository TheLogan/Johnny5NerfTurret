import express from 'express'
import bodyParser from 'body-parser'
import BoardController from './BoardController'
import { vector2 } from './utils/helperClasses'

const app = express()
const board = new BoardController()
app.use(bodyParser.json())


app.get('/esc/spinup', function (req, res) {
  board.escController.spinUp();
  res.send();
})

app.get('/esc/stop', function (req, res) {
  board.escController.stop();
  res.send();
})

app.get('/feedammo', (req, res) => {
  res.send();
})

app.post('/stepper/setposition', function (req, res) {
  let movePos: vector2 = req.body;
  if (isNaN(movePos.x) || isNaN(movePos.y)) {
    return res.sendStatus(400);
  }
  board.stepperController.setPosition(movePos);
  res.send();
})

app.listen(3000)