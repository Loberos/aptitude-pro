import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAiURM-QS_5mzgeTdQiC8hikcsaeC3GGI",
  authDomain: "aptitude-pro-56197.firebaseapp.com",
  projectId: "aptitude-pro-56197",
  storageBucket: "aptitude-pro-56197.firebasestorage.app",
  messagingSenderId: "913588252253",
  appId: "1:913588252253:web:84fd204237744c8ad7a7b4",
  measurementId: "G-NPXXQCRPZ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
