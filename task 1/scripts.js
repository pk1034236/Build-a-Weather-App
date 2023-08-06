function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
  
    document.getElementById('cityName').innerText = cityName;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('description').innerText = `Description: ${description}`;
  }
  