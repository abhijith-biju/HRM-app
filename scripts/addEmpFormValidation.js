import { selectedSkillsList } from './formCustomDropdown.js';
import { addEmployee, getNewEmpId } from './firestore.js';
import { resetAddEmpForm } from './resetAddEmpForm.js';
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js';

document.querySelector('#add-emp-form').onsubmit = function (e) {
    e.preventDefault();

    for (const DOMelem of this.querySelectorAll('.error-msg').values()) {
        DOMelem.classList.add('display-hidden');
    }

    const checkInputValidity = (inputElem) => {
        if (!inputElem.checkValidity()) {
            const errorMsgContainer = inputElem
                .closest('.form-entry')
                .querySelector('.error-msg');

            errorMsgContainer.innerHTML = inputElem.validationMessage;
            errorMsgContainer.classList.remove('display-hidden');
            return false;
        }

        return true;
    };

    const inpElemList = this.querySelectorAll(
        'input:not(.skill-search-input), textarea, select'
    ).values();

    for (const inpElem of inpElemList) {
        if (!checkInputValidity(inpElem)) {
            return false;
        }
    }

    if (selectedSkillsList.size == 0) {
        const errorMsgContainer = this.querySelector('.skills-input-container')
            .closest('.form-entry')
            .querySelector('.error-msg');

        errorMsgContainer.innerHTML = 'Select atleast one skill';
        errorMsgContainer.classList.remove('display-hidden');
        return false;
    }

    const formData = Object.fromEntries(
        new FormData(document.querySelector('#add-emp-form'))
    );

    formData['skills'] = [...selectedSkillsList];

    function getPhotoUrl() {
        const storage = getStorage();
        const storageRef = ref(storage, `employees/${crypto.randomUUID()}`);

        return uploadBytes(
            storageRef,
            document.getElementById('profile-photo-input').files[0]
        ).then((snapshot) => {
            return getDownloadURL(snapshot.ref);
        });
    }

    Promise.all([getNewEmpId(), getPhotoUrl()]).then((values) => {
        formData['empId'] = values[0];
        formData['profile-photo'] = values[1];
        console.log(JSON.stringify(formData, null, 2));
        addEmployee(formData);

        document.getElementById('add-emp-modal').classList.add('display-none');
        document.getElementById('blur-overlay').classList.add('display-none');
        resetAddEmpForm();
    });
};
