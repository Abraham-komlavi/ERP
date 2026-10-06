function showDeleteForm() {
    const productId = prompt("Veuillez entrer l'identifiant du produit à supprimer:");
    if (!productId) return;

    let products;
    try {
        products = JSON.parse(localStorage.getItem('products')) || [];
    } catch (e) {
        products = [];
        console.error("Erreur de parsing JSON", e);
    }

    const updatedProducts = products.filter(product => product.id !== productId);

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    location.reload(); // Recharge la page pour mettre à jour la liste des produits
}
