// Api key from the OpenWeather
// adfdc58f56519fc429bfb6ef26da357d
const apiKey = "adfdc58f56519fc429bfb6ef26da357d";

function getWeather(){
    // Storing placeholder value in city and removing whitespaces
    const city = document.getElementById("cityInput").value.trim().toLowerCase();

    if(city === ""){
        alert("Please enter a city name");
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    
    // We are going to fetch URL and generate a response 
    fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error("City not found")
            }
            return response.json();
        })
        .then((data) => {
            const weatherInfo = `
            <h2>🌎Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels like: ${data.main.feels_like}°C</p>
            <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            `
            document.getElementById("weatherResult").innerHTML = weatherInfo;
        }).catch((error) => {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;"> ${error.message}</p>`;
        })
        // console.log(weatherInfo)
}