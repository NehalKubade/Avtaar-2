const firebaseConfig = {
  apiKey: "AIzaSyAX58ZCrGbaDo8axyRQ89Sqw2oTK7cqRe0",
  authDomain: "avtaar-login.firebaseapp.com",
  projectId: "avtaar-login",
  storageBucket: "avtaar-login.appspot.com",
  messagingSenderId: "992097476109",
  appId: "1:992097476109:web:c6e3b4cf8732d83916ff44",
  measurementId: "G-Y6C86JXVXM",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const database = firebase.database();

//set up our register function

function register() {
    var name = document.getElementById("name");
    var phoneNumber = document.getElementById("phoneNumber");
    var dob = document.getElementById("dob");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    
   
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {

          full_name: name.value,
          phoneNumber: phoneNumber.value,
          dob:dob.value,
          email: email.value,
      };

      name.value="";
      phoneNumber.value="";
      dob.value="";
      email.value="";
      password.value="";

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);


      // DOne
      alert("Registration Successful!");



    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}






function login() {

  email = document.getElementById("email");
  password = document.getElementById("password");

  
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      alert("User Logged In!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

