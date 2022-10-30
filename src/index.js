import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/redux/rootReducer";
import { initializeApp } from "firebase/app";
import thunk from "redux-thunk";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { reduxFirestore, getFireStore } from "redux-firestore";
import { createFirestoreInstance } from "redux-firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq8_6eu9I8APA8P8tGqQmc6EMzjuHlrG0",
  authDomain: "resumebuilder-a9a49.firebaseapp.com",
  projectId: "resumebuilder-a9a49",
  storageBucket: "resumebuilder-a9a49.appspot.com",
  messagingSenderId: "652328341283",
  appId: "1:652328341283:web:af5deca76808bf83aa4696",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const reduxStore = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirebase , getFireStore}),reduxFirestore(firebase))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
