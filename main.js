// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDeCSSaaqBzGY7fADL8ndGAVzeJFmxAK6k",
  authDomain: "vvscodeweb-c0453.firebaseapp.com",
  projectId: "vvscodeweb-c0453",
  storageBucket: "vvscodeweb-c0453.appspot.com",
  messagingSenderId: "1041652245769",
  appId: "1:1041652245769:web:9de367b7e3a9f968b55fd8",
  measurementId: "G-ZHN3DBQS3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Reference contactInfo collections
let contactInfo = firebase.database().ref("info");

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  console.log("email form submitted");

  // Get values
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

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}