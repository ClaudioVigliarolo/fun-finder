import React, { Component } from 'react';
import BarSection from '../components/Search/BarSection';
import Header from '../components/Header/Header';
import Showcase from '../components/Showcase/ShowcaseEvents';
import ReviewSection from '../components/Reviews/ReviewSection';
import MusicSection from '../components/Showcase/ShowCaseMusic';
import Footer from '../components/Footer/Footer';
import { withRouter } from 'react-router-dom';

const MainScreen = () => {
  return (
    <React.Fragment>
      <Header title="Fun Finder" active={true} />
      <BarSection />
      <Showcase />
      <MusicSection />
      <ReviewSection />
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(MainScreen);
