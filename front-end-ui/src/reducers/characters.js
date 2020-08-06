import { LOAD_CHARACTERS, SAVE_CHARACTER, LOAD_CHARACTER, DELETE_CHARACTER } from '../actions/actiontypes'

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
        case DELETE_CHARACTER:
          return {
            ...state,
            characters: state.characters.filter(c => c.id !== action.id)
          }
        

  
      default:
        return initUserState;
        
    }
  };