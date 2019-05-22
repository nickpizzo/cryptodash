import React, { useContext } from "react";
import { AppContext } from "../app/AppProvider";
import styled from "styled-components";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function() {
  const { prices } = useContext(AppContext);

  return (
    <div>
      <PriceGrid>
        {prices.map((price, index) => (
          <PriceTile key={`priceTile-${index}`} index={index} price={price} />
        ))}
      </PriceGrid>
    </div>
  );
}
