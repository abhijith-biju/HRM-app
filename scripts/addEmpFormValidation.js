import { selectedSkillsList } from './formCustomDropdown.js';
import { addEmpModalHide } from './addEmployeeModal.js';
import {
    addEmployee,
    getNewEmpId,
    employees,
    updateEmployee,
} from './firestore.js';
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

    this.querySelectorAll(
        'input, textarea, select, .skills-input-container'
    ).forEach((inputElem) => inputElem.classList.remove('error-border'));

    const profilePhotoInput = this.querySelector('#profile-photo-input');
    const modalBody = document.getElementById('add-emp-modal');
    const submitBtn = modalBody.querySelector('button[type=submit]');
    let isFormDataValid = true;

    const displayError = (
        inputElem,
        errorMessage = inputElem.validationMessage
    ) => {
        const errorMsgContainer = inputElem
            .closest('.form-entry')
            .querySelector('.error-msg');

        errorMsgContainer.innerHTML = errorMessage;
        errorMsgContainer.classList.remove('display-hidden');

        inputElem.classList.add('error-border');
    };

    const checkInputValidity = (inputElem) => {
        if (!inputElem.checkValidity()) {
            displayError(inputElem);
            isFormDataValid = false;
        }

        if (
            (inputElem.type === 'text' || inputElem.type === 'textarea') &&
            inputElem.value.trim().length === 0
        ) {
            displayError(inputElem, 'Please fill out this field.');
            isFormDataValid = false;
        }
    };

    if (submitBtn.value === 'add' && !profilePhotoInput.checkValidity()) {
        displayError(profilePhotoInput, 'Please upload an image.');
        isFormDataValid = false;
    }

    const inpElemList = this.querySelectorAll(
        'input:not(.skill-search-input, #profile-photo-input), textarea, select'
    );

    inpElemList.forEach((inpElem) => checkInputValidity(inpElem));

    if (selectedSkillsList.size == 0) {
        displayError(
            this.querySelector('.skills-input-container'),
            'Select atleast one skill'
        );
        isFormDataValid = false;
    }

    if (!isFormDataValid) {
        return false;
    }

    const formData = Object.fromEntries(
        new FormData(document.querySelector('#add-emp-form'))
    );

    formData['skills'] = [...selectedSkillsList];

    function getPhotoUrl() {
        const storage = getStorage();
        const storageRef = ref(storage, `employees/${crypto.randomUUID()}`);

        if (!profilePhotoInput.files.length) {
            return Promise.resolve(false);
        }

        return uploadBytes(storageRef, profilePhotoInput.files[0]).then(
            (snapshot) => {
                return getDownloadURL(snapshot.ref);
            }
        );
    }

    if (submitBtn.value === 'add') {
        Promise.all([getNewEmpId(), getPhotoUrl()]).then((values) => {
            formData['empId'] = values[0];
            formData['profilePhoto'] = values[1];
            addEmployee(formData);
            addEmpModalHide();
        });
    } else if (submitBtn.value === 'edit') {
        getPhotoUrl().then((value) => {
            if (value) {
                formData['profilePhoto'] = value;
            }
            updateEmployee(formData, submitBtn.getAttribute('data-doc-id'));
            addEmpModalHide();
        });
    }
};
