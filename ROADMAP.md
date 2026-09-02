# 🚀 Roadmap & Idées de Commits Quotidiens (1 commit / jour)

Ce document est conçu pour t'alimenter en **micro-tâches concrètes** et rapides à développer chaque jour pour garder ta série (streak) de commits active.

---

## 🎯 Semaine 1 : Le Widget Server Ping & Status

- [ ] **Commit 1 : Implémentation de la route API**
  - Fichier : `src/app/api/ping/route.ts`
  - Tâche : Utiliser `performance.now()` et `fetch(url, { method: 'HEAD' })` pour calculer la latence réelle en millisecondes et renvoyer le code HTTP.
- [ ] **Commit 2 : Connexion UI au backend**
  - Fichier : `src/components/widgets/ServerPingWidget.tsx`
  - Tâche : Ajouter le bouton "Tester" qui déclenche l'appel à `/api/ping` et affiche la latence en direct (`ex: 28 ms`).
- [ ] **Commit 3 : Badge de statut dynamique**
  - Tâche : Ajouter un indicateur visuel (pastille verte si <150ms, jaune si >150ms, rouge si erreur/timeout).
- [ ] **Commit 4 : Historique des pings (Mini-graphique / Sparkline)**
  - Tâche : Conserver les 10 derniers pings dans un tableau d'historique et afficher une rangée de barres de latence.
- [ ] **Commit 5 : Rafraîchissement automatique (Polling)**
  - Tâche : Ajouter un toggle "Auto-refresh" avec un `setInterval` (toutes les 15 ou 30 secondes).
- [ ] **Commit 6 : Gestion de plusieurs cibles**
  - Tâche : Permettre de surveiller plusieurs serveurs (ex: Google DNS, ton serveur web, ton routeur local).
- [ ] **Commit 7 : Sauvegarde locale (LocalStorage)**
  - Tâche : Sauvegarder la liste des serveurs configurés dans le `localStorage` pour ne rien perdre au rechargement.

---

## ⚡ Semaine 2 : Personnalisation & Confort

- [ ] **Commit 8 : Notifications sonores ou système**
  - Tâche : Émettre un bip ou une notification de bureau via l'API Web Notifications si un serveur passe hors-ligne.
- [ ] **Commit 9 : Horloge en direct dans l'en-tête**
  - Fichier : `src/components/layout/Header.tsx`
  - Tâche : Afficher l'heure locale et la date en temps réel avec un tick de seconde.
- [ ] **Commit 10 : Modal / Formulaire d'ajout de serveur**
  - Tâche : Créer un formulaire propre pour saisir le nom et l'URL d'un nouveau serveur à pinguer.
- [ ] **Commit 11 : Widget "Notes rapides / Scratchpad"**
  - Tâche : Un widget de bloc-notes simple qui sauvegarde automatiquement le texte dans le `localStorage`.
- [ ] **Commit 12 : Raccourcis clavier**
  - Tâche : Ajouter un raccourci clavier (ex: touche `R`) pour forcer le rafraîchissement de tous les widgets.

---

## 🛠 Semaine 3 : Nouveaux Widgets à la carte

- [ ] **Commit 13 : Widget GitHub Commit Streak**
  - Tâche : Consommer l'API publique GitHub pour afficher tes contributions du jour et ton streak.
- [ ] **Commit 14 : Widget Météo**
  - Tâche : Appeler l'API gratuite Open-Meteo pour afficher la météo et la température locale.
- [ ] **Commit 15 : Widget Raccourcis / Bookmarks**
  - Tâche : Liste de liens rapides avec icônes vers tes outils favoris (GitHub, Vercel, Supabase, etc.).
- [ ] **Commit 16 : Widget Flux RSS / Veille Tech**
  - Tâche : Parser un flux RSS (ex: Hacker News, Reddit /r/programming) et afficher les 5 derniers articles.

---

## 🎨 Semaine 4 : UX & Drag-and-Drop

- [ ] **Commit 17 : Réorganisation des widgets (Drag & Drop)**
  - Tâche : Utiliser une bibliothèque légère (ou HTML5 Drag & Drop) pour déplacer les cartes.
- [ ] **Commit 18 : Masquer / Afficher les widgets**
  - Tâche : Menu de configuration pour activer/désactiver certains widgets.
- [ ] **Commit 19 : Export & Import de la configuration**
  - Tâche : Bouton pour exporter la configuration en JSON et la réimporter.
- [ ] **Commit 20 : Déploiement en un clic sur Vercel / Netlify**
  - Tâche : Configurer le repository pour un déploiement continu gratuit.
