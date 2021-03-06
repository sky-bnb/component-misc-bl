const express = require('express');

const app = express();
const port = 3006;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('./public/dist'));


app.listen(port, () => console.log(`LISTENING TO ANDRE PORT ${port}`));
