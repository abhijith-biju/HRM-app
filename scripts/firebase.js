// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyCA7aaXgARdDjMXAjCzxBGkmVKxwXKuBZA',
    authDomain: 'hrm-app-71d9a.firebaseapp.com',
    projectId: 'hrm-app-71d9a',
    storageBucket: 'hrm-app-71d9a.appspot.com',
    messagingSenderId: '836421250909',
    appId: '1:836421250909:web:b3cbd3491c5bcf0f2dc2b4',
};

// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'employees');

// get collection data
// getDocs(colRef)
//     .then((snapshot) => {
//         let employees = [];
//         snapshot.docs.forEach((doc) => {
//             employees.push({ ...doc.data(), id: doc.id });
//         });
//         console.log(employees);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// realtime collection data
onSnapshot(colRef, (snapshot) => {
    let employees = [];
    snapshot.docs.forEach((doc) => {
        employees.push({ ...doc.data(), id: doc.id });
    });
    console.log(employees);
});

const addEmployee = async (empObj) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'employees'), empObj);
    console.log('Document written with ID: ', docRef.id);
};

export { addEmployee };
