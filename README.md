# PITKER — Signal

Site de présentation indépendant de la direction artistique **Signal**. Ce dépôt contient son code, ses ressources et son historique Git. Il ne dépend d’aucun autre dossier PITKER.

## Présentation locale

Node.js 24 ou supérieur.

```sh
npm ci
npm run dev
```

Ouvrir **http://localhost:3222**. Le port est propre à cette proposition afin de pouvoir ouvrir les trois sites simultanément.

## Pages

- Accueil
- Le cabinet : `/what-we-do`
- Les associés et leurs biographies : `/people`
- Expertises : `/practices`
- Pages Life Sciences, Industrie, Private Equity et CEO Search
- Contact : `/contact`
- Mentions légales : `/mentions-legales`

Les pages françaises n’ont pas de préfixe. Les versions anglaises sont sous `/en`. Le sélecteur de langue conserve la page, les paramètres et l’ancre.

## Identité et présentation

Logo et étoile PITKER d’origine. Bleu `#003769`, rouge `#E63237`, blanc et gris. Les textes institutionnels, biographies, e-mails et adresse proviennent du site existant. Les textes éditoriaux proviennent exclusivement du site d’origine ; seuls quelques libellés courts de navigation peuvent différer. Aucun sélecteur de direction artistique dans le site client.

Prototype de présentation avec `noindex,nofollow`. Les liens e-mail ouvrent une messagerie ; aucune demande n’est envoyée automatiquement. La page Contact charge la carte Google Maps avec NEXT_PUBLIC_GOOGLE_MAPS_API_KEY et conserve un lien vers Google Maps. Une carte OpenStreetMap prend le relais si le service Google est indisponible. Les contenus légaux ont été repris de l’existant. Les polices sont chargées depuis Google Fonts.

## Vérifications

```sh
npm run lint
npm run typecheck
npm run build
npm test
```

Les tests vérifient le rendu serveur des vingt pages, les langues, l’identité, la navigation et les coordonnées. Ils ne nécessitent pas de navigateur installé.

## Git

Branche `main`. Dépôt indépendant : git@github.com:Hike42/pitker-signal.git. Les fichiers .env.local restent exclus de Git. Aucun déploiement ni envoi au client n’est réalisé automatiquement.

## Configuration de la carte

Configurer `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` dans `.env.local` avant le build, ou dans les variables de l’hébergement. Le fichier local a été repris du projet d’origine et n’est pas versionné. La clé publique doit autoriser le domaine de présentation côté Google.
