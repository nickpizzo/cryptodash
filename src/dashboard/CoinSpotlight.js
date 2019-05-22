import React, { useContext } from "react";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import CoinImage from "../shared/CoinImage";
import styled from "styled-components";

const SpotLightName = styled.h2`
  text-align: center;
`;

export default function CoinSpotlight() {
  const { currentFavorite, coinList } = useContext(AppContext);

  return (
    <Tile>
      <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>{" "}
      <CoinImage spotlight coin={coinList[currentFavorite]} />
    </Tile>
  );
}
