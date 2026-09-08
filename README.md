# PITKER

Site vitrine bilingue construit avec Next.js 16 (App Router), React 19, TypeScript et Tailwind CSS 3.

## Installation

Node.js 24 LTS recommandé (`.nvmrc`), minimum 22.12.

```sh
nvm install
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Ne remplacez pas un `.env.local` existant : ajoutez seulement les variables manquantes.
`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` est facultative. Sans clé ou si le service échoue, la page contact conserve l’adresse et un lien vers Google Maps. Restreindre la clé aux domaines du site dans Google Cloud.

## Langues et référencement

Les URL françaises restent sans préfixe (`/contact`). Les pages anglaises sont sous `/en` (`/en/contact`). L’URL détermine le contenu, la langue HTML et les métadonnées dès le rendu serveur, sans détection navigateur ni localStorage. Le sélecteur conserve le chemin, la recherche et l’ancre ; les liens internes conservent la langue.

`proxy.ts` réécrit les URL françaises vers le segment interne `[lang]`. `/fr/*` redirige vers l’URL française publique ; `/en/legal-notice` redirige vers `/en/mentions-legales`.

- `app/[lang]/` : pages et layout, prérendus pour les deux langues.
- `lib/i18n.ts` : langues, chemins et routes du sitemap.
- `lib/translations/` : contenus français et anglais.
- `lib/page-metadata.ts` : titres, descriptions, canonical et hreflang par page.
- `constants/metadata.ts` : identité et données structurées communes.
- `components/` : sections du site et navigation.

## Vérification

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
# Ou toute la chaîne (Chromium doit être installé) :
npm run check
```

Les tests utilisent le build de production sur le port 3100 : rendu serveur et SEO des 20 URL, changements de langue, navigation mobile, carte indisponible, redirections et sitemap. Ils ne nécessitent pas de clé Google Maps réelle ; la CI utilise une valeur fictive et les tests interceptent le service. GitHub Actions exécute ces contrôles et l’audit npm.

Le build utilise Webpack pour conserver la compatibilité de `@next/bundle-analyzer` (`ANALYZE=true npm run build`). Le développement utilise Turbopack. ESLint reste en version 9, compatible avec les peer dependencies de `eslint-plugin-react`. Tailwind reste en version 3 pour préserver le rendu avant la refonte graphique.

## Production

```sh
npm run build
npm start
```

Configurer Node.js 24 et les variables publiques dans l’hébergement avant le build. La police Sen est téléchargée par `next/font` pendant le build, qui nécessite donc un accès à Google Fonts. Aucun déploiement n’est effectué par le workflow de qualité.
