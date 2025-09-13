const cityCoords = {
      "bangalore": { lat: 12.97, lon: 77.59 },
      "delhi": { lat: 28.61, lon: 77.21 },
      "mumbai": { lat: 19.07, lon: 72.87 },
      "london": { lat: 51.51, lon: -0.13 },
      "new york": { lat: 40.71, lon: -74.01 },
      "tokyo": { lat: 35.68, lon: 139.76 }
};

$("#fetchBtn").on("click", function () {
      let city = $("#cityInput").val().trim().toLowerCase();

      if (!cityCoords[city]) {
        $("#weather").html("City not in list!");
        return;
      }
let coords = cityCoords[city];
      let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

      $.getJSON(url)
        .done(function (data) {
          if (data.current_weather) {
            $("#weather").html(`
              <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
              <p>Temperature: ${data.current_weather.temperature}°C</p>
              <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
              <p>Time: ${data.current_weather.time}</p>
            `);
          } else {
            $("#weather").html("No data available.");
          }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.error(errorThrown);
          $("#weather").html("Error fetching weather data.");
        });
    });
 
