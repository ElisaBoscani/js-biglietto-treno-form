const generates = document.querySelector("button");

generates.addEventListener("click", function (e) {
  const kilometres = document.getElementById("kilometres").value;
  const nameSurname = document.getElementById("nameSurname").value;
  const userAge = document.getElementById("userAge").value;
  const price = kilometres * 0.21;
  console.log(price);
  console.log(nameSurname, userAge);
  let total;
  if (userAge < 18) {
    let discount = price * (20 / 100);
    total = price - discount;
  } else if (userAge >= 65) {
    let discount = price * (40 / 100);
    total = price - discount;
  } else {
    total = price;
  }
  let finalPrice = total.toFixed(2);
  console.log(finalPrice);
  //mando a scermo
  const textName = document.getElementById("text_name");
  textName.innerHTML = nameSurname;
  //offerta
  const offer = document.getElementById("offer");
  if (userAge < 18) {
    offer.innerHTML = "Sconto del 20%";
  } else if (userAge >= 65) {
    offer.innerHTML = "Sconto del 40%";
  } else {
    offer.innerHTML = "Non ci sono offerte disponibili";
  }
  //carozza
  const carriage = document.getElementById("carriage");
  carriage.innerHTML = Math.floor(Math.random() * 5) + 1;
  //codice
  const code = document.getElementById("code");
  code.innerHTML = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  //prezzo finale
  const finalTiketPrice = document.getElementById("price_tk");
  finalTiketPrice.innerHTML = finalPrice;
});
