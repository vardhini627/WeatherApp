document.getElementById('myform').addEventListener('submit', function(e) {

    e.preventDefault();

    var city = document.getElementById('city').value;

    var apiKey = "fabc1a74fb622685817c509f7546d38b";

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        .then(function(res) {

            console.log(res);

            var temperature = res.data.main.temp;
            var cityName = res.data.name;
            var country = res.data.sys.country;

            document.getElementById('result').innerHTML = `
                <h2>${cityName}, ${country}</h2>
                <h3>Temperature: ${temperature} °C</h3>
            `;

        })

        .catch(function(error) {

            console.log(error);

            document.getElementById('result').innerHTML = `
                <h3>City not found ❌</h3>
            `;

        });

});