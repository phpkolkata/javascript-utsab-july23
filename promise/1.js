const country = "bangladesh";
const url = "https://restcountries.com/v3.1/name/" + country;

// ajax
const req = new XMLHttpRequest(); // request object
req.open("get", url); // request opened
req.send(); // send request, once completed load event will be called

req.addEventListener("load", function () {
  const data = JSON.parse(this.responseText)[0];
  console.log(data);
});

// const prm = fetch(url);
// console.log(prm);

// promise
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });

//   promise
// Promise LifeCycle ->   pending --> settled  -->  fullfilled
//                                             --> rejected

// Defination
// - Promise is an object that is used as a placeholder/receiver for the future result of asycn task
// - promise is a container of a future value (response from server, ajax call)
