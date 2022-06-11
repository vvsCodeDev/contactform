// import firebase from 'firebase/app';
// import {initializeApp} from "firebase/app";
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/firestore';
// import 'firebase/storage';
// // Initialize Firebase (ADD YOUR OWN DATA)
// const firebaseConfig = {
//   apiKey: "AIzaSyDVbesjq99szaO8vC8cIVLs0mMXfp_uuj0",
//   authDomain: "contactform-14d9f.firebaseapp.com",
//   projectId: "contactform-14d9f",
//   databaseURL: "https://contactform-14d9f-default-rtdb.firebaseio.com/",
//   storageBucket: "contactform-14d9f.appspot.com",
//   messagingSenderId: "662214746019",
//   appId: "1:662214746019:web:08a54bc7e279f7f2df0416",
//   measurementId: "G-RGLRDHYM44"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // firebase.default.initializeApp(firebaseConfig);
// // firebase.analytics();


// //Reference contactInfo collections
// let contactInfo = firebase.database().ref("info");

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();
//   console.log("email form submitted");

//   // Get values
//   let name = getInputVal('name');
//   let company = getInputVal('company');
//   let email = getInputVal('email');
//   let phone = getInputVal('phone');
//   let message = getInputVal('message');

//   // Save message
//   saveMessage(name, company, email, phone, message);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company:company,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }



// Initialize Firebase
var config = {
  apiKey: "AIzaSyDVbesjq99szaO8vC8cIVLs0mMXfp_uuj0",
  authDomain: "contactform-14d9f.firebaseapp.com",
  projectId: "contactform-14d9f",
  databaseURL: "https://contactform-14d9f-default-rtdb.firebaseio.com/",
  storageBucket: "contactform-14d9f.appspot.com",
  messagingSenderId: "662214746019",
  appId: "1:662214746019:web:08a54bc7e279f7f2df0416",
  measurementId: "G-RGLRDHYM44"
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
