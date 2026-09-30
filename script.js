const gradient = document.querySelector("#gradient");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const h3 = document.querySelector("h3");

color1.addEventListener("change", function(event) {
    console.log("Color 1 changed!");
    gradient.style.backgroundImage = `linear-gradient(${color1.value}, ${color2.value})`;
    h3.innerText = gradient.style.backgroundImage;
});

color2.addEventListener("change", function(event) {
    gradient.style.backgroundImage = `linear-gradient(${color1.value}, ${color2.value})`;
    h3.innerText = gradient.style.backgroundImage;
});