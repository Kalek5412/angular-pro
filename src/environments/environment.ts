// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyB25i8aVPux1OWjbGEiQLuHkBA8DkRXIpA",
      authDomain: "ecommerce-813ec.firebaseapp.com",
      projectId: "ecommerce-813ec",
      storageBucket: "ecommerce-813ec.appspot.com",
      messagingSenderId: "465993160400",
      appId: "1:465993160400:web:07c6b4485e4f5e9ba730d5"
    },
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
