import * as React from 'react'
import {showGuess, gameFinished, isWinner, wrongGuessLimit, wrongGuessCount} from '../lib/game'

export default class Hangman extends React.PureComponent {
  progress() {
    const se = this.props.game.word
    return se
  }
  render() {
    return (<div>

      <h5>guess the word above, you can only guess 1 letter at a time</h5>
      <form onSubmit={this.handleSubmit}>
        <label>
          {console.log(showGuess(this.props.game.word, "s"))}
          
          <p></p>
          guess here:
          <input type="text" name="letter" maxlength="1" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}

