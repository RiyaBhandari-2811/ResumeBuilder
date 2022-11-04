import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  document: documentReducer,
  contact: contactReducer,
  education: educationReducer,
  firebase: firebaseReducer, // this we are getting from firebase . this is for auth
  firestore: firestoreReducer, // user object dega i.e user info
});

export default rootReducer;
