import { selectedSkillsList } from './formCustomDropdown.js';

document.querySelector('#add-emp-form .cancel-btn').onclick = (e) => {
    const modalId = e.target.getAttribute('data-modal-id');
    const modalBody = document.getElementById(modalId);
    modalBody.classList.add('display-none');

    //remove Blurred Overlay
    document.getElementById('blur-overlay').classList.add('display-none');

    //reset form
    const formElem = modalBody.getElementsByTagName('form')[0];
    if (formElem) {
        formElem.reset();

        //reset uploaded image
        const imgElem = modalBody.querySelector(
            '#profile-photo-label .profile-photo'
        );
        imgElem.src = './assets/images/employee-avatar.svg';
        imgElem.classList.remove('border-1');

        //reset selected skills
        modalBody.querySelector(
            '#add-emp-form .selected-skills-list'
        ).innerHTML = '';
        selectedSkillsList.clear();

        //reset all input status messages
        modalBody.querySelectorAll('.error-msg').forEach((elem) => {
            elem.classList.add('display-hidden');
        });
    }
};
