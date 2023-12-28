// AJAX  method

function citysearch(){
    let city_name = cityname.value

   
    // object creation
    const cityobj = new XMLHttpRequest

    //connection establishment
    cityobj.open(`get`,`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=db87c495c54aa08b13e2094864d0fa2d`)

    // send request
    cityobj.send()

    cityobj.onreadystatechange = ()=>{
        if(cityobj.readyState == 4){
            if(cityobj.status>=200 && cityobj.status<300){
           
                let cityy = JSON.parse(cityobj.responseText)
            
                const weather_logo = document.getElementById("wlogo")
                const bvideo = document.getElementById("background-video")
                if(city_name){
                    
                }
                cname.innerHTML =  cityy.name
                
                tempnow.innerHTML = Math.trunc(cityy.main.temp-273)

                feels_like.innerHTML = Math.trunc(cityy.main.feels_like-273)
                
                Descripion.innerHTML = cityy.weather[0].description

                loca.innerHTML =  cityy.name

                pressure.innerHTML = cityy.main.pressure

                humidity.innerHTML = cityy.main.humidity
                
                visib.innerHTML = cityy.visibility

                wind.innerHTML = cityy.wind.speed

                let sdfg = cityy.weather[0].main
                console.log(sdfg);
                if(cityy.weather[0].main == "Clouds"){
                    weather_logo.src = "images/clouds.png";
                    bvideo.src = "videos/clouds.mp4"
                }
                else if(cityy.weather[0].main == "Rain"){
                    weather_logo.src = "images/rain.png";
                    bvideo.src = "videos/rain.mp4"
                }
                else if(cityy.weather[0].main == "Clear"){
                    weather_logo.src = "images/sun.png";
                    bvideo.src = "videos/clear.mp4"
                }
              if(Math.trunc(cityy.main.temp-273)<=5){
                weather_logo.src = "images/snow.png";
                bvideo.src = "videos/snoww.mp4"
              }
              else{

              }

            }
            else{
                alert("Enter a valid City name");
            }
        }
        


    }
}

function getTime(){
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


    const time = new Date() 

   
    let hour=time.getHours()


    let min=time.getMinutes()


    let sec=time.getSeconds()

    clock.innerHTML = `${hour}:${min}:${sec}`
    setTimeout(() =>getTime(), 1000);
 
    }
    function getDate(){
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        
        const time = new Date() 
        let day = time.getUTCDate()

        let d = month[time.getMonth()];
    
        let year = time.getFullYear()
       
        calendar.innerHTML = `${day} ${d} ${year}`

    }
  
    getTime()