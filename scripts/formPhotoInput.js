'use strict';

document
    .getElementById('profile-photo-input')
    .addEventListener('change', (event) => {
        const imgFile = event.target.files[0];
        if (imgFile) {
            document.querySelector('#profile-photo-label .profile-photo').src =
                URL.createObjectURL(imgFile);
        }
    });
