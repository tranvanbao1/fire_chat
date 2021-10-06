import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjw4Xdf1ZqrBPGrpZa8WyTLB2wj6qu_ak",
    authDomain: "fire-chat-87744.firebaseapp.com",
    projectId: "fire-chat-87744",
    storageBucket: "fire-chat-87744.appspot.com",
    messagingSenderId: "633304413948",
    appId: "1:633304413948:web:9605921b2de9da15344979",
    measurementId: "G-RGFZB5Y4XG"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }