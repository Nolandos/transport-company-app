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
  const orders = useSelector(({orders}) => orders.orders);
  
  return (
    <OrdersListStyle>
      <h1>Twoja lista zamówień:</h1>
      { orders.map(item => (
        <OrderDetails key={item._id} {...item} />
      )) }
    </OrdersListStyle>
  );
};

export default OrdersList;
