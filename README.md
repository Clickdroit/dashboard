# DevPulse - Dashboard & Ping Serveur

Un tableau de bord simple et léger écrit en **HTML5, CSS3 et JavaScript pur (Vanilla)**.

## 🚀 Démarrage rapide

Aucune installation ni dépendance requise !

1. Ouvre simplement le fichier `index.html` dans ton navigateur Web (double-clic ou Clic droit > Ouvrir avec ton navigateur).
2. Saisis une URL (ex: `https://google.com` ou `https://cloudflare.com`) et clique sur **Tester**.
3. La latence et le statut de disponibilité s'affichent en temps réel.

## 📁 Structure du projet

- `index.html` : Structure de la page et des widgets.
- `style.css` : Styles et mise en page (thème sombre).
- `app.js` : Logique de ping, calcul de latence et gestion des événements.

## Ce que mesure le test

Le navigateur mesure le temps écoulé autour d'une requête HTTP avec `fetch`.
Ce résultat n'est pas un ping ICMP : il peut inclure la résolution DNS,
la connexion et le traitement de la requête.

Le mode `no-cors` fournit une réponse opaque : le script ne peut pas lire
le code HTTP. Le statut « En ligne » indique que `fetch` a abouti ; il ne
garantit pas que la page a renvoyé un succès HTTP. Une erreur peut aussi
venir du réseau ou d'une restriction du navigateur.
