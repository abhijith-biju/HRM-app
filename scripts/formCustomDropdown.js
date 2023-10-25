import { filterSelectOptions } from './filterSelectOptions.js';

const selectedSkillsList = new Set();
const searchInputElem = document.querySelector(
    '#add-emp-form .skills-input-container input'
);
const optionsContainer = document.querySelector(
    '#add-emp-form .skills-input-container .select-options'
);
const selectedSkillsContainer = document.querySelector(
    '#add-emp-form .selected-skills-list'
);

searchInputElem.addEventListener('keyup', () => {
    filterSelectOptions(searchInputElem, optionsContainer);
});

searchInputElem.onfocus = (e) => {
    optionsContainer.classList.remove('display-none');
};

searchInputElem.onblur = (e) => {
    const isAnOptionClicked = optionsContainer.contains(e.relatedTarget);

    if (!isAnOptionClicked) {
        optionsContainer.scrollTo({ top: 0 });
        optionsContainer.classList.add('display-none');
    }
};

optionsContainer.onclick = (e) => {
    const selectedSkill = e.target.getAttribute('data-value');

    if (!selectedSkillsList.has(selectedSkill)) {
        selectedSkillsList.add(selectedSkill);

        const liElem = `<li class='skill-chip flex-container'>
            <span>${selectedSkill}</span>
            <button type="button" class="flex-container  skill-remove-btn" data-value='${selectedSkill}'>
            <span class="material-symbols-rounded icon">
                cancel
            </span>
        </button>
        </li>`;

        selectedSkillsContainer.innerHTML += liElem;
    }
    searchInputElem.focus();
};

selectedSkillsContainer.onclick = (e) => {
    const SkillRemoveBtnElem = e.target.closest('.skill-remove-btn');
    if (SkillRemoveBtnElem) {
        const removedSkill = SkillRemoveBtnElem.getAttribute('data-value');

        selectedSkillsList.delete(removedSkill);
        selectedSkillsContainer.removeChild(
            SkillRemoveBtnElem.closest('.skill-chip')
        );
    }
};

export { selectedSkillsList };
