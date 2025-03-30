
      function getWeather() {
        let location = document.getElementById("location").value;
        let apiKey = "55a3082bf5cb47909de50609253003";
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            let temp = data.current.temp_c;
            document.getElementById(
              "result"
            ).innerText = `Temperature: ${temp}°C`;
          })
          .catch((error) => {
            document.getElementById("result").innerText =
              "Invalid location or API error";
          });
      }
