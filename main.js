
//book button
const myButton = document.getElementById("submitBtn");

myButton.addEventListener("click", function() {
    alert("Book Successfully");
});

//Booking
const firebaseConfig = {
    apiKey: "AIzaSyCg7HCAYK402-8LWoNUhqlAk128_Y6288w",
    authDomain: "contact-64ade.firebaseapp.com",
    databaseURL: "https://contact-64ade-default-rtdb.firebaseio.com",
    projectId: "contact-64ade",
    storageBucket: "contact-64ade.appspot.com",
    messagingSenderId: "1080680942008",
    appId: "1:1080680942008:web:fbf66b6a19ba7f9066e74d",
    measurementId: "G-JZY235KGK4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  //  Listen for form submit //
  //  Listen for form submit //
  var form = document.getElementById('Booking-form');
  var submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    var data = {
      From: document.getElementById('from').value,
      To: document.getElementById('to').value,
      Fullname: document.getElementById('Fname').value,
      Email: document.getElementById('email2').value,
      ContactNumber: document.getElementById('contact-number').value,
      Address: document.getElementById('Add').value,
      Arrival: document.getElementById('arrivals').value,
      Leaving: document.getElementById('leaving').value,
      ClassType: document.getElementById('class-type').value,
      NumberOfPassengers: document.getElementById('num-passengers').value,
      // add other fields here
    };

    db.collection('Booking').add(data)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        form.reset();
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  });