// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHjoCFFgTA1wooyoWpDHXdg5cJs09841I",
    authDomain: "taasa-eb664.firebaseapp.com",
    databaseURL: "https://taasa-eb664-default-rtdb.firebaseio.com",
    projectId: "taasa-eb664",
    storageBucket: "taasa-eb664.appspot.com",
    messagingSenderId: "719848235915",
    appId: "1:719848235915:web:503ecada429e2d7e95858e",
    measurementId: "G-VLTN81SMQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;