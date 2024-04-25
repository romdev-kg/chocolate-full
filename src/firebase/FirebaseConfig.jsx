// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
          apiKey: "AIzaSyCJGQqGE82y_-I6oyMGh8WPnNs9GQltSOE",
          authDomain: "chocolate-market-a1400.firebaseapp.com",
          projectId: "chocolate-market-a1400",
          storageBucket: "chocolate-market-a1400.appspot.com",
          messagingSenderId: "842949866910",
          appId: "1:842949866910:web:0e5879e5ed938a4e89128f",
          measurementId: "G-9FEV13928F"
        };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }