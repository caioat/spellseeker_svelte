// Import the functions you need from the SDKs you need
// import { initializeApp, getApps } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnU_A6s0Jd0Q7Jzkp2pIO0YjhKLKvBEzQ",
  authDomain: "mtg-spellseeker.firebaseapp.com",
  projectId: "mtg-spellseeker",
  storageBucket: "mtg-spellseeker.appspot.com",
  messagingSenderId: "285995002434",
  appId: "1:285995002434:web:e2ad71488d98db63329bdb",
  measurementId: "G-5G72TLPVE7"
};

const firebaseUiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

// Initialize Firebase
let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}
// Initialize the FirebaseUI Widget using Firebase.
const firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());
// Initialize analytics
// const firebaseAnalytics = firebase.analytics(firebaseApp);

export { firebaseApp, firebaseUi, firebaseUiConfig };