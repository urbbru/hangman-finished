import { NEW_GAME, MAKE_GUESS, GAME_OVER } from '../actions/game'
import {randomWord} from '../lib/game'

const initialState = {
  word: randomWord(),
  guesses: [],
  isWinner: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case NEW_GAME:
          return { ...initialState, word: randomWord() }
        case MAKE_GUESS:
          if(state.guesses.includes(action.payload)) return {...state}
          return {...state, guesses: [...state.guesses, action.payload]}
        case GAME_OVER:
          return {...state, isWinner: action.payload}
        default:
          return state
      }
}
