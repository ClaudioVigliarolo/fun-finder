import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';
import Spinner from '../Customized Components/Spinner';
import NoResults from './NoResults';
import FadeIn from 'react-fade-in';
import Error from './ErrorResults';
import { withRouter } from 'react-router';
const PAGE_SIZE = 10;

class SearchResultsMain extends Component {
  state = {
    searchResults: this.props.data,
    searchState: 'loading',
    loading: true,
    error: false,
    currentPage: 1,
    totalPages: 1,
    resultsN: -1,
    showedResults: [],
    currentPageResults: []
  };

  //.image.medium.url
  getImage = item => {
    if (item.image) {
      return item.image.medium.url;
    }

    return null;
  };

  goBack = () => this.props.history.goBack();

  getResults = searchResults => {
    const { loading, error, searchState } = this.state;

    if (searchState !== 'loading' && loading) {
      this.setState({ loading: false });
    }

    if (
      (searchState === 'error' && !error) ||
      (!loading && !searchResults && !error)
    ) {
      this.setState({ error: true });
    }

    if (searchResults && Array.isArray(searchResults.event)) {
      return searchResults.event.length > 0 ? (
        this.renderResults(searchResults.event)
      ) : (
        <NoResults goBack={this.goBack} />
      );
    }
  };

  /* paginateResults = res => {
      //first time rendered, filter the results (the api provides lots of duplicate results)
      if (this.state.showedResults.length === 0) {
        const filteredResults = [...new Set(res.map(item => item.title))].map(
          title => {
            return res.find(item => item.title === title);
          }
        );

        this.setState({ showedResults: filteredResults });
      }

      if (this.state.showedResults.length > PAGE_SIZE) {
        this.setState({
          totalPages: Math.round(showedResults.length / PAGE_SIZE)
        });
      } else {
        return showedResults;
      }
    };

    resultsN === -1 && this.setState({ resultsN: filteredResults.length });
    const showedResults = this.paginateResults(filteredResults);

    console.log(res);
    const { resultsN } = this.state;
  };
*/
  renderResults = res => {
    //const showedResults = this.paginateResults(res);
    return res.map(item => (
      <SearchResultItem
        title={item.title}
        town={item.city_name}
        description={item.description}
        address={item.venue_address}
        time={item.start_time}
        key={item.title}
        detailScreen={() => this.props.detailScreen()}
        image={this.getImage(item)}
      />
    ));
  };

  removeDuplicates(value, index, self) {
    return self.indexOf(value) === index;
  }

  getResultsStatistics = (resultsN, loading) => {
    if (!loading) {
      return `${resultsN} results in  ${this.props.time} s`;
    }
  };

  render() {
    const { loading, searchResults, error, resultsN } = this.state;
    return (
      <React.Fragment>
        <section className="results-grid">
          <div className="search-details">
            <h8 style={{ color: '#fff', opacity: 0.6 }}>
              {this.getResultsStatistics(resultsN, loading)}
            </h8>
          </div>
          <div className="search-results">
            <FadeIn>{this.getResults(searchResults)}</FadeIn>
            <div className="bottom-nav">
              <div className="nav-circle">1</div>
            </div>
          </div>

          {loading && <Spinner />}
          {error && <Error goBack={this.goBack} />}
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchResultsMain);
