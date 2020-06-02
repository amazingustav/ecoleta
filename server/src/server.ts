import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Gustav'
  ])
});

app.listen(3333);