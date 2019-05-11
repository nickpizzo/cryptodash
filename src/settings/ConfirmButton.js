import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { fontSize1, greenBoxShadow, color3 } from "../shared/Styles";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1}
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
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
