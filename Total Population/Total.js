// 1. d. Print the total population of countries using reduce function

let xhr = new XMLHttpRequest();
let url = 'https://restcountries.com/v3.1/all';

xhr.open('GET', url, true);

xhr.send();

xhr.onload = function () {

    let data = JSON.parse(xhr.responseText);
    let totalPopulation = data.reduce(function (accumulator, country) {
      
        if (country.population && typeof country.population === 'number') {
            return accumulator + country.population;
        } else {
            return accumulator;
        }
    }, 0);

    console.log('Total Population:', totalPopulation);
};
