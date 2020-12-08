import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCe7uuirM4fDiOqW32yZk82sFNN6RB4fJ8",
  authDomain: "travel-2dea9.firebaseapp.com",
  projectId: "travel-2dea9",
  storageBucket: "travel-2dea9.appspot.com",
  messagingSenderId: "227441974296",
  appId: "1:227441974296:web:fc12e9f712a85b353cf76d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //////////////////////////////////
  
  export default {storage, firebase};