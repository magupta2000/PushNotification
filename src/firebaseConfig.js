// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)

function requestPermission() {
    Notification.requestPermission().then(async (permission) => {
        if (permission === 'granted') {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/firebase-messaging-sw.js') // Path to service worker file
                  .then(registration => {
                    return getToken(messaging, {
                        vapidKey: process.env.REACT_APP_VAPID_KEY,
                        serviceWorkerRegistration: registration,
                    }).then(token => {
                        if (token) {
                            console.log('Service Worker registered successfully:', token);
                        }
                    })
                  })
                  .catch(error => {
                    console.error('Service Worker registration failed:', error);
                  });
              }
        }
    })
}

requestPermission();
export default messaging
