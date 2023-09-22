import { firebaseAuth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const signUp = (email: string, password: string) => createUserWithEmailAndPassword(firebaseAuth, email, password);
const signIn = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password);
