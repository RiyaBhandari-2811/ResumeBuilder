import * as documentActions from "../actions/actions";
import initalState from "./initialState.json";

const documentReducer = (state = initalState.document, action) => {
  switch (action.type) {
    case documentActions.SET_SKIN:
      return {
        ...state,
        id: action.payload.id,
        skinCode: action.payload.skinCode,
      };

    case documentActions.UPDATE_SKIN:
      return {
        ...state,
        skinCode: action.payload.skinCode,
      };

    default:
      return state;
  }
};

export default documentReducer;
