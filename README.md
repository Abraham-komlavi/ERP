# ERP — Gestion de la production et du marketing

Application web de type ERP réalisée en 2024 en **HTML, CSS et JavaScript (sans framework)**. Elle regroupe deux modules, Marketing et Production, et une page de statistiques.

## Fonctionnalités
- **Accueil** : tableau de bord avec accès aux modules Marketing, Production, Statistiques et À propos
- **Module Marketing** : ajout, liste, modification et suppression de campagnes (besoin, chiffre d'affaires, comportement client, opportunité)
- **Module Production** : ajout, liste, modification et suppression de produits (qualité, quantité, délai, coût)
- **Statistiques** : graphiques Chart.js (leads et conversions, unités produites et défectueuses)
- Données enregistrées dans le navigateur (localStorage), sans serveur

## Technologies
HTML5 · CSS3 · JavaScript · Chart.js · Font Awesome

## Structure
```
acceuil.html             page d'accueil
Page-marketing.html      module Marketing
Page-produit.html        module Production
formulaire-*.html/.js    ajout d'une campagne / d'un produit
liste-*.html/.js         listes
Modification-*.html      modification
supprimer-*.js           suppression
page-statistique.html    graphiques
icones/                  icônes SVG et PNG
```

## Lancer le projet
Cloner le dépôt puis ouvrir `index.html` dans un navigateur (ou utiliser l'extension Live Server de VS Code).

```bash
git clone https://github.com/Abraham-komlavi/ERP.git
```

## Suite du projet
Une version plus complète est en cours avec une API **FastAPI**, une base **PostgreSQL** et une authentification JWT.

## Auteur
Elvis Agbo Komlavi — Étudiant M1 Data Science & IA (Coda)
