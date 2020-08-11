const myForm = document.querySelector('form');
const cityInput = document.getElementById('city');
const submitInput = document.getElementById('submit');
const myContainer = document.querySelector('.containe');
const request_status = document.getElementById('status');
const weatherCurrent = document.getElementById('current-weather');
const wMain = document.getElementById('w-main');
const cityName = document.getElementById('city-name');
const wTemp =document.getElementById('w-temp');
const wDate =document.getElementById('w-date');
const wSunrise = document.getElementById('w-sunrise');
const wSunset = document.getElementById('w-sunset');
const wSpeed = document.getElementById('w-speed');
const wPressure = document.getElementById('w-pressure');
const wDeg = document.getElementById('w-deg');
const wHumidity = document.getElementById('w-humidity');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cityInput.value) {
         alert("Enter city name");
         return;
    }
    myContainer.classList.add('active');
    submitCity(cityInput.value);
    myForm.reset();
});

const makeRequest = (city)=>{
    return new Promise((resolve,reject)=>{

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e', {
            method: 'get'
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                resolve(response.json());
            } else {
                console.log(response);
                reject(new Error(response.statusText));
            }        
            
        }).catch(function (err) {  
            request_status.classList.remove("hidden");
            request_status.innerHTML = `<p>Request failed, ${err}</p>`;
        });   
    });
}

async function submitCity(city) {

    try {
        const cityResponse = await makeRequest(city);
        weatherCurrent.classList.remove('hidden');
        wMain.textContent = cityResponse.weather[0].main;
        cityName.textContent = cityResponse.name;
        wTemp.textContent = cityResponse.main.temp;
        wDate.textContent = dayOfWeek();
        wSunrise.textContent = convertTime(cityResponse.sys.sunrise)
        wSunset.textContent = convertTime(cityResponse.sys.sunset);
        wSpeed.textContent = cityResponse.wind.speed;
        wPressure.textContent = cityResponse.main.pressure;
        wDeg.textContent = cityResponse.wind.deg;
        wHumidity.textContent = cityResponse.main.humidity;
    } catch (error) {
        request_status.classList.remove("hidden");
        request_status.innerHTML = `<p>${error}`;
    }
}

function dayOfWeek(){
    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[d.getDay()];
}

function convertTime(utcTime){
    return new Date(utcTime* 1000).toLocaleString();
}