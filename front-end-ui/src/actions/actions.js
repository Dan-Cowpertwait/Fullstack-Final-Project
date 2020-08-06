import { LOAD_CHARACTERS, SAVE_CHARACTER, LOAD_CHARACTER, UPDATE_CHARACTER } from '../actions/actiontypes'


// function handleResponse(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     let error = new Error(res.statusText);
//     error.response = res;
//     throw error;
//   }
// }

export function characterFound(character) {
  return {
    type: LOAD_CHARACTER,
    character
  };
}

export function loadCharacters(characters) {
  return {
    type: LOAD_CHARACTERS,
    characters
  };
}


export function saveData(character) {
  return {
    type: SAVE_CHARACTER,
    character
  };
}

// export function updateData(character){
//   return {
//     type: UPDATE_CHARACTER,
//     character
//   }
// }

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

export function fetchCharacter(id) {
    return dispatch => {
      fetch(`http://localhost:3001/characters/${id}`)
        .then(res => res.json())
        .then(json => {
            const character = json
            // console.log(characters)
            dispatch(characterFound(character))
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
      .then(json => {
        const character = json
        dispatch(saveData(character))
      })
  };
}

export function updateCharacter(id, data) {
  return dispatch => {
    console.log(data)
    return fetch(`http://localhost:3001/characters/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
  };
}


