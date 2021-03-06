import React from "react";
import styled, { css } from "styled-components";

const CoinImage = styled.img`
  height: 50px;
  ${props =>
    props.spotlight &&
    css`
      height: 200px;
      display: block;
      margin: auto;
    `}
`;

export default function({ coin, spotlight }) {
  return (
    <CoinImage
      alt={coin.CoinSymbol}
      src={"https://" + `cryptocompare.com/${coin.ImageUrl}`}
      spotlight={spotlight}
    />
  );
}
