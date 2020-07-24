import { LOAD_CHARACTERS } from '../actionTypes/types'

export default function (state = {}, action) {
  switch (action.type) {
    
    case LOAD_CHARACTERS:
      return action.characters
    default:
      return state

      
  }
}
