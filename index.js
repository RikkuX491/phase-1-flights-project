const airplaneMenuDivElement = document.getElementById('airplane-menu')

function addAirplaneImageToMenu(flight){
    const imgElement = document.createElement('img')
    imgElement.src = flight.image
    airplaneMenuDivElement.appendChild(imgElement)
}

function displayFlightDetails(flight){
    const flightIdElement = document.getElementById('flight-id')
    flightIdElement.textContent = `Flight # ${flight.id}`
}

fetch('http://localhost:3000/flights')
.then(response => response.json())
.then(flights => {
    flights.forEach(addAirplaneImageToMenu)

    displayFlightDetails(flights[0])
})