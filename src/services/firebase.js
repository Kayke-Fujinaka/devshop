import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCPuZ9emUtIKmMCvrkSJLw-GZIl0a8qmEs",
  authDomain: "devshop-8a22c.firebaseapp.com",
  projectId: "devshop-8a22c",
  storageBucket: "devshop-8a22c.appspot.com",
  messagingSenderId: "659905779370",
  appId: "1:659905779370:web:16c3ac97ef41b8c3a7a2d3",
  measurementId: "G-BL1CNQ2BB6"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;