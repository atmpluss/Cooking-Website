import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzv6SdAub6mGSTsCTbMdvlhJ33v78xYc",
  authDomain: "cooking-project-portfolio.firebaseapp.com",
  projectId: "cooking-project-portfolio",
  storageBucket: "cooking-project-portfolio.appspot.com",
  messagingSenderId: "485257382458",
  appId: "1:485257382458:web:1dbbf0b1ba5e65c4b04303"
};

// Initialize Firebase
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }