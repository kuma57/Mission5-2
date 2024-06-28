async function getWeatherForecast(){
    const area = document.getElementById('areaInput').value;
    const url = `https://weather.tsukumijima.net/api/forecast/city/${area}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json(); 
        
        console.log(data); 
        
        displayWeatherForecast(data); 
    } catch (error) {
        console.error('データを取得できませんでした:', error);
    }
}

function displayWeatherForecast(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = ''; ///空にする
    const cityName = data.location.city;
    const p = document.createElement('p');
    p.textContent = `現在の天気: ${data.forecasts[0].telop} (${cityName})`;
    
    weatherDisplay.appendChild(p);
}
