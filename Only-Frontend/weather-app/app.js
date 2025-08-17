// Api key from the OpenWeather

const apiKey = "";

function getWeather() {
	// Storing placeholder value in city and removing whitespaces
	const city = document.getElementById("cityInput").value.trim().toLowerCase();

	if (city === "") {
		alert("Please enter a city name");
		return;
	}

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	// A simple one that only gets loaction's Data
	// We are going to fetch URL and generate a response
	// fetch(url)
	//     .then((response) => {
	//         if(!response.ok){
	//             throw new Error("City not found")
	//         }
	//         return response.json();
	//     })
	//     .then((data) => {
	//         const weatherInfo = `
	//         <h2>🌎Weather in ${data.name}, ${data.sys.country}</h2>
	//         <p>Temperature: ${data.main.temp}°C</p>
	//         <p>Feels like: ${data.main.feels_like}°C</p>
	//         <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
	//         <p>Humidity: ${data.main.humidity}%</p>
	//         `
	//         document.getElementById("weatherResult").innerHTML = weatherInfo;
	//     }).catch((error) => {
	//         document.getElementById("weatherResult").innerHTML = `<p style="color:red;"> ${error.message}</p>`;
	//     })
	// console.log(weatherInfo)

	// We are going to fetch URL and generate a response
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("City not found");
			}
			return response.json();
		})
		.then((data) => {
			// Format date
			const now = new Date();
			const dayNames = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];
			// Get the day from the array of day
			const day = dayNames[now.getDay()];
			const date = now.toLocaleDateString("en-GB", {
				day: "numeric",
				month: "short",
				year: "numeric",
			});
			document.getElementById("day").textContent = day;
			document.getElementById("date").textContent = date;
			document.getElementById(
				"location"
			).textContent = `📍${data.name}, ${data.sys.country}`;
			document.getElementById("temp").textContent = `${data.main.temp}°C`;
			document.getElementById("condition").textContent = data.weather[0].main;
			document.getElementById(
				"humidity"
			).textContent = `${data.main.humidity}%`;
			document.getElementById("wind").textContent = `${data.wind.speed}km/hr`;
document.getElementById("precip").textContent = data.rain ? `${data.rain["1h"] || 0}%` : "0%";
			document.getElementById(
				"icon"
			).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
			document.getElementById("icon").alt = data.weather[0].description;
			document.getElementById("weatherResult").innerHTML = `
                <p><strong>${data.weather[0].main}</strong></p>
                <p>${Math.round(data.main.temp)}°C</p>
      `         ;
		})
		.catch((error) => {
			document.getElementById(
				"weatherResult"
			).innerHTML = `<p style="color:red;"> ${error.message}</p>`;
		});
}
