import { LOAD_CHARACTERS, SAVE_CHARACTER, LOAD_CHARACTER, UPDATE_CHARACTER } from '../actions/actiontypes'

const initUserState = {
    fetching: false,
    fetched: false,
    characters: [1, 2],
    error: null
};

export default function charactersReducer(state = [], action) {

    switch (action.type) {
  
      case LOAD_CHARACTERS:
        return {
          fetched: true,
          ...state,
          characters: action.characters,
          error: null
        } 
        
        case LOAD_CHARACTER:
          return {
            ...state,
            characters: [...state.characters, action.character]
        }
        case SAVE_CHARACTER:
          return {
            fetched: true,
            ...state,
            character: action.character,
            error: null
          }
        case UPDATE_CHARACTER:
          return [action.character]


  
      default:
        return initUserState;
        
    }
  };