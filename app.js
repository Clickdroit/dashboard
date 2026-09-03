/* ============================================================
   PROJET PING SERVEUR - NIVEAU BTS 1ÈRE ANNÉE
   Fichier : app.js
   Description : Script pour tester l'accessibilité d'un serveur
   ============================================================ */

// ------------------------------------------------------------
// 1. RÉCUPÉRATION DES ÉLÉMENTS HTML DU DOM
// ------------------------------------------------------------
const inputUrl = document.getElementById("url-input");
const btnTester = document.getElementById("ping-btn");
const voyantStatut = document.getElementById("status-dot");
const texteStatut = document.getElementById("status-text");
const valeurLatence = document.getElementById("latency-value");
const listeHistorique = document.getElementById("history-list");

// ------------------------------------------------------------
// 2. FONCTION POUR TESTER UN SERVEUR (PING)
// ------------------------------------------------------------
async function testerServeur(url) {
  console.log("Démarrage du test pour :", url);

  // 2.1. Mettre à jour l'interface pour indiquer le chargement
  texteStatut.textContent = "Test en cours...";
  voyantStatut.className = "dot";
  btnTester.disabled = true;

  // 2.2. Enregistrer le moment de début (en millisecondes)
  const tempsDebut = performance.now();

  try {
    // 2.3. Envoi d'une requête HTTP vers l'URL
    // Note : 'no-cors' permet d'envoyer la requête sans être bloqué par le navigateur
    await fetch(url, { mode: "no-cors", cache: "no-store" });

    // 2.4. Calcul de la différence de temps
    const tempsFin = performance.now();
    const latence = Math.round(tempsFin - tempsDebut);

    console.log("Réponse reçue ! Latence calculée :", latence, "ms");

    // 2.5. Afficher les données sur la page
    valeurLatence.textContent = latence;
    texteStatut.textContent = "En ligne";
    voyantStatut.className = "dot online"; // Pastille verte

    // TODO (À toi de jouer) :
    // Créer un nouvel élément <li> pour afficher ce test dans 'listeHistorique'

  } catch (erreur) {
    console.error("Erreur rencontrée lors du test :", erreur);

    // En cas d'échec (serveur éteint, adresse introuvable, etc.)
    valeurLatence.textContent = "--";
    texteStatut.textContent = "Injoignable ou erreur";
    voyantStatut.className = "dot offline"; // Pastille rouge

  } finally {
    // 2.6. Réactiver le bouton une fois le test fini
    btnTester.disabled = false;
  }
}

// ------------------------------------------------------------
// 3. ÉCOUTEURS D'ÉVÉNEMENTS (INTERACTIONS UTILISATEUR)
// ------------------------------------------------------------

// Clic sur le bouton "Tester"
btnTester.addEventListener("click", function () {
  const urlSaisie = inputUrl.value.trim();

  // Vérification simple : le champ n'est pas vide
  if (urlSaisie === "") {
    alert("Veuillez saisir une URL avant de lancer le test !");
    return;
  }

  // Lancement du test
  testerServeur(urlSaisie);
});

// TODO (Idées d'exercices à implémenter toi-même) :
// 1. Déclencher le test quand on appuie sur la touche "Entrée" dans le champ input
// 2. Ajouter un système de rafraîchissement automatique toutes les 10 secondes avec setInterval()
// 3. Sauvegarder les derniers résultats dans le localStorage du navigateur
