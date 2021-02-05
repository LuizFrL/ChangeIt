// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyAqeOfBwS7p5prTHGqfxsAYD7c2XfT_zLk',
      authDomain: 'fuelcompanyhash.firebaseapp.com',
      databaseURL: 'https://fuelcompanyhash.firebaseio.com',
      projectId: 'fuelcompanyhash',
      storageBucket: 'fuelcompanyhash.appspot.com',
      messagingSenderId: '134228045047',
      appId: '1:134228045047:web:cc083ee5e182472d96f7f2'
    }
};

export const apiKey = environment.firebase.apiKey;
export const API = 'http://localhost:3000';
