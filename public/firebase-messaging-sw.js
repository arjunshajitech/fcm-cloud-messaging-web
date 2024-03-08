importScripts(
    "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js"
  );
  
  const firebaseConfig = {
    apiKey: "AIzaSyBz_HyeCkyon5QLeXV0EZW3-GYs2o2i7zE",
    authDomain: "test-notification-662a3.firebaseapp.com",
    projectId: "test-notification-662a3",
    storageBucket: "test-notification-662a3.appspot.com",
    messagingSenderId: "662274289477",
    appId: "1:662274289477:web:cabcd9b08360e1331cd82c",
    measurementId: "G-SXJNH86HEK"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) => {
    const { body } = payload.notification;
    const title = "Joshua's App";
  
    const notificationOptions = {
      body,
      icon: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
    };
  
    return self.registration.showNotification(title, notificationOptions);
  });
  
  self.addEventListener("notificationclick", (event) => {
    const clickedNotification = event.notification;
    clickedNotification.close();
    console.log("Notification Clicked");
  });
  
  self.addEventListener("notificationclose", (event) => {
    console.log("Notification Closed");
  });