import { selectedSkillsList } from './formCustomDropdown.js';

//onSubmitAction is either add or edit
const isFormValid = (formElem, onSubmitAction) => {
    const profilePhotoInput = formElem.querySelector('#profile-photo-input');
    let isallInputValid = true;

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
            isallInputValid = false;
        }

        if (
            (inputElem.type === 'text' || inputElem.type === 'textarea') &&
            inputElem.value.trim().length === 0
        ) {
            displayError(inputElem, 'Please fill out this field.');
            isallInputValid = false;
        }
    };

    if (onSubmitAction === 'add' && !profilePhotoInput.checkValidity()) {
        displayError(profilePhotoInput, 'Please upload an image.');
        isallInputValid = false;
    }

    const inpElemList = formElem.querySelectorAll(
        'input:not(.skill-search-input, #profile-photo-input), textarea, select'
    );

    inpElemList.forEach((inpElem) => checkInputValidity(inpElem));

    if (selectedSkillsList.size == 0) {
        displayError(
            formElem.querySelector('.skills-input-container'),
            'Select atleast one skill'
        );
        isallInputValid = false;
    }

    return isallInputValid;
};

export { isFormValid };
