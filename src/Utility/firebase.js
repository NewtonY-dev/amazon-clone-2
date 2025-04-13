import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;
const APP_ID = process.env.REACT_APP_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
