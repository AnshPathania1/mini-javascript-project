// 

//
const input = document.querySelector("input");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const desciption = document.querySelector(".desciption");
const btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
    let place = input.value;
    getweather(place);
})
function getweather(e){
    console.log(e);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${`place`}&appid=${`b55e84c75ae3c797c3de89099f3f4ad7`}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)

        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon"/>`

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity},${weatherCountry}`;


    } ) 

   

}