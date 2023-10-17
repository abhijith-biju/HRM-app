import { deleteEmployee } from './firestore.js';

document.querySelector('.employees-table').onclick = function (e) {
    if (e.target.closest('button')?.classList.contains('delete-emp-btn')) {
        deleteEmployeeDetails(
            e.target.closest('.employee-actions').getAttribute('data-emp-id')
        );
    }
};

const deleteEmployeeDetails = (docId) => {
    const confirmDialog = document.querySelector('.confirm-dialog');
    confirmDialog.querySelector('.confirm-dialog-msg').innerHTML =
        'Are you sure you want to permanently delete the employee record?';
    confirmDialog.showModal();

    confirmDialog.querySelector('.confirm-yes-btn').onclick = async () => {
        await deleteEmployee(docId);
        confirmDialog.close();
    };
};
