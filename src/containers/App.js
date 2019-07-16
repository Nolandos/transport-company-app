//REQUIRED IMPORTS
import React from "react";
import styled from "styled-components";
//import { useSelector } from "react-redux";

//IMPORT COMPONTENTS
import Content from "./Content";
import LeftBar from "./LeftBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <Wrapper>
        <LeftBar />
        <Content />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default App;
