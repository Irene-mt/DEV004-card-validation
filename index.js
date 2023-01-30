import validator from "./validator.js";

const botonValidar = document.getElementById("botonValid");
const resultado = document.getElementById("resultado");
const ingresar = document.querySelector(".ingresar");
const mostrar = document.querySelector(".mostrar");
botonValidar.addEventListener("click", () => {
  const card = document.getElementById("cardNumber").value;

  if (card.length === 0) {
    return alert("Campo vacío. Por favor ingresa un número.");
  }

  if (card.length > 18 || card.length < 13) {
    return alert("Ingresa de 13 a 18 dígitos.");
  }
  ingresar.style.display = "none";
  const enmascarar = validator.maskify(card);
  mostrar.style.display = "block";

  const valid = validator.isValid(card);
  if (valid) {
    resultado.innerHTML = `¡Genial! Tu tarjeta ${enmascarar} si es compatible, ya puedes registrarte.`;
  } else {
    resultado.innerHTML = `Lo sentimos, tu tarjeta ${enmascarar} es incompatible con nuestro servidor.`;
  }
});
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
  location.reload();
});
//console.log(validator);
