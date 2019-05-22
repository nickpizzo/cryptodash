import React, { useContext } from "react";
import HighchartsConfig from "./HighchartsConfig";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import ReactHighcharts from "react-highcharts";

export default function PriceChart() {
  const { currentFavorite, setCurrentFavorite } = useContext(AppContext);

  return (
    <Tile>
      <ReactHighcharts config={HighchartsConfig()} />
    </Tile>
  );
}
