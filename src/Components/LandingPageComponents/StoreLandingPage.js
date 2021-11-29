import React from "react";
import styled from "styled-components";
import image from "../../img/imgProducts.webp";
import { ShopBtn } from "../../styles/StyledComponents";

const StoreLandingPage = () => {
  return (
    <Container>
      <StoreDescription>
        <h2>
          This is not a fake
          <br /> store.
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          veritatis, <br />
          rerum nesciunt non consequuntur, ipsum architecto porro error commodi.
        </p>
        <ShopBtn>Shop</ShopBtn>
      </StoreDescription>
      <ImageContainer />
    </Container>
  );
};

export default StoreLandingPage;

const Container = styled.section`
  min-height: 80vh;
  width: 100%;
  margin: 2rem 5rem;
  display: flex;
`;
const StoreDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #eeeeee;
  h2 {
    font-size: 4.5rem;
    margin: 1rem 0;
    color: #00adb5;
  }
  p {
    margin: 2rem 0;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  background-image: url(${image});
  background-size: 100% 100%;
`;
