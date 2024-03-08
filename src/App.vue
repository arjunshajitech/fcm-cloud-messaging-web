

<script setup>
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { ref } from 'vue'
const token = ref('');

const firebaseConfig = {
  apiKey: "AIzaSyBz_HyeCkyon5QLeXV0EZW3-GYs2o2i7zE",
  authDomain: "test-notification-662a3.firebaseapp.com",
  projectId: "test-notification-662a3",
  storageBucket: "test-notification-662a3.appspot.com",
  messagingSenderId: "662274289477",
  appId: "1:662274289477:web:cabcd9b08360e1331cd82c",
  measurementId: "G-SXJNH86HEK"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const requestPermission = () => {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');


      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);

        const { body } = payload.notification;
        const { title } = payload.notification;

        const notificationOptions = {
          body,
          icon: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
        };

        const notification = new Notification(title, notificationOptions);
      });

    }
  })
}

getToken(messaging, { vapidKey: 'BPlakiFD7BWw9um2XGt6YEc1P_mIK3woI1kre30KowBUH_bQsYuK19jFLs06z9HMRUv7zgBQyUCp9yRzYkwZ2CU' }).then((currentToken) => {
  if (currentToken) {
    token.value = currentToken;
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

requestPermission();



</script>


<template>
  <div>
    <p class="title">FIREBASE COULD MESSAGING</p>
    <p class="token-text">TOKEN</p>
    <p class="token">{{ token }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: monospace;
}

.title {
  font-size: 70px;
  color: green;
}

.token-text {
  font-size: 30px;
  color: green;
}

.token {
  font-size: 10px;
  color: green;
  font-weight: bold;
}
</style>