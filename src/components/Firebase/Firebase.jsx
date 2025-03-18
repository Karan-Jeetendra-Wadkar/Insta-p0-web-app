import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOAV1BPefh3brTNhVq70h9HgXrNMCJqGM",
  authDomain: "instap0.firebaseapp.com",
  projectId: "instap0",
  storageBucket: "instap0.firebasestorage.app",
  messagingSenderId: "951387274830",
  appId: "1:951387274830:web:9b0acac913265abe874d1f",
  measurementId: "G-X1YQRMLE2M"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const postRef = collection(db, "Posts");
export const commentRef = collection(db, "Comments");
export const usersRef = collection(db, "Users");

export default app;



