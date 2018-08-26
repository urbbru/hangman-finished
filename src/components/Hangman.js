import * as React from 'react'
import {showGuess, gameFinished, isWinner, wrongGuessLimit, wrongGuessCount} from '../lib/game'
import { newGame, makeGuess, gameOver } from '../actions/game'
import {connect} from 'react-redux'

export class Hangman extends React.PureComponent {
  reset() {
    this.props.newGame()
    document.getElementById("inputje").value = ""
  }
  alreadyGuessed() {
    const game = this.props.game
    if(game.guesses.length > 0) return <p>already guessed: {this.props.game.guesses.join(", ")}</p>
  }
  showWrongs() {
    const game = this.props.game
    if (wrongGuessCount(game.word, game.guesses) > 0) return <p>amount of wrong guesses: {wrongGuessCount(this.props.game.word, this.props.game.guesses)}</p>
  }
  areYouDone() {
    const game = this.props.game
    if (gameFinished(game.word, game.guesses)) {
        if (wrongGuessLimit(game.word, game.guesses)) {
            this.props.gameOver(false)
        } else {
            this.props.gameOver(true)
        }
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const letter = event.target.letter.value;
    if (letter) {
      this.props.makeGuess(letter)
      document.getElementById("inputje").value = ""
    }
  }
  render() {
    return (<div>
      <p>{showGuess(this.props.game.word, this.props.game.guesses)}</p>
      <h5>guess the word above, if you guess wrong 6 times you lose</h5>
      {this.showWrongs()}
      <form onSubmit={this.handleSubmit}>
        <label>
          guess here:
          <input type="text" name="letter" id="inputje" maxlength="1"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.alreadyGuessed()}
      <br/>
      <p>Start a new game:</p>
      <button className="primary" onClick={this.reset.bind(this)}>New Game</button>
      {this.areYouDone()}
    </div>)
  }
}

const mapStateToProps = ({letter}) => ({
        letter
})

export default connect(mapStateToProps, {newGame, makeGuess, gameOver})(Hangman)
