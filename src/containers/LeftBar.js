//REQUIRED IMPORTS
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const LeftBarStyle = styled.div`
  width: 10%;
  min-width: 150px;
  height: 86vh;
  background-color: #181f29;
`;

const Menu = styled.ul`
  padding-lef: 0;
  list-style-type: none;
  color: #fff;
`

const LeftBar = () => {
  return (
    <LeftBarStyle>
      <Menu>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/create-order">Create order</Link></li>
      </Menu>
    </LeftBarStyle>
  );
};

export default LeftBar;
