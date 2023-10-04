'use strict';

const addEmployeeBtn = document.getElementById('add-emp-btn');

addEmployeeBtn.onclick = function () {
    let modalBody = document.getElementById('modal-body');

    const blurOverlay = document.getElementById('blur-overlay');
    blurOverlay.classList.remove('display-none');

    blurOverlay.onclick = function () {
        this.classList.add('display-none');
        modalBody.classList.add('display-none');
    };

    modalBody.classList.remove('display-none');
    return false;
};
