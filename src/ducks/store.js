import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";


//import reducers next
import userReducer from './userReducer'
import  teamReducer  from './teamReducer';


const rootReducer = combineReducers({
  user: userReducer,
  team: teamReducer
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)));