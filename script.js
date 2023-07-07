const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {

    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);

    if (!celsius.value) fahrenheit.value = "";
});

fahrenheit.addEventListener("input", () => {

    celsius.value = (((celsius.value - 32) * 5) / 9).toFixed(2);
    if (!fahrenheit.value) celsius.value = "";
});

if (temperature > 30) {
    document.body.classList.add("high-temperature");
} else {
    document.body.classList.remove("high-temperature");
}
if (temperature < 30) {
    document.body.classList.add("low-temperature");
}
else {
    document.body.classList.remove("low-temperature");
}