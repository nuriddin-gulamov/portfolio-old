import { createStore } from "redux";

const initialState = {
  mobileNavOpened: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MOBILE_NAV":
      return {
        ...state,
        mobileNavOpened: !state.mobileNavOpened,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
