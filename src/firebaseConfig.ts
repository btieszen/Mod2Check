// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyARB4HAWBHUEPdqKuk1TOkA7lf-Rge_RKA",
    authDomain: "check-73e23.firebaseapp.com",
    projectId: "check-73e23",
    storageBucket: "check-73e23.firebasestorage.app",
    messagingSenderId: "870548114320",
    appId: "1:870548114320:web:19fe5a35ae04a6cca18115",
    measurementId: "G-FV33G0M68R"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);


export { db };