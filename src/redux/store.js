import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//IMPORT REDUCERS
import orders from "./orderReducer";

//COMBINE REDUCERS
const allReducers = combineReducers({
  orders
});

//CREATE STRORE
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // podłączenie stanu do narzędzia google

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
