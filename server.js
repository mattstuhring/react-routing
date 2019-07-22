'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
const PORT = process.env.PORT || 5000;

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Start server!!!
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// Get movies related to user search
app.get('/movies', (req, res) => {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${req.query.data}&api_key=${process.env.MOVIES_API_KEY}&language=en-US&page=1&include_adult=true`;

  request
    .get(URL)
    .then(result => {

      res.send(result.body);
    })
    .catch(err => {
      console.error('ERR: ', err);
    });
});

// Get movie details by movie ID
app.get('/movie', (req, res) => {
  const URL = `https://api.themoviedb.org/3/movie/${req.query.data}?api_key=${process.env.MOVIES_API_KEY}&language=en-US`;

  request
    .get(URL)
    .then(result => {

      res.send(result.body);
    })
    .catch(err => {
      console.error('ERR: ', err);
    });
});
