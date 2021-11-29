import styled from "styled-components";

export const ShopBtn = styled.button`
  height: 4rem;
  width: 12rem;
  background: #eeeeee;
  border: none;
  color: #222831;
  font-size: 1.7em;
  text-transform: uppercase;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    border: 2px solid #eeeeee;
    background-color: #00adb5;
    color: #eeeeee;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.8);
  }
`;
