import { displayToast } from './toast.js';
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
    deleteDoc,
    doc,
    serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import { tableFilter } from './tableFilter.js';

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
// const q = query(colRef, orderBy('updatedAt', 'desc'));

let employees = [];
onSnapshot(colRef, (snapshot) => {
    employees = [];

    // console.log(snapshot.metadata.hasPendingWrites ? 'Local' : 'Server');
    snapshot.docs.forEach((doc) => {
        employees.push({ ...doc.data(), id: doc.id });
    });
    tableFilter();
    console.log(employees);
});

const addEmployee = async (empObj) => {
    try {
        // const docRef = await addDoc(collection(db, 'employees'), {
        //     ...empObj,
        //     updatedAt: serverTimestamp(),
        // });
        const docRef = await addDoc(collection(db, 'employees'), empObj);
        console.log('Document written with ID: ', docRef.id);
        displayToast('success', 'Added employee details.');
    } catch (err) {
        displayToast('error', `Couldn't add employee details.`);
        console.log(err);
    }
};

const updateEmployee = async (empObj, docId) => {
    try {
        const docRef = doc(db, 'employees', docId);
        // await updateDoc(docRef, { ...empObj, updatedAt: serverTimestamp() });
        await updateDoc(docRef, empObj);
        displayToast('success', 'Updated employee details.');
    } catch (err) {
        displayToast('error', `Couldn't update employee details.`);
        console.log(err);
    }
};

const deleteEmployee = async (docId) => {
    try {
        const docRef = doc(db, 'employees', docId);
        await deleteDoc(docRef);
        displayToast('success', 'Deleted employee details.');
    } catch (err) {
        displayToast('error', `Couldn't delete employee details.`);
        console.log(err);
    }
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

export {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getNewEmpId,
    employees,
    db,
};
