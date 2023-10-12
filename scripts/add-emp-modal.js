import { selectedSkillsList } from './formCustomDropdown.js';

document.getElementById('add-emp-btn').onclick = function () {
    let modalBody = document.getElementById(this.getAttribute('data-modal-id'));

    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.classList.remove('display-none');

    blurOverlay.onclick = function () {
        this.classList.add('display-none');
        modalBody.classList.add('display-none');

        const formElem = modalBody.getElementsByTagName('form')[0];
        if (formElem) {
            formElem.reset();

            if (formElem.querySelector('.profile-photo')) {
                formElem.querySelector('.profile-photo').src =
                    './assets/images/employee-avatar.svg';
            }

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

    modalBody.classList.remove('display-none');
    return false;
};
