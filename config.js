import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDYftAp6NDj1eBamr2F8k_kXdlPn6nFgQs",
    authDomain: "team-voting-app-5d7f9.firebaseapp.com",
    databaseURL: "https://team-voting-app-5d7f9-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-5d7f9",
    storageBucket: "team-voting-app-5d7f9.appspot.com",
    messagingSenderId: "877454528000",
    appId: "1:877454528000:web:91858848d8af501e2352e5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();