document.addEventListener("DOMContentLoaded", function() {
  axios.get('http://localhost:5000/api/temp')
    .then(response => {
      const temperatureTableBody = document.querySelector('#temperatureTable tbody');
      temperatureTableBody.innerHTML = ''; 
      response.data.forEach(item => {
        const row = document.createElement('tr');
        const valueCell = document.createElement('td');
        valueCell.textContent = item.value;
        const dateCell = document.createElement('td');
        const date = new Date(item.createdAt);
        dateCell.textContent = date.toLocaleDateString();
        const timeCell = document.createElement('td');
        timeCell.textContent = date.toLocaleTimeString();
        row.appendChild(valueCell);
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        temperatureTableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching temperature data:', error));

  axios.get('http://localhost:5000/api/hum')
    .then(response => {
      const humidityTableBody = document.querySelector('#humidityTable tbody');
      humidityTableBody.innerHTML = ''; 
      response.data.forEach(item => {
        const row = document.createElement('tr');
        const valueCell = document.createElement('td');
        valueCell.textContent = item.value;
        const dateCell = document.createElement('td');
        const date = new Date(item.createdAt);
        dateCell.textContent = date.toLocaleDateString();
        const timeCell = document.createElement('td');
        timeCell.textContent = date.toLocaleTimeString();
        row.appendChild(valueCell);
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        humidityTableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching humidity data:', error));
});
