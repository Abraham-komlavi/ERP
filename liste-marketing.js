document.addEventListener("DOMContentLoaded", function() {
    loadCampaigns();
});

function loadCampaigns() {
    const campaignList = document.getElementById("campaignList");
    const campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];

    campaignList.innerHTML = "";

    campaigns.forEach(campaign => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${campaign.id}</td>
            <td>${campaign.name}</td>
            <td>${campaign.besoin}</td>
            <td>${campaign.revenu}</td>
            <td>${campaign.occasion}</td>
        `;
        campaignList.appendChild(row);
    });
}

