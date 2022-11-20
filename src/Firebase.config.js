import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/auth'

//var firebase = require('firebase')
//npm install firebase-admin --save
const firebaseConfig = {
  apiKey: "AIzaSyAzgqHJeTDL05SKflyJ9FGfjXyhFZeNqi4",
  authDomain: "phone-auth-88fd7.firebaseapp.com",
  projectId: "phone-auth-88fd7",
  storageBucket: "phone-auth-88fd7.appspot.com",
  messagingSenderId: "1097310488791",
  appId: "1:1097310488791:web:eae41b089418956f924892"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 export default firebase