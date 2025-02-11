const apiKey = "cad7559e22b909c6eaa6574aaed98657"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid="

let loc = document.querySelector(".loc")
let temp = document.querySelector(".tempC")
let humid = document.querySelector(".humid")
let wind = document.querySelector(".wind")
let weatherC = document.querySelector(".weatherC")
let datee = document.querySelector(".date")
let place = "jaipur"

let abc = function storeValue() {
   // Get the input element
   let inputElement = document.querySelector('.myInput');
      
   // Store the value in a variable
   let storedValue = inputElement.value;
   
   return storedValue
}

console.log(abc)

//problem: able to wirte place in input field and get the data on card













async function checkWeather() {
   const response = await fetch(apiUrl + apiKey + "&q=" + place)
   var data = await response.json();
   console.log(data);

   loc.innerHTML = data.name
   temp.innerHTML = Math.floor(data.main.temp) + "°C"
   humid.innerHTML = data.main.
   humidity + "%"

   wind.innerHTML = Math.floor(data.wind.speed) + "m/s"
   
   weatherC.innerHTML = data.weather[0].main
   datee.innerHTML = (new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })); // Output: "Sun, Feb 09"

}

checkWeather();
