const apiKey = "5d066958a60d315387d9492393935c19";
const cityName = document.querySelector(".city-name");
const weatherDescription = document.querySelector(".weather-description");
const temperature = document.querySelector(".temperature");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const windDirection = document.querySelector(".wind-direction");
const weatherIcon = document.querySelector(".weather-icon");
const cityInput = document.querySelector("#city-input");
const submitButton = document.querySelector("#submit-button");

async function getWeatherData(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
  );
  const data = await response.json();
  cityName.innerHTML = data.name;
  weatherDescription.innerHTML = data.weather[0].description;
  temperature.innerHTML = `Temperature: ${data.main.temp}°C`;
  pressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
  windDirection.innerHTML = `Wind Direction: ${data.wind.deg}°`;
  weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

submitButton.addEventListener("click", () => {
  getWeatherData(cityInput.value);
});

cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeatherData(cityInput.value);
  }
});

weatherIcon.src = "http://openweathermap.org/img/w/10d.png";
