import { combineReducers } from 'redux';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
