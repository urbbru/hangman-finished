import * as React from 'react'
import Hangman from './Hangman'
import { connect } from 'react-redux'
import { newGame, makeGuess, gameOver } from '../actions/game'
import { Spinner } from "@blueprintjs/core"
import { Card, Elevation, Button } from "@blueprintjs/core";
import { showGuess, gameFinished, isWinner, wrongGuessLimit, wrongGuessCount} from '../lib/game'

export class HangmanContainer extends React.PureComponent {
  areYouDone = () => {
    const game = this.props.game
    if (gameFinished(game.word, game.guesses)) {
        if (wrongGuessLimit(game.word, game.guesses)) {
            this.props.gameOver(false)
        } else {
            this.props.gameOver(true)
        }
    }
  }

  render() {
    const game = this.props.game
    if (!game) return <Spinner />
    if(game.isWinner) return (
      <Card interactive={true} elevation={Elevation.FOUR} className="word-card">
            <h5>YOU WON</h5>
            <p>Nice, you guessed "{game.word}"</p>
            <br/>
            <Button icon="refresh" text="New game" onClick={this.props.newGame}/>
      </Card>) 
    if(game.isWinner === false) return (
      <Card interactive={true} elevation={Elevation.FOUR} className="word-card">
            <h5>YOU LOST...</h5>
            <p>The word was "{game.word}"</p>
            <br/>
            <Button icon="refresh" text="New game" onClick={this.props.newGame}/>
      </Card>)
    return (<div>
              <Hangman game={this.props.game} newGame={this.props.newGame} makeGuess={this.props.makeGuess} gameOver={this.props.gameOver}/>
            </div>)
  }
}

const mapStateToProps = ({game}) => ({
        game
})

export default connect(mapStateToProps, {newGame, makeGuess, gameOver})(HangmanContainer)
