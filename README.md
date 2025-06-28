# DodoZen - Application de suivi du sommeil de bébé

DodoZen est une application Next.js moderne pour suivre et optimiser le sommeil de votre bébé. Elle offre une interface intuitive avec des fonctionnalités comme un chronomètre de sieste, des recommandations personnalisées, et un historique détaillé.

## 🚀 Fonctionnalités

- **Chronomètre de sieste** : Suivez en temps réel la durée des siestes
- **Recommandations intelligentes** : Conseils personnalisés basés sur les cycles de sommeil
- **Historique détaillé** : Visualisez les tendances de sommeil
- **Mode nuit** : Interface adaptée pour les sessions nocturnes
- **Gestion multi-bébés** : Suivez plusieurs enfants
- **Interface responsive** : Optimisée pour mobile et desktop

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clonez le projet** (si vous avez un repository) ou naviguez vers le dossier :
   ```bash
   cd dodozen-app
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancez le serveur de développement** :
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrez votre navigateur** et allez sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du projet

```
dodozen-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Page principale
│   ├── components/
│   │   └── ui/                  # Composants UI réutilisables
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── progress.tsx
│   └── lib/
│       └── utils.ts             # Utilitaires
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes
- **React Hooks** : Gestion d'état

## 📱 Utilisation

### Navigation
L'application dispose de 4 onglets principaux :
- **Accueil** : Vue d'ensemble et chronomètre
- **Historique** : Données passées et statistiques
- **Conseils** : Recommandations et astuces
- **Paramètres** : Configuration et préférences

### Chronomètre de sieste
1. Cliquez sur "Démarrer" pour commencer le chronométrage
2. Utilisez "Pause" pour mettre en pause
3. "Reset" pour remettre à zéro

### Mode nuit
Activez le mode nuit en cliquant sur l'icône lune/soleil dans l'en-tête pour une expérience plus douce le soir.

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env.local` à la racine du projet pour les variables d'environnement :

```env
NEXT_PUBLIC_APP_NAME=DodoZen
```

### Personnalisation des couleurs
Modifiez les variables CSS dans `src/app/globals.css` pour personnaliser le thème.

## 📦 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Lance l'application en mode production
- `npm run lint` : Vérifie le code avec ESLint

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez en un clic

### Autres plateformes
L'application peut être déployée sur :
- Netlify
- Railway
- AWS Amplify
- Tout hébergeur supportant Node.js

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est à jour
2. Supprimez `node_modules` et `package-lock.json`
3. Relancez `npm install`
4. Consultez les issues GitHub

## 🎯 Roadmap

- [ ] Synchronisation cloud
- [ ] Notifications push
- [ ] Graphiques avancés
- [ ] Export de données
- [ ] Mode hors ligne
- [ ] Intégration avec des trackers de sommeil

---

Développé avec ❤️ pour les parents et leurs bébés 