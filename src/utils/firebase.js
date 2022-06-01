import { initializeApp } from 'firebase/app';
// import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {firebase} from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCIxmg3f_YGl4IUD-tNwJ4ZqQfVxyh2-zk",
    authDomain: "clone-a796b.firebaseapp.com",
    projectId: "clone-a796b",
    storageBucket: "clone-a796b.appspot.com",
    messagingSenderId: "740212066581",
    appId: "1:740212066581:web:727d9a759511e29372411c",
    measurementId: "G-KSZ7RV5HHG"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);


  export {db,firebaseApp};