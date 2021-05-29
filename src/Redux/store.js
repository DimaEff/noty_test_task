import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import userReducer from "./user_reducer";


let reducers = combineReducers({
    user: userReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store