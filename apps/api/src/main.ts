/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import fetch from 'node-fetch';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'API online' });
});

app.get('/artists', async (req, res) => {
  console.log(req.query.q);
  const response = await fetch(
    `https://api.deezer.com/search/artist/?q=${req.query.q}`
  );
  const body = await response.json();

  let result = [];
  for (let i = 0; i < body.data.length; i++) {
    const data = body.data[i];
    result.push({
      id: data.id,
      name: data.name,
      img: data.picture_medium,
      fans: data.nb_fan,
    });
  }

  res.status(200).json(result);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
