'use strict';

const addEmployeeBtn = document.getElementById('add-emp-btn');

addEmployeeBtn.onclick = function () {
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
        }
    };

    modalBody.classList.remove('display-none');
    return false;
};
