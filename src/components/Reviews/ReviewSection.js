import React from 'react';
import styled from 'styled-components'


function ReviewSection() {

  const Container = styled.div`
    background-image: linear-gradient(#7b4397,#dc2430,#7b4397 );
    opacity:0.9;
    z-index:-20;
    `

  return (
    <Container>

      <section className="section-stories" id="reviews">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={require('../../images/reviewBackground.mp4')} type="video/mp4" />
            <source src={require('../../images/reviewBackground.mp4')} type="video/webm" />
            Your browReviewser is not supported!
          </video>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 100 }}>
          <h2 style={{ color: '#fff', }}>
            What people think about us
          </h2>
        </div>
        <div className="rowReview">
          <div className="story">
            <figure className="story__shape">
              <img src={require('../../images/person1.jpg')} alt="Person on a tour" className="story__img" />
              <figcaption className="story__caption">Michael Toscan</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="story__text__header">So happy for the concerts I went to </h3>
              <p style={{ color: '#fff' }}>
                I was looking for a concert and I bumped into this site. Wow! I was so happy because it was the thing I was looking for.
              A site that makes me know all the important events in my Area. Really Amazing!

              </p>
            </div>
          </div>
        </div>
        <div className="rowReview">
          <div className="story">
            <figure className="story__shape">
              <img src={require('../../images/follow-img.jpg')} alt="Person on a tour" className="story__img" />
              <figcaption className="story__caption">Lory Tyson</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="story__text__header">Best site for art gallery events!</h3>
              <p style={{ color: '#fff' }}>
                I am so happy about this site because It helped me finding the art gallery I was looking for. I am from Toronto and
                the information provided on the website made it easy to find the latest visit at the art gallery of Ontario. From now on
                I will always rely on this website to get the latest information about events in my city!

              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default ReviewSection;
