import React, { useState } from "react";
import styled from "styled-components";
import caseta from "../../img/caseta.webp";
import headphones from "../../img/headphones.webp";
import mansClothing from "../../img/mans-clothing.webp";
import tShirts from "../../img/t-shirtsjpg.webp";
import { ShopBtn } from "../../styles/StyledComponents";
import { motion } from "framer-motion";

const ImagesComponent = () => {
  const [btn, showBtn] = useState(false);
  return (
    <ImagesContainer
      onMouseEnter={() => showBtn(true)}
      onMouseLeave={() => showBtn(false)}
    >
      <img src={headphones} alt="headphones" />
      <img src={mansClothing} alt="Mans Clothing" />
      <img src={tShirts} alt="T-shirts" />
      <img src={caseta} alt="music" />
      {btn && (
        <BtnContainer
          as={motion.div}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ scale: 0 }}
        >
          {btn && <ShopBtn>Shop</ShopBtn>}
        </BtnContainer>
      )}
    </ImagesContainer>
  );
};

export default ImagesComponent;

const ImagesContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  img {
    max-height: 60%;
    max-width: 50%;
  }
`;
const BtnContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;
