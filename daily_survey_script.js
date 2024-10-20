//firebase config now in firebase_config.js

document.getElementById('form')
    .addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let fatigue = getRadioVal('fatigue');
    let appetite = getRadioVal('appetite');
    let comment = getInputVal('comment');

    saveMessage(name, email, fatigue, appetite, comment);
    form.reset(); // clear form on website after pressing submit
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