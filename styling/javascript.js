
let today = new Date();
let h2=document.querySelector("#todays-date");

let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[today.getDay()];
let hours = today.getHours();
let minutes = today.getMinutes();

h2.innerHTML = `${day} ${hours}:${minutes}`;



function showTemperature(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#todays-weather").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(event) {
  event.preventDefault();
  let apiKey = "9bcab27e2586a82d6ff0a45c0b3f6c89";
let city = document.querySelector("#entered-city").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);
}

let form =document.querySelector("#search-form");
form.addEventListener("submit", search);
