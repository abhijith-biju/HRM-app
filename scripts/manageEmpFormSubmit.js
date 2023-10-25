import { selectedSkillsList } from './formCustomDropdown.js';
import { isFormValid } from './manageEmpFormValidation.js';
import { hideManageEmpModal } from './manageEmployeeModal.js';
import {
    displayFullScreenLoader,
    hideFullScreenLoader,
} from './fullScreenLoader.js';
import {
    addEmployee,
    getNextEmpId,
    updateEmployee,
    getPhotoUrl,
} from './firestore.js';
import { resetManageEmpForm } from './manageEmpFormReset.js';

document.querySelector('#add-emp-form').onsubmit = function (e) {
    e.preventDefault();

    //clear any error indicators
    for (const DOMelem of this.querySelectorAll('.error-msg').values()) {
        DOMelem.classList.add('display-hidden');
    }
    this.querySelectorAll(
        'input, textarea, select, .skills-input-container'
    ).forEach((inputElem) => inputElem.classList.remove('error-border'));

    const profilePhotoInput = this.querySelector('#profile-photo-input');
    const onSubmitAction = this.getAttribute('data-submit-action');

    if (!isFormValid(this, onSubmitAction)) {
        return false;
    }

    displayFullScreenLoader();
    hideManageEmpModal();

    const formData = Object.fromEntries(
        new FormData(document.querySelector('#add-emp-form'))
    );

    formData['skills'] = [...selectedSkillsList];

    if (onSubmitAction === 'add') {
        Promise.all([getNextEmpId(), getPhotoUrl(profilePhotoInput.files)])
            .then((values) => {
                formData['empId'] = values[0];
                formData['profilePhoto'] = values[1];
                addEmployee(formData);
            })
            .finally(() => {
                resetManageEmpForm();
                hideFullScreenLoader();
            });
    } else if (onSubmitAction === 'edit') {
        getPhotoUrl(profilePhotoInput.files)
            .then((value) => {
                if (value) {
                    formData['profilePhoto'] = value;
                }

                updateEmployee(formData, this.getAttribute('data-doc-id'));
            })
            .finally(() => {
                resetManageEmpForm();
                hideFullScreenLoader();
            });
    }
};
