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

// Function to parse date and time from the data value
function parseDateTime(dataValue) {
  // Check if dataValue is a string
  if (typeof dataValue !== 'string') {
    // If not a string, return null or handle appropriately
    return null;
  }
  // Split the data value by colon to separate date/time and value
  var parts = dataValue.split(': ');
  // Check if the split was successful
  if (parts.length < 2) {
    // If split failed, return null or handle appropriately
    return null;
  }
  // Extract date/time part and remove any leading/trailing spaces
  var dateTimePart = parts[0].trim();
  // Extract temperature/humidity value part
  var valuePart = parts.slice(1).join(': '); // Join remaining parts in case value contains colons
  // Return an object with date/time and value
  return { dateTime: dateTimePart, value: valuePart };
}

// Function to create table row HTML
function createTableRow(value, date) {
  return "<tr><td>" + value + "</td><td>" + date + "</td></tr>";
}

function updateTable(snapshot, tableElement) {
  var tableHTML = "<tr><th>Value</th><th>Date</th></tr>";
  var dataArray = Object.entries(snapshot.val()).map(entry => ({ key: entry[0], value: entry[1] }));
  var startIndex = Math.max(0, dataArray.length - 20); // Starting index to consider for displaying the last 20 entries
  var dataToShow = dataArray.slice(startIndex); // Get the last 20 entries
  dataToShow.forEach(function(data) {
    var rowData = parseDateTime(data.value);
    if (rowData) {
      tableHTML += createTableRow(rowData.value, rowData.dateTime);
    } else {
      console.error("Invalid data format:", data.value);
    }
  });
  tableElement.innerHTML = tableHTML;
}

database.ref('temperature').once('value', function(snapshot) {
  var temperatureTable = document.getElementById("temperatureTable");
  updateTable(snapshot, temperatureTable);
});

database.ref('humidity').once('value', function(snapshot) {
  var humidityTable = document.getElementById("humidityTable");
  updateTable(snapshot, humidityTable);
});

