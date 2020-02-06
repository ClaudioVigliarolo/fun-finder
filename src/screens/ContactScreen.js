import React from 'react';
import Header from '../components/Header/Header';
import Contact from '../components/About/About';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const BackGround = styled.div`
  background-image: linear-gradient(#7b4397, #dc2430, #7b4397);
  background-size: cover;
`;

const ContactScreen = () => {
  return (
    <BackGround>
      <Header
        title="About me"
        color="transparent"
        history={this.props.history}
      />
      <Contact />
    </BackGround>
  );
};

export default withRouter(ContactScreen);
