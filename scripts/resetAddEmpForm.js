import { selectedSkillsList } from './formCustomDropdown.js';

const resetAddEmpForm = () => {
    const formElem = document.getElementById('add-emp-form');
    formElem.reset();

    //reset uploaded image
    const imgElem = formElem.querySelector(
        '#profile-photo-label .profile-photo'
    );
    imgElem.src = './assets/images/employee-avatar.svg';
    imgElem.classList.remove('border-1');

    //reset selected skills
    formElem.querySelector('.selected-skills-list').innerHTML = '';
    selectedSkillsList.clear();

    //reset all input status messages
    formElem.querySelectorAll('.error-msg').forEach((elem) => {
        elem.classList.add('display-hidden');
    });
};

export { resetAddEmpForm };
