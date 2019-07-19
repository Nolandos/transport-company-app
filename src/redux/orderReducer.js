//ACTIONS
export const loadAllOrder = (orders) => ({type: 'LOAD_ALL', orders});
export const addNewOrder = (order) => ({type: 'ADD_ORDER', order});
export const getDataRequested = () => ({type: 'GET_DATA_REQUESTED'});  
export const getDataDone = () => ({type: 'GET_DATA_DONE'});
export const errorRequest = (err) => ({type: 'ERROR_REQUEST', err});

//THUNKS
export const loadOrders = () => {
  return async dispatch => {
    const url = `http://localhost:8080/orders`;
    dispatch(getDataRequested());
    
    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 4000));
      let response = await fetch(url);
      if(response.ok === false) {    
          dispatch(errorRequest(response.status));
      } else {
          response = await response.json();
          dispatch(getDataDone());
          dispatch(loadAllOrder(response));
      } 
    }
    catch (err) {
      dispatch(errorRequest(err.message));
    }
  } 
}

export const createOrder = (data) => {
  return async dispatch => {
    const url = `http://localhost:8080/orders`;

    try {
      let response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer', 
        body: JSON.stringify(data, null, 2), 
    })
    dispatch(addNewOrder(data));
    } catch(err) {
      console.log('Błąd');
    }
  }
}

//INITIAL STATE
const initialState = {
  orders: [],
  request: {
    pending: false,
    success: null,
    error: null,
  }
};

//REDUCER
export default function ordersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_ALL':
      return { ...state, orders: action.orders };
    case 'ADD_ORDER':
      return { ...state, orders: state.orders.concat(action.order)};
    case 'GET_DATA_REQUESTED':
      return { ...state, request: { pending: true } };
    case 'GET_DATA_DONE':
      return { ...state, request: { pending: false, success: true } };
    case 'ERROR_REQUEST':
      return { ...state, request: { pending: false, success: false, error: action.err } };
    default:
      return state;
  }
}
