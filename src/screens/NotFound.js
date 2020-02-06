import React from 'react';
import SearchResults from '../components/SearchResults/SearchResults';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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

const NotFound = props => {
  const { data, time } = props.location;
  return (
    <BackGround>
      <Header title="Home" active={true} />
      <div className="flex-center" style={{ height: '80vh' }}>
        <div className="not-found-container">
          <h6 style={{ color: 'white' }}>
            Ooops! Looks like this page is not available :(
          </h6>
          <button
            type="button"
            style={{ marginTop: 30 }}
            className="btn-form center-button music-button"
            onClick={() => props.history.push('/Home')}
          >
            <span className="concert-button-span">
              {' '}
              &nbsp;Go Back To Home {'  '}
            </span>
          </button>
        </div>
      </div>
    </BackGround>
  );
};

export default withRouter(NotFound);
