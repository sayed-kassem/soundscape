import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyC-auU6L0iDL9vZjhUmWy0U01ZUGGUIKcU",
    authDomain: "spotify-clone-fcf6d.firebaseapp.com",
    projectId: "spotify-clone-fcf6d",
    storageBucket: "spotify-clone-fcf6d.appspot.com",
    messagingSenderId: "428429019804",
    appId: "1:428429019804:web:ef90ed462337d3b8543b59",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };