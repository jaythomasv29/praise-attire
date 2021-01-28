 
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

// async action to store data into firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return  //
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  // if the user data does not exist in snapShop
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;  // get object.data destructued
    const createdAt = new Date() // create new JS date object

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message)
    }
  }

  return userRef;
    
}
// initialize app with the config object
firebase.initializeApp(config)

// export auth to use anything related to authentication
export const auth = firebase.auth()
//export firestore database
export const firestore = firebase.firestore()

// getting data from firebase
firestore.collection('users').doc('id').collection('cartItems')
// provides access to google provider class
const provider = new firebase.auth.GoogleAuthProvider();

// custom params for provider
// whenever we use googleauthprovider we set a custom parameter
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase