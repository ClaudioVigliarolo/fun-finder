import React from 'react';
import { withRouter } from 'react-router';

const renderImage = image => {
  if (image) return image;
  return require('../../images/no_image.png');
};

const goDetails = props => {
  props.history.push({
    pathname: '/details',
    data: props
  });
};

const SearchResultItem = props => {
  return (
    <div className="search-item">
      <div className="search-item-container-image">
        <div
          className="search-item-image"
          style={{
            backgroundImage: `url(${renderImage(props.image)})`,
            borderRadius: props.image ? '50%' : 0
          }}
        ></div>
      </div>
      <div className="search-item-container-text">
        <div className="search-item-place">
          {props.town}{' '}
          <span className="search-item-address">{props.address} </span>
        </div>
        <h6 className="search-item-title">{props.title}</h6>
        <h6 className="search-item-time">100:00</h6>
      </div>

      <div className="search-item-container-button">
        <button
          onClick={() => goDetails(props)}
          className="cbutton draw-border"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default withRouter(SearchResultItem);

//data format from API: 2019-10-12 20:45:00
//expected res: Today, 20:30
//ex2: 10/12, 20:30
/*
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pr-lg-4">
            <div className="row">
              <div className="col-md-12">
                <div className="team d-md-flex p-4 bg-white">
                 <img src={props.image} className="img"
          alt="new"
          />
                  <div className="text pl-md-4">
                    <span className="location mb-0">{props.town}</span>
                    <h2>Danica Lewis</h2>
                    <span className="position">{props.address}</span>
                    <p className="mb-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <span className="seen">Last Activity 4 months ago</span>
                    <p><a href="#" className="btn btn-primary">Shortlist</a></p>
                  </div>
                </div>
              </div></div></div></div></div>
  */

/*
     <div className="text pl-md-4" style={{position:'relative'}}>
    <button style={{position:'absolute', bottom:0,  marginTop:100}}
           onClick={()=>{props.detailScreen(); props.getEventDetails(props)}}
           href="#eventDetail" className="buttonItem draw meet rounded-sm">Discover More</button>
           </div>
  */

/*
<div className="col-md-12">
        <div
          className="team d-md-flex p-4 bg-light rounded-sm "
          style={{ opacity: 0.8 }}
        >
          <div
            className="img"
            style={{ backgroundImage: `url(${renderImage(props.image)})` }}
          />
          <div className="text pl-md-4" style={{ position: 'relative' }}>
            <div>
              <span className="location mb-0">{props.town}</span>
              <span>&nbsp;&nbsp;</span>
              <span className="location mb-0">{props.address}</span>
              <h2>{props.title}</h2>
              <span className="position">{getFormattedTime(props.time)}</span>

              <div className=" align-container" style={{ marginTop: 0 }}>
                <button
                  className="align-container"
                  style={{ bottom: 0 }}
                  onClick={() => {
                    props.detailScreen();
                    props.getEventDetails(
                      props.address,
                      props.time,
                      props.town,
                      props.description,
                      props.image
                    );
                  }}
                  href="#eventDetail"
                  className="buttonItem draw meet rounded-sm"
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  */
