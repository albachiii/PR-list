const uuidv4 = require('uuid/v4')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
var ip = require('ip');

const app = express();

const config = {
    name: 'pr-list-app',
    port: 3000,
    host: '0.0.0.0',
};

let pull_requests = {
  uuid: uuidv4(),
  1: {
    id: '1',
    text: 'PR1',
    userId: 'albachiii',
  },
  2: {
    id: '2',
    text: 'PR2',
    userId: 'albachiii',
  },
};

app.get('/', (req, res) => {
  return res.send(Object.values(pull_requests));
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(process.env.HTTPS_PORT, () =>
  console.log(`${config.name} listening on ${ip.address()}:${config.port}`),
);