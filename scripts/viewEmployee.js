import { employees } from './firestore.js';

document.querySelector('.employees-table').addEventListener('click', (e) => {
    if (e.target.closest('button')?.classList.contains('view-emp-btn')) {
        viewEmployeeDetails(
            e.target.closest('.employee-actions').getAttribute('data-emp-id')
        );
    }
});

const viewEmployeeDetails = (docId) => {
    const employee = employees.find((employee) => employee['id'] === docId);
    const dialogElem = document.querySelector('.view-emp-dialog');
    const imgElem = dialogElem.querySelector('.profile-photo');

    imgElem.src = employee['profilePhoto'];
    dialogElem.querySelector('.full-name').innerHTML = employee['name'];
    dialogElem.querySelector('.department').innerHTML = employee['department'];
    dialogElem.querySelector('.role').innerHTML = employee['role'];
    dialogElem.querySelector('.location').innerHTML = employee['location'];
    dialogElem.querySelector('.emp-id').innerHTML = employee['empId'];
    dialogElem.querySelector('.email').innerHTML = employee['email'];
    dialogElem.querySelector('.gender').innerHTML = employee['gender'];
    dialogElem.querySelector('.dob').innerHTML = employee['dob'];
    dialogElem.querySelector('.doj').innerHTML = employee['doj'];
    dialogElem.querySelector('.address').innerHTML = employee['address'];

    const skillListElem = dialogElem.querySelector('.selected-skills-list');
    skillListElem.innerHTML = '';
    for (const skill of employee['skills']) {
        const liElem = `<li class='skill-chip flex-container'>
                            <span>${skill}</span>
                        </li>`;

        skillListElem.innerHTML += liElem;
    }

    dialogElem.showModal();

    //listeners to reset image to avatar-img on modal close
    dialogElem.addEventListener('click', (e) => {
        const dialogDimensions = dialogElem.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            imgElem.src = './assets/images/employee-avatar.svg';
        }
    });

    dialogElem
        .querySelector('.confirm-no-btn')
        .addEventListener('click', () => {
            imgElem.src = './assets/images/employee-avatar.svg';
        });
};
