# Pitker - Site Web

Ce projet est un site web moderne construit avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- Architecture moderne avec Next.js 14
- TypeScript pour un code plus sûr et maintenable
- Styling avec Tailwind CSS
- Composants réutilisables et modulaires
- Optimisation des performances
- Support multilingue (prêt pour l'internationalisation)

## 📋 Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn
- Git

## 🛠 Installation

1. Clonez le repository :

```bash
git clone [URL_DU_REPO]
cd pitker
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env.local` à la racine du projet avec les variables d'environnement nécessaires :

```env
NEXT_PUBLIC_API_URL=votre_url_api
# Autres variables d'environnement...
```

## 🚀 Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📁 Structure du Projet

```
pitker/
├── app/                 # Pages et routes de l'application
├── components/          # Composants React
│   ├── home/           # Composants spécifiques à la page d'accueil
│   ├── industries/     # Composants liés aux industries
│   ├── practices/      # Composants liés aux pratiques
│   └── shared/         # Composants réutilisables
├── public/             # Fichiers statiques
├── styles/             # Fichiers de style globaux
└── types/              # Types TypeScript
```

## 🧪 Tests

Pour lancer les tests :

```bash
npm run test
# ou
yarn test
```

## 🏗 Build

Pour construire l'application pour la production :

```bash
npm run build
# ou
yarn build
```

## 🚀 Déploiement

Le déploiement est configuré pour Vercel. Pour déployer :

1. Poussez vos changements sur la branche main
2. Le déploiement automatique se déclenchera sur Vercel

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Guidelines de Code

- Utilisez des commits conventionnels
- Suivez les règles ESLint et Prettier
- Écrivez des tests pour les nouvelles fonctionnalités
- Documentez les changements majeurs

## 🔒 Sécurité

- Ne committez jamais de données sensibles
- Utilisez des variables d'environnement pour les secrets
- Maintenez les dépendances à jour

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
