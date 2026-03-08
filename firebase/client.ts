import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2bvYt90lXET3wZlw-EFyI3dK0c8ctgwQ",
  authDomain: "prepwise-856b1.firebaseapp.com",
  projectId: "prepwise-856b1",
  storageBucket: "prepwise-856b1.firebasestorage.app",
  messagingSenderId: "644561149316",
  appId: "1:644561149316:web:8cbbce2505d162d1f711d1",
  measurementId: "G-BTW8QJT1LF"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);