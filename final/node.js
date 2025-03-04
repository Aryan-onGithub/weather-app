require('dotenv').config()

function takeInput(){
    var inputValue = document.getElementById("myInput").value;
    // console.log(inputValue);
    let place = inputValue;
    result(place)
}

function result(loaction) {
    let place = loaction;
   const apiKey = process.env.apiKey;
   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
   
   
   
   async function checkWeather() {
       const response = await fetch(apiUrl + apiKey + "&q=" + place);
       var data = await response.json();
       //  console.log(data);
       
       if (data.cod === "404") {
           document.querySelector(".errormessage").style.display = "block"
           return;
        }
        
        let loc = document.querySelector(".loc");
        let temp = document.querySelector(".tempC");
        let humid = document.querySelector(".humid");
        let wind = document.querySelector(".wind");
        let weatherC = document.querySelector(".weatherC");
        let datee = document.querySelector(".date"); // Ensure you have an element with this class
        
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


function setAlarm() {
    document.querySelector('.alarm').style.display ='none'
    document.querySelector(".notify").style.backgroundColor = "Yellow"
    document.getElementById('alarmSound').play();
    setTimeout(() => {
        alert("alarm set");
    }, 100);
    let place = (document.getElementById('place').value);
    console.log(place);
    
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);


    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);

    const checkAlarm = setInterval(() => {
        const currentTime = new Date();
        console.log(currentTime);

        if (currentTime.getHours() === alarmTime.getHours() && currentTime.getMinutes() === alarmTime.getMinutes() && currentTime.getSeconds() === alarmTime.getSeconds()) {
            clearInterval(checkAlarm);
            setTimeout(() => {
                result(place)
                document.getElementById('alarmSound').play();
                setTimeout(() => alert("Time's up!"), 100);
            }, 100);
        }

    }, 1000);
}


// takeInput
// checkInput
// showOutput
