Introduction :
Le but de l'exercice est de faire un tableau avec des données que l'on a reçu du backend en utilisant que du javascript pur (pas de jquery ou autres framework).
Voici les données du backend (à mettre en dur):

var _data_from_backend = [
    { "name": "Serveurs Bordeaux", "problem": "", "owner": "Pierre Richard", "urls": "3" },
    { "name": "Serveurs Mérignac", "problem": "3", "owner": "Albert Dedieux", "urls": "0" },
    { "name": "Serveurs Arcachon", "problem": "1", "owner": "Babette Jimenez", "urls": "2" },
    { "name": "Serveurs Langon", "problem": "", "owner": "Pierre Richard", "urls": "1" }
];
et voici le tableau que l'on voudrait afficher

Les étapes :
(Ceci n’est pas obligatoire, ça reste qu’une feuille de route)

- faire un index.html qui chargera tous tes fichiers utiles (JS, CSS, etc.) et qui aura les données reçu du
backend (en dur).
(conseil :  il faut utiliser l'event suivant pour que le JS s'ationne quand le chargement de la page est fini :
document.addEventListener( &quot;DOMContentLoaded&quot;, function ( e ) {
Controller.init();
} );
)

- faire les objets JS nécessaires pour créer tout le html (table, line_title, line_data, cell_title, cell_data, etc.)
Il y a plusieurs façons de faire de l'objet en JS, à vous de choisir
(conseil : faire un fichier par objet)

- faire l'initialisation des objets avec les données
(conseil : faire un fichier controller.js, qui initialisera et manipulera les objets)

- rajouté le html généré par les objets dans ta page HTML
(conseil : le controller doit s'occuper de cela)

- Faire du style pour l'affichage
(conseil : mettre des noms de class explicite a tous les éléments html pour une bonne lisibilité du css)

Attention au nommage ( class, variable, fonction, etc. ) pour la relecture du code.

Question subsidiaire :
1. Facile – comment faire un affichage trié par le nom ?
2. Moyen - comment faire un bouton a coté des problèmes pour faire apparaître la liste des problèmes dans une ligne en dessous
3. Difficile – comment faire une ligne de filtre en dessous de la ligne de titre qui permet de filtrer l’affichage des données.
