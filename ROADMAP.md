# 🚀 Roadmap & Idées de Commits Quotidiens (1 commit / jour)

Ce document est conçu pour t'alimenter en **micro-tâches concrètes** et rapides à développer chaque jour en **HTML, CSS et JavaScript pur (Vanilla)** pour garder ta série (streak) de commits active.

---

## 🎯 Semaine 1 : Le Widget Server Ping & Status

- [ ] **Commit 1 : Connexion et test de latence**
  - Fichier : `app.js`
  - Tâche : Utiliser `performance.now()` et `fetch(url, { mode: 'no-cors' })` pour calculer la latence et l'afficher.
- [ ] **Commit 2 : Badge de statut dynamique**
  - Fichiers : `style.css`, `app.js`
  - Tâche : Mettre à jour la pastille (verte si en ligne / rapide, orange si lente, rouge si hors-ligne).
- [ ] **Commit 3 : Historique des pings**
  - Fichiers : `index.html`, `app.js`
  - Tâche : Ajouter chaque résultat dans `<ul id="history-list">` sous forme d'élément `<li>`.
- [ ] **Commit 4 : Lancer le test avec la touche Entrée**
  - Fichier : `app.js`
  - Tâche : Écouter l'événement `keydown` sur le champ texte pour lancer le ping si la touche est 'Enter'.
- [ ] **Commit 5 : Boutons de serveurs prédéfinis**
  - Fichiers : `index.html`, `app.js`
  - Tâche : Ajouter 2 ou 3 boutons rapides (ex: Google, Cloudflare, GitHub) pour remplir l'input en un clic.
- [ ] **Commit 6 : Rafraîchissement automatique (Polling)**
  - Fichier : `app.js`
  - Tâche : Ajouter une case à cocher "Auto" avec un `setInterval` (toutes les 10 ou 15 secondes).
- [ ] **Commit 7 : Sauvegarde locale (LocalStorage)**
  - Fichier : `app.js`
  - Tâche : Sauvegarder la dernière URL testée ou l'historique dans le `localStorage`.

---

## ⚡ Semaine 2 : Personnalisation & Confort

- [ ] **Commit 8 : Notifications sonores ou visuelles**
  - Tâche : Émettre un signal ou une alerte si un serveur passe hors-ligne.
- [ ] **Commit 9 : Horloge en direct dans l'en-tête**
  - Fichiers : `index.html`, `app.js`
  - Tâche : Afficher l'heure locale en temps réel avec un tick chaque seconde.
- [ ] **Commit 10 : Deuxième widget : Bloc-notes rapide (Scratchpad)**
  - Fichiers : `index.html`, `app.js`, `style.css`
  - Tâche : Un widget avec une `<textarea>` qui sauvegarde automatiquement le texte dans le `localStorage`.
- [ ] **Commit 11 : Widget Raccourcis / Liens favoris**
  - Tâche : Une liste de liens cliquables vers tes outils favoris.
- [ ] **Commit 12 : Raccourcis clavier**
  - Tâche : Ajouter une touche (ex: `R`) pour forcer le test de rafraîchissement.

---

## 🎨 Semaine 3 : Améliorations UI & Déploiement

- [ ] **Commit 13 : Animations CSS discrètes**
  - Tâche : Ajouter une pulsation sur la pastille ou une transition fluide lors de l'affichage.
- [ ] **Commit 14 : Mode clair / sombre (Toggle)**
  - Tâche : Un bouton pour basculer le thème avec une classe `.light-theme`.
- [ ] **Commit 15 : Déploiement sur GitHub Pages**
  - Tâche : Activer GitHub Pages dans les réglages du repo pour rendre ton site accessible en ligne gratuitement.
