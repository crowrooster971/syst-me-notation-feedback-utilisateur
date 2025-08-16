const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('src'));

app.listen(PORT, () => {
    console.log(`Serveur en cours d\'exécution sur http://localhost:${PORT}`);
});
