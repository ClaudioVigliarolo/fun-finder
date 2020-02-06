import React, { useRef } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  background-image: linear-gradient(#78309c, #dc2474, #7b4397);
  opacity: 0.9;
  padding-top: 50px;
  padding-bottom: 50px;
`;

//used to scroll to the initial searchbar when the user clicks on the button
const myRef = React.createRef('#v-pills-2');
function handleScrollToElement(event) {
  window.scrollTo(0, myRef.current.offsetTop);
}

export default function MusicSection(props) {
  return (
    <Container>
      <section id="music" className="main-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3 style={{ color: '#fff' }}>Enjoy live music?</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 featured-responsive">
              <div className="featured-place-wrap">
                <a href="detail.html">
                  <img
                    src={require('../../images/concert.jpg')}
                    className="img-fluid"
                    alt="#"
                  />
                  <span className="featured-rating-orange">6.5</span>
                  <div className="featured-title-box">
                    <h6>Burger &amp; Lobster</h6>
                    <p>Restaurant </p> <span>• </span>
                    <p>3 Reviews</p> <span> • </span>
                    <p>
                      <span>$$$</span>$$
                    </p>
                    <ul>
                      <li>
                        <span className="icon-location-pin" />
                        <p>1301 Avenue, Brooklyn, NY 11230</p>
                      </li>
                      <li>
                        <span className="icon-screen-smartphone" />
                        <p>+44 20 7336 8898</p>
                      </li>
                      <li>
                        <span className="icon-link" />
                        <p>https://burgerandlobster.com</p>
                      </li>
                    </ul>
                    <div className="bottom-icons">
                      <div className="closed-now">CLOSED NOW</div>
                      <span className="ti-heart" />
                      <span className="ti-bookmark" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 featured-responsive">
              <div className="featured-place-wrap">
                <a href="detail.html">
                  <img
                    src={require('../../images/concert.jpg')}
                    className="img-fluid"
                    alt="#"
                  />
                  <span className="featured-rating-green">9.5</span>
                  <div className="featured-title-box">
                    <h6>Joe’s Shanghai</h6>
                    <p>Restaurant </p> <span>• </span>
                    <p>3 Reviews</p> <span> • </span>
                    <p>
                      <span>$$$</span>$$
                    </p>
                    <ul>
                      <li>
                        <span className="icon-location-pin" />
                        <p>1301 Avenue, Brooklyn, NY 11230</p>
                      </li>
                      <li>
                        <span className="icon-screen-smartphone" />
                        <p>+44 20 7336 8898</p>
                      </li>
                      <li>
                        <span className="icon-link" />
                        <p>https://burgerandlobster.com</p>
                      </li>
                    </ul>
                    <div className="bottom-icons">
                      <div className="closed-now">CLOSED NOW</div>
                      <span className="ti-heart" />
                      <span className="ti-bookmark" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 featured-responsive">
              <div className="featured-place-wrap">
                <a href="detail.html">
                  <img
                    src={require('../../images/concert.jpg')}
                    className="img-fluid"
                    alt="#"
                  />
                  <span className="featured-rating">3.2</span>
                  <div className="featured-title-box">
                    <h6>Tasty Hand-Pulled Noodles</h6>
                    <p>Restaurant </p> <span>• </span>
                    <p>3 Reviews</p> <span> • </span>
                    <p>
                      <span>$$$</span>$$
                    </p>
                    <ul>
                      <li>
                        <span className="icon-location-pin" />
                        <p>1301 Avenue, Brooklyn, NY 11230</p>
                      </li>
                      <li>
                        <span className="icon-screen-smartphone" />
                        <p>+44 20 7336 8898</p>
                      </li>
                      <li>
                        <span className="icon-link" />
                        <p>https://burgerandlobster.com</p>
                      </li>
                    </ul>
                    <div className="bottom-icons">
                      <div className="open-now">OPEN NOW</div>
                      <span className="ti-heart" />
                      <span className="ti-bookmark" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                ref={myRef}
                type="button"
                className="btn-form center-button music-button"
                onClick={e => {
                  props.showConcertsSearchBar();
                  handleScrollToElement(e);
                }}
              >
                <span className="concert-button-span">
                  {' '}
                  &nbsp;Find your concert {'  '}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
