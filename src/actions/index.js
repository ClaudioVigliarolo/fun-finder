import { GET_SEARCH_RESULTS, SET_SEARCH_STATE } from './types';

export const getSearchResults = (res, time) => {
  return {
    type: GET_SEARCH_RESULTS,
    payload: { res, time }
  };
};

export const setSearchState = searchState => {
  return {
    type: SET_SEARCH_STATE,
    payload: searchState
  };
};
