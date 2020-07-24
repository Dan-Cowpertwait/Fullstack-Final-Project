import { LOAD_CHARACTERS } from '../actionTypes/index'

export default function charactersReducer(state = {}, action) {
  switch (action.type) {

    case LOAD_CHARACTERS:
      return action.characters
    default:
      return state

      
  }
}
 