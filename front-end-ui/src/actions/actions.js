import { LOAD_CHARACTERS } from '../actions/actiontypes'


export function loadCharacters(characters) {
  return {
    type: LOAD_CHARACTERS,
    characters
  };
}

export function fetchCharacters() {
    return dispatch => {
      fetch('http://localhost:3001/characters')
        .then(res => res.json())
        .then(json => {
            const characters = json
            // console.log(characters)
            dispatch(loadCharacters(characters))
          })
    };
  }


