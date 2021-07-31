import express from 'express'
import BoardController from './BoardController'
import bodyParser from 'body-parser'

const app = express()
const board = new BoardController()
app.use(bodyParser.json())

// {x: angle, y: angle}
app.post('/move', function (req, res) {
  let movePos = req.body;
  if (isNaN(movePos.x) || isNaN(movePos.y)) {
    res.sendStatus(400);
    return;
  }

  board.moveToPosition(movePos);
  res.send();
})

app.listen(3000)