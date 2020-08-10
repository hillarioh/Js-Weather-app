const myForm = document.querySelector('form');
const cityInput = document.getElementById('city');
const submitInput = document.getElementById('submit');
const myContainer = document.querySelector('.containe');
const weatherCurrent = document.getElementById('current-weather');
const wMain = document.getElementById('w-main');
const cityName = document.getElementById('city-name');
const wTemp =document.getElementById('w-temp');
const wDate =document.getElementById('w-date');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("enetred values");
    myContainer.classList.add('active');
    submitInput.classList.add('hidden');
    setTimeout(() => { 
        weatherCurrent.classList.remove('hidden');
        submitCity(cityInput.value);
     }, 500);
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
        wMain.textContent = cityResponse.weather[0].main;
        cityName.textContent = cityResponse.name;
        wTemp.textContent = cityResponse.main.temp;
        wDate.textContent = Date.now();     
    } catch (error) {
        wMain.textContent = error.error;                     
    }
}