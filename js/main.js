const API_KEY = "dc26b057b53313ea3a9934262ca91a3a";

const searchTemperature = () => {
    const city = document.getElementById("input-city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))   
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = weather => {
    const outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = `
    <img id="weather-icon" src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
    <h1 id="output-city-name">${weather.name}</h1>
    <h3><span id="city-tempareture">${weather.main.temp}</span><span id="temp-unit">&deg;C</span></h3>
    <h1 class="lead" id="weather-condition">${weather.weather[0].description}</h1>
    ` 
}