
import {configureStore, combineReducers} from "@reduxjs/toolkit";

import authReducer from '../reducers/auth'
import currentUserReducer from '../reducers/currentUser'
import questionReducer from '../reducers/questions'
import usersReducer from '../reducers/users'
const reducer=combineReducers({
    authReducer,currentUserReducer,questionReducer,usersReducer
})


const stor = configureStore({
    reducer
  })
  export default stor;