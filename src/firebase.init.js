import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDbNRDeVTTIDUecC6svvi9HXTUeIu2SQ8g",
  authDomain: "inventory-email-pass-auth.firebaseapp.com",
  projectId: "inventory-email-pass-auth",
  storageBucket: "inventory-email-pass-auth.appspot.com",
  messagingSenderId: "55948039861",
  appId: "1:55948039861:web:ba7248ad024703035990fc"
};

const app = initializeApp(firebaseConfig);

export default app;