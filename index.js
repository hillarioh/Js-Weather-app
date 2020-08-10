const myForm = document.querySelector('form');
const cityInput = document.getElementById('city');
const submitInput = document.getElementById('submit');
const myContainer = document.querySelector('.container');
const weatherCurrent = document.getElementById('current-weather');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("enetred values");
    myContainer.classList.add('active');
    submitInput.classList.add('hidden');
    setTimeout(() => { weatherCurrent.classList.remove('hidden') }, 500);

})