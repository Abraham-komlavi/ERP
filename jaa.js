
const campaignsData = [
    { id: 1, name: "Campagne 1", need: "Besoin 1", revenue: "$1000", behavior: "Comportement 1", opportunity: "Occasion 1" },
    { id: 2, name: "Campagne 2", need: "Besoin 2", revenue: "$2000", behavior: "Comportement 2", opportunity: "Occasion 2" },
   
];

const productsData = [
    { id: 1, name: "Produit 1", quality: "Bonne", quantity: 100, time: "2 semaines", cost: "$500" },
    { id: 2, name: "Produit 2", quality: "Moyenne", quantity: 50, time: "1 semaine", cost: "$300" }
];


function displayCampaigns() {
    const campaignsContainer = document.getElementById('campaigns');
    campaignsContainer.innerHTML = '';
    campaignsData.forEach(campaign => {
        campaignsContainer.innerHTML += `
            <div>
                <p>ID: ${campaign.id}</p>
                <p>Besoin: ${campaign.need}</p>
                <p>Revenu: ${campaign.revenue}</p>
                <p>Comportement: ${campaign.behavior}</p>
                <p>Occasion: ${campaign.opportunity}</p>
            </div>
        `;
    });
}


function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    productsData.forEach(product => {
        productsContainer.innerHTML += `
            <div>
                <p>ID: ${product.id}</p>
                <p>Qualité: ${product.quality}</p>
                <p>Quantité: ${product.quantity}</p>
                <p>Temps: ${product.time}</p>
                <p>Coût: ${product.cost}</p>
            </div>
        `;
    });
}

// Sélectionner le conteneur des produits
const productsContainer = document.getElementById('products');

// Ajouter un écouteur d'événement au clic sur le bouton "Supprimer un Produit"
deleteProductBtn.addEventListener('click', function() {
    // Demander à l'utilisateur de saisir l'ID du produit à supprimer
    const productIdToDelete = prompt('Entrez l\'ID du produit à supprimer :');

    // Vérifier si l'ID saisi est valide et supprimer le produit
    if (productIdToDelete !== null && productIdToDelete !== '') {
        // Convertir l'ID en nombre entier
        const id = parseInt(productIdToDelete);

        // Rechercher le produit avec l'ID spécifié dans la liste des produits
        const index = productsData.findIndex(product => product.id === id);

        // Vérifier si le produit a été trouvé
        if (index !== -1) {
            // Supprimer le produit de la liste
            productsData.splice(index, 1);

            // Mettre à jour l'affichage des produits
            displayProducts();
        } else {
            // Afficher un message d'erreur si le produit n'a pas été trouvé
            alert('Le produit avec cet ID n\'existe pas.');
        }
    }
});


displayCampaigns();
displayProducts();
