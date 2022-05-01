// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDi3Sn1jbFgiDG5KWJeiYmJPkNgy0P6Pps',
  authDomain: 'netflix-clone-971ce.firebaseapp.com',
  projectId: 'netflix-clone-971ce',
  storageBucket: 'netflix-clone-971ce.appspot.com',
  messagingSenderId: '623679127593',
  appId: '1:623679127593:web:f94599315d225eb7e4dc38',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
