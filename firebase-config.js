const firebaseConfig = {
  apiKey: "AIzaSyDJzanaJX6hXjWVKhI2auXdQZNPJ94USBw",
  authDomain: "maarrawi-35c7d.firebaseapp.com",
  projectId: "maarrawi-35c7d",
  appId: "1:952411152346:web:88fdbcdfa57e48f07a2ae3"
};
const WHATSAPP = "963945411140";
const STORE_NAME = "معراوي";
const ADMIN_EMAIL = "admin@maarrawi.com";
const CATEGORIES = ["سجائر","أرجيلة","معسل","تبغ لف","سيجار","فيب","إكسسوارات"];
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
