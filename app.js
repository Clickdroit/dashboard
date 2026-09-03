/* ============================================================
   PROJET : TESTEUR DE DISPONIBILITÉ SERVEUR (PING)
   Niveau : BTS 1ère année
   Objectif : Écris ton code sous chaque consigne ci-dessous.
   ============================================================ */


const urlInput = document.getElementById('url-input');
const ping = document.getElementById('ping-btn');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const latence = document.getElementById('latency-value');
const listeHistory = document.getElementById('history-list');

ping.addEventListener("click", FunPing)


function FunPing(){
  const url = urlInput.value.trim();
  if(url === ""){
    alert("Vous devez mettre une adresse pour pouvoir ping un serveur !") 
    return false
  }
  testerServeur(url);
} 

async function testerServeur(url) {
  statusText.textContent = "Test en cours ..."
  statusDot.className ="dot";
  ping.disabled = true;
  const debut = performance.now();
  try{
    await fetch(url, {mode: "no-cors", cache: "no-store"});
    const fin = performance.now();
    const l = Math.round(fin - debut);
    latence.textContent = l;
    statusText.textContent = "En ligne";
    statusDot.className="dot online";
  }catch(e){
    latence.textContent = "--";
    statusText.textContent = "Injoignable ou erreur";
    statusDot.className="dot offline"
  }
  finally{
    ping.disabled = false;
  }
}



// ============================================================
// ÉTAPE 4 (BONUS POUR ALLER PLUS LOIN) :
// ============================================================
// Une fois que les étapes 1, 2 et 3 fonctionnent :
//  - Confort utilisateur : si l'adresse ne commence ni par "http://" ni par "https://", rajouter "https://" automatiquement au début (ex: avec .startsWith()).
//  - Ajouter chaque résultat dans la liste d'historique (document.createElement("li")).
//  - Lancer aussi le test quand l'utilisateur appuie sur la touche "Entrée" (événement keydown sur l'input).
//  - Ajouter un bouton pour tester automatiquement toutes les 10 secondes (setInterval).
