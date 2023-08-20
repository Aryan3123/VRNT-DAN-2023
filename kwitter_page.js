//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDlk_SUaeMxvFXl7yr1DN8gFA_GuLtLKgY",
    authDomain: "class-test-8f80b.firebaseapp.com",
    databaseURL: "https://class-test-8f80b-default-rtdb.firebaseio.com",
    projectId: "class-test-8f80b",
    storageBucket: "class-test-8f80b.appspot.com",
    messagingSenderId: "257272272930",
    appId: "1:257272272930:web:6db02911e87ab33ba7d27b",
    measurementId: "G-8F58J4YB66"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
