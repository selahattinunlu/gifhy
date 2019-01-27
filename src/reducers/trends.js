import * as types from '../actions/types';

const initialState = {
  data: []
};

const trends = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRENDS:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default trends;
