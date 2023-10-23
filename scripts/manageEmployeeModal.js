import { resetManageEmpForm } from './manageEmpFormReset.js';

const DisplayManageEmpModal = () => {
    const modalBody = document.getElementById('add-emp-modal');
    const blurOverlay = document.getElementById('blur-overlay');

    document.querySelector('body').classList.add('body-no-scroll');
    blurOverlay.classList.remove('display-none');

    modalBody.querySelector('.cancel-btn').addEventListener('click', () => {
        hideManageEmpModal();
        blurOverlay.classList.add('display-none');
        resetManageEmpForm();
    });

    modalBody.classList.remove('display-none');
};

const hideManageEmpModal = () => {
    const modalBody = document.getElementById('add-emp-modal');
    modalBody.classList.add('display-none');
    //TODO: add scroll to top of modal
    document.querySelector('body').classList.remove('body-no-scroll');
};

document.getElementById('add-emp-btn').onclick = function () {
    DisplayManageEmpModal();
    document
        .getElementById('add-emp-form')
        .setAttribute('data-submit-action', 'add');
};

export { DisplayManageEmpModal, hideManageEmpModal };
