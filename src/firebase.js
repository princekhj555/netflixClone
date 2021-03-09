// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA-zjnlIwYxrqLzEaHE8k4NvEzGR4BWBuw",
    authDomain: "netflixclone555.firebaseapp.com",
    projectId: "netflixclone555",
    storageBucket: "netflixclone555.appspot.com",
    messagingSenderId: "166616805147",
    appId: "1:166616805147:web:59b9d0bd00d68ce73a6dbe",
    measurementId: "G-YF0P817F35"
  }; 
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export{auth};
  export default db;
