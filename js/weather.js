$(document).ready(function() {

    //Sets up weekdays for forcast formatting.
    let date = new Date();
    let dayOfWeek = date.getDay();
    let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]


	$('#currentWeather').click(function() {
        let city = $('#city').val();
        let state = $('#state').val();
        let country = $('#country').val();
        $('#fiveDay').html("");

        if (city && country != '') {
            $('#error').html("");

            document.getElementById("fiveDay").style.opacity = 0;
            fiveDay.classList.remove('animateFade');
            current.classList.add('animateFade');

            $.ajax({

                //openweathermap key: cf34eb7ee07309b95910c315f561a290
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&APPID=cf34eb7ee07309b95910c315f561a290`,
                type: "GET",
                dataType: "jsonp",
                success: function(response) {

                    let description = response.weather[0].description;
                    let temp = Math.round(response.main.temp);
                    let icon = response.weather[0].icon;
                    let humidity = response.main.humidity;
                    console.log(response);

                        $('#current').html(`<div class = "forecastSection"><img src="http://openweathermap.org/img/w/${icon}.png"><br> Currently: ${description}, the temperature is ${temp}&#8457; and the humidity is ${humidity}.</div>`);
                }
            });
        }
        else {
            $('#error').html("Please fill out all fields.");
            $('#current').html("");
            $('#fiveDay').html("");
        }
    
    });

    $('#fiveDayForecast').click(function() {
        let city = $('#city').val();
        let state = $('#state').val();
        let country = $('#country').val();
        $('#current').html("");
        
        if (city && country != '') {
            $('#error').html("");

            document.getElementById("current").style.opacity = 0;
            current.classList.remove('animateFade');
            fiveDay.classList.add('animateFade');

            $.ajax({

                //openweathermap key: cf34eb7ee07309b95910c315f561a290
                url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&units=imperial&APPID=cf34eb7ee07309b95910c315f561a290`,
                type: "GET",
                dataType: "jsonp",
                success: function(response) {

                    let background = response.list[0].weather[0].main;
                    console.log(background);

                    if(background == "Clear"){
                        wrapper.classList.add('animateBackgroundClear');
                        //document.getElementById('wrapper').style.background = "linear-gradient(to bottom, #E0F8F1, #81F7F3)";

                    } else if(background == "Rain"){
                        wrapper.classList.add('animateBackgroundRain');
                        //document.getElementById('wrapper').style.background = "linear-gradient(to bottom, #F2F2F2, #BDBDBD)";
                    }

                    //Current Day +1 Weather Request
                    let description0 = response.list[0].weather[0].description;
                    let high0 = Math.round(response.list[0].main.temp_max);
                    let low0 = Math.round(response.list[0].main.temp_min);
                    let icon0 = response.list[0].weather[0].icon;

                    //Current Day +2 Weather Request
                    let description1 = response.list[1].weather[0].description;
                    let high1 = Math.round(response.list[1].main.temp_max);
                    let low1 = Math.round(response.list[1].main.temp_min);
                    let icon1 = response.list[1].weather[0].icon;

                    //Current Day +3 Weather Request
                    let description2 = response.list[2].weather[0].description;
                    let high2 = Math.round(response.list[2].main.temp_max);
                    let low2 = Math.round(response.list[2].main.temp_min);
                    let icon2 = response.list[2].weather[0].icon;

                    //Current Day +4 Weather Request
                    let description3 = response.list[3].weather[0].description;
                    let high3 = Math.round(response.list[3].main.temp_max);
                    let low3 = Math.round(response.list[3].main.temp_min);
                    let icon3 = response.list[3].weather[0].icon;

                    //Current Day +5 Weather Request
                    let description4 = response.list[4].weather[0].description;
                    let high4 = Math.round(response.list[4].main.temp_max);
                    let low4 = Math.round(response.list[4].main.temp_min);
                    let icon4 = response.list[4].weather[0].icon;

                    //Display the weather report, each div contains the description, high temperature, and low temperature requested from the API.
                        $('#fiveDay').html(
                            `<div class = "forecastSection"><img src="http://openweathermap.org/img/w/${icon0}.png"><p>${weekdays[dayOfWeek + 1]}: ${description0}, the high will be ${high0}&#8457; and the low will be ${low0}&#8457;.</p></div>

                            <div class = "forecastSection"><img src="http://openweathermap.org/img/w/${icon1}.png"><p>${weekdays[dayOfWeek + 2]}: ${description1}, the high will be ${high1}&#8457; and the low will be ${low1}&#8457;.</p></div>

                            <div class = "forecastSection"><img src="http://openweathermap.org/img/w/${icon2}.png"><p>${weekdays[dayOfWeek + 3]}: ${description2}, the high will be ${high2}&#8457; and the low will be ${low2}&#8457;.</p></div>

                            <div class = "forecastSection"><img src="http://openweathermap.org/img/w/${icon3}.png"><p>${weekdays[dayOfWeek + 4]}: ${description3}, the high will be ${high3}&#8457; and the low will be ${low3}&#8457;.</p></div>

                            <div class = "forecastSection"><img src="http://openweathermap.org/img/w/${icon4}.png"><p>${weekdays[dayOfWeek + 5]}: ${description4}, the high will be ${high4}&#8457; and the low will be ${low4}&#8457;.</p></div>`
                        );
                    
                   // create variables for the different properties of current weather from https://openweathermap.org/current (you need a key)


                   // insert these variable onto the page


                    
                }

            });
        }
        else {
            $('#error').html("Please fill out all fields.");
            $('#current').html("");
            $('#fiveDay').html("");
        }
    });
});

