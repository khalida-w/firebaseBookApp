import { getAuth, signInAnonymously, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function signIn() {
    try {
        await signInAnonymously(auth);
    } catch (error) {
        console.error(error.message);
    }
}

export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error.message);
    }
}

export function setAuthListeners(onLogin, onLogout) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            onLogin(user);
        } else {
            onLogout();
        }
    });
}