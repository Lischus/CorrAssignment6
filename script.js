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
function getApi() {
var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=61c4e10047acc72ea5e22c4f2a7d9dac"

fetch(requestUrl)
    .then(function (response) {
        console.log("fetch the URL, please")
        return response.json();
    })
}

var searchButton = document.querySelector(".searchBtn")

var searchBar = document.querySelector(".searchBar")

var searchRow = document.querySelector(".searchRow")

var pastCities = document.querySelector(".pastCities")

pastCities.textContent = '';

function beginSearch () {
    var currentCity = $(searchRow).children(".searchBar").val()
    console.log("You sure clicked that Search Button, big guy");
    localStorage.setItem(searchRow, currentCity);
    $(".searchBar").val(localStorage.getItem("[object HTMLDivElement]"))
}

searchButton.addEventListener("click", beginSearch)