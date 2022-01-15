// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data)
//         //Loop over the data to generate a table, each table row will have a link to the repo url
//         for (var i = 0; i < data.length; i++) {
//           // Creating elements, tablerow, tabledata, and anchor
//           var createTableRow = document.createElement('tr');
//           var tableData = document.createElement('td');
//           var link = document.createElement('a');

//           // Setting the text of link and the href of the link
//           link.textContent = data[i].html_url;
//           link.href = data[i].html_url;

//           // Appending the link to the tabledata and then appending the tabledata to the tablerow
//           // The tablerow then gets appended to the tablebody
//           tableData.appendChild(link);
//           createTableRow.appendChild(tableData);
//           tableBody.appendChild(createTableRow);
//         }
//       });
//   }

var searchedCities = []

var searchButton = document.querySelector(".searchBtn")


function getCoordinates(city) {
    console.log(city)
    var coordinateURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61c4e10047acc72ea5e22c4f2a7d9dac`
    fetch(coordinateURL)
        .then(function (response) {
            console.log("fetch the URL, please")
            return response.json();
        }).then(function (data) {
            console.log(data)
            getApi(city, data.coord.lat, data.coord.lon)
        })
}

var todaysForecast = document.querySelector(".today")

var fiveDayLocation = document.querySelector(".five-day")

function getApi(city, lat, lon) {
    var requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=61c4e10047acc72ea5e22c4f2a7d9dac`

    fetch(requestURL)
        .then(function (response) {
            console.log("fetch the URL, please")
            return response.json();
        }).then(function (data) {
            console.log(data)
            var iconURL = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`
            console.log(iconURL)
            for (var i = 0; i <= 5; i++) {
                var fiveDayIcon = document.createElement("img")
                fiveDayIcon.setAttribute("class", "fiveDayWeatherIcon")
                
            }
            //use data.current for the current weather, then for loop through the data.daily for each of the five cards (don't for loop length, just for loop 5 times) when you want to put
        })
}

var searchBar = document.querySelector(".searchBar")

var searchRow = document.querySelector(".searchRow")

var pastCities = document.querySelector(".pastCities")

pastCities.textContent = '';

function beginSearch() {
    var currentCity = $(searchRow).children(".searchBar").val()
    console.log("You sure clicked that Search Button, big guy");
    searchedCities.push(currentCity)
    localStorage.setItem("City History", searchedCities);
    cityButtons(searchedCities)
    getCoordinates(currentCity)
}

function cityButtons(cities) {
    pastCities.innerHTML = ""
    for (var i = 0; i < cities.length; i++) {
        var cityButton = document.createElement("button")
        cityButton.setAttribute("class", "buttonHistory");
        cityButton.setAttribute("data-search", cities[i]);
        cityButton.textContent = cities[i]
        pastCities.append(cityButton)
    }
}

function handleSearchHistory(event) {
    var historyButton = event.target
    var clickedCity = historyButton.getAttribute("data-search");
    getCoordinates(clickedCity)
}

searchButton.addEventListener("click", beginSearch)

pastCities.addEventListener("click", handleSearchHistory)