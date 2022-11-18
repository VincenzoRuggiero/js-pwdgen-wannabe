let userName = prompt("Come ti chiami?");
let userLastName = prompt("Qual è il tuo cognome?");
let userFavColor = prompt("Scrivi quale è il tuo colore preferito");

const userPassw = userName + userLastName + userFavColor;

document.getElementById("userPassword").innerHTML = userPassw;

console.log(userPassw);
