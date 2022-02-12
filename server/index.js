import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js'; 

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAu8vDc2i2AClvjQQwC17-Bltq1fkIgklU",
  authDomain: "sdp-sasm.firebaseapp.com",
  projectId: "sdp-sasm",
  storageBucket: "sdp-sasm.appspot.com",
  messagingSenderId: "76930051118",
  appId: "1:76930051118:web:fd7017d6cf07729139c3bf",
  measurementId: "G-VNG0L9XCDB"
});
const auth = getAuth(firebaseApp);
console.log(auth);

onAuthStateChanged(auth, user => {
  if(user != null ) {
      console.log('logged in!');
  } else {
      console.log('No user');
  }
});
