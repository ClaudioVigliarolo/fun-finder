import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import SearchDetail from '../components/SearchResults/SearchDetail';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
const Background = styled.div`
  min-height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(#78309c, #dc2474, #7b4397);
  height: auto;
`;

const DetailScreen = props => {
  const { data } = props.location;
  return (
    <Background>
      <Header title="Search Results" active={true} />
      <SearchDetail data={data} key={data} />
    </Background>
  );
};

export default withRouter(DetailScreen);
