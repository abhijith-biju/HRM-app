import { addEmpModalDisplay } from './add-emp-modal.js';
import { employees } from './firestore.js';

document.querySelector('.employees-table').onclick = function (e) {
    if (e.target.closest('button')?.classList.contains('edit-emp-btn')) {
        editEmployeeDetails(
            e.target.closest('.employee-actions').getAttribute('data-emp-id')
        );
    }
};

const editEmployeeDetails = (docId) => {
    const formElem = document.querySelector('#add-emp-form');
    formElem.querySelector('#full-name').value = 'abhijith';
    console.log(employees);

    formElem.querySelector('button[type=submit]').value = 'edit';
    addEmpModalDisplay();
};
