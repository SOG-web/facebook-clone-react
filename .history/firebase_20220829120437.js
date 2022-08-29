// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCliJAh0pk6lGBBOmiblgbm_2XlMeJhlY8',
  authDomain: 'facebook-clone-react-c8a3f.firebaseapp.com',
  projectId: 'facebook-clone-react-c8a3f',
  storageBucket: 'facebook-clone-react-c8a3f.appspot.com',
  messagingSenderId: '364663995490',
  appId: '1:364663995490:web:95bf78941ca9d5cd07e53b',
  measurementId: 'G-HP4XR8NQH9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
