var input = document.querySelector("#input")
var textDisplay = document.querySelector("#info")
var submit = document.querySelector("#submit")

submit.addEventListener('click' , e => {
        e.preventDefault()
        if(scale.value == 'F') {
            textDisplay.textContent = "Celcius darajada" + " " + (((input.value - 32) * 5 / 9).toFixed(3)) + "°C"
        } else {
            textDisplay.textContent = "Fahrenheit darajada" + " " + ((input.value * 9 / 5 ) + 32) + "°F"
        }
})
