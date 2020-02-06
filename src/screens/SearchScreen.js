import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import { connect } from 'react-redux';

const BackGround = styled.div`
  min-height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(#7b4397, #dc2430, #7b4397);
  height: auto;
`;

const SearchScreen = ({ time, searchResults, searchState }) => {
  console.log('dddddd', searchState);
  return (
    <BackGround key={searchState}>
      <Header title="Home" active={false} />
      <SearchResults data={searchResults} time={time} key={searchState} />
    </BackGround>
  );
};

const mapStateToProps = state => {
  console.log('soll', state);
  return {
    time: state.time,
    searchResults: state.searchResults,
    searchState: state.searchState
  };
};

export default connect(mapStateToProps, null)(SearchScreen);
