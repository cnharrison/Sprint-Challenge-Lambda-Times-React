import React from "react";
import styled, { css } from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
      width: 1280px;
`;

const StyledH1 = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const StyledSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledSpan>SMARCH 32, 2018</StyledSpan>
      <StyledH1>Lambda Times</StyledH1>
      <StyledSpan>98°</StyledSpan>
    </StyledHeader>
  );
};

export default Header;
