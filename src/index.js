import * as Element from './elements';
import '../style.css';

let measure = 'F';
let temperature = 0.0;

const makeRequest = (city) => new Promise((resolve, reject) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e`, {
    method: 'get',
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      resolve(response.json());
    } else {
      reject(new Error(response.statusText));
    }
  }).catch((err) => {
    Element.requestStatus.classList.remove('hidden');
    Element.requestStatus.innerHTML = `<p>Request failed, ${err}</p>`;
  });
});

function tempMeasure() {
  if (measure === 'F') {
    Element.farenheit.style.backgroundColor = '#559999';
    Element.celsius.style.backgroundColor = '#375d5d';
  } else {
    Element.farenheit.style.backgroundColor = '#375d5d';
    Element.celsius.style.backgroundColor = '#559999';
  }
}

function dayOfWeek() {
  const d = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[d.getDay()];
}

function convertTime(utcTime) {
  return new Date(utcTime * 1000).toLocaleString();
}

function convertTemp() {
  return `${Math.round((5 / 9) * (temperature - 32)) / 10} °C`;
}

function populateView(cityResponse) {
  Element.wMain.textContent = cityResponse.weather[0].main;
  Element.cityName.textContent = cityResponse.name;
  temperature = ((cityResponse.main.temp - 273.15) * 1.8) + 32; 
  Element.wTemp.textContent = `${temperature}°F`;
  Element.wDate.textContent = dayOfWeek();
  Element.wSunrise.textContent = convertTime(cityResponse.sys.sunrise);
  Element.wSunset.textContent = convertTime(cityResponse.sys.sunset);
  Element.wSpeed.textContent = cityResponse.wind.speed;
  Element.wPressure.textContent = cityResponse.main.pressure;
  Element.wDeg.textContent = cityResponse.wind.deg;
  Element.wHumidity.textContent = cityResponse.main.humidity;
}

async function submitCity(city) {
  try {
    const cityResponse = await makeRequest(city);
    Element.weatherCurrent.classList.remove('hidden');
    tempMeasure();
    populateView(cityResponse);
  } catch (error) {
    Element.requestStatus.classList.remove('hidden');
    Element.requestStatus.innerHTML = `<p>${error}`;
  }
}

Element.myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!Element.cityInput.value) {
    // eslint-disable-next-line no-alert
    alert('Enter city name');
    return;
  }
  Element.myContainer.classList.add('active');
  submitCity(Element.cityInput.value);
  Element.myForm.reset();
});

Element.farenheit.addEventListener('click', () => {
  measure = 'F';
  tempMeasure();
  Element.wTemp.textContent = `${temperature}°F`;
});

Element.celsius.addEventListener('click', () => {
  measure = 'C';
  tempMeasure();
  Element.wTemp.textContent = convertTemp();
});
