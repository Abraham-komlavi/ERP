document.addEventListener("DOMContentLoaded", function() {
  const campaignIdentifiant = document.getElementById("campaignIdentifiant");
  campaignIdentifiant.value = generateCampaignId();
});

function generateCampaignId() {
  let campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
  let maxId = 0;

  campaigns.forEach(campaign => {
      const idNumber = parseInt(campaign.id.split('-')[1]);
      if (idNumber > maxId) {
          maxId = idNumber;
      }
  });

  const newIdNumber = maxId + 1;
  return 'CAMP-' + newIdNumber.toString().padStart(2, '0');
}

const form = document.getElementById("modifyCampaignForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const id = document.getElementById("campaignIdentifiant").value;
  const name = document.getElementById("campaignName").value;
  const besoin = document.getElementById("campaignNeed").value;
  const revenus = document.getElementById("campaignRevenue").value;
  const occasion = document.getElementById("campaignOccasion").value;

  let campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
  campaigns.push({ id, name, besoin, revenus, occasion });
  localStorage.setItem('campaigns', JSON.stringify(campaigns));

  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  setTimeout(() => {
      successMessage.style.display = "none";
  }, 3000);

  form.reset();
  document.getElementById("campaignIdentifiant").value = generateCampaignId();
});
