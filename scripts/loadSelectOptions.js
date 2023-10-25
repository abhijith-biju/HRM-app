import { db } from './firestore.js';
import {
    collection,
    getDocs,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const getOptionsData = (collectionName) => {
    const colRef = collection(db, collectionName);
    return getDocs(colRef)
        .then((snapshot) => {
            return snapshot.docs[0].data()[`${collectionName}`].sort();
        })
        .catch((err) => {
            console.log(err.message);
        });
};

const loadSkillOptions = async () => {
    let data = await getOptionsData('skills');

    for (const optionsElem of document
        .querySelectorAll('.select-options')
        .values()) {
        for (const skill of data) {
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
    let data = await getOptionsData('department');

    for (const selectElem of document
        .querySelectorAll('.dept-select')
        .values()) {
        for (const dept of data) {
            const optionElem = `<option value="${dept}">${dept}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

const loadRoleOptions = async () => {
    let data = await getOptionsData('role');

    for (const selectElem of document
        .querySelectorAll('.role-select')
        .values()) {
        for (const role of data) {
            const optionElem = `<option value="${role}">${role}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

const loadLocationOptions = async () => {
    let data = await getOptionsData('location');

    for (const selectElem of document
        .querySelectorAll('.location-select')
        .values()) {
        for (const location of data) {
            const optionElem = `<option value="${location}">${location}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

loadSkillOptions();
loadDepartmentOptions();
loadRoleOptions();
loadLocationOptions();
