import express from 'express'
import BoardController from './BoardController'

const app = express()
const board = new BoardController()

// {x: angle, y: angle}
app.post('/move', function (req, res) {
  let movePos = req.body;
  if (isNaN(movePos.x) || isNaN(movePos.y)) {
    res.sendStatus(400);
    return;
  }

  board.moveToPosition(movePos);
})

app.listen(3000)