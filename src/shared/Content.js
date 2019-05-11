import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";

export default function(props) {
  const { coinList } = useContext(AppContext);
  return (
    <div>
      {!coinList ? <div>Loading Coins...</div> : <div>{props.children}</div>}
    </div>
  );
}
