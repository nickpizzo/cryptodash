import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile } from "../shared/Tile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
`;

export default function() {
  const { coinList } = useContext(AppContext);
  return (
    <CoinGridStyled>
      {Object.keys(coinList).map(coinKey => (
        <SelectableTile key={coinKey}>{coinKey}</SelectableTile>
      ))}
    </CoinGridStyled>
  );
}
