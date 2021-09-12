var firebaseConfig = {
    apiKey: "AIzaSyAByzZwFnAPW86OnFdvw1ITguwHtCOcE_8",
    authDomain: "kwitter-67055.firebaseapp.com",
    databaseURL: "https://kwitter-67055-default-rtdb.firebaseio.com",
    projectId: "kwitter-67055",
    storageBucket: "kwitter-67055.appspot.com",
    messagingSenderId: "205764952974",
    appId: "1:205764952974:web:689a1bcc8cfba768415adf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() 
  {
      miss_seema_is_the_best_aka_user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(miss_seema_is_the_best_aka_user_name).update({ 
          miss_seema_is_the_best : "adding user" });
      
  }