import { selectedSkillsList } from './formCustomDropdown.js';
import { resetAddEmpForm } from './resetAddEmpForm.js';

const addEmpModalDisplay = () => {
    let modalBody = document.getElementById('add-emp-modal');
    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.classList.remove('display-none');

    blurOverlay.onclick = function () {
        this.classList.add('display-none');
        modalBody.classList.add('display-none');

        resetAddEmpForm();
    };

    modalBody.classList.remove('display-none');
};

document.getElementById('add-emp-btn').onclick = function () {
    document.querySelector('#add-emp-form button[type=submit]').value = 'add';
    addEmpModalDisplay();
};

export { addEmpModalDisplay };
