//ACTIONS
export const loadAllDrivers = (drivers) => ({type: 'LOAD_DRIVERS', drivers});

//THUNKS
export const loadDrivers = () => {
  return async dispatch => {
    const url = `http://localhost:8080/drivers`;    
    try {
      let response = await fetch(url);
          response = await response.json();
          dispatch(loadAllDrivers(response));
    }
    catch (err) {
      console.log(err);
    }
  } 
}

//INITIAL STATE
const initialState = {
  drivers: []
};

//REDUCER
export default function driversReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_DRIVERS':
      return { ...state, drivers: action.drivers };
    default:
      return state;
  }
}
