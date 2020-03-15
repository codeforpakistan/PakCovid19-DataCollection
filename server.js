const express = require('express');

const app = express();

app.use(express.static('./dist/PakCovid19-DataCollection'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/PakCovid19-DataCollection/' }),
);

app.listen(process.env.PORT || 8080);
