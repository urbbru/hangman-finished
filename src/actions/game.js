import {randomWord} from '../lib/game'
export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame() {
    return {
      type: NEW_GAME,
      payload: {word: randomWord(), guesses: [], isWinner: null}
    }
}
export function makeGuess(guess) {
    return {
      type: MAKE_GUESS,
      payload: guess
    }
}