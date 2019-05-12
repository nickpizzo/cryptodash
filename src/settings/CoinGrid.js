import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile } from "../shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 100);
}

export default function() {
  const { coinList } = useContext(AppContext);
  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList).map(coinKey => (
        <CoinTile coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
}