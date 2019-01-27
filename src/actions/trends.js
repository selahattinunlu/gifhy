import * as types from './types';
import http from '../lib/http';

export const getTrends = () => {
  return async (dispatch) => {
    try {
      const response = await http.get('trending');
      const data = response.data.data;
      dispatch({
        type: types.SET_TRENDS,
        payload: data
      });
    } catch (error) {
      return Promise.reject(error.response);
    }
  }
};
