'use strict';

document.querySelector('#add-emp-form .skills-input-container input').onfocus =
    (e) => {
        document
            .querySelector(
                '#add-emp-form .skills-input-container .select-options'
            )
            .classList.remove('display-none');
    };

document.querySelector('#add-emp-form .skills-input-container input').onblur = (
    e
) => {
    document
        .querySelector('#add-emp-form .skills-input-container .select-options')
        .classList.add('display-none');
};

console.log(
    document.querySelector(
        '#add-emp-form .skills-input-container .select-options'
    )
);
