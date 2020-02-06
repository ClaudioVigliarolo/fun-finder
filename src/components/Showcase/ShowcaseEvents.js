import React from 'react';
import styled from 'styled-components';

function CentralSection() {
  const Container = styled.div`
    background-image: linear-gradient(
      #7b4397,
      #dc2430,
      #7b4397,
      #dc2430,
      #7b4397
    );
    opacity: 0.9;
    padding-top: 50px;
    padding-bottom: 50px;
  `;
  return (
    <Container>
      <section className="main-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3 style={{ color: '#fff' }}>What do you need to find?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="find-place-img_wrap">
                <div className="grid">
                  <figure className="effect-ruby">
                    <img
                      src={require('../../images/find-place1.jpg')}
                      className="img-fluid"
                      alt="img13"
                    />
                    <figcaption>
                      <h5>Nightlife </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row find-img-align">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src={require('../../images/disco1.jpg')}
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Disco</h5>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src={require('../../images/international.jpg')}
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>International</h5>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row find-img-align">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src={require('../../images/find-place3.jpg')}
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Outdoors </h5>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="find-place-img_wrap">
                    <div className="grid">
                      <figure className="effect-ruby">
                        <img
                          src={require('../../images/find-place5.jpg')}
                          className="img-fluid"
                          alt="img13"
                        />
                        <figcaption>
                          <h5>Art &amp; Culture </h5>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default CentralSection;
