const firebaseConfig = {
    apiKey: "AIzaSyCtmUI2aE9DX3Qf-kQFsAyyJVYlRzXV4DQ",
    authDomain: "smart-irrigation-5787c.firebaseapp.com",
    databaseURL: "https://smart-irrigation-5787c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smart-irrigation-5787c",
    storageBucket: "smart-irrigation-5787c.appspot.com",
    messagingSenderId: "970203233021",
    appId: "1:970203233021:web:9c5aa4daf4ae752f015c94"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  function getCurrentTimestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  database.ref('temperature').once('value', function(snapshot) {
    var temperatureList = document.getElementById("temperatureList");
    snapshot.forEach(function(childSnapshot) {
      var temperatureData = childSnapshot.val();
      var li = document.createElement("li");
      li.textContent =  temperatureData.value 
      temperatureList.appendChild(li);
    });
  });

  database.ref('humidity').once('value', function(snapshot) {
    var humidityList = document.getElementById("humidityList");
    snapshot.forEach(function(childSnapshot) {
      var humidityData = childSnapshot.val();
      var li = document.createElement("li");
      li.textContent =   + humidityData.value ;
      humidityList.appendChild(li);
    });
  });