// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBskw_jCQotPChfUj3YcDgVmEITbhet4Zg",
  authDomain: "flickr-9e03d.firebaseapp.com",
  projectId: "flickr-9e03d",
  storageBucket: "flickr-9e03d.firebasestorage.app",
  messagingSenderId: "791480733757",
  appId: "1:791480733757:web:d8e851bf0168c66a355a54",
  measurementId: "G-5S3X85EJCL"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default appFirebase;