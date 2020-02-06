import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MainSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      isButtonVisible: true,
      city: '',
      query: '',
      category: '',
      concertSearch: false
      //colors to handle errors in search input
    };
  }

  onButtonClick = e => {
    e.preventDefault();
    this.setState({
      isButtonVisible: !this.state.isButtonVisible
    });
  };

  render() {
    const { isButtonVisible } = this.state;
    return (
      <div>
        <section className="slider d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <div className="slider-title_box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="slider-content_wrap">
                        <h1>Discover The Best Activities </h1>
                        <div className="description">
                          <h5>
                            Amusing meetups, parties, opportunities every day
                            wherever you are
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: isButtonVisible ? '' : 'none' }}>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-10">
                        <form className="form-wrap mt-4">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="submit"
                              className="btn-form"
                              onClick={this.onButtonClick}
                            >
                              <span className="icon-magnifier search-icon" />
                              SEARCH
                              <i className="pe-7s-angle-right" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: !isButtonVisible ? '' : 'none' }}>
                    <SearchBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { concertSearchBar } = state.showingReducers;
  return {
    concertSearchBar
  };
};

export default MainSearch;

/*
 <input style={{ borderColor:this.state.posColor2, borderWidth:1,}}
id="autocomplete2" className="form-control" value={this.state.locality} onChange={this.handleChange} />
*/
