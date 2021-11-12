var input = document.querySelector("#input")
var textDisplay = document.querySelector("#info")
var submit = document.querySelector("#submit")



submit.addEventListener('click' , e => {
    e.preventDefault()
    textDisplay.textContent = (input.value * 9 / 5 ) + 32
})