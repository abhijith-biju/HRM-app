import { addEmpModalDisplay } from './addEmployeeModal.js';
import { employees } from './firestore.js';
import { selectedSkillsList } from './formCustomDropdown.js';

document.querySelector('.employees-table').onclick = function (e) {
    if (e.target.closest('button')?.classList.contains('edit-emp-btn')) {
        editEmployeeDetails(
            e.target.closest('.employee-actions').getAttribute('data-emp-id')
        );
    }
};

const editEmployeeDetails = (docId) => {
    const employee = employees.find((employee) => employee['id'] === docId);
    const formElem = document.querySelector('#add-emp-form');

    // const profilePhoto = formElem.querySelector(
    //     '#profile-photo-label .profile-photo'
    // );
    // profilePhoto.src = employee['profilePhoto'];
    // profilePhoto.classList.add('border-1');

    formElem.querySelector('#full-name').value = employee['name'];
    formElem.querySelector('#company-email').value = employee['email'];
    formElem.querySelector('#date-of-birth').value = employee['dob'];
    formElem.querySelector('#address').value = employee['address'];
    formElem.querySelector('#company-role').value = employee['role'];
    formElem.querySelector('#company-dept').value = employee['department'];
    formElem.querySelector('#date-of-joining').value = employee['doj'];
    formElem.querySelector('#company-location').value = employee['location'];

    formElem.querySelector(
        `input[type=radio][value=${employee['gender']}]`
    ).checked = true;

    const selectedSkillsContainer = document.querySelector(
        '#add-emp-form .selected-skills-list'
    );

    employee['skills'].forEach((skill) => {
        selectedSkillsList.add(skill);

        const liElem = `<li class='skill-chip flex-container'>
        <span>${skill}</span>
        <button type="button" class="flex-container  skill-remove-btn" data-value='${skill}'>
        <span class="material-symbols-rounded icon">
            cancel
        </span>
    </button>
    </li>`;

        selectedSkillsContainer.innerHTML += liElem;
    });
    const submitBtn = formElem.querySelector('button[type=submit]');
    submitBtn.value = 'edit';
    submitBtn.setAttribute('data-doc-id', docId);
    addEmpModalDisplay();
};
