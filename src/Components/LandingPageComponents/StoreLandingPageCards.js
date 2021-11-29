import React from "react";
import styled from "styled-components";
import StoreLandingCard from "./StoreLandingCard";
import {
  faCreditCard,
  faShippingFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const StoreLandingPageCards = () => {
  const iconsArr = [
    { id: 1, icon: faCreditCard },
    { id: 2, icon: faShippingFast },
    { id: 3, icon: faUsers },
  ];
  return (
    <CardsContainer>
      {iconsArr.map((item) => {
        return <StoreLandingCard key={item.id} icon={item.icon} />;
      })}
    </CardsContainer>
  );
};

export default StoreLandingPageCards;

const CardsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 5rem;
  border-bottom: 1px solid #00adb5;
`;
