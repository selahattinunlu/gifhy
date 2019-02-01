import * as types from './types';
import http from '../lib/http';
import queryString from 'querystring';

export const getTrends = (offset = 0) => {
  return async (dispatch) => {
    console.log('worked get trends action', offset);
    const queryParameters = {
      offset,
    };

    const query = queryString.stringify(queryParameters);

    dispatch({
      type: types.SET_TRENDS_LOADING,
      payload: true
    });

    try {
      const response = await http.get(`trending?${query}`);
      const data = response.data.data;

      const type = (offset === 0)
        ? types.SET_TRENDS
        : types.PUSH_TRENDS;

      dispatch({
        type,
        payload: {
          data,
          offset,
          loading: false
        }
      });
    } catch (error) {
      return Promise.reject(error.response);
    }
  }
};
