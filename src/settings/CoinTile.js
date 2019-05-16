import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from "../shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

export default function({ coinKey, topSection }) {
  const { coinList, addCoin, removeCoin, isInFavorites } = useContext(
    AppContext
  );
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileClass = DisabledTile;
  }

  const coin = coinList[coinKey];

  return (
    <TileClass
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
