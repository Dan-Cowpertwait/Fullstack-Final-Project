import { LOAD_CHARACTERS } from './actionTypes/index'

const ROOT_URL = 'http://localhost:3001'


export const fetchCharacters = () => dispatch => {
    fetch(`${ROOT_URL}/characters`)
    .then(resp => resp.json())
    .then(characters => characters.map( characters => dispatch({ 
        type: LOAD_CHARACTERS, 
        payload: characters
    })))
}


