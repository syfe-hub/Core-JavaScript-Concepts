const api = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
fetch(api)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
