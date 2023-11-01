import { displayToast } from './toast.js';
import { tableFilter } from './tableFilter.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js';

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

let employees = [];
onSnapshot(collection(db, 'employees'), (snapshot) => {
    employees = [];

    snapshot.docs.forEach((doc) => {
        employees.push({ ...doc.data(), id: doc.id });
    });
    tableFilter();
});

const addEmployee = async (empObj) => {
    try {
        await addDoc(collection(db, 'employees'), empObj);
        displayToast('success', 'Added employee details.');
    } catch (err) {
        displayToast('error', `Couldn't add employee details.`);
    }
};

const updateEmployee = async (empObj, docId) => {
    try {
        await updateDoc(doc(db, 'employees', docId), empObj);
        displayToast('success', 'Updated employee details.');
    } catch (err) {
        displayToast('error', `Couldn't update employee details.`);
    }
};

const deleteEmployee = async (docId) => {
    try {
        await deleteDoc(doc(db, 'employees', docId));
        displayToast('success', 'Deleted employee details.');
    } catch (err) {
        displayToast('error', `Couldn't delete employee details.`);
    }
};

const getPhotoUrl = (files) => {
    //no file uploaded
    if (!files.length) {
        return Promise.resolve(false);
    }
    console.log('file added');

    const storage = getStorage();
    const storageRef = ref(storage, `employees/${crypto.randomUUID()}`);

    return uploadBytes(storageRef, files[0]).then((snapshot) => {
        return getDownloadURL(snapshot.ref);
    });
};

const getNextEmpId = () => {
    return new Promise(async (resolve) => {
        const docRef = doc(db, 'empIdCounter', 'empIdCounter');
        const docSnap = await getDoc(docRef);

        const empId = docSnap.data().nextEmpIdVal;
        await updateDoc(docRef, { nextEmpIdVal: empId + 1 });
        resolve(empId);
    });
};

export {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getNextEmpId,
    getPhotoUrl,
    employees,
    db,
};
