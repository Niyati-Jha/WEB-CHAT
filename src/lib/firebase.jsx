
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDj1liEngNhh2nlzEAp2EQAdojEfcPQRY",
  authDomain: "social-media-app-d3ce8.firebaseapp.com",
  projectId: "social-media-app-d3ce8",
  storageBucket: "social-media-app-d3ce8.appspot.com",
  messagingSenderId: "10268207173",
  appId: "1:10268207173:web:0497c8e9443d639c575b2c"
};


export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);