import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAG-alDwCdqegazUe9bOVtLXR1JzR-ylE8",
  authDomain: "petshopito-mobile.firebaseapp.com",
  databaseURL: "https://petshopito-mobile-default-rtdb.firebaseio.com",
  projectId: "petshopito-mobile",
  storageBucket: "petshopito-mobile.appspot.com",
  messagingSenderId: "689539792591",
  appId: "1:689539792591:web:dcf1935a21c694826901ba",
  /* measurementId: "G-3KN2RJ09R3" */
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;