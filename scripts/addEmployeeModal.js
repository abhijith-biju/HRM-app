import { resetAddEmpForm } from './resetAddEmpForm.js';

const addEmpModalDisplay = () => {
    let modalBody = document.getElementById('add-emp-modal');
    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.classList.remove('display-none');

    blurOverlay.addEventListener('click', () => {
        addEmpModalHide();
    });

    modalBody
        .querySelector('.cancel-btn')
        .addEventListener('click', addEmpModalHide);

    modalBody.classList.remove('display-none');
};

const addEmpModalHide = () => {
    document.getElementById('add-emp-modal').classList.add('display-none');
    document.getElementById('blur-overlay').classList.add('display-none');
    resetAddEmpForm();
};

document.getElementById('add-emp-btn').onclick = function () {
    document.querySelector('#add-emp-form button[type=submit]').value = 'add';
    addEmpModalDisplay();
};

export { addEmpModalDisplay, addEmpModalHide };
