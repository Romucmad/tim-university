import { celsiusToKelvin, celsiusToFahrenheit } from "./temperature";
import { meterToKilometer } from "./metrics";

const far = document.getElementById("fah");
const kel = document.getElementById("kel");
const cel = document.getElementById("cel");
const check = document.getElementById("check");

const met = document.getElementById("met");
const kil = document.getElementById("kil");
const metricsBtn = document.getElementById("metricsBtn");

check.addEventListener("click", () => {
  kel.value = celsiusToKelvin(cel.value);
  far.value = celsiusToFahrenheit(cel.value);
});

metricsBtn.addEventListener("click", () => {
  kil.value = meterToKilometer(met.value);
});
