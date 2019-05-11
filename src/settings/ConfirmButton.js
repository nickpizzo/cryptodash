import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";

const ConfirmButtonStyled = styled.div`
  margin: 2px;
  color: green;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function ConfirmButton() {
  const { confirmFavorites } = useContext(AppContext);

  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
}
