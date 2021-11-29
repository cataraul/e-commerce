// import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImagesComponent from "./LandingPageComponents/ImagesComponent";
import StoreLandingPage from "./LandingPageComponents/StoreLandingPage";
import StoreLandingPageCards from "./LandingPageComponents/StoreLandingPageCards";
const Homepage = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);
  // if (data) {
  //   console.log(data);
  //   console.log(
  //     data.filter((dataItem) => {
  //       return dataItem.category === "men's clothing";
  //     })
  //   );
  // }

  return (
    <HomepageContainer>
      <StoreLandingPage />
      <StoreLandingPageCards />
      <ImagesComponent />
    </HomepageContainer>
  );
};

export default Homepage;

const HomepageContainer = styled.div`
  width: 100%;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
