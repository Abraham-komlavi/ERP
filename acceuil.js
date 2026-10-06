const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");


card1.addEventListener("click", () => {
  window.location.href = "Page-marketing.html"; // URL de la page cible pour l'icône 1
});

card2.addEventListener("click", () => {
  window.location.href = "Page-produit.html"; // URL de la page cible pour l'icône 2
});

card3.addEventListener("click", () => {
  window.location.href = "page-statistique.html"; // URL de la page cible pour l'icône 3
});

card4.addEventListener("click", () => {
  window.location.href = "A-propos.html"; // URL de la page cible pour l'icône 4
});

