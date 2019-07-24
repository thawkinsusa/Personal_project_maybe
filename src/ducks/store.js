import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { create } from "domain";

//import reducers next
import getUsers from './userReducer'


const rootReducer = combineReducers({
  user: getUsers
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)));