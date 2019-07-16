//REQUIRED IMPORTS
import React from "react";
import styled from "styled-components";

//IMPORT COMPONENTS
import OrdersList from "../components/OrdersList/OrdersList";

const ContentStyle = styled.div`
  width: 90%;
  height: 86vh;
  background-color: #e0e1e3;
  overflow-y: auto;
`;

const Content = () => {
  return (
    <ContentStyle>
      <OrdersList />
    </ContentStyle>
  );
};

export default Content;
