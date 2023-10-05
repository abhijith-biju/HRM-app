'use strict';

function formCancel(e) {
    const btnElm = e.target.getAttribute('data-modal-id');
    const modalBody = document.getElementById(btnElm);
    modalBody.classList.add('display-none');

    //remove Blurred Overlay
    document.getElementById('blur-overlay').classList.add('display-none');

    //reset form
    const formElem = modalBody.getElementsByTagName('form')[0];
    if (formElem) {
        formElem.reset();

        //reset uploaded image
        modalBody.querySelector('#profile-photo-label .profile-photo').src =
            './assets/images/employee-avatar.svg';
    }
}
