import { LOAD_CHARACTERS, SAVE_CHARACTER } from '../actions/actiontypes'


function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    let error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
}

export function loadCharacters(characters) {
  return {
    type: LOAD_CHARACTERS,
    characters
  };
}


export function sendCharacter(character) {
  return {
    type: SAVE_CHARACTER,
    character
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

export function saveCharacter(data) {
  return dispatch => {
    return fetch('http://localhost:3001/characters', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(handleResponse)
      .then(json => {
        const character = json
        dispatch(sendCharacter(character))
      })
  };
}


