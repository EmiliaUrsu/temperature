let temperature_input = document.getElementById("temperature-input")
let termometer_indicator = document.getElementById("termometer-indicator")
let temp_select = document.getElementById("temp-select")
let termometer_digits = document.getElementById("termometer-digits").children
let value_temperature_width = parseInt(termometer_indicator.style.width)

function changeTemp() {
  for (let i=0; i<termometer_digits.length; i++) 
  {
    temp_select.value == "F°" ? termometer_digits[i].innerText = -4 + (i*18) :termometer_digits[i].innerText = -20 + (i*10)
  }
  updateTermometer() }

function updateTermometer() {
  if (temperature_input.value >= -20 && temperature_input.value <= 50 && temp_select.value == "C°") {
    termometer_indicator.style.width = value_temperature_width + temperature_input.value * 3 + "px"
  } else if (temperature_input.value >= -4 && temperature_input.value <= 122 && temp_select.value == "F°") {
    termometer_indicator.style.width = value_temperature_width + ((temperature_input.value - 32) * 5/10) * 3 + "px"
  } 
  else {
    termometer_indicator.style.width = value_temperature_width + "px" }
}


temperature_input.onkeyup = updateTermometer
temp_select.onchange = changeTemp