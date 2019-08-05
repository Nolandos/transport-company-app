//REQUIRED IMPORTS
import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

//IMPORT COMPONENTS
import OrdersList from "../components/OrdersList/OrdersList";
import NewOrder from "../components/NewOrder/NewOrder";

//LOAD THUNKS
import { loadOrders } from '../redux/orderReducer';
import { loadVehicles } from '../redux/vehicleReducer';
import { loadDrivers } from '../redux/driverReducer';
import { loadClients } from '../redux/clientsReducer';

const ContentStyle = styled.div`
  width: 90%;
  height: 86vh;
  background-color: #e0e1e3;
  overflow-y: auto;
`;

const Content = () => {
  const dispatch = useDispatch();
  const request = useSelector(({orders}) => orders.request);  

  useEffect(() => {
    dispatch(loadOrders());
    dispatch(loadVehicles());
    dispatch(loadDrivers());
    dispatch(loadClients());
  },[]);

  return (
    <ContentStyle>
     { request.pending && 
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> 
      } 
      { request.error && <p>{ request.error }</p>}
      <Switch>
        <Route exact path="/orders" component={ OrdersList } />
        <Route exact path="/create-order" component={ NewOrder } />
      </Switch>
    </ContentStyle>
  );
};

export default Content;
