// Configuration Firebase de l'app de Mark — projet « remuneration-mark »
// (base de données totalement séparée de celle de Séb).
//
// ➜ Seule la clé API est à coller : remplace COLLE_ICI_LA_CLE_API par la valeur
//   « apiKey » affichée dans la console Firebase (Paramètres du projet > Vos applications
//   > Registre Mark > Configuration du SDK). Cette clé est publique par nature (elle est
//   visible dans toute app web Firebase) ; la vraie protection, ce sont les règles
//   Firestore qui n'autorisent que le compte de Mark.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBU9OLRqkkzUxAk948IuTDv1RxcwuDPyu0",
  authDomain: "remuneration-mark.firebaseapp.com",
  projectId: "remuneration-mark",
  storageBucket: "remuneration-mark.firebasestorage.app",
  messagingSenderId: "457842150143",
  appId: "1:457842150143:web:2349259c1056b787351aca"
};
