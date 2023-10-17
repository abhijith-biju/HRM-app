import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import {
    getFirestore,
    collection,
    query,
    orderBy,
    getDocs,
    onSnapshot,
    addDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyCA7aaXgARdDjMXAjCzxBGkmVKxwXKuBZA',
    authDomain: 'hrm-app-71d9a.firebaseapp.com',
    projectId: 'hrm-app-71d9a',
    storageBucket: 'hrm-app-71d9a.appspot.com',
    messagingSenderId: '836421250909',
    appId: '1:836421250909:web:b3cbd3491c5bcf0f2dc2b4',
};

initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db, 'employees');
const q = query(colRef, orderBy('updatedAt', 'desc'));

let employees = [];
onSnapshot(q, (snapshot) => {
    employees = [];

    const empTable = document.querySelector('.employees-table tbody');
    if (snapshot.docs.length === 0) {
        const tableRow = `<tr>
            <td colspan="6" class="text-center">
                No data to be displayed
            </td>
        </tr>`;
        empTable.innerHTML = tableRow;
        return;
    }

    empTable.innerHTML = '';
    snapshot.docs.forEach((doc) => {
        employees.push({ ...doc.data(), id: doc.id });
        const tableRow = `<tr>
            <td>${doc.data().empId}</td>
            <td>${doc.data().name}</td>
            <td>${doc.data().email}</td>
            <td>${doc.data().role}</td>
            <td>${doc.data().department}</td>
            <td>
                <ul class="employee-actions flex-container" data-emp-id = ${
                    doc.id
                }>
                    <li>
                        <button
                            type="button"
                            class="view-emp-btn flex-container"
                        >
                            <span
                                class="material-symbols-rounded"
                            >
                                visibility
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="edit-emp-btn flex-container"
                        >
                            <span
                                class="material-symbols-rounded"
                            >
                                edit_square
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="delete-emp-btn flex-container"
                        >
                            <span
                                class="material-symbols-rounded"
                            >
                                delete
                            </span>
                        </button>
                    </li>
                </ul>
            </td>
        </tr>`;
        empTable.innerHTML += tableRow;
    });
    console.log(employees);
});

const addEmployee = async (empObj) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'employees'), {
        ...empObj,
        updatedAt: serverTimestamp(),
    });
    console.log('Document written with ID: ', docRef.id);
};

const updateEmployee = async (empobj, docId) => {
    const docRef = doc(db, 'employees', docId);
    updateDoc(docRef, { ...empobj, updatedAt: serverTimestamp() });
};

const getNewEmpId = () => {
    const EmpIdColRef = collection(db, 'empIdCounter');
    return getDocs(EmpIdColRef)
        .then((snapshot) => {
            const currentVal = snapshot.docs[0];
            updateDoc(doc(db, 'empIdCounter', currentVal.id), {
                empIdCounter: snapshot.docs[0].data().empIdCounter + 1,
            });
            return snapshot.docs[0].data().empIdCounter;
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export { addEmployee, updateEmployee, getNewEmpId, employees, db };
