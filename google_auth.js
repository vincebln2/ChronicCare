import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAbMZqwYT6jLlK9gHcqq9IHpuN5R8JrSIA",
    authDomain: "chroniccare-bb97e.firebaseapp.com",
    projectId: "chroniccare-bb97e",
    databaseURL: "https://chroniccare-bb97e-default-rtdb.firebaseio.com/",
    storageBucket: "chroniccare-bb97e.appspot.com",
    messagingSenderId: "936032624692",
    appId: "1:936032624692:web:7aabe39990bdf428ab6a61",
    measurementId: "G-0TEBG69FJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Elements
const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const message = document.getElementById("message");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

// Hide sign out button and message initially
signOutButton.style.display = "none";
message.style.display = "none";

// User sign-in
const userSignIn = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Get the user's UID
        const userId = user.uid;

        // Set cookies for user information
        document.cookie = `userId=${userId}; path=/;`;
        document.cookie = `userName=${user.displayName}; path=/;`;
        document.cookie = `userEmail=${user.email}; path=/;`;

        // Display user information
        userName.innerHTML = user.displayName;
        userEmail.innerHTML = user.email;
    } catch (error) {
        console.error("Sign-in error:", error.code, error.message);
        alert("Sign-in failed: " + error.message);
    }
};


// User sign-out
const userSignOut = async (event) => {
    event.preventDefault();  // Prevent form submission
    try {
        await signOut(auth);
        // Clear cookies by setting their expiry date in the past
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        alert("You have signed out successfully!");
    } catch (error) {
        console.error("Sign-out error:", error);
    }
};

// Check authentication state and update UI
onAuthStateChanged(auth, (user) => {
    if (user) {
        signOutButton.style.display = "block";
        message.style.display = "block";
        userName.innerHTML = user.displayName;
        userEmail.innerHTML = user.email;
    } else {
        signOutButton.style.display = "none";
        message.style.display = "none";
    }
});

// Ensure event listeners are set after DOM is fully loaded
window.onload = () => {
    signInButton.addEventListener('click', userSignIn);
    signOutButton.addEventListener('click', userSignOut);
};