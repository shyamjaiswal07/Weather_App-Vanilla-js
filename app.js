// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};



const searchInputBox = document.getElementById("input-box");
const form = document.querySelector("form")
// Event Listener Function on keypress
form.addEventListener("submit" , (e)=>{
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
e.preventDefault();
searchInputBox.value = "";
})

// Get Weather Report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
        console.log(weather)
      return weather.json();
    })
    .then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather) {
  console.log(weather);
 if(weather.cod == "404"){
    // let mydata = alert("This is not valid city");
    // console.log(mydata);
    document.querySelector('.weather-body').innerHTML = `<img src="https://c.tenor.com/8QDC45i6yz4AAAAj/its-not-acceptable-chrissy-metz.gif"/>`
   
 }else{
let todayDate = new Date();
// console.log(todayDate);
document.querySelector('.weather-body').innerHTML =
` <div class="location-details">
<div class="city" id="city">${weather.name}, ${weather.sys.country}</div>
<div class="date" id="date">${dateManage(todayDate)}</div>
</div>

<div class="weather-status">
<div class="temp" id="temp">${Math.round(weather.main.temp)}&deg;C</div>
<div class="min-max" id="min-max">${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)</div>
<div class="weather" id="weather">${weather.weather[0].main}</div>
<div id="img"></div>
</div>
`

let weatherType = `${weather.weather[0].main}`;
// console.log(weatherType);
  if (weatherType == "Clear") {
    document.body.style.backgroundImage = "url('images/clear.jpg')";
  } else if (weatherType == "Clouds") {
    document.body.style.backgroundImage = "url('images/cloud.jpg')";
  } else if (weatherType == "Haze") {
    document.body.style.backgroundImage = "url('images/haze.jpg')";
  } else if (weatherType == "Rain") {
    document.body.style.backgroundImage = "url('images/rain.jpg')";
  } else if (weatherType == "Snow") {
    document.body.style.backgroundImage = "url('images/snow.jpg')";
  } else if (weatherType == "Thunderstorm") {
    document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
  }
}

// Date manage
function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}
}
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });