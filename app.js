const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "99bab161de43d10d8174d9e24b2e76b8";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function CumEVremea(city) {
    const response = await fetch(`${apiUrl + city}&appid=${apiKey}`);

    if (response.status == 404) {
        return alert("Orașul nu a fost găsit!").style.display = "block";
    }

    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weathericon.src = "images/sunny_day.png";
    } else if (data.weather[0].main === "Rain") {
        weathericon.src = "images/rainy_day.png";
    } else if (data.weather[0].main === "Snow") {
        weathericon.src = "images/drizzle.gif";
    } else if (data.weather[0].main === "Drizzle") {
        weathericon.src = "images/drizzle.gif";
    } else if (data.weather[0].main === "Mist") {
        weathericon.src = "images/mist.png";
    }

<<<<<<< HEAD
    document.querySelector(".weather").style.display = "block";

    // Fetch pentru cele 5 zile următoare
    const forecastData = await fetchForecast(city);
    console.log(forecastData);

    // Extragem datele
    let days = [];
    for (let i = 0; i < forecastData.list.length; i++) {
        let date = new Date(forecastData.list[i].dt_txt);
        if (date.getHours() === 12) {
            days.push(forecastData.list[i]);
        }
    }

    // Începem cu ziua de mâine
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    let startIndex = 0;
    for (let i = 0; i < days.length; i++) {
        let date = new Date(days[i].dt_txt);
        if (date.getDate() === tomorrow.getDate()) {
            startIndex = i;
            break;
        }
    }

    for (let i = 0; i < 5; i++) {
        const dayIndex = (startIndex + i) % days.length;
        const dayDate = new Date(days[dayIndex].dt_txt);
        document.getElementById("day" + (i + 1) + "Name").innerHTML = weekday[(dayDate.getDay()) % 7];
        document.getElementById("day" + (i + 1) + "Temp").innerHTML = Math.round(days[dayIndex].main.temp) + "°C";

        const weatherMain = days[dayIndex].weather[0].main;
        const imgElement = document.getElementById("img" + (i + 1));

        if (weatherMain === "Clouds") {
            imgElement.src = "images/clouds.png";
        } else if (weatherMain === "Clear") {
            imgElement.src = "images/sunny_day.png";
        } else if (weatherMain === "Rain") {
            imgElement.src = "images/rainy_day.png";
        } else if (weatherMain === "Snow") {
            imgElement.src = "images/drizzle.gif";
        } else if (weatherMain === "Drizzle") {
            imgElement.src = "images/drizzle.gif";
        } else if (weatherMain === "Mist") {
            imgElement.src = "images/mist.png";
        }
    }
=======
   document.querySelector(".weather").style.display = "block";
>>>>>>> f39f87c7a81a325f3e99ffcd486e21af60cdfd57
}

async function fetchForecast(city) {
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    return forecastResponse.json();
}

function DefaultScreen() {
    document.querySelector(".search input").defaultValue = "Sibiu";
    CumEVremea("Sibiu");
}

var d = new Date();
var weekday = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];

document.addEventListener("DOMContentLoaded", function () {
    DefaultScreen();
});

searchButton.addEventListener("click", () => {
    CumEVremea(searchBox.value);
});
