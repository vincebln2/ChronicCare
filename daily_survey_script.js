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

document.getElementById('form')
    .addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let fatigue = getRadioVal('fatigue');
    let appetite = getRadioVal('appetite');

    saveMessage(name, email, fatigue, appetite);
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

function getRadioVal(name) {
    let radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null; // Return null if no radio button is selected
}

// Save message to firebase
function saveMessage(name, email, fatigue, appetite) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        fatigue: fatigue,
        appetite: appetite

    });
}