// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBRt0y72nHzAmpQeK0EAZjW7zNBGPHq1ow",
//   authDomain: "newcontactform-ece4b.firebaseapp.com",
//   databaseURL: "https://newcontactform-ece4b-default-rtdb.firebaseio.com",
//   projectId: "newcontactform-ece4b",
//   storageBucket: "newcontactform-ece4b.appspot.com",
//   messagingSenderId: "644098995528",
//   appId: "1:644098995528:web:a789fd271ca536caa66f7d",
//   measurementId: "G-B9JP0M3RXQ"
// };

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBRt0y72nHzAmpQeK0EAZjW7zNBGPHq1ow",
  authDomain: "newcontactform-ece4b.firebaseapp.com",
  databaseURL: "https://newcontactform-ece4b-default-rtdb.firebaseio.com",
  projectId: "newcontactform-ece4b",
  storageBucket: "newcontactform-ece4b.appspot.com",
  messagingSenderId: "644098995528",
  appId: "1:644098995528:web:a789fd271ca536caa66f7d",
  measurementId: "G-B9JP0M3RXQ"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
