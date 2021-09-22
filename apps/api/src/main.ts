import * as express from 'express';
import fetch from 'node-fetch';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'API online' });
});

/**
 * Search for the given artist
 *
 * This endpoint lessens the amount of data returned from the server by just returning the data the front-end is interested in
 */
app.get('/artists', async (req, res) => {
  const response = await fetch(
    `https://api.deezer.com/search/artist/?q=${req.query.q}`
  );
  const body = await response.json();

  const result = [];
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

/**
 * Returns all unique albums for the given artist
 *
 * This endpoint has to use the top track list as there doesn't seem to be an easier way to get artist's albums
 */
app.get('/artist/:artist_id/albums', async (req, res) => {
  // TODO: Fix limit to something sensible and use next pointer and total attributes returned in JSON
  const response = await fetch(
    `https://api.deezer.com/artist/${req.params.artist_id}/top?limit=9999`
  );
  const body = await response.json();

  const result = [];
  const albumIdSet = new Set();
  for (let i = 0; i < body.data.length; i++) {
    const data = body.data[i];
    // If we don't have the album in the result set yet, then add it
    if (!albumIdSet.has(data.album.id)) {
      albumIdSet.add(data.album.id);
      // Have to do an extra API call to get the release date of the album here
      const albumResponse = await fetch(
        `https://api.deezer.com/album/${data.album.id}`
      );
      const albumBody = await albumResponse.json();
      result.push({
        id: data.album.id,
        name: data.album.title,
        img: data.album.cover_medium,
        fans: albumBody.fans,
        release_date: albumBody.release_date,
      });
    }
  }

  res.status(200).json(result);
});

/**
 * Returns top 5 tracks for the given artist
 */
app.get('/artist/:artist_id/top5', async (req, res) => {
  // TODO: Fix limit to something sensible and use next pointer and total attributes returned in JSON
  const response = await fetch(
    `https://api.deezer.com/artist/${req.params.artist_id}/top?limit=5`
  );
  const body = await response.json();

  const result = [];
  for (let i = 0; i < body.data.length; i++) {
    const data = body.data[i];
    result.push({
      id: data.id,
      name: data.title,
      duration: data.duration,
    });
  }

  res.status(200).json(result);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
