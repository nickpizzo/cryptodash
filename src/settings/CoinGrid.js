import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile } from "../shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
}

function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}

export default function({ topSection }) {
  const { coinList, favorites, filteredCoins } = useContext(AppContext);
  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(
        coinKey => (
          <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
        )
      )}
    </CoinGridStyled>
  );
}
