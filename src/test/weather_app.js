function getWeather(){
     const apiKey = 'd149f79a240d0aa83a1cb813ca85908f'
     const cityInput = document.getElementById('city-name')
     const weatherInfo = document.getElementById('weatherInfo')
     const cityName = cityInput.value

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
       .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error(`Error: ${response.statusText}`)
        }
       })

       .then(data =>{
          const temp = Math.round(data.main.temp - 273.15)
          const description = data.weather[0].description
          const icon = data.weather[0].icon
          const iconURL = `https://openweathermap.org/img/w/${icon}.png`

          weatherInfo.innerHTML = `
          <div class='flex flex-col gap-4'>
            <h2 class = 'text-center text-2xl font-semibold text-indigo-500'>${cityName}</h2>
            <img src ='${iconURL}' class = 'mx-auto block h-40'>
            <p class = 'text-center text-2xl font-bold text-indigo-950'>${temp}&deg;C</p>
            <p class = 'text-center  text-lg font-semibold text-gray-600'>${description}</p>
          </div>  
          `
       })
       .catch(error =>{
        weatherInfo.innerHTML= `
          <p class ='text-red-400'>${error.message}</p>
        `
       })  
}

const cityInput = document.getElementById('city-name')
cityInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter') getWeather()
}) 