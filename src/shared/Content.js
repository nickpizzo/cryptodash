import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";

export default function(props) {
  const { coinList, prices, firstVisit } = useContext(AppContext);

  const renderIndicator = () => {
    if (!coinList) {
      return <div>Loading Coins...</div>;
    }
    if (!firstVisit && !prices) {
      return <div>Loading Prices...</div>;
    }
    return <div>{props.children}</div>;
  };
  return <div>{renderIndicator()}</div>;
}
