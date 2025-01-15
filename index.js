const airplaneMenuDivElement = document.getElementById('airplane-menu')
const flightIdElement = document.getElementById('flight-id')
const flightAirlineElement = document.getElementById('flight-airline')
const flightImageElement = document.getElementById('flight-image')
const newFlightFormElement = document.getElementById('new-flight-form')
const newAirlineInputElement = document.getElementById('new-airline')
const newImageInputElement = document.getElementById('new-image')

let flightsArrayCopy = []

function addAirplaneImageToMenu(flight){
    const imgElement = document.createElement('img')
    imgElement.src = flight.image
    imgElement.className = "menu-image"
    airplaneMenuDivElement.appendChild(imgElement)

    // Display flight details in response to mouseover event
    imgElement.addEventListener('mouseover', () => {
        displayFlightDetails(flight)
    })

    // Remove flight image in response to click event
    imgElement.addEventListener('click', () => {
        imgElement.remove()
    })
}

function displayFlightDetails(flight){
    flightIdElement.textContent = `Flight # ${flight.id}`
    flightAirlineElement.textContent = `Airline: ${flight.airline}`
    flightImageElement.src = flight.image
    flightImageElement.alt = flight.airline
}

fetch('http://localhost:3000/flights')
.then(response => response.json())
.then(flights => {
    flights.forEach(addAirplaneImageToMenu)

    displayFlightDetails(flights[0])

    flightsArrayCopy = flights
})

newFlightFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const newId = flightsArrayCopy.length > 0 ? flightsArrayCopy[flightsArrayCopy.length - 1].id + 1 : 1

    const newFlight = {
        id: newId,
        airline: newAirlineInputElement.value,
        image: newImageInputElement.value
    }

    addAirplaneImageToMenu(newFlight)

    newFlightFormElement.reset()
})