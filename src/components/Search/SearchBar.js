import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Autocomplete from 'react-google-autocomplete';
import { findByPosCategTime, findByPosKeywordTime } from '../../api/api';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getSearchResults, setSearchState } from '../../actions/index';
import 'react-datepicker/dist/react-datepicker.css';

class SearchBar extends Component {
  state = {
    isInputShown: false,
    advancedSearch: false,
    startDate: new Date(),
    category: null,
    simpleTime: null,
    location: '',
    startTime: 0,
    keyword: ''
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  formatDate(date) {
    if (!date) return null;
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  onKeywordChange = e => this.setState({ keyword: e.target.value });
  startTimer = () => {
    let startTime = new Date();
    return startTime;
  };

  getElapsedTime = startTime => {
    let endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    timeDiff /= 1000;
    return timeDiff;
  };

  onSubmitSimpleSearch = async e => {
    e.preventDefault();
    console.log('st', this.state);
    let startTime = this.startTimer();
    let time = '';
    this.props.history.push('/search');
    this.props.setSearchState('loading');
    let res = await findByPosCategTime(
      this.state.simpleTime,
      this.state.category,
      this.state.location
    );

    if (res) {
      time = this.getElapsedTime(startTime);
    }
    this.props.setSearchState('completed');
    this.props.getSearchResults(res, time);
  };

  onSubmitAdvancedSearch = async e => {
    e.preventDefault();
    let startTime = this.startTimer();
    let time = '';
    this.props.history.push('/search');
    this.props.getSearchResults('loading', 0);
    let res = await findByPosKeywordTime(
      this.state.location,
      this.state.keyword,
      this.formatDate(this.state.startDate)
    );

    if (res) {
      time = this.getElapsedTime(startTime);
    }

    this.props.getSearchResults(res, time);
  };

  onChangeCategory = e => {
    this.setState({ category: e.target.value });
  };
  onChangeSimpleTime = e => {
    this.setState({ simpleTime: e.target.value });
  };
  //findByPosCategTime

  getNextMonth = () => {
    let monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    let d = new Date();
    return monthNames[d.getMonth()];
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="ftco-search my-md-5">
            <div className="row">
              <div className="col-md-12 nav-link-wrap">
                <div
                  className="nav nav-pills text-center"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="mr-md-1 nav-link active "
                    id="v-pills-1-tab"
                    data-toggle="pill"
                    href="#v-pills-1"
                    role="tab"
                    aria-controls="v-pills-1"
                  >
                    Simple Search
                  </a>
                  <a
                    className="mr-md-1 nav-link "
                    id="v-pills-2-tab"
                    data-toggle="pill"
                    href="#v-pills-2"
                    role="tab"
                    aria-controls="v-pills-2"
                  >
                    Advanced Search
                  </a>
                </div>
              </div>
              <div className="col-md-12 tab-wrap">
                <div className="tab-content p-4" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-1"
                    role="tabpanel"
                    aria-labelledby="v-pills-nextgen-tab"
                  >
                    <form action="#" className="search-job">
                      <div className="row no-gutters">
                        <div className="col-md mr-md-2">
                          <div className="form-group">
                            <div className="form-field">
                              <select
                                className="form-control"
                                value={this.state.simpleTime}
                                onChange={this.onChangeSimpleTime}
                              >
                                <option value="all">When</option>
                                <option value="today">Today</option>
                                <option value="This week">This week</option>
                                <option value={this.getNextMonth()}>
                                  This month
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-md mr-md-2">
                          <div className="form-group">
                            <div className="form-field">
                              <div className="select-wrap">
                                <div className="icon">
                                  <span className="ion-ios-arrow-down" />
                                </div>
                                <select
                                  className="form-control"
                                  value={this.state.category}
                                  onChange={this.onChangeCategory}
                                >
                                  <option value={null}>Why</option>
                                  <option value="singles_social,movies_film">
                                    Night Life
                                  </option>
                                  <option value="music">Music</option>
                                  <option value="other, performing_arts, clubs_associations, community, holiday, fundraisers, festivals_parades">
                                    Meet people
                                  </option>
                                  <option value="sports">Sport</option>
                                  <option value="family_fun_kids, learning_education, attractions, science">
                                    Kids & Family
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md mr-md-2">
                          <div className="form-group">
                            <div className="form-field">
                              <div className="icon">
                                <span className="icon-map-marker"></span>
                              </div>

                              <Autocomplete
                                className="form-control"
                                style={{ borderWidth: 1 }}
                                onPlaceSelected={place => {
                                  this.setState({
                                    location:
                                      place.address_components[0]['long_name']
                                  });
                                }}
                                types={['(regions)']}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-group">
                            <div className="form-field">
                              <button
                                onClick={this.onSubmitSimpleSearch}
                                type="submit"
                                className="form-control btn btn-primary"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="v-pills-2"
                    role="tabpanel"
                    aria-labelledby="v-pills-performance-tab"
                  >
                    <form action="#" className="search-job">
                      <div className="row no-gutters">
                        <div className="col-md mr-md-2">
                          <div className="form-group">
                            <div className="form-field">
                              <DatePicker
                                className="react-datepicker-wrapper"
                                dateFormat="dd/MM/yyyy"
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                                placeholderText="Event Date"
                                isClearable={true}
                                customInput={
                                  <input
                                    className="form-control "
                                    onChange={this.handleDateChange}
                                    value={this.state.startDate}
                                  ></input>
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md mr-md-2">
                          <div className="form-group">
                            <div className="form-field">
                              <div className="icon">
                                <span className="ion-ios-arrow-down" />
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Keyword"
                                onChange={this.onKeywordChange}
                                value={this.state.keyword}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md">
                          <div className="form-group">
                            <div className="form-field">
                              <div className="icon">
                                <span className="icon-map-marker"></span>
                              </div>
                              <Autocomplete
                                className="form-control"
                                style={{ borderWidth: 1 }}
                                onPlaceSelected={place => {
                                  this.setState({
                                    location:
                                      place.address_components[0]['long_name']
                                  });
                                }}
                                types={['(regions)']}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md">
                          <div className="form-group">
                            <div className="form-field">
                              <button
                                onClick={this.onSubmitAdvancedSearch}
                                type="submit"
                                className="form-control btn btn-primary btn-left"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(
  connect(null, { getSearchResults, setSearchState })(SearchBar)
);
