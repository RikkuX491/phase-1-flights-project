const airplaneMenuDivElement = document.getElementById('airplane-menu')

function addAirplaneImageToMenu(flight){
    const imgElement = document.createElement('img')
    imgElement.src = flight.image
    airplaneMenuDivElement.appendChild(imgElement)
}

fetch('http://localhost:3000/flights')
.then(response => response.json())
.then(flights => {
    flights.forEach(addAirplaneImageToMenu)
})