

document.addEventListener("DOMContentLoaded", () => {
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '98865be445mshe405b3afa509cbcp167024jsn3a72a1f69b64',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	const search = document.querySelector("#submit");
	const cityName = document.querySelector("#cityName");
	const temp = document.querySelector("#temp");
	const feels_like = document.querySelector("#feels_like");
	const humidity = document.querySelector("#humidity");
	// const min_temp = document.querySelector("#min_temp");
	const max_temp = document.querySelector("#max_temp");
	const wind_speed = document.querySelector("#wind_speed");
	const wind_degrees = document.querySelector("#wind_degrees");
	const sunrise = document.querySelector("#sunrise");
	const sunset = document.querySelector("#sunset");
	const city = document.querySelector("#city");
	// const Data = document.querySelector("#dta");
  
	const getWeather = (city) => {
	  cityName.innerHTML = city;
	  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then(response => {
		  console.log(response);
		  temp.innerHTML = response.temp;
		  feels_like.innerHTML = response.feels_like;
		  humidity.innerHTML = response.humidity;
		//   min_temp.innerHTML = response.min_temp;
		  max_temp.innerHTML = response.max_temp;
		  wind_speed.innerHTML = response.wind_speed;
		  wind_degrees.innerHTML = response.wind_degrees;
		  sunrise.innerHTML = response.sunrise;
		  sunset.innerHTML = response.sunset;
		  
		})
		.catch(err => console.error(err));
	};
	
	search.addEventListener("click", (e) => {
		e.preventDefault();
		getWeather(city.value);
	});
	
	getWeather("Delhi");
});




// data.foreach(id => {
// 	const row= tablebody.insertrow();
// 	row.insertcell()=response.temp
// 	row.insertcell()=response.feels_like
// 	row.insertcell()=response.humidity
// 	row.insertcell()=response.max_temp
// });
