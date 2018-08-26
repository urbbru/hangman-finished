import * as React from 'react'
import Hangman from './Hangman'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'

export class HangmanContainer extends React.PureComponent {
  render() {
    const game = this.props.game
    if (!game) return 'Loading...'
    if (game.isWinner === null) {
      return <div>
                <Link to="/">Home</Link>
                <Hangman game={this.props.game}/>
            </div>
    }
    if (game.isWinner === false) {
      return <div>
                <p> You lost </p>
                <p>refresh to start again</p>
            </div>
    }
    if (game.isWinner === true) {
      return <div>
                <p> You won!!!! Celebrate!! </p>
                <p>refresh to start again</p>
            </div>
    }
  }
}

const mapStateToProps = ({game}) => ({
        game
})

export default connect(mapStateToProps)(HangmanContainer)
