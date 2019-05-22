import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
  align-items: flex-end;
`;

const ControlButtonEl = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  ${props =>
    props.active &&
    css`
      text-decoration: underline;
      text-shadow: 0 0 60px #03ff03;
    `}
`;

function ControlButton({ name }) {
  const { page, setPage } = useContext(AppContext);
  return (
    <ControlButtonEl active={page === name} onClick={() => setPage(name)}>
      {name}
    </ControlButtonEl>
  );
}

export default function AppBar() {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
