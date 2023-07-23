importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAqQNhXTEYJITxDh80KETr5U28WLziFREs",
  authDomain: "fir-notification-35cd7.firebaseapp.com",
  projectId: "fir-notification-35cd7",
  storageBucket: "fir-notification-35cd7.appspot.com",
  messagingSenderId: "996634436652",
  appId: "1:996634436652:web:9fbcac419c71a82cab5d89",
  measurementId: "G-PEDPQZ9D61",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
