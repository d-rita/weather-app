const axios = require('axios');
const argv = require('yargs').argv;


const APIKEY = "0b8b878a1f85b2e0e480b4ea9c0857e7";
let city = argv.c || "Kampala";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`

axios.get(url)
.then((res) => {
    let message = `It's ${res.data.main.temp} degrees in ${res.data.name}.`
    console.log(message)
})
.catch((err) => {
    console.log("error:", err)
})

