const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Autoriser le serveur à distribuer tous les fichiers du dossier (HTML, JS, JSON, images)
app.use(express.static(__dirname));

// Route principale vers la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Lance le serveur
app.listen(PORT, () => {
    console.log(`Serveur actif sur le port ${PORT}`);
});
