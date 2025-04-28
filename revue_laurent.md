# 🧪 Revue de code Semaine 1

**Cours** : Développement d'applications Web (420-W40-SF)  
**Programme** : Techniques de l’informatique – Programmation Web, mobile et jeux vidéo  
**Établissement** : Cégep de Sainte-Foy  
**Enseignant** : Jimmy Gilbert  

---

## 📋 Table des matières

   - [Le code](#le-code)
   - [Les tests](#les-tests)
   - [Autres considérations](#autres-considérations)
   - [semaine 2](#semaine-2)
   - [Le code révisé](#le-code-révisé)
   - [Tests du code](#tests-du-code)
   - [Autres considérations (partie 2)](#autres-considérations-partie-2)
   - [semaine 3](#semaine-3)
   - [Le code révisé (semaine 3)](#le-code-révisé-semaine-3)
   - [Tests du code (semaine 3)](#tests-du-code)
   - [Commentaires finaux](#commentaires-finaux)

---

### Le code
(J'ai imité l'entête d'Arthur pour que ça soit homogène entre son article et le miens, le reste est moi)

- Arthur a développé la page web de base vu qu'il avait la tâche de faire le récit 1.

- Les routes sont bien faits et vont être facile à expandre dessus. GlobalHeader est magnifique


### Les tests

- Vu qu'il n'y a pas de tests de fait, je partage moi qui test le site, ce qui a été fait jusqu'à maintenant.

- J'ai essayé tout les boutons avec succès, le bouton d'accueil en haut à gauche et le deuxième bouton "Accueil" font la
tâche suspectée. Vu que c'est le récit qui a été fait, je n'ai pas autre chose à dire.


### Autres considérations

- Je vois deux petits détails auquel nous devrons faire attention par la suite:

1. Comme ce que Jimmy a dit lors de la présentation d'un projet fait par une équipe l'année passé, important de faire
   que le message "voulez-vous vraiment quitter la partie en cours?" n'utilise pas une mécanique HTML de base, mais bel
   et bien une fonctionnalité Bootstrap.
2. S'assurer qu'on utilise Bootstrap en général, pas juste pour cette fenêtre popup.

Voilà la fin de ma revue de code.

-Laurent



# 🥚🅱️🥚 Revue de code Semaine 2 (dimanche 20 avril) (spécial Pâques)

### Le code révisé
- Aujourd'hui, je vais réviser le fichier ShipList.vue . Ce fichier est utilisé dans la page d'accueil pour choisir un vaisseau spatial de thématique Star Wars™.
- Je vois qu'il y a utilisation de props emit qui ont étés montrés durant le cours d'Application Web, pour permettre d'avoir un affichage dynamique avec les valeurs qui y sont utilisés. J'aime bien qu'il n'y a que le code nécessaire pour accomplir le chargement des vaisseaux.

### Tests du code
- Il y aura des tests à review pour la troisième revue de code, donc je partage encore mon expérience à utiliser le code que Arthur a fait.

- Pour commencer, le gif animé pour la page d'accueil, wow c'est une salutation parfaite pour ce qui s'en vient avec le reste du programme.
- La barre qui prend toute la largeur de l'écran fait que ce n'est pas possible de le manquer, et tout les vaisseaux sont là.
-Sur la page suivante après avoir passé l'accueil, nous sommes rendus au moment auquel nous allons commencer le combat. J'ai participé sur ça pour l'affichage, mais le bout à Arthur d'avoir la progression fait très bien la job comme version de test.

### Autre considérations (partie 2)
- Nous sommes rendus à créer le système de combat. Cela sera complexe vu le besoin de créer un interface.
- Il manque à corriger la table de Character (les ennemis) pour charger les bonnes informations au lieu des champs bidons.
- S'assurer que les validations/messages d'erreur utilisent Bootstrap au lieu de la fonctionnalité Javascript de base.

Donc c'est tout pour cette fois-ci!

-Laurent



# Revue de code Semaine 3 (dimanche 27 avril)

### Le code révisé (semaine 3)
- Le projet étant finit, c'était intéressant de pousser un projet Vue/Typescript jusqu'à sa fin. Je trouve que ça n'a pas été facile, vu que c'est très modulaire, c'est facile de perdre les bouts, savoir quoi est utilisé à quels endroits lorsque cela était en rapport à un système.
- On a eu quelques conflits des fois sur comment faire un bout, cela s'est résolu quelques fois par communication (surtout durant les cours), sinon c'était juste comprendre l'intention, et trouver une manière pour le glisser dans ce qui a été créé.

### Tests du code (semaine 3)
- Tester le programme en soi allait bien, Arthur a fait une bonne job avec ses bouts pour que le tout fonctionne sans que j'aille faire des corrections. Les troubles qu'il y avait étaient souvents mineurs, et qui n'impactait pas trop la fonctionnalité du programme en soi.
- Arthur a fait une bonne couverture de tests, en faisant des tests qui n'étaient pas complexe à lire. J'ai beaucoup de misère en JS/Vue, alors je n'ai pas pu faire une aussi bonne couverture que lui...
- La touche d'ajouter des .gifs animés en arrière-plan est rigolo, quoi que déconcentrant lorsque je regarde le code pendant que ça bouge dans le coin de l'oeil... Ça reste un net positif à l'expérience.


### Commentaires finaux
- Arthur a définitivement fait plus de travail que moi, même si le nombre de récits que nous deux avons créés est similaire, il mérite le crédit pour ça (et la réparation de vaisseau qui vient avec).
- J'ai l'impression que le découpage aurait pu être mieux conçu au final, mais étant le premier TP en Vue de cette envergure, c'est très simple de comprendre les troubles qui peuvent arriver et les voirs d'avance pour la prochaine fois.
- J'ai l'impression que c'est très facile d'avoir oublié quelque chose, changer des blocs de code de place et qu'une fonction n'est pas appelée, etc.
- Je comprend pourquoi que des collègues spammaient les clics de souris dans les autres cours, ils essayaient ce jeu-là à spammer le bouton d'attaque.
- J'ai vraiment voulu implémenter un "base hp" pour que l'affichage et réparation soient plus intéressants. (Le 5% en réparation donne plus que 5 hp si le joueur a plus que 100 hp), et j'aime le résultat que ça donne. Le jeu est faisable avec un taux de succès potable en ne changeant rien d'autres dans les chiffres.


-Laurent