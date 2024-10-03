import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJglb9hhUs8CsnfDdGhLtQuNlPnZwuzjI",
  authDomain: "cw-arena.firebaseapp.com",
  projectId: "cw-arena",
  storageBucket: "cw-arena.appspot.com",
  messagingSenderId: "472275835266",
  appId: "1:472275835266:web:cee77689b1e46e93bf979b",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
