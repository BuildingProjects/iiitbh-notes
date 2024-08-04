import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyABo5BBuxmht_VfqtcsanlT12oR7J9o00k",
  authDomain: "testing-40b51.firebaseapp.com",
  projectId: "testing-40b51",
  storageBucket: "testing-40b51.appspot.com",
  messagingSenderId: "126684972756",
  appId: "1:126684972756:web:b7b02afe93996435601d41",
  measurementId: "G-84S6S8C83J"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;