import * as functions from 'firebase-functions';
// import * as http from 'http';
// import {apiKey} from '../../src/environments/environment';

// const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${apiKey}`;

export const getNearbyGasStations = functions.https.onRequest((request, response) => {
  // console.log('testeeeeeeeeeeeeeeeeeee');
  // const result = http.get(apiUrl, {});
  // response.send({params: request.params, teste1: 5345353453535345345, url: request.url, req: result});
  response.send('Oi pra essa porra de mundo');
});
