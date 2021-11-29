import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitterSquare,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faYahoo} />
        </li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  min-height: 5vh;
  border-top: 1px solid #00adb5;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    color: #eeeeee;
    flex-wrap: wrap;
    li {
      &:hover {
        color: #00adb5;
        cursor: pointer;
      }
    }
  }
`;
