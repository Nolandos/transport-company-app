//ACTIONS
export const loadAllVehicles = (vehicles) => ({type: 'LOAD_VEHICLES', vehicles});

//THUNKS
export const loadVehicles = () => {
  return async dispatch => {
    const url = `http://localhost:8080/vehicles`;    
    try {
      let response = await fetch(url);
          response = await response.json();
          dispatch(loadAllVehicles(response));
    }
    catch (err) {
      console.log(err);
    }
  } 
}

//INITIAL STATE
const initialState = {
  vehicles: []
};

//REDUCER
export default function vehiclesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_VEHICLES':
      return { ...state, vehicles: action.vehicles };
    default:
      return state;
  }
}
