function logout()
    {
      window.location="index.html";
      localStorage.clear("Username", user_name);
    }
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDABvjR2qT6jieanPqzKNY_Op19AG_PQLM",
  authDomain: "kwitter3-1a85a.firebaseapp.com",
  projectId: "kwitter3-1a85a",
  storageBucket: "kwitter3-1a85a.appspot.com",
  messagingSenderId: "138117494788",
  appId: "1:138117494788:web:8837b3cf2fdabb331c5d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
             purpose: "Adding Room Name"
           });
          localStorage.setItem("Roomname",room_name);
          window.location = "last.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}
    //End code
