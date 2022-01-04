import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMphCFPZGfNrcxi9nRoZdp_HqsP-oCdkw",
  authDomain: "udemy-vue-firebase-sights.firebaseapp.com",
  projectId: "udemy-vue-firebase-sights",
  storageBucket: "udemy-vue-firebase-sights.appspot.com",
  messagingSenderId: "479970108095",
  appId: "1:479970108095:web:b0a4ae708d8e1283891c0a"
};

// init firebase
const firebaseApp = initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = getFirestore()

export { projectFirestore }