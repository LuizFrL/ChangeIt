const functions = require('firebase-functions');
const app = require('express')();
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const cors = require('cors')


const req = new XMLHttpRequest();
const googleSearchApi = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

exports.api = functions.https.onRequest(app);

app.use(cors())

app.post('/nearbyGasStations', (request, response) => {
  const params = request.url.replace('/nearbyGasStations', '')
  req.open('GET', googleSearchApi + params)
  req.onload = () => {
    let resp = JSON.parse(req.responseText);
    response.send(resp)
  }
  req.onerror = () => {
    response.send('An error as occurred');
  }
  req.send()
})

app.get('', (request, response) => {
  response.send('Version 1.0')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`)
})
