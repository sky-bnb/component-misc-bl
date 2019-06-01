const express = require('express');
const cors = require('cors');

const app = express();
const port = 3005;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public/dist'));

app.listen(port, () => console.log(`LISTENING TO ANDRE PORT ${port}`));
