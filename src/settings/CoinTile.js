import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";
import { SelectableTile } from "../shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../shared/CoinImage";

export default function({ coinKey }) {
  const { coinList } = useContext(AppContext);
  const TileClass = SelectableTile;

  let coin = coinList[coinKey];

  return (
    <TileClass>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
