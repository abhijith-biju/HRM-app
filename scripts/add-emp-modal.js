import { selectedSkillsList } from './formCustomDropdown.js';
import { resetAddEmpForm } from './resetAddEmpForm.js';

document.getElementById('add-emp-btn').onclick = function () {
    let modalBody = document.getElementById('add-emp-modal');
    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.classList.remove('display-none');

    blurOverlay.onclick = function () {
        this.classList.add('display-none');
        modalBody.classList.add('display-none');

        resetAddEmpForm();
    };

    modalBody.classList.remove('display-none');
    return false;
};
