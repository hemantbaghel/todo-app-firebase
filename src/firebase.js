// import * as firebase from "firebase/app"
// import  "firebase/firestore";


// const firebaseApp=firebase.initializeApp({
//     apiKey: "AIzaSyDZnuxzSN2kipcdgQDJuyaZGiJpu4vo_-Y",
//     authDomain: "new-todo-app-4e450.firebaseapp.com",
//     projectId: "new-todo-app-4e450",
//     storageBucket: "new-todo-app-4e450.appspot.com",
//     messagingSenderId: "578014808685",
//     appId: "1:578014808685:web:3a9ecf1975994419878d64",
//     measurementId: "G-WR119BWQVG"
// })


// const db = firebaseApp.firestore();
// export {db};

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app'

// import "firebase/firestore"
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDZnuxzSN2kipcdgQDJuyaZGiJpu4vo_-Y",
  authDomain: "new-todo-app-4e450.firebaseapp.com",
  projectId: "new-todo-app-4e450",
  storageBucket: "new-todo-app-4e450.appspot.com",
  messagingSenderId: "578014808685",
  appId: "1:578014808685:web:3a9ecf1975994419878d64",
  measurementId: "G-WR119BWQVG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("firebase",db)

export {db};