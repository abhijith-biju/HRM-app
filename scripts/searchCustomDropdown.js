'use strict';

const selectedSkillsForSearch = new Set();

document.querySelector(
    '.table-controls .skills-input-container input'
).onfocus = (e) => {
    document
        .querySelector(
            '.table-controls .skills-input-container .select-options'
        )
        .classList.remove('display-none');
};

document.querySelector('.table-controls .skills-input-container input').onblur =
    (e) => {
        const optionsContainer = document.querySelector(
            '.table-controls .skills-input-container .select-options'
        );

        const isOptionClicked = optionsContainer.contains(e.relatedTarget);

        if (!isOptionClicked) {
            optionsContainer.classList.add('display-none');
        }
    };

document.querySelector(
    '.table-controls .skills-input-container .select-options'
).onclick = (e) => {
    const selectedSkill = e.target.getAttribute('data-value');

    if (!selectedSkillsForSearch.has(selectedSkill)) {
        selectedSkillsForSearch.add(selectedSkill);

        const selectedSkillsContainer = document.querySelector(
            '.table-controls .selected-skills-container'
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
        .querySelector('.table-controls .skills-input-container input')
        .focus();
};

document.querySelector('.table-controls .selected-skills-container').onclick = (
    e
) => {
    const SkillRemoveBtnElem = e.target.closest('.skill-remove-btn');
    if (SkillRemoveBtnElem) {
        const removedSkill = SkillRemoveBtnElem.getAttribute('data-value');
        selectedSkillsForSearch.delete(removedSkill);

        document
            .querySelector('.table-controls .selected-skills-container')
            .removeChild(SkillRemoveBtnElem.closest('.skill-chip'));
    }
};
