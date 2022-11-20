import {combineReducers} from 'redux'
import authReducer from '../reducers/auth'
import currentUserReducer from '../reducers/currentUser'
import questionReducer from '../reducers/questions'
import usersReducer from '../reducers/users'
import currentUserMesssages from './Messages'
export default combineReducers({
    authReducer,currentUserReducer,questionReducer,usersReducer,currentUserMesssages
})