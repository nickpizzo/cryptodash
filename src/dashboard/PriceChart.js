import React, { useContext } from "react";
import HighchartsConfig from "./HighchartsConfig";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";
import ChartSelect from "./ChartSelect";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function PriceChart() {
  const { historical, changeChartSelect } = useContext(AppContext);

  return (
    <Tile>
      <ChartSelect
        defaultValue={"months"}
        onChange={e => changeChartSelect(e.target.value)}
      >
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </ChartSelect>
      {historical ? (
        <ReactHighcharts config={HighchartsConfig(historical)} />
      ) : (
        <div>Loading historical data...</div>
      )}
    </Tile>
  );
}
