import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCE5HaZAQ99vRImV4TiHp42TvtDNpiEXxc",
    authDomain: "senior-citizen-a870d.firebaseapp.com",
    projectId: "senior-citizen-a870d",
    storageBucket: "senior-citizen-a870d.appspot.com",
    messagingSenderId: "598024038661",
    appId: "1:598024038661:web:8176e8ce400ab37bf96f6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()