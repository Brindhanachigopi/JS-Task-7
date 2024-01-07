// 1. a. Get all the countries from Asia continent/region using Filter function
let xhr = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";

xhr.open("GET", url, true);

xhr.send();

xhr.onload = function () {
  
  let data = JSON.parse(xhr.response);
  let asiaCountries = data.filter(function (country) {
    return country.region === "Asia";
  });

  console.log(asiaCountries);
}