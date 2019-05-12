import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from "../shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

export default function({ coinKey, topSection }) {
  const { coinList } = useContext(AppContext);
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  }

  const coin = coinList[coinKey];

  return (
    <TileClass>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
