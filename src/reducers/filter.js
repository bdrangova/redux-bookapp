import { CHANGE_FILTER } from '../actions';

const initialState = 'All';

function filterReducer(state = initialState, action) {
  const { filter, type } = action;

  switch (type) {
    case CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
}

export { filterReducer };
