const express = require('express');

const app = express();

const serverName = 'example-app-' + Math.floor(Math.random() * 10);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('listening');
  console.log('Server name: ' + serverName);
  console.log('env variable using downward API: ' + process.env.MY_NODE_NAME);
  console.log('env variable: ' + process.env.RANDOM_VAR);
  console.log('env variable from ConfigMap: ' + process.env.VAR_FROM_CONFIGMAP);
  console.log('env variable from secret: ' + process.env.MY_PASSWORD);
});
