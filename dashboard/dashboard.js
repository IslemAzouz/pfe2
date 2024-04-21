const firebaseConfig = {
  apiKey: "AIzaSyBiTff7VOEP-O9pT-Gf0CNOuMm9krgUxRg",
  authDomain: "smart-irrigation-73976.firebaseapp.com",
  databaseURL: "https://smart-irrigation-73976-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-irrigation-73976",
  storageBucket: "smart-irrigation-73976.appspot.com",
  messagingSenderId: "650361068150",
  appId: "1:650361068150:web:9579ca9bf06ccb5425dd57"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref('temperature').once('value', function(snapshot) {
  var temperatureList = document.getElementById("temperatureList");
  console.log("Temperature snapshot:", snapshot.val());
  var temperatureHTML = "";
  snapshot.forEach(function(childSnapshot) {
    console.log("Temperature childSnapshot:", childSnapshot.val());
    var temperatureData = childSnapshot.val();
    temperatureHTML += "<li>" + temperatureData.value + "</li>";
  });
  temperatureList.innerHTML = temperatureHTML;
});

database.ref('humidity').once('value', function(snapshot) {
  var humidityList = document.getElementById("humidityList");
  console.log("Humidity snapshot:", snapshot.val());
  var humidityHTML = "";
  snapshot.forEach(function(childSnapshot) {
    console.log("Humidity childSnapshot:", childSnapshot.val());
    var humidityData = childSnapshot.val();
    humidityHTML += "<li>" + humidityData.value + "</li>";
  });
  humidityList.innerHTML = humidityHTML;
});