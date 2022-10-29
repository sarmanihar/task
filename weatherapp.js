const form = document.querySelector("#in")
const search = document.querySelector("#bn")
const weather = document.querySelector(".bg-text")
const list1 = document.querySelector("#r1")
const list2 = document.querySelector("#r2")
const list3 = document.querySelector("#r3")
const img = document.querySelector(".bg")
const n = document.querySelector("#n")
const hd = document.querySelector(".hd")
const f1 = document.querySelector("#f1")
const f2 = document.querySelector("#f2")
const f3 = document.querySelector("#f3")
const f4 = document.querySelector("#f4")
const f5 = document.querySelector("#f5")
    //const body = document.querySelector("body")
var inc0 = 1;




/*const showhome = () => {
    weather.innerHTML = `<h1>Welcome to Our Website</h1>`
}
showhome()*/


const getWeather = async(city) => {
    //weather.innerHTML = `<h2> Loading... <h2>`
    /*const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`*/
    //const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=7XAGtb8Pc7Jt4sdi3kC6T5V9qIPRc8Fy&q=${city}`
    //const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PwVzLWyo7RuQFM7NRsHZWNSMcshjJl5s&q=${city}`
    //const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PwVzLWyo7RuQFM7NRsHZWNSMcshjJl5s&q=guwahat`
    //const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=iHAVHgogUeqQOUhRtB1z2qUunP6PRsX0&q=${city}`
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PbQKqgwIlJSGglytKR7lT6T5AH8GbQUr&q=${city}`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}
const showWeather = (data) => {
    /*if (data.cod == "404") {
        console.log(`<h2> City Not Found <h2>`)
        return;
    }*/
    console.log(data[0].Key)
    return getWeather1(data[0].Key)


}
const getWeather1 = async(data) => {
    /*if (data.cod == "404") {
        console.log(`<h2> City Not Found <h2>`)
        return;
    }*/
    //const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data}?apikey=7XAGtb8Pc7Jt4sdi3kC6T5V9qIPRc8Fy`
    //const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data}?apikey=PwVzLWyo7RuQFM7NRsHZWNSMcshjJl5s`
    //const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/186893?apikey=PwVzLWyo7RuQFM7NRsHZWNSMcshjJl5s`
    //const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data}?apikey=iHAVHgogUeqQOUhRtB1z2qUunP6PRsX0&details=true`
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/186893?apikey=%09PbQKqgwIlJSGglytKR7lT6T5AH8GbQUr&details=true`
    const response = await fetch(url);
    const data1 = await response.json()
        // console.log(data1)
    return showWeather1(data1)
}
const showWeather1 = (data1) => {
    /*if (data1.cod == "404") {
        console.log(`<h2> City Not Found <h2>`)
        return;
    }*/
    console.log(data1)
    if (inc0 % 2 != 0) { hd.innerText = `${data1.DailyForecasts[0].Temperature.Maximum.Value}F/${data1.DailyForecasts[0].Temperature.Minimum.Value}F ${data1.DailyForecasts[1].Day.IconPhrase} ${data1.DailyForecasts[0].Day.Icon}` } else {
        hd.innerText = `${data1.DailyForecasts[1].Temperature.Maximum.Value}F/${data1.DailyForecasts[0].Temperature.Minimum.Value}F ${data1.DailyForecasts[0].Night.IconPhrase} ${data1.DailyForecasts[0].Night.Icon}`
    }
    // p.innerText = `${data1.DailyForecasts[0].Date}`
    list1.children[0].innerHTML = `<small>${data1.DailyForecasts[1].Date}</small>`
    list1.children[1].innerHTML = `<small>${data1.DailyForecasts[2].Date}</small>`
    list1.children[2].innerText = `<small>${data1.DailyForecasts[3].Date}</small>`
    list1.children[3].innerText = `<small>${data1.DailyForecasts[4].Date}</small>`
    if (inc0 % 2 != 0) {
        list2.children[0].innerText = `${data1.DailyForecasts[1].Day.IconPhrase} ${data1.DailyForecasts[1].Day.Icon}`
        list2.children[1].innerText = `${data1.DailyForecasts[2].Day.IconPhrase} ${data1.DailyForecasts[2].Day.Icon}`
        list2.children[2].innerText = `${data1.DailyForecasts[3].Day.IconPhrase} ${data1.DailyForecasts[3].Day.Icon}`
        list2.children[3].innerText = `${data1.DailyForecasts[4].Day.IconPhrase} ${data1.DailyForecasts[4].Day.Icon}`
        f1.innerText = `${data1.DailyForecasts[1].Day.HasPrecipitation}`
        f2.innerText = `${data1.DailyForecasts[0].Day.Wind.Speed.Value}mi/h`
        f4.innerText = `${data1.DailyForecasts[1].Day.ThunderstormProbability}`
        f4.innerText = `${data1.DailyForecasts[1].Day.SnowProbability}`
    } else {
        list2.children[0].innerText = `${data1.DailyForecasts[1].Day.IconPhrase} ${data1.DailyForecasts[1].Night.Icon}`
        list2.children[1].innerText = `${data1.DailyForecasts[2].Day.IconPhrase} ${data1.DailyForecasts[2].Night.Icon}`
        list2.children[2].innerText = `${data1.DailyForecasts[3].Day.IconPhrase} ${data1.DailyForecasts[3].Night.Icon}`
        list2.children[3].innerText = `${data1.DailyForecasts[4].Day.IconPhrase} ${data1.DailyForecasts[4].Night.Icon}`
        f1.innerText = `${data1.DailyForecasts[1].Night.HasPrecipitation}`
        f2.innerText = `${data1.DailyForecasts[0].Night.Wind.Speed.Value}mi/h`
        f5.innerText = `${data1.DailyForecasts[1].Night.ThunderstormProbability}`

    }


    list3.children[0].innerText = `${data1.DailyForecasts[1].Temperature.Maximum.Value}F/${data1.DailyForecasts[1].Temperature.Minimum.Value}F`
    list3.children[1].innerText = `${data1.DailyForecasts[2].Temperature.Maximum.Value}F/${data1.DailyForecasts[2].Temperature.Minimum.Value}F`
    list3.children[2].innerText = `${data1.DailyForecasts[3].Temperature.Maximum.Value}F/${data1.DailyForecasts[3].Temperature.Minimum.Value}F`
    list3.children[3].innerText = `${data1.DailyForecasts[4].Temperature.Maximum.Value}F/${data1.DailyForecasts[4].Temperature.Minimum.Value}F`




    f3.innerText = `${data1.DailyForecasts[0].RealFeelTemperature.Maximum.Value}F/${data1.DailyForecasts[0].RealFeelTemperature.Maximum.Value}F`
    f4.innerText = `${data1.DailyForecasts[0].Day.Rain.Value}in`

}





search.addEventListener('click', function handleClick() {

    let val = form.value;
    getWeather(val)

})



const ikl = document.querySelector('.ikl')
const switch1 = document.querySelector('.switch1')
switch1.addEventListener('click', (e) => {
    // n.style.backgroundImage = "url('../images/navday.gif')";
    inc0++;

    let val = form.value;
    getWeather(val)
    if (inc0 % 2 != 0) {
        n.style.backgroundImage = "url('../images/navday.gif')";
        //body.style.backgroundImage = "url('../images/day.gif')";
        img.style.backgroundImage = "url('../images/day.gif')";
        ikl.innerText = `Day`
    } else {
        n.style.backgroundImage = "url('../images/gif.gif')";
        //body.style.backgroundImage = "url('../images/night.gif')";
        img.style.backgroundImage = "url('../images/night.gif')";
        ikl.innerText = `Night`
    }
})


//getWeather()