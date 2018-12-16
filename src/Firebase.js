import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAke3YnGIt1uDtOAf5csla47h9AwsNWl1c",
    authDomain: "match-challenge.firebaseapp.com",
    databaseURL: "https://match-challenge.firebaseio.com",
    projectId: "match-challenge",
    storageBucket: "match-challenge.appspot.com",
    messagingSenderId: "658280507686"
  };
  firebase.initializeApp(config);


export default firebase;