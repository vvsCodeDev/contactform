import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firefbaseConfig = {
    apiKey: "AIzaSyBRt0y72nHzAmpQeK0EAZjW7zNBGPHq1ow",
    authDomain: "newcontactform-ece4b.firebaseapp.com",
    databaseURL: "https://newcontactform-ece4b-default-rtdb.firebaseio.com/",
    projectId: "newcontactform-ece4b",
    storageBucket: "newcontactform-ece4b.appspot.com",
    messagingSenderId: "644098995528",
    appId: "1:644098995528:web:a789fd271ca536caa66f7d",
    measurementId: "G-B9JP0M3RXQ"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firefbaseConfig);
  // Initialize Firebase
  firebase.initializeApp(firefbaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  //const db = getFirestore(app);
  const db = firebase.firestore();

  
//   try {
//     const docRef = await addDoc(collection(db, "messages"), {
//       name: name,
//       company: company,
//       email: email,
//       phone: phone,
//       message: message
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

db.collection("messages").add({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');
  
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
  