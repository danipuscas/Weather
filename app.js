
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "c72ed32cd9f7cbfc37bd68463a341b7d";

const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");

const weathericon = document.querySelector(".weather-icon");

async function CumEVremea(city) {
    const response = await fetch(`${apiUrl + city}&appid=${apiKey}`);

    if(response.status == 404)
    {
        return alert("City not found!").style.display = "block";
    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    

    
    if(data.weather[0].main == "Clouds") 
    {
        weathericon.src="images/clouds.png";
    } else if(data.weather[0].main == "Clear") 
    {
        weathericon.src="images/sunny_day.png";
    } else if(data.weather[0].main == "Rain") 
    {
        weathericon.src="images/rainy_day.png";
    } else if(data.weather[0].main == "Snow") 
    {
        weathericon.src="images/drizzle.gif";
    } else if(data.weather[0].main == "Drizzle")
     {        
        weathericon.src="images/drizzle.gif";
    }else if(data.weather[0].main == "Mist")
    {
        weathericon.src="images/mist.png";

    document.querySelector(".weather").computedStyleMap.display = "block";
}
}
searchButton.addEventListener("click", () =>{ 
    CumEVremea(searchBox.value);
});
