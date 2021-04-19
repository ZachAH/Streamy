const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000',
      clientId: '70972199265040b4807adf0392628f36',
      clientSecret: 'd7a506858b2849339e2e12d06f558f4e',
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        res.sendStatus(400)
      })
  })