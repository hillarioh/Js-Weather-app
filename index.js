const myForm = document.querySelector('form');
const cityInput = document.getElementById('city');
const submitInput = document.getElementById('submit');
const myContainer = document.querySelector('.containe');
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
    console.log("enetred values");
    myContainer.classList.add('active');
    submitInput.classList.add('hidden');
    submitCity(cityInput.value);
    myForm.reset();
    // setTimeout(() => { }, 500);
});

const makeRequest = (city)=>{
    return new Promise((resolve,reject)=>{

        // url (required), options (optional)
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e', {
            method: 'get'
        }).then(function (response) {            
            resolve(response.json());
        }).catch(function (err) {
            reject(err.json());
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
        wDate.textContent = Date.now();
        wSunrise.textContent = cityResponse.sys.sunrise;
        wSunset.textContent = cityResponse.sys.sunset;
        wSpeed.textContent = cityResponse.wind.speed;
        wPressure.textContent = cityResponse.main.pressure;
        wDeg.textContent = cityResponse.wind.deg;
        wHumidity.textContent = cityResponse.main.humidity;
    } catch (error) {
        wMain.textContent = error.error;                     
    }
}