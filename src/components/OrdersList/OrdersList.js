//REQUIRED IMPORTS
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import './OrdersList.scss';

//IMPORT COMPONENTS
import OrderDetails from "../OrderDetails/OrderDetails";
import { loadOrders } from '../../redux/orderReducer';

const OrdersListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrdersList = () => {
  /*HOOKS*/
  const dispatch = useDispatch();
  const orders = useSelector(({orders}) => orders.orders);
  const request = useSelector(({orders}) => orders.request);
  
  //Load data with api
  useEffect(() => {
      dispatch(loadOrders());
  },[]);
 
  return (
    <OrdersListStyle>
      <h1>Twoja lista zamówień:</h1>
      { request.pending && 
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> 
      } 
      { request.error && <p>{ request.error }</p>}
      { orders.map(item => (
        <OrderDetails key={item._id} {...item} />
      )) }
    </OrdersListStyle>
  );
};

export default OrdersList;
