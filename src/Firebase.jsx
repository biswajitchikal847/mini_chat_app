import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBf29Bx_Vs9NTt029uL19G6vc2IDoqU3Hg",
  authDomain: "chat-app-c6fd1.firebaseapp.com",
  projectId: "chat-app-c6fd1",
  storageBucket: "chat-app-c6fd1.appspot.com",
  messagingSenderId: "537852315922",
  appId: "1:537852315922:web:9a2bbd658468ec136c0bcb",
  measurementId: "G-F0D0P9MW8F"
};

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export {auth, googleProvider}
  export default db;