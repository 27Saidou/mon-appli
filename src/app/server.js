// Installer le serveur express
const express = require ('express');
const path = require ('path');

const app = express ();

// Ne sert que les fichiers statiques du répertoire dist
app.use (express.static (__ dirname + '/ dist / <my-app>'));

app.get ('/ *', fonction (req, res) {
    
res.sendFile (path.join (__ dirname +'/dist/<my-app>/index.html'));
});

// Démarrer l'application en écoutant le port Heroku par défaut
app.listen (process.env.PORT || 8080);
