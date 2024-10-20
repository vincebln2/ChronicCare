// Import the necessary Firebase modules
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
firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database()
    .ref('Collected Data');

const database = firebase.database();
const auth = firebase.auth();


function saveMessage(user, fatigue, appetite, comment) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        user: user,
        fatigue: fatigue,
        appetite: appetite,
        comment: comment

    });
}

window.saveMessage = saveMessage;