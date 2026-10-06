document.addEventListener("DOMContentLoaded", function() {
  const productIdentifiant = document.getElementById("productIdentifiant");
  productIdentifiant.value = generateProductId();
});

function generateProductId() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  let maxId = 0;

  products.forEach(product => {
      const idNumber = parseInt(product.id.split('-')[1]);
      if (idNumber > maxId) {
          maxId = idNumber;
      }
  });

  const newIdNumber = maxId + 1;
  return 'PROD-' + newIdNumber.toString().padStart(2, '0');
}

const form = document.getElementById("ajout-produit");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const id = document.getElementById("productIdentifiant").value;
  const name = document.getElementById("productName").value;
  const qualite = document.getElementById("productQualite").value;
  const quantite = document.getElementById("productQuantite").value;
  const temps = document.getElementById("productTemps").value;
  const cout = document.getElementById("productCout").value;

  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.push({ id, name, qualite, quantite, temps, cout });
  localStorage.setItem('products', JSON.stringify(products));

  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  setTimeout(() => {
      successMessage.style.display = "none";
  }, 3000);

  form.reset();
  document.getElementById("productIdentifiant").value = generateProductId();
});
