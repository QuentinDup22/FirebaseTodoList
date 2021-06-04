import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPUGWg6gEUXiI6O6R6tQeyOFPTlyrD75E",
    authDomain: "reacttododb-quentin.firebaseapp.com",
    databaseURL: "https://reacttododb-quentin-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reacttododb-quentin",
    storageBucket: "reacttododb-quentin.appspot.com",
    messagingSenderId: "513807636274",
    appId: "1:513807636274:web:52efb95259213c4d2c292b",
    measurementId: "G-0631Y9PYZQ"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  export default firebase;