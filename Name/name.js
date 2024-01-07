// 1. c. Print the following details name, capital, flag, using forEach function
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {

  let result = JSON.parse(request.response);

  result.forEach((element) => {
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flags.png);
  });
};