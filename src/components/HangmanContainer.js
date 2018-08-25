import * as React from 'react'
import Hangman from './Hangman'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux'

export class HangmanContainer extends React.PureComponent {
  render() {
    if (!this.props.game) return 'Loading...'
    return <div>
              <Link to="/">Home</Link>
              <Hangman game={this.props.game}/>
          </div>
  }
}

const mapStateToProps = ({game}) => ({
        game
})

export default connect(mapStateToProps)(HangmanContainer)

