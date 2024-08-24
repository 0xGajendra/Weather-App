const APIKey="085ed2208f59606d21e35257846dca10";
const APIURL="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
const Error=document.querySelector("h3")
const valid=document.querySelector(".weather")
async function checkWeather(city) {
    const response=await fetch(APIURL + `&appid=${APIKey}` + `&q=${city}`);
    var data = await response.json();
    if(data.cod=='404'){
        Error.innerHTML="Error City Not Found Please enter a valid city name"
    }
    else{
        valid.style.display="block"
        Error.innerHTML=" "
        console.log(data);
        document.querySelector(".city").innerHTML=data.name ;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "℃";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";
        if(data.weather[0].main="Clouds"){
            weatherIcon.src="/images/clouds.png";    } 
        else
        if(data.weather[0].main="Clear"){
            weatherIcon.src="images/clear.png";    } 
        else
        if(data.weather[0].main="Drizzle"){
            weatherIcon.src="images/drizzle.png";    } 
        else
        if(data.weather[0].main="Rain"){
                weatherIcon.src="images/rain.png";    } 
        else
         if(data.weather[0].main="Snow"){
                    weatherIcon.src="images/snow.png";    } 
        else
        if(data.weather[0].main="Mist"){
                        weatherIcon.src="images/mist.png";    } 
        console.log(data);
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})