import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
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
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonEl active={page === name} onClick={() => setPage(name)}>
          {name}
        </ControlButtonEl>
      )}
    </AppContext.Consumer>
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
