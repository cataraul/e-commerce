import React from "react";
import styled from "styled-components";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./styles/styles.scss";

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Homepage />
      <Footer />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  background: #222831;
`;
