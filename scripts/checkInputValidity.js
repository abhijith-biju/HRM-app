function checkInputValidity(inpElem) {
    const errorMsgContainer = inpElem
        .closest('.form-entry')
        .querySelector('.error-msg');

    if (!inpElem.checkValidity()) {
        errorMsgContainer.innerHTML = inpElem.validationMessage;
        errorMsgContainer.classList.remove('display-hidden');
    } else {
        errorMsgContainer.innerHTML = '';
        errorMsgContainer.classList.remove('display-hidden');
    }
}

function checkIfValid(inpElem) {
    console.log('here');

    const errorMsgContainer = inpElem
        .closest('.form-entry')
        .querySelector('.error-msg');

    if (inpElem.checkValidity()) {
        errorMsgContainer.innerHTML = inpElem.validationMessage;
        errorMsgContainer.classList.remove('display-hidden');
    }
}
