import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUxrezherxTZVErZ_NO8YkeMFc8-rDVl8",
  authDomain: "ngsadv-720c1.firebaseapp.com",
  projectId: "ngsadv-720c1",
  storageBucket: "ngsadv-720c1.appspot.com",
  messagingSenderId: "518207929813",
  appId: "1:518207929813:web:4b471fe0e4b114acf5915c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
