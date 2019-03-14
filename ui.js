class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.weather = document.getElementById('w-string');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.temp = document.getElementById('w-temp');


    this.icon = document.getElementById('w-icon');
  }

  paint(weather) {
    this.location.textContent = `City Name: ${weather.name}`;
    this.weather.textContent = `Weather Today: ${weather.weather[0].main}`;
    this.desc.textContent = `Weather Desciption: ${weather.weather[0].description}`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
    this.temp.textContent = `Temperature ${weather.main.temp}`;


    this.icon.setAttribute('src', weather.weather[0].icon);
  }
}