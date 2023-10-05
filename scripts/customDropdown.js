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
    const optionsContainer = document.querySelector(
        '#add-emp-form .skills-input-container .select-options'
    );

    const isOptionClicked = optionsContainer.contains(e.relatedTarget);

    if (!isOptionClicked) {
        optionsContainer.classList.add('display-none');
    }
};

document.querySelector(
    '#add-emp-form .skills-input-container .select-options'
).onclick = (e) => {
    const selectedSkill = e.target.getAttribute('data-value');
    const selectedSkillsContainer = document.querySelector(
        '#add-emp-form .selected-skills-container'
    );
    const liElem = `<li class='skill-card flex-container'>
        <span>${selectedSkill}</span>
        <span class="material-symbols-rounded icon">
            cancel
        </span>
    </li>`;
    selectedSkillsContainer.innerHTML += liElem;
    document
        .querySelector('#add-emp-form .skills-input-container input')
        .focus();
};
