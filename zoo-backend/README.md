# Zoo Backend

## Présentation
Ce projet est un backend NestJS pour la gestion d'un zoo, avec persistance PostgreSQL, documentation Swagger, gestion des rôles et endpoints sécurisés.

## Utilisation après clonage
1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd zoo-backend
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Configurer les variables d'environnement**
   - Créez un fichier `.env` à la racine de `zoo-backend` (voir section Configuration ci-dessous)
4. **(Optionnel) Vérifier la base de données**
   - Assurez-vous que PostgreSQL tourne et que la base `zoo` existe (ou modifiez le nom dans `.env`)
5. **Lancer le serveur**
   ```bash
   npm run start:dev
   ```
6. **Accéder à la documentation Swagger**
   - Rendez-vous sur [http://localhost:3000/api](http://localhost:3000/api)

## Prérequis
- Node.js >= 16
- npm >= 8
- PostgreSQL (par défaut sur `localhost:5433`)

## Installation
```bash
cd zoo-backend
npm install
```

## Configuration
Créez un fichier `.env` à la racine de `zoo-backend` avec le contenu suivant (adaptez si besoin) :
```
DB_HOST=localhost
DB_PORT=5433
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=zoo
```

## Lancement du serveur
```bash
npm run start:dev
```
Le serveur démarre sur [http://localhost:3000](http://localhost:3000)

## Documentation API (Swagger)
Swagger est disponible sur [http://localhost:3000/api](http://localhost:3000/api)
- Toutes les routes, schémas et paramètres sont documentés.
- Utilisez le bouton "Authorize" pour tester les routes protégées avec un token JWT.

## Entités principales
### Animal
- `id` (number) : identifiant unique
- `name` (string) : nom de l'animal
- `species` (string) : espèce
- `health` (number) : santé (par défaut 100)

### Enclos
- `id` (number) : identifiant unique
- `nom` (string) : nom de l'enclos
- `capacite` (number) : capacité maximale
- `type` (string) : type d'enclos (Herbivore, Carnivore, etc.)

## Endpoints principaux
### Animaux
- `POST /animaux` : créer un animal
- `GET /animaux` : lister tous les animaux
- `GET /animaux/:id` : récupérer un animal (authentifié)
- `GET /animaux/search/name?name=...` : rechercher par nom
- `DELETE /animaux/:id` : supprimer un animal (gardien uniquement)
- `GET /animaux/soigner/:id` : soigner un animal (vétérinaire uniquement)

### Enclos
- `POST /enclos` : créer un enclos
- `GET /enclos` : lister tous les enclos
- `GET /enclos/:id` : récupérer un enclos
- `PATCH /enclos/:id` : mettre à jour un enclos
- `DELETE /enclos/:id` : supprimer un enclos

## Authentification et rôles
- Authentification via JWT (ex : Auth0)
- Rôles supportés : `gardien`, `veterinaire`
- Certaines routes sont protégées par rôle (voir Swagger)

## Exemples de requêtes
### Créer un animal
```bash
curl -X POST http://localhost:3000/animaux \
  -H "Content-Type: application/json" \
  -d '{"name": "Simba", "species": "Lion"}'
```

### Soigner un animal (vétérinaire)
```bash
curl -X GET http://localhost:3000/animaux/soigner/1 \
  -H "Authorization: Bearer <TOKEN>"
```

### Supprimer un animal (gardien)
```bash
curl -X DELETE http://localhost:3000/animaux/1 \
  -H "Authorization: Bearer <TOKEN>"
```

## Contribution
- Forkez le repo, créez une branche, proposez vos PR !
- Respectez la structure des modules NestJS.

## Licence
MIT
