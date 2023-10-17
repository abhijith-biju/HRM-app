import { db } from './firestore.js';
import {
    collection,
    getDocs,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const getData = (collectionName) => {
    const colRef = collection(db, collectionName);
    return getDocs(colRef)
        .then((snapshot) => {
            return snapshot.docs[0].data();
        })
        .catch((err) => {
            console.log(err.message);
        });
};

const loadSkillOptions = async () => {
    let data;
    await getData('skills').then((res) => (data = res));

    for (const optionsElem of document
        .querySelectorAll('.select-options')
        .values()) {
        for (const skill of data['skills']) {
            const liElem = `<li>
                                <button type="button" data-value="${skill}">
                                    ${skill}
                                </button>
                            </li>`;

            optionsElem.innerHTML += liElem;
        }
    }
};

const loadDepartmentOptions = async () => {
    let data;
    await getData('department').then((res) => (data = res));

    for (const selectElem of document
        .querySelectorAll('.dept-select')
        .values()) {
        for (const dept of data['department']) {
            const optionElem = `<option value="${dept}">${dept}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

const loadRoleOptions = async () => {
    let data;
    await getData('role').then((res) => (data = res));

    for (const selectElem of document
        .querySelectorAll('.role-select')
        .values()) {
        for (const role of data['role']) {
            const optionElem = `<option value="${role}">${role}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

const loadLocationOptions = async () => {
    let data;
    await getData('location').then((res) => (data = res));

    for (const selectElem of document
        .querySelectorAll('.location-select')
        .values()) {
        for (const location of data['location']) {
            const optionElem = `<option value="${location}">${location}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

loadSkillOptions();
loadDepartmentOptions();
loadRoleOptions();
loadLocationOptions();
