import { LOAD_CHARACTERS } from '../actions/actiontypes'

const initUserState = {
    fetching: false,
    fetched: false,
    characters: [1, 2, 3, 4],
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

  
      default:
        return initUserState;
        
    }
  };