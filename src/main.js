// import "bootstrap/dist/css/bootstrap.ltr.min.css"
import "bootstrap";
import axios from "axios";
import {} from "./themeConfig";
import "../style.css"


async function getWeather() {
    const respose = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true")
    console.log(respose)
    const windspeed = respose.data.current_weather.windspeed
    const winddirection = respose.data.current_weather.winddirection
    const temperature = respose.data.current_weather.temperature
    const weathercode = respose.data.current_weather.weathercode
    const day = respose.data.current_weather.is_day
    const time = respose.data.current_weather.time
    console.log(day, temperature, time, weathercode, winddirection, windspeed)
    displayDay(day)
    displayTemp(temperature)
    displayWheater(weathercode)
    displaywinddirection(winddirection)
    displaywindspeed(windspeed)
}

function displaywindspeed(windspeed) {
    document.querySelector("#windspeed").innerText = `current wind direction is ${windspeed}`
}

function displaywinddirection(winddirection) {
    document.querySelector("#winddirection").innerText = `current wind direction is ${winddirection}`
}

function displayWheater(weathercode) {
    const wheaterImg = document.getElementById("wheaterImg")
    switch (weathercode) {
        case 0:
            wheaterImg.src = './assets/sun.png'
            break;
        case 1:
        case 2:
            wheaterImg.src = './assets/cloudy.png'
            break;
        case 3:
            wheaterImg.src = './assets/cloud.png'
            break;
        case 61:
            wheaterImg.src = './assets/rainy.png'
            break;
        case 71:
            wheaterImg.src = './assets/snowflake.png'
            break;
        default:
            break;
    }
}

function displayDay(day) {
    switch (day) {
        case 1: 
            return document.querySelector("#day").innerHTML = "Saturday"
        case 2:
            return document.querySelector("#day").innerHTML = "Sunday"
        case 3: 
            return document.querySelector("#day").innerHTML = "Monday"
        case 4:
            return document.querySelector("#day").innerHTML = "Teusday"
        case 5: 
            return document.querySelector("#day").innerHTML = "Wednesday"
        case 6:
            return document.querySelector("#day").innerHTML = "Thursday"
        case 7: 
            return document.querySelector("#day").innerHTML = "Friday"
        default:
            break;
    }
}

function displayTemp(temperature) {
    document.querySelector("#temp").innerText = `${temperature}°`
}


getWeather()