import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//IMPORT REDUCERS
import orders from "./orderReducer";
import vehicles from "./vehicleReducer";
import drivers from "./driverReducer";
import clients from "./clientsReducer";

//COMBINE REDUCERS
const allReducers = combineReducers({
  orders,
  vehicles,
  drivers,
  clients
});

//CREATE STRORE
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // podłączenie stanu do narzędzia google

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
