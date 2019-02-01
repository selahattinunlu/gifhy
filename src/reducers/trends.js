import * as types from '../actions/types';

const initialState = {
  data: [],
  offset: 0,
  loading: true,
};

const trends = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRENDS:
      return {...state, data: action.payload.data, offset: action.payload.offset, loading: false};
    case types.PUSH_TRENDS:
      const data = Object.assign([], state.data);
      data.push(...action.payload.data);
      return {...state, data, offset: action.payload.offset, loading: false};
    case types.SET_TRENDS_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default trends;
