const airplaneMenuDivElement = document.getElementById('airplane-menu')

function addAirplaneImageToMenu(flight){
    const imgElement = document.createElement('img')
    imgElement.src = flight.image
    airplaneMenuDivElement.appendChild(imgElement)
}

function displayFlightDetails(flight){
    const flightIdElement = document.getElementById('flight-id')
    flightIdElement.textContent = `Flight # ${flight.id}`
    const flightAirlineElement = document.getElementById('flight-airline')
    flightAirlineElement.textContent = `Airline: ${flight.airline}`
    const flightImageElement = document.getElementById('flight-image')
    flightImageElement.src = flight.image
    flightImageElement.alt = flight.airline
}

fetch('http://localhost:3000/flights')
.then(response => response.json())
.then(flights => {
    flights.forEach(addAirplaneImageToMenu)

    displayFlightDetails(flights[0])
})