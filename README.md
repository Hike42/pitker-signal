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

Prototype de présentation avec `noindex,nofollow`. Les liens e-mail ouvrent une messagerie ; aucune demande n’est envoyée automatiquement. La page Contact affiche un plan SVG local des rues OpenStreetMap et conserve un lien externe vers Google Maps. Aucun service de cartographie ni clé API n’est appelé au chargement. Les contenus légaux ont été repris de l’existant. Les polices sont chargées depuis Google Fonts.

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

## Plan de localisation

Le plan `public/design/pitker-street-plan.svg` est un asset local construit à partir des rues OpenStreetMap (données © OpenStreetMap contributors, ODbL). Il est servi sans JavaScript de cartographie, sans clé API et sans requête externe. L’étoile provient du favicon original PITKER. L’attribution est visible sous le plan. Données extraites le 13 septembre 2026 ; plan simplifié de localisation, sans navigation interactive.

## Netlify

`netlify.toml` fixe le build `npm run build`, le dossier `.next` et Node 24. L’adaptateur OpenNext est détecté et maintenu automatiquement par Netlify : ne pas ajouter de plugin historique, de redirection SPA `/* /index.html 200`, ni d’export statique.

Les photographies utilisent `next/image` avec des tailles adaptatives et le CDN Images Netlify. Next.js conserve la gestion du cache HTML et des assets ; aucun cache permanent n’est forcé sur les pages. La protection des sessions pendant les redéploiements est activée via `NETLIFY_NEXT_SKEW_PROTECTION`.

Les URL de métadonnées et du sitemap utilisent `SITE_URL` si fourni, sinon `DEPLOY_PRIME_URL` / `URL` injectés par Netlify. Les maquettes restent en `noindex,nofollow` pour la présentation client.

Le plan de contact est un SVG local avec attribution OpenStreetMap. Aucune clé Maps n’est nécessaire ; les anciennes variables Maps peuvent être retirées dans Netlify. Les liens d’itinéraire ne s’ouvrent qu’au clic.

Vérification locale : `npm run check` avec Node 24 ou ultérieur. Une modification poussée sur `main` déclenche le déploiement si le dépôt est connecté à Netlify. Après déploiement, vérifier `/`, `/en`, `/contact`, la redirection `/fr/contact` et une page métier, ainsi que le chargement des images.
