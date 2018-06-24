import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCOZ3zL_UenQl_YORiVvEt9LlKJUrkiKeQ",
    authDomain: "expensify-18f47.firebaseapp.com",
    databaseURL: "https://expensify-18f47.firebaseio.com",
    projectId: "expensify-18f47",
    storageBucket: "expensify-18f47.appspot.com",
    messagingSenderId: "890404609184"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };