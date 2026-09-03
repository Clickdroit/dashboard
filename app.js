// Éléments du DOM
const urlInput = document.getElementById("url-input");
const pingBtn = document.getElementById("ping-btn");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");
const latencyValue = document.getElementById("latency-value");
const historyList = document.getElementById("history-list");

// Fonction pour tester la latence d'une URL
async function pingServer(url) {
  statusText.textContent = "Test en cours...";
  statusDot.className = "dot";
  pingBtn.disabled = true;

  const startTime = performance.now();

  try {
    // Note: mode 'no-cors' permet de tester un domaine externe sans être bloqué par le navigateur
    await fetch(url, { mode: "no-cors", cache: "no-store" });
    const latency = Math.round(performance.now() - startTime);

    // Mise à jour de l'affichage
    latencyValue.textContent = latency;
    statusText.textContent = "En ligne";
    statusDot.className = "dot online";

    // TODO: Ajouter le résultat dans l'historique (ex: ajouter un <li> dans historyList)

  } catch (error) {
    latencyValue.textContent = "--";
    statusText.textContent = "Injoignable ou erreur";
    statusDot.className = "dot offline";
  } finally {
    pingBtn.disabled = false;
  }
}

// Événement au clic sur le bouton
pingBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  if (url) {
    pingServer(url);
  }
});

// TODO: Permettre de lancer le test avec la touche Entrée
// TODO: Ajouter un système de rafraîchissement automatique (setInterval)
// TODO: Sauvegarder dans le localStorage
