const apiKey='aae6cee38de617c5e266ee8c3dcc3205';
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
    const searchBox= document.querySelector(".search input")
    const searchbtn= document.querySelector(".search button")
    const Weathericon= document.querySelector(".weather-icon")

    

    async function checkWeather(city){
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`); 

        if (response.status==404) {
            document.querySelector(".error").style.display= "block"; 
            document.querySelector(".weather").style.display= "none"; 


        }
        else {
        var data = await response.json(); 

        console.log(data);
        document.querySelector(".city").innerHTML= data.name ; 
        document.querySelector(".temp").innerHTML= Math.round((data.main.temp))+'°C'; 
        document.querySelector(".humidity").innerHTML= data.main.humidity+"%" ;
        document.querySelector(".wind").innerHTML= data.wind.speed +"Km/h"; 
        document.querySelector(".weather-condition").innerHTML= data.weather[0].main; 


        if(data.weather[0].main=="Clouds"){
            Weathericon.src="images/clouds.png"

        }
        else if(data.weather[0].main=="Clear"){
            Weathericon.src="images/clear.png"

        }
        else if(data.weather[0].main=="Drizzle"){
            Weathericon.src="images/drizzle.png"

        }
        else if(data.weather[0].main=="Mist"){
            Weathericon.src="images/mist.png"

        }
        else if(data.weather[0].main=="Rain"){
            Weathericon.src="images/rain.png"

        }
        else if(data.weather[0].main=="Snow"){
            Weathericon.src="images/snow.png"

        }
        document.querySelector(".weather").style.display="block" ; 
        document.querySelector(".error").style.display= "none"; 


 

    }}

    searchbtn.addEventListener("click",()=>{
        checkWeather(searchBox.value); 


    })