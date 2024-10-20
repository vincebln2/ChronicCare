//firebase config now in firebase_config.js

document.getElementById('form')
    .addEventListener('submit', submitForm);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function displayUserInfo() {
    // Retrieve user information from cookies
    const userId = getCookie('userId');
    const userName = getCookie('userName');
    const userEmail = getCookie('userEmail');
    const userInfoDiv = document.getElementById('userInfo'); // Element to display user info

    if (userId) {
        userInfoDiv.innerHTML = `Logged in as: <strong>${userName}</strong> (${userEmail})`;
    } else {
        userInfoDiv.innerHTML = "Not logged in.";
    }
}

function submitForm(e) {
    e.preventDefault();

    // get inputs from survey
    let user = firebase.auth().currentUser;
    let fatigue = getRadioVal('fatigue');
    let appetite = getRadioVal('appetite');
    let comment = getInputVal('comment');

    if (user) {
        // Save message with user ID
        saveMessage(user.uid, name, email, fatigue, appetite, comment);
        form.reset(); // clear form on website after pressing submit
    } else {
        alert("User not authenticated. Please log in.");
    }
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
    return null; // return null if no radio button is selected
}

window.onload = () => {
    displayUserInfo(); // Display the current user's information
};