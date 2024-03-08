import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBz_HyeCkyon5QLeXV0EZW3-GYs2o2i7zE",
    authDomain: "test-notification-662a3.firebaseapp.com",
    projectId: "test-notification-662a3",
    storageBucket: "test-notification-662a3.appspot.com",
    messagingSenderId: "662274289477",
    appId: "1:662274289477:web:cabcd9b08360e1331cd82c",
    measurementId: "G-SXJNH86HEK"
});

const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
  
    const { body } = payload.notification;
    const { title } = payload.notification;
    const notificationOptions = {
        body,
        icon: "",
    };
    const notification = new Notification(title, notificationOptions);

    self.registration.showNotification(notificationTitle,notificationOptions);
});
