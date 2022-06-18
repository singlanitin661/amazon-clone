// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyC_ae5XEu5X8y1DEYxcZk_bGZ-4mo2QxqY",
    // authDomain: "challenge-f924e.firebaseapp.com",
    // projectId: "challenge-f924e",
    // storageBucket: "challenge-f924e.appspot.com",
    // messagingSenderId: "215232819159",
    // appId: "1:215232819159:web:a910317d3f7800d141a592",
    // measurementId: "G-11CZFK2C6W"
    apiKey: "AIzaSyBkcO8BUENprkXH0dDjGDTGXYHPyRrx-3s",
    authDomain: "e-clone-1f150.firebaseapp.com",
    projectId: "e-clone-1f150",
    storageBucket: "e-clone-1f150.appspot.com",
    messagingSenderId: "947715043568",
    appId: "1:947715043568:web:402a7306c81be00af65235",
    measurementId: "G-0W72Q3VKD9"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export{db, auth};
