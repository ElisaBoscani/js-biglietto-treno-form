const generates = document.querySelector("button");

generates.addEventListener("click", function () {
  const kilometres = document.getElementById("kilometres").value;
  const nameSurname = document.getElementById("nameSurname").value;
  const userAge = document.getElementById("userAge").value;
  const price = kilometres * 0.21;
  console.log(price);
  console.log(nameSurname, userAge);
});
