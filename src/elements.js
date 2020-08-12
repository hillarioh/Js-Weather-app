const myForm = document.querySelector('form');
const cityInput = document.getElementById('city');
const submitInput = document.getElementById('submit');
const myContainer = document.querySelector('.containe');
const requestStatus = document.getElementById('status');
const weatherCurrent = document.getElementById('current-weather');
const wMain = document.getElementById('w-main');
const cityName = document.getElementById('city-name');
const wTemp = document.getElementById('w-temp');
const wDate = document.getElementById('w-date');
const wSunrise = document.getElementById('w-sunrise');
const wSunset = document.getElementById('w-sunset');
const wSpeed = document.getElementById('w-speed');
const wPressure = document.getElementById('w-pressure');
const wDeg = document.getElementById('w-deg');
const wHumidity = document.getElementById('w-humidity');
const celsius = document.getElementById('C');
const farenheit = document.getElementById('F');

export {
  myForm, cityInput, submitInput, myContainer, requestStatus, weatherCurrent,
  wMain, cityName, wTemp, wDate, wSunrise, wSunset,
  wSpeed, wPressure, wDeg, wHumidity, celsius, farenheit,
};