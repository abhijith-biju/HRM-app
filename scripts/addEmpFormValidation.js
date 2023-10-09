'use strict';

document.querySelector('#add-emp-form').onsubmit = function (e) {
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

    const inpElemList = this.querySelectorAll('input, textarea').values();

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

    e.preventDefault();
    console.log('No errors in form');
};
