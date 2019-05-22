import React, { useContext } from "react";
import HighchartsConfig from "./HighchartsConfig";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function PriceChart() {
  const { historical } = useContext(AppContext);

  return (
    <Tile>
      {historical ? (
        <ReactHighcharts config={HighchartsConfig(historical)} />
      ) : (
        <div>Loading historical data...</div>
      )}
    </Tile>
  );
}
