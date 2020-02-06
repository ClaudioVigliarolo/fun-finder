import axios from 'axios';
import { API_KEY, API_PROXY } from '../config/config';

const PAGE_SIZE_SIMPLE = 60;
const PAGE_SIZE_SPECIFIC = 20;

export const findByPosCategTime = async (date, category, location) => {
  return axios
    .get(
      `${API_PROXY}http://api.eventful.com/json/events/search?app_key=${API_KEY}&keywords=books${
        location ? `&location=${location}` : ''
      }${category ? `&category=${category}` : ''} ${
        date ? `&date=${date}` : ''
      }&sort_order=popularity&page_size=${PAGE_SIZE_SIMPLE}`
    )
    .then(res => {
      console.log(res.data.events);
      return res.data.events;
    })
    .catch(err => {
      console.log(err);
      return 'error';
    });
};

export const findByPosKeywordTime = async (location, keywords, start_time) => {
  console.log(location, keywords, start_time);
  return axios
    .get(
      `${API_PROXY}http://api.eventful.com/json/events/search?app_key=${API_KEY}${
        keywords ? `&keywords=${keywords}` : ''
      }${location ? `&location=${location}` : ''}${
        start_time ? `&start_time=${start_time}` : ''
      }&sort_order=popularity&page_size=${PAGE_SIZE_SPECIFIC}`
    )
    .then(res => {
      console.log(res.data);
      return res.data.events;
    })
    .catch(err => {
      console.log(err);
      return 'error';
    });
};
