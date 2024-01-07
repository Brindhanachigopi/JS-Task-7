// 1. b. Get all the countries with a population of less than 2 lakhs using Filter function
let xhr = new XMLHttpRequest();
let url = "https://restcountries.com/v3.1/all";

xhr.open("GET", url, true);

xhr.send();

xhr.onload = function () {
  
    var data = JSON.parse(xhr.responseText);
    var countriesWithLowPopulation = data.filter(function (country) {
        return country.population < 200000;
    });

    console.log(countriesWithLowPopulation);
};
