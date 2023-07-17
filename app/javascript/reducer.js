import { FETCH_GREETING_SUCCESS } from './actions';

const initialState = {
  greeting: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.greeting,
      };
    default:
      return state;
  }
}
