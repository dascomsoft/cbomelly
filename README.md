

# Cbomelly Immobilier — Site Web Premium

> **Projet livre a un client** : Ce site web a ete concu sur mesure pour Cbomelly Immobilier, agence immobiliere camerounaise souhaitant presenter ses services de vente de terrains au public camerounais et a la diaspora. Chaque element a ete pense pour repondre aux besoins specifiques du client et a l'image de marque qu'il souhaite projeter.

---

## Presentation

Ce site est la vitrine digitale de **Cbomelly Immobilier**, une agence immobiliere camerounaise basee a Yaounde et specialisee dans la vente de terrains viabilises et securises. L'objectif du client est de presenter ses services au grand public camerounais — acheteurs locaux, investisseurs, associations, entreprises, agriculteurs et membres de la diaspora — en inspirant confiance, transparence et professionnalisme.

Le site repond a un enjeu majeur du marche foncier camerounais : la mefiance legitime des acheteurs face aux arnaques foncieres. Cbomelly Immobilier se positionne comme un partenaire de confiance, et ce site traduit cette promesse a travers un design premium, un contenu rassurant et des outils pratiques comme le guide anti-arnaque et la checklist d'achat.

---

## Objectifs du Client

| Objectif | Comment le site y repond |
|----------|--------------------------|
| **Inspirer confiance** | Design premium type agence internationale, temoignages clients, chiffres verifiables |
| **Demonstrer l'expertise** | Page "A Propos" avec histoire, equipe, valeurs et expertise juridique detaillee |
| **Proteger les acheteurs** | Page "Conseils" avec guide anti-arnaque, 10 regles d'or, FAQ et checklist interactive |
| **Convertir les visiteurs** | Appels a l'action strategiques, formulaire de contact, bouton WhatsApp, telephone cliquable |
| **Toucher la diaspora** | Contenu adapte aux Camerounais de l'etranger, accompagnement a distance mentionne |

---

## Architecture du Site

Le site comprend **5 pages independantes**, chacune dediee a une etape du parcours client :

| Page | Role dans la strategie du client | Sections |
|------|----------------------------------|----------|
| **Accueil** | Premiere impression et conversion rapide | Hero, Statistiques, Pourquoi Choisir, Terrains en Vedette, Processus d'Achat, Temoignages, Appel a l'Action |
| **Nos Terrains** | Catalogue filtrable des biens du client | Hero, Filtres interactifs, Grille de 9 terrains, Carte des Zones, Avantages, CTA |
| **A Propos** | Credibilite et histoire de l'agence | Hero, Histoire, Mission & Vision, Valeurs, Expertise Fonciere, Equipe, Chiffres Cles |
| **Conseils** | Valeur ajoutee educative — reference anti-arnaque | Hero, 10 Regles d'Or, Documents Requis, Pieges a Eviter, FAQ, Checklist Interactive |
| **Contact** | Point de conversion final | Hero, Coordonnees, Formulaire, Carte, FAQ, WhatsApp CTA |

---

## Technologies

- **HTML5** — balisage semantique, accessibilite (ARIA), SEO optimise
- **Tailwind CSS** — framework utilitaire, design system personnalise aux couleurs du client
- **JavaScript Vanilla** — interactions sans dependance lourde, facilement maintenable
- **AOS (Animate On Scroll)** — animations d'entree fluides pour un rendu premium
- **Google Fonts** — Nunito (300 a 900)
- **Font Awesome 6** — iconographie professionnelle

---

## Identite Visuelle du Client

### Palette de couleurs

| Role | Couleur | Usage |
|------|---------|-------|
| Primaire | `slate-900` (#0f172a) | Fonds sombres, textes principaux — evoque le serieux et la stabilite |
| Secondaire | `Gold` (#D4AF37) | Boutons, accents, bordures, hover — traduit le premium et la valeur immobiliere |
| Fond clair | `slate-50` | Arriere-plans de sections — lisibilite et elegance |
| Fond blanc | `#ffffff` | Cartes, contenus — clarte et professionnalisme |
| Texte | `slate-600` | Paragraphes, descriptions — lecture confortable |

### Typographie

- **Police** : Nunito (sans-serif moderne, chaleureuse et professionnelle)
- **Hiearchie** : 8xl hero / 5xl titres / 2xl sous-titres / lg corps / sm etiquettes

Le choix du **gold** comme couleur d'accent repond a la volonte du client de se positionner comme une agence haut de gamme, a l'image des grandes enseignes internationales comme Sotheby's Realty ou Century 21.

---

## Fonctionnalites Interactives

### Page Nos Terrains
- **Filtres dynamiques** par zone, prix, superficie et recherche textuelle — le client peut gerer facilement son catalogue
- **Reinitialisation** en un clic
- **Message "aucun resultat"** lorsque les filtres ne correspondent a aucun terrain

### Page Conseils (Valeur ajoutee majeure pour le client)
- **Accordeon FAQ** — questions deployables individuellement
- **Checklist interactive** — 10 etapes avec barre de progression en temps reel
- **Systeme de conseils** categorise par niveau de risque (or, rouge, vert)

Cette page positionne le client comme **expert de reference** dans le domaine foncier camerounais, generant de la confiance et du trafic organique.

### Navigation
- **Navbar sticky** — transparente en haut de page, opaque au scroll
- **Menu mobile** — hamburger avec animation icone croix
- **Liens actifs** — indication visuelle de la page courante

### Formulaire de Contact
- **Validation HTML5** native
- **Feedback visuel** d'envoi (spinner, confirmation, reset)

---

## Structure des Fichiers

```
cbomelly/
|-- index.html          # Page d'accueil — vitrine principale
|-- terrains.html       # Catalogue des biens du client
|-- a-propos.html       # Presentation de l'agence et de l'equipe
|-- conseils.html       # Guide anti-arnaque — valeur ajoutee SEO
|-- contact.html        # Formulaire et coordonnees du client
|-- images/
|   |-- terrain-background.jpg      # Images fournies par le client
|   |-- terrain-background2.jpg
|   |-- terrain-background3.jpeg
|   |-- terrain.webp
|   |-- terrain1.jpg
|   |-- terrain2.jpg
|   |-- terrain3.jpg
|   |-- terrain4.png
|   |-- terrain5.jpg
|   |-- terrain7.jpg
|   |-- terrain7.jpeg
|   |-- terrain8.jpeg
|   |-- terrain10.jpeg
```

> Les images du dossier `images/` sont celles fournies par le client et referencees en chemin relatif. Aucune image externe n'est requise.

---

## Zones Couvertes par le Client

Le site met en avant les terrains disponibles dans les quatre zones strategiques ou Cbomelly Immobilier opere autour de Yaounde :

- **Soa** — Zone administrative en plein essor, ideale pour residences et bureaux
- **Nkometou** — Commune dynamique avec marche central actif, parfait pour habitation
- **Barriere** — Carrefour commercial strategique, forte densite de passage
- **Mbankomo** — Zone rurale paisible, excellente pour projets agricoles et residences secondaires

---

## Public Cible du Client

Ce site s'adresse aux cibles prioritaires identifiees par le client :

- **Acheteurs locaux** a la recherche d'un terrain pour construire leur residence principale
- **Investisseurs** souhaitant placer dans l'immobilier foncier camerounais a fort potentiel de plus-value
- **Associations et entreprises** a la recherche d'espaces pour leurs projets
- **Diaspora camerounaise** vivant a l'etranger et souhaitant investir au pays — segment particulierement vulnerable aux arnaques
- **Agriculteurs** recherchant des terres pour leurs exploitations

La page **Conseils** a ete specifiquement demandee par le client comme ressource de reference pour edquuer les acheteurs et les proteger des arnaques foncieres tres repandues au Cameroun.

---

## Performance et SEO

- Meta descriptions uniques par page, redigees pour le public camerounais
- Balises semantiques (`header`, `nav`, `main`, `section`, `footer`, `article`)
- Attributs `alt` descriptifs sur toutes les images
- Structure de titres hierarchisee (h1 > h2 > h3)
- URLs propres et descriptives
- Temps de chargement optimise (CDN pour les ressources externes)
- Contenu riche et pertinent pour le referencement naturel sur les requetes "acheter terrain cameroun", "terrain yaounde", "immobilier cameroun"

---

## Notes de Mise en Production pour le Client

1. **Carte Google Maps** : Le placeholder dans `contact.html` doit etre remplace par une iframe Google Maps avec les coordonnees reelles du siege de l'agence.

2. **Formulaire de contact** : Actuellement en mode demonstration avec feedback simule. Le client doit connecter le formulaire a un backend (PHP, Node.js, ou service comme Formspree / EmailJS) pour reception reelle des messages.

3. **Numero WhatsApp** : Mettre a jour le lien `wa.me` dans `contact.html` avec le numero professionnel reel du client.

4. **Images** : Remplacer les images de demonstration par des photographies professionnelles des terrains reels de l'agence pour un impact maximal aupres des visiteurs.

5. **Analytics** : Ajouter Google Analytics ou un outil equivalent pour que le client puisse suivre les conversions et le comportement des visiteurs.

6. **Nom de domaine** : Deployer le site sur le nom de domaine choisi par le client (ex: cbomelly-immobilier.com).

---

## Maintenance et Evolutivite

Le code a ete structure de maniere modulaire et commente pour faciliter :
- L'ajout de nouveaux terrains dans `terrains.html`
- La modification des informations de contact
- L'ajout de nouvelles pages ou sections
- La mise a jour des temoignages clients
- L'adaptation du contenu selon l'evolution de l'activite du client

---

## Licence

Propriete exclusive de **Cbomelly Immobilier**. Ce site est un travail sur mesure livre au client. Toute reproduction, modification ou utilisation non autorisee par le client est interdite.

---

*Site concu et developpe avec soin pour refleter l'excellence, la fiabilite et le professionnalisme de Cbomelly Immobilier sur le marche foncier camerounais.*

## Lien du site : https://cbomelly.vercel.app/



