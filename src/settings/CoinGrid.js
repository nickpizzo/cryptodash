import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../app/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export default function() {
  const { coinList } = useContext(AppContext);
  return (
    <CoinGridStyled>
      {Object.keys(coinList).map(coinKey => (
        <div>{coinKey}</div>
      ))}
    </CoinGridStyled>
  );
}
