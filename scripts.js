const key = "b4460c735053fd54edcef46fb13d65f0"

function show(dados) {
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name //Substitui o texto pelo nome da cidade
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".text-prev").innerHTML = dados.weather[0].description
  document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function find_city(city) {  
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
  // pt_br -> Para vir em português as informações, units para vir em celcius

  show(dados)
}

function pressed() {
  const city = document.querySelector(".input-city").value

  find_city(city)
}