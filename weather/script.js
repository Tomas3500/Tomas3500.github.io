function show() {
    let cityId = document.querySelector('#city').value;
    let countryId = document.querySelector('#country').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=395fdbf92bcc5120cad3e5dc85badec6`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            // console.log(data);
            if (data.id == cityId && data.sys.country == countryId) {
                document.querySelector('.name-city').innerHTML = data.name;
                document.querySelector('.icon').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';
                document.querySelector('#temp').innerHTML = `${Math.floor(data.main.temp - 273)}&deg`;
                document.querySelector('.pressure').innerHTML = `${Math.floor((data.main.pressure) * 0.76)} <br>мм рт.ст`; //pressure - давление в милибарах.
                document.querySelector('.wind').innerHTML = `${data.wind.speed}<br>м/с`; //wind - скорость ветра
                document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`; //влажность
            }
            else {
                alert('Выберете город страны!')
            }


        })
        .catch(function () {
        })
}



document.querySelector('.btn').onclick = show;


