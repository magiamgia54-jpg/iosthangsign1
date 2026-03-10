<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyAmPs0oybURLB1H1X_hXqE9YK7wbuJjvfw",
authDomain: "ios-thang-sign.firebaseapp.com",
projectId: "ios-thang-sign",
storageBucket: "ios-thang-sign.firebasestorage.app",
messagingSenderId: "1078812931625",
appId: "1:1078812931625:web:828a98486817afc0040e38",
measurementId: "G-7VHYJ13PSY"
};

const app = initializeApp(firebaseConfig);

window.auth = getAuth(app);
window.db = getFirestore(app);

window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;

</script>
