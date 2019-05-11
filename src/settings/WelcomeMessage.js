import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";

export default function WelcomeMessage() {
  const { firstVisit } = useContext(AppContext);
  return (
    <div>
      {firstVisit ? (
        <div>
          Welcome to CryptoDash, please select your favorite coins to begin
        </div>
      ) : null}
    </div>
  );
}
