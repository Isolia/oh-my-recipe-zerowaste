---
name: ohmyrecipe
about: Création d'un site de partage/bookmark de recette de produit de beauté et ménagé.
title: 'ohmyrecipe'
labels: ''
assignees: ''

---

## Oh My Recipe - ZeroWaste

Simplifier et regrouper des recettes de produits de beauté et ménagé fait maison.

### Description
Devant la multitude de sites proposant des recettes de produit de beauté et ménagé, il est parfois difficile de trouver des recettes simples et valide. Une fois une recette testé, si le site ou le blog qui référence la recette est supprimer, il est alors impossible de remettre la main dessus. Le site permettra de copier garder en mémoire les recettes et donc de se créer une compilation de ses recettes préférées, d'y avoir accès plus facile et sous le même format.


### Fonctionnalitées du site

V1

- création d'un compte utilisateur (avatar, pseudo, mdp, email).
- connexion / déconnexion de l'utilisateur.
- modifier le informations utilisateur.
- afficher le profil utilisateur avec toutes ses recettes enregistrés et crées.
- création d'une recette (titre, description, ingrédient, matériel, difficulté, durée, durée de conservation, type de recette, étapes de préparation, lien du site d'ou vient la recette).
- modification d'une recette.
- supression d'une recette.
- rechercher des recettes par un ou plusieurs ingrédients.
- mettre des recettes en favoris.

V2
- noter les recettes.
- laisser des commentaires aux recettes.
- indiquer le coût de revient de chaque recette.
- Page de conseils pour se lancer.
- Page de listing des sites zero-waste pour informer sur le mouvement.
- Page pour indiquer ou trouver les ingrédients (type aroma zone).
- Trier les recettes par notes, date, difficulté

## Quelles seront/pourraient être les technologies utilisées ?

Pour le moment juste une API donc pour le BACK :
- node.js
- ExpressJS
- sqitch
- PostgreSQL
- Joi / JSdoc / Swagger


Plus tard un Front propablement en REACT.

## MCD

CREATED, 0N USER, 11 RECIPE
USER: id, username, email, password, role
IS_WRITTEN, ON USER, 11 COMMENT

RECIPE: id, title, description, ingredient, equipment, difficulty, duration, shelf_life, preparation_step, url, img, created_at, update_at
USER_HAS_FAVORITE_RECIPE, 0N USER, 0N RECIPE: recipe_id, user_id
COMMENT: id, text

RECIPE_HAS_TAG, 1N RECIPE, 0N TAG: recipe_id, tag_id
TAG: id, name
CONCERS, 0N RECIPE, 11 COMMENT
