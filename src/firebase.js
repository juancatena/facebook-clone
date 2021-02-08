import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt-eOTGWk5ZHeeFty6coOo95mWFMraO60",
  authDomain: "facebook-clone-ok.firebaseapp.com",
  projectId: "facebook-clone-ok",
  storageBucket: "facebook-clone-ok.appspot.com",
  messagingSenderId: "518180211599",
  appId: "1:518180211599:web:68056d6b17a4b3202659fa",
  measurementId: "G-GFY4KWRBN1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
