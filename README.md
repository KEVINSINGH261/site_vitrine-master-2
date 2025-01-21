# KevinArsan

## Description
SkillBoost Academy est une application web développée en Angular. Ce site offre la possibilité d'acheter des formations en ligne dans le domaine de la finance et du marketing.

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés :
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Installation

Voici les commandes à effectuer dans le terminal :
1. Commencez par cloner le projet :
   ```bash
   git clone https://github.com/username/mon-site-angular.git
   ```

2. Puis allez dans le dossier du projet :
   ```bash
   cd site_vitrine_master_2
   ```

3. Ensuite, exécutez cette commande pour installer les dépendances du projet :
   ```bash
   npm install
   ```

4. Pour finir, lancez le projet :
   ```bash
   ng serve
   ```

## Ajouter des Pages et Comprendre les Composants

### Ajouter une Nouvelle Page
1. Créez un nouveau composant Angular pour la page en utilisant Angular CLI :
   ```bash
   ng generate component nom-de-la-page
   ```
   Cela crée un dossier avec les fichiers nécessaires (`.html`, `.css`, `.ts`, `.spec.ts`) dans le répertoire `src/app`.

2. Ajoutez la route pour la nouvelle page dans le fichier `app-routing.module.ts` :
   ```typescript
   import { NomDeLaPageComponent } from './nom-de-la-page/nom-de-la-page.component';

   const routes: Routes = [
     { path: 'nom-de-la-page', component: NomDeLaPageComponent },
     // autres routes
   ];
   ```

3. Mettez à jour la navigation (par exemple, dans le fichier `app.component.html`) pour inclure un lien vers la nouvelle page :
   ```html
   <a routerLink="/nom-de-la-page">Nom de la Page</a>
   ```

### Fonctionnement des Composants
- **Composants Angular** : Ce sont les blocs de construction de base d'une application Angular. Chaque composant se compose de quatre fichiers principaux :
  - `.html` : Contient le template HTML du composant.
  - `.css` : Contient les styles spécifiques au composant.
  - `.ts` : Contient la logique du composant (classe TypeScript).
  - `.spec.ts` : Fichier de test pour le composant.


