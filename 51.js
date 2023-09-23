const p = document.querySelector("p");

// synchronous example
// p.textContent = "hello this is dynamic content";
// alert("holding");
// p.style.color = "Red";

// Asynchronous example
p.textContent = "hello";
setTimeout(() => {
  //   alert("hi");
  p.style.color = "green";
}, 5000);
p.style.color = "red";

// another example fo async code
const img = document.querySelector("#im");
img.src = "https://mcdn.wallpapersafari.com/medium/53/47/4YNVas.jpg";

img.addEventListener("load", () => {
  //   alert("loaded");
  img.classList.add("bdr");
});

p.style.color = "yellow";
