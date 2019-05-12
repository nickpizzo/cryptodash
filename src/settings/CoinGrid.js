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

function getCoinsToDisplay(coinList, topSection) {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default function({ topSection }) {
  const { coinList } = useContext(AppContext);
  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection).map(coinKey => (
        <CoinTile topSection={topSection} coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
}
