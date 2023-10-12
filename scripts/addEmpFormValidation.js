import { selectedSkillsList } from './formCustomDropdown.js';
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
    }

    const formData = Object.fromEntries(
        new FormData(document.querySelector('#add-emp-form'))
    );

    // Initialize Cloud Storage and get a reference to the service
    const storage = getStorage();

    const storageRef = ref(storage, `employees/${crypto.randomUUID()}`);

    // 'file' comes from the Blob or File API
    uploadBytes(
        storageRef,
        document.getElementById('profile-photo-input').files[0]
    )
        .then((snapshot) => {
            console.log('Uploaded a blob or file!');
            return getDownloadURL(snapshot.ref);
        })
        .then((url) => {
            console.log(url);
            formData['profile-photo'] = url;
            console.log(JSON.stringify(formData, null, 2));
        });
};
