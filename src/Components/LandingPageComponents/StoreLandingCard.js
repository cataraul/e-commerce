import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoreLandingCard = ({ icon }) => {
  return (
    <LandingPageCard>
      <div className="text">
        <h3>Lorem, ipsum.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus hic
          repellendus harum eum error esse?
        </p>
      </div>
      <div className="image-container">
        <FontAwesomeIcon icon={icon} />
      </div>
    </LandingPageCard>
  );
};

export default StoreLandingCard;

const LandingPageCard = styled.div`
  height: 20em;
  width: 25em;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #eeeeee;
  h3 {
    border-bottom: 1px solid #00adb5;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    padding: 1rem;
    height: 9em;
    text-align: center;
  }
  .image-container {
    font-size: 3em;
    color: #00adb5;
  }
`;
