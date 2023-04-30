import profileReducer from './profile_reducer'
import  dialogReducer from './dialog_reducer'
import usersReducer from './users_reduser'
import authReducer from './auth_reducer';
import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import ThunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from './app_reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

let reducers = combineReducers({
    ProfilePage : profileReducer,
    MessagePage : dialogReducer,
    UsersPage : usersReducer,
    Auth : authReducer,
    appReducer : appReducer,
    form : formReducer
})
let store = legacy_createStore(reducers, composeWithDevTools(applyMiddleware(ThunkMiddleware)))

export default store;