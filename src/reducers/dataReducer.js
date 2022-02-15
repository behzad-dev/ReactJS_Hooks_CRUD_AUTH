import {
  FETCH_ALL,
  CREATE_DATA,
  DELETE_DATA,
  FETCH_DATA,
  UPDATE_DATA,
} from "../actions/types";
import _ from "lodash";
const initialState = {
  AllDataReducer: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ALL:
      // return { ...state, ..._.mapKeys(action.payload, "id") };
      return { ...state, AllDataReducer: _.mapKeys(action.payload, "id") };
    case CREATE_DATA: {
      return { ...state };
    }
    case DELETE_DATA: {
      return { AllDataReducer: _.omit(state.AllDataReducer, action.payload) };
    }
    case FETCH_DATA: {
      return { ...state, CurrentSelectedData: action.payload };
    }

    default:
      return state;
  }
};
