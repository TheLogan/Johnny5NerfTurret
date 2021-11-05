import express from 'express'
import bodyParser from 'body-parser'
import BoardController from './BoardController'
import { vector2 } from './utils/helperClasses'

const app = express()
const board = new BoardController()
app.use(bodyParser.json())

app.post('/setposition', (req, res) => {
  const pos: vector2 = req.body;
  if (!pos || !pos.x || !pos.y) {
    res.sendStatus(500);
    return;
  }

  board.servoController.setPosition(pos);
  res.send();
})

app.listen(3000)