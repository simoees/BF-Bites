// Configuração Firebase para BF Bites
// Usa Firebase compatível para funcionar sem bundler

const firebaseConfig = {
  apiKey: "AIzaSyArq7QmUjxkJ3tOx1WulugErf388tnxTOw",
  authDomain: "bf-bites.firebaseapp.com",
  projectId: "bf-bites",
  storageBucket: "bf-bites.firebasestorage.app",
  messagingSenderId: "3501684000",
  appId: "1:3501684000:web:15277980e41b4746649345",
  measurementId: "G-MZ022RCP2L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
window.firebaseApp = firebaseApp;
window.dbFirebase = firebase.firestore();

console.log('Firebase inicializado:', firebaseApp.name);
