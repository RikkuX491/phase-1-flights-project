fetch('http://localhost:3000/flights')
.then(response => response.json())
.then(flights => {
    console.log(flights)
})