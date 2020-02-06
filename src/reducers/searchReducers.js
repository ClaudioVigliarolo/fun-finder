import { GET_SEARCH_RESULTS, SET_SEARCH_STATE } from '../actions/types';

const INITIAL_STATE = {
  searchResults: [],
  time: '',
  searchState: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      state.searchResults = [];
      return {
        ...state,
        searchResults: action.payload.res,
        time: action.payload.time
      };

    case SET_SEARCH_STATE:
      return {
        ...state,
        searchState: action.payload
      };

    default:
      return state;
  }
};
