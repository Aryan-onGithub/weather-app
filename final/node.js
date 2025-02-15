function storeInput() {
   const apiKey = "cad7559e22b909c6eaa6574aaed98657";
   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
   
   let loc = document.querySelector(".loc");
   let temp = document.querySelector(".tempC");
   let humid = document.querySelector(".humid");
   let wind = document.querySelector(".wind");
   let weatherC = document.querySelector(".weatherC");
   let datee = document.querySelector(".date"); // Ensure you have an element with this class
   
   var inputValue = document.getElementById("myInput").value;
   // console.log(inputValue);
   let place = inputValue;
   
   async function checkWeather() {
       const response = await fetch(apiUrl + apiKey + "&q=" + place);
       var data = await response.json();
      //  console.log(data);
       
       if (data.cod === "404") {
           document.querySelector(".errormessage").style.display = "block"
           return;
       }
       
       loc.innerHTML = data.name + ", ";
       temp.innerHTML = Math.floor(data.main.temp) + "°C";
       humid.innerHTML = data.main.humidity + "%";
       wind.innerHTML = Math.floor(data.wind.speed) + "m/s";
       weatherC.innerHTML = data.weather[0].main;
       datee.innerHTML = (new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
       document.querySelector(".content").style.display = "block"
       document.querySelector(".phone").style.height = "95vh"
    }
   checkWeather();
}
