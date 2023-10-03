'use strict';

const addEmployeeBtn = document.getElementById('add-employee-btn');

addEmployeeBtn.onclick = function () {
    let modalBody = document.getElementById('modal-body');

    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.classList.remove('display-none');

    blurOverlay.onclick = function () {
        this.classList.add('display-none');
        modalBody.classList.add('display-none');
    };

    modalBody.classList.remove('display-none');
    modalBody.style.top = window.innerHeight / 2 - 50 + 'px';
    modalBody.style.left = window.innerWidth / 2 - 100 + 'px';
    return false;
};
