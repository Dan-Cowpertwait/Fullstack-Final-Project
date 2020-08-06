import { LOAD_CHARACTERS, SAVE_CHARACTER, LOAD_CHARACTER, DELETE_CHARACTER, UPDATE_CHARACTER } from '../actions/actiontypes'


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

export function characterDeleted(id) {
  return {
    type: DELETE_CHARACTER,
    id
  };
}

export function updateCharacterData(character){
  return {
    type: UPDATE_CHARACTER,
    character
  }
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
    .then(json => {
      const character = json
      dispatch(updateCharacterData(character))
    })
  }
}

export function deleteCharacter(id) {
  return dispatch => {
    return fetch(`http://localhost:3001/characters/${id}`, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(dispatch(characterDeleted(id)))
  }
}



