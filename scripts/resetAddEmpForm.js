import { selectedSkillsList } from './formCustomDropdown.js';

const resetAddEmpForm = () => {
    console.log('here reset clicked!');

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
    formElem
        .querySelectorAll('input, textarea, select, .skills-input-container')
        .forEach((inputElem) => inputElem.classList.remove('error-border'));

    //remove value attribute on submit btn element
    formElem.querySelector('button[type=submit]').removeAttribute('value');
    formElem
        .querySelector('button[type=submit]')
        .removeAttribute('data-doc-id');
};

export { resetAddEmpForm };
