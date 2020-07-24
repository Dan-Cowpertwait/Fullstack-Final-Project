import charactersReducer from './Characters'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    characters: charactersReducer
})
 
export default rootReducer