// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIUrl: 'http://localhost:8080/innova/api/',
  firebase: {
    apiKey: 'AIzaSyDWU0EcvZVxbazim6OeYDU7Dryk1MRPvd4',
    authDomain: 'innova-ufps.firebaseapp.com',
    projectId: 'innova-ufps',
    storageBucket: 'innova-ufps.appspot.com',
    messagingSenderId: '650800187777',
    appId: '1:650800187777:web:232d70e4785ec52139c080',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
