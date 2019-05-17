import React, { useContext } from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../shared/Styles";
import { AppContext } from "../app/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  color: #1163c9;
  height: 25px;
  border: 1px solid;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  //get all coins
  let coinSymbols = Object.keys(coinList);
  //get coin names, map coin symbol to coin name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = [...coinSymbols, ...coinNames];
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });

  setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function Search() {
  const { coinList, setFilteredCoins } = useContext(AppContext);
  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <SearchInput onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)} />
    </SearchGrid>
  );
}
