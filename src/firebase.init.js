import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCxu7Xash99_MJx4YmuIqGm-g14BFTVZY4",
  authDomain: "moto-inventory-auth-db574.firebaseapp.com",
  projectId: "moto-inventory-auth-db574",
  storageBucket: "moto-inventory-auth-db574.appspot.com",
  messagingSenderId: "61312911978",
  appId: "1:61312911978:web:83327c2fa78f25e1b3d813"
};

const app = initializeApp(firebaseConfig);

export default app;