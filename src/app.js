const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.listen(3011, () => console.log('listening on port 3011') );
