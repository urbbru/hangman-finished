import { NEW_GAME, MAKE_GUESS, GAME_OVER } from '../actions/game'

export default (state = [], action = {}) => {
    switch (action.type) {
        case NEW_GAME:
          return {...action.payload}
        case MAKE_GUESS:
          return {...state, guesses: [...state.guesses, action.payload]}
        case GAME_OVER:
          return {...state, isWinner: action.payload}
        default:
          return state
      }
}
