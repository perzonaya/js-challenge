const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "827703dcca30827ef81476daef6268d0";
const CITY_KEY = "city";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetchWeather(url);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

function fetchWeather(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      localStorage.setItem(CITY_KEY, data.name);//도시정보를 스토리지에 저장한다
      weather.innerText = `${data.weather[0].main} /  ${Math.round(data.main.temp)}℃`;//temp를 반올림해서 정수로 보여주기
    });
}

const savedCity = localStorage.getItem(CITY_KEY);

//새로고침 할때마다 도시정보를 물어보지 말고 처음 위치정보를 받으면 storage에 저장한 후 다음  위치정보를 새로 받기 전까지 저장된 city정보를 이용해서 날씨정보를 가져온다
if (savedCity === null ) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {
  city.innerText = savedCity;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&appid=${API_KEY}&units=metric`;
  fetchWeather(url);
}