import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ShareIcons from './ShareIcons';
import { withRouter } from 'react-router';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SearchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.data,
      lng: 0,
      lat: 0
    };
  }

  componentDidMount() {
    //get coordinates (for google maps api)
    console.log('st', this.state.event);
    this.state.event &&
      this.state.event.address &&
      this.getCoordinates(this.state.event.address);
  }

  getCoordinates = address => {
    console.log('aaa', address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .catch(err => console.log(err))
      .then(latLng => {
        this.setState({ lat: latLng.lat, lng: latLng.lng });
      })
      .catch(err => console.log(err));
  };

  renderMap(lat, lng) {
    console.log('latt', lat, lng);
    //file fire as soon as I get the lng and lat
    if (!lat || !lng) {
      return "We couldn't load the Map";
    }
    return (
      <div className="map">
        <Map google={this.props.google} zoom={12} initialCenter={{ lat, lng }}>
          <Marker position={{ lat, lng }} />
        </Map>
      </div>
    );
  }

  renderDescription = () => {
    if (this.props.description) {
      return this.props.description;
    }

    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        No Description Available
      </div>
    );
  };

  render() {
    {
      this.getCoordinates();
    }
    return (
      <div className="details-grid">
        <div className="details-header">
          <div className="details-header-inner">
            <h6 style={{ float: 'left', color: '#fff' }}>Event Information</h6>
            <div className="details-header-inner-2">
              <p className="details-header-text">
                Town: {this.state.event && this.state.event.town}
              </p>
              <p className="details-header-text">
                Address: {this.state.event && this.state.event.address}
              </p>

              <p className="details-header-text">Time: 12:00</p>
              <p className="details-header-text">
                Contacts: {this.state.event && this.state.event.address}
              </p>
            </div>
          </div>
        </div>
        <div className="details-description">
          <h6 style={{ color: '#fff' }}>Description:</h6>
          {this.renderDescription()}
        </div>

        <div className="details-map">
          {this.renderMap(
            this.state.event && this.state.event.lat,
            this.state.event && this.state.event.lng
          )}
        </div>

        <div className="details-bottom-icons">
          <h8>Share Your Event</h8>
          <ShareIcons link={window.location.pathname} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBYVMyc2B0zhSp-J9PHfPcBzuvNRY_VKyA'
})(withRouter(SearchDetail));
