import * as React from 'react'
import { showGuess, gameFinished, wrongGuessLimit, wrongGuessCount} from '../lib/game'
import { Card, Elevation, Button, Tooltip, InputGroup, Callout } from "@blueprintjs/core";

export default function Hangman(props) {
  const reset = () => {
    props.newGame()
    if(document.getElementById("guess")) {
      document.getElementById("guess").value = ""
    }
  }
  const alreadyGuessed = () => {
    const game = props.game
    if(game.guesses.length > 0) return <p>{props.game.guesses.join(", ")}</p>
  }
  const showWrongs = () => {
    const game = props.game
    if (wrongGuessCount(game.word, game.guesses) === 0) return 0
    if (wrongGuessCount(game.word, game.guesses) > 0) return wrongGuessCount(props.game.word, props.game.guesses)
  }
  const areYouDone = () => {
    const game = props.game
    if (gameFinished(game.word, game.guesses)) {
        if (wrongGuessLimit(game.word, game.guesses)) {
            props.gameOver(false)
        } else {
            props.gameOver(true)
        }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const letter = document.getElementById("guess").value
    if (letter) {
      props.makeGuess(letter)
      document.getElementById("guess").value = ""
    }
  }
  const lockButton = (
    <Tooltip content={'Guess!'} disabled={false}>
        <Button
            disabled={false}
            icon={"arrow-right"}
            minimal={true}
            onClick={handleSubmit}
        />
    </Tooltip>
  )

    return (<div>
      <Card interactive={true} elevation={Elevation.FOUR} className="word-card">
          <h5>GUESS THE WORD</h5>
          <p>{showGuess(props.game.word, props.game.guesses)}</p>
      </Card>
          <InputGroup
                    disabled={false}
                    id="guess"
                    maxLength="1"
                    className="guess-input"
                    large={false}
                    placeholder="Enter your guess..."
                    rightElement={lockButton}
                    small={false}
                    type={"text"}
          />

          <Callout className="game-rules" title={"If you guess wrong 6 times, you lose..."}>
                    Amout of wrong guesses: {showWrongs()} <br/>
                    Letters already guessed: {alreadyGuessed()}
          </Callout>
      <br/>
      <Button icon="refresh" text="Reset" onClick={reset.bind(this)}/>
      {areYouDone()}
    </div>)
}