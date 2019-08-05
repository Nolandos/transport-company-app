//ACTIONS
export const loadAllClients = (clients) => ({type: 'LOAD_CLIENTS', clients});

//THUNKS
export const loadClients = () => {
  return async dispatch => {
    const url = `http://localhost:8080/clients`;    
    try {
      let response = await fetch(url);
          response = await response.json();
          dispatch(loadAllClients(response));
    }
    catch (err) {
      console.log(err);
    }
  } 
}

//INITIAL STATE
const initialState = {
  clients: []
};

//REDUCER
export default function clientsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_CLIENTS':
      return { ...state, clients: action.clients };
    default:
      return state;
  }
}