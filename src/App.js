import React from "react";
import styled from "styled-components";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import "./styles/styles.scss";

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Homepage />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  background: #222831;
`;
