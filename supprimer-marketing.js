function showDeleteForm() {
    const campaignList = document.getElementById("campaignList");
    const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    
    if (campaigns.length === 0) {
        alert("Aucune campagne à supprimer.");
        return;
    }

    const campaignId = prompt("Entrez l'ID de la campagne à supprimer:");
    
    if (campaignId) {
        const newCampaigns = campaigns.filter(campaign => campaign.id !== campaignId);

        if (newCampaigns.length === campaigns.length) {
            alert("Campagne non trouvée.");
        } else {
            localStorage.setItem('campaigns', JSON.stringify(newCampaigns));
            loadCampaigns();
            alert("Campagne supprimée avec succès.");
        }
    }
}

