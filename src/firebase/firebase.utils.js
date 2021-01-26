 
// base import for firebase
import firebase from 'firebase/app'
// import firestore database
import 'firebase/firestore'
// import firebase authentication
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAEoH1iJ9qqkyGlO8f1u6vBS8WqrTcCw9g",
  authDomain: "apparel-db-dfb71.firebaseapp.com",
  projectId: "apparel-db-dfb71",
  storageBucket: "apparel-db-dfb71.appspot.com",
  messagingSenderId: "118858542036",
  appId: "1:118858542036:web:0c82234c6ad43155bd0441",
  measurementId: "G-1P4GTLRX0M"
};
// initialize app with the config object
firebase.initializeApp(config)

// export auth to use anything related to authentication
export const auth = firebase.auth()
//export firestore database
export const firestore = firebase.firestore()

// provides access to google provider class
const provider = new firebase.auth.GoogleAuthProvider();

// custom params for provider
// whenever we use googleauthprovider we set a custom parameter
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase