import firebase from './Firebase';

let db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export default db;