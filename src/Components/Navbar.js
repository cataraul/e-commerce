import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <NavBar className="navbar">
      <Logo>notAFakeStore</Logo>
      <ListContainer className="navbar-links">
        <li>Shop</li>
        <li>Search</li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCartPlus} />
        </li>
      </ListContainer>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  height: 10vh;
  width: 100%;
  border-bottom: 0.5px solid #00adb5;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.p`
  font-size: 1.7em;
  font-weight: bolder;
  color: #eeeeee;
  &:hover {
    cursor: pointer;
  }
`;
const ListContainer = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-between;
  li {
    list-style-type: none;
    cursor: pointer;
    color: #eeeeee;
    &:hover {
      color: #00adb5;
    }
  }
`;
