class Weather {
  constructor(city) {
    this.apiKey = '2b2ac3b288243e875e7eccd36cec3244';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {

    //const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},uk&APPID=${this.apiKey}`);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}