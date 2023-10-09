'use strict';

const selectedSkillsList = new Set();

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

    if (!selectedSkillsList.has(selectedSkill)) {
        selectedSkillsList.add(selectedSkill);

        const selectedSkillsContainer = document.querySelector(
            '#add-emp-form .selected-skills-container'
        );

        const liElem = `<li class='skill-chip flex-container'>
            <span>${selectedSkill}</span>
            <button type="button" class="flex-container  skill-remove-btn" data-value=${selectedSkill}>
            <span class="material-symbols-rounded icon">
                cancel
            </span>
        </button>
        </li>`;

        selectedSkillsContainer.innerHTML += liElem;
    }

    document
        .querySelector('#add-emp-form .skills-input-container input')
        .focus();
};

document.querySelector('#add-emp-form .selected-skills-container').onclick = (
    e
) => {
    const SkillRemoveBtnElem = e.target.closest('.skill-remove-btn');
    if (SkillRemoveBtnElem) {
        const removedSkill = SkillRemoveBtnElem.getAttribute('data-value');
        selectedSkillsList.delete(removedSkill);

        document
            .querySelector('#add-emp-form .selected-skills-container')
            .removeChild(SkillRemoveBtnElem.closest('.skill-chip'));
    }
};
