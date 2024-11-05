// Import the necessary Firebase modules
let firebaseConfig = {//config would go here

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
