const express = require('express');

const app = express();
const port = 3005;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('./public/dist'));

// app.use('/neighborhood', (req, res) => {
//     .then((data) => {
//       res.status(202);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.end(err);
//     });
// });


app.listen(port, () => console.log(`LISTENING TO ANDRE PORT ${port}`));
