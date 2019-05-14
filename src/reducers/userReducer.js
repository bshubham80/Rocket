import { ACTION_SET_FIRST_NAME, ACTION_SET_LAST_NAME } from '../actions/userAction';

const initialState = {
  firstName: null,
  lastName: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_FIRST_NAME:
      return {
        ...state,
        firstName: payload.name,
      };
    case ACTION_SET_LAST_NAME:
      return {
        ...state,
        lastName: payload.name,
      };
    default:
      return initialState;
  }
}
