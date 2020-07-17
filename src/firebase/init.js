import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "",
    authDomain: "fir-01-5bbfd.firebaseapp.com",
    databaseURL: "https://fir-01-5bbfd.firebaseio.com",
    projectId: "fir-01-5bbfd",
    storageBucket: "fir-01-5bbfd.appspot.com",
    messagingSenderId: "829536784476",
    appId: "1:829536784476:web:c8dcc5d14c5903783f5699"
  };
firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampInSnapshots: true });

export default firebase.firestore();

// const db = firebase.firestore();

// // date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// };
// db.settings(settings);

// export default db;