import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDreNOfZWr7xJh7CagIWwGqotcYC-T9fe0",
    authDomain: "financetracker-e1496.firebaseapp.com",
    projectId: "financetracker-e1496",
    storageBucket: "financetracker-e1496.appspot.com",
    messagingSenderId: "729051258216",
    appId: "1:729051258216:web:7fe40778c21685af290add"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
