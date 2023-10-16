import { resetAddEmpForm } from './resetAddEmpForm.js';

document.querySelector('#add-emp-form .cancel-btn').onclick = (e) => {
    document.getElementById('add-emp-modal').classList.add('display-none');
    document.getElementById('blur-overlay').classList.add('display-none');
    resetAddEmpForm();
};
