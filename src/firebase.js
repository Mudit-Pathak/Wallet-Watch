import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfL-Np-qUaDaDvJz0QkHK_lOkgDTi3FIM",
  authDomain: "finance-tracker-d93b5.firebaseapp.com",
  projectId: "finance-tracker-d93b5",
  storageBucket: "finance-tracker-d93b5.appspot.com",
  messagingSenderId: "675669185581",
  appId: "1:675669185581:web:9eb7bbb4b63b01520f54a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
