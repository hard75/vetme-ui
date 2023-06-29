import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDA59C5DllOhgs_UPPRuvXZ7DciJWBLnXw",
    authDomain: "vetme-b911f.firebaseapp.com",
    projectId: "vetme-b911f",
    storageBucket: "vetme-b911f.appspot.com",
    messagingSenderId: "219611658830",
    appId: "1:219611658830:web:c817e186700830c613a11f",
    client_id: '181706391015-f7tq07jdjrq350hjeko1pja0odomooec.apps.googleusercontent.com',
    scopes: [
        "email",
        "profile",
        "https://www.googleapis.com/auth/calendar"
    ],
    discoveryDocs: [
        "https://calendar-json.googleapis.com/$discovery/rest?version=v3",
        "https://chat.googleapis.com/$discovery/rest?version=v1"
    ]
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };