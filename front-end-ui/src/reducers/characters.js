import { LOAD_CHARACTERS, SAVE_CHARACTER } from '../actions/actiontypes'

const initUserState = {
    fetching: false,
    fetched: false,
    characters: [1, 2],
    error: null
};

export default function charactersReducer(state = [], action) {

    switch (action.type) {
  
      case LOAD_CHARACTERS:
        console.log(action.characters)
        return {
          fetched: true,
          ...state,
          characters: action.characters,
          error: null
        } 

        case SAVE_CHARACTER:
          console.log(action.character)
          return {
            fetched: true,
            ...state,
            character: action.character,
            error: null
          }

  
      default:
        return initUserState;
        
    }
  };