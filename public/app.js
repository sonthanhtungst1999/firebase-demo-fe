
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
const vapidKey =
  "BItu4fWZzejSjAUfkRdNPNurVP-e9MPoxhs_Na0BEWjZv6qeHlagf7A49cyd0hclEiIK5OVaQD_uzRE5U0wnscM";

function subscribe() {
  Notification.requestPermission().then((permission) => {
    console.log(`Request permission: ${permission}`);
    if (permission == 'granted') {
      messaging
        .getToken({ vapidKey })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
						document.getElementById('tokenId').innerHTML = currentToken;
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    }
  });
}

messaging.onMessage(res => console.log(res))

function pushNotification() {
  const token = document.getElementById('token').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const firebaseBody = {
    to: token,
    notification: {
      title,
      body: content
    }
  }

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'key=AAAA6AwKpCw:APA91bFihJJA9d3JIh1vpL-mvYEmoywI1YqLngzuz0Ej67HWaRzH-ybRoOjxILBIpKxMefoc9FP02hzj6jqvhFvTMuAgMxMKe_Rrsboxh2y-Gn6FMx4RjL0A_ylj96npdcCs6TO70nEi'
    },
    body: JSON.stringify(firebaseBody)
  })
  .then(response => response.data)
  .then(data => console.log(data))
  // console.log(firebaseBody)
}

