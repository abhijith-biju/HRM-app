import { filterSelectOptions } from './filterSelectOptions.js';
import { tableFilter } from './tableFilter.js';

const selectedSkillsForSearch = new Set();
const searchInputElem = document.querySelector(
    '.table-controls .skills-input-container input'
);
const optionsContainer = document.querySelector(
    '.table-controls .skills-input-container .select-options'
);
const selectedSkillsList = document.querySelector(
    '.table-controls .selected-skills-container .selected-skills-list'
);
const skillLabel = document.querySelector(
    '.table-controls .selected-skills-container .skill-label'
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

    if (!selectedSkillsForSearch.has(selectedSkill)) {
        selectedSkillsForSearch.add(selectedSkill);

        const selectedSkillsContainer = document.querySelector(
            '.table-controls .selected-skills-container'
        );

        if (selectedSkillsForSearch.size === 2) {
            skillLabel.classList.remove('display-none');
            skillLabel.classList.add('flex-container');

            skillLabel.querySelector('.count-label').innerHTML =
                selectedSkillsForSearch.size;

            selectedSkillsList.classList.add('display-none', 'pos-absolute');
            selectedSkillsList.classList.remove('flex-container');
        } else if (selectedSkillsForSearch.size > 2) {
            selectedSkillsContainer.querySelector('.count-label').innerHTML =
                selectedSkillsForSearch.size;
        }

        const liElem = `<li class='skill-chip flex-container'>
            <span>${selectedSkill}</span>
            <button type="button" class="flex-container  skill-remove-btn" data-value='${selectedSkill}'>
            <span class="material-symbols-rounded icon">
                cancel
            </span>
        </button>
        </li>`;
        selectedSkillsList.innerHTML += liElem;

        tableFilter();
    }
    searchInputElem.focus();
};

selectedSkillsList.onclick = (e) => {
    const SkillRemoveBtnElem = e.target.closest('.skill-remove-btn');
    if (SkillRemoveBtnElem) {
        const removedSkill = SkillRemoveBtnElem.getAttribute('data-value');
        selectedSkillsForSearch.delete(removedSkill);

        if (selectedSkillsForSearch.size === 1) {
            skillLabel.classList.add('display-none');
            skillLabel.classList.remove('flex-container');
            selectedSkillsList.classList.remove('pos-absolute');
        } else if (selectedSkillsForSearch.size > 1) {
            skillLabel.querySelector('.count-label').innerHTML =
                selectedSkillsForSearch.size;
        }

        selectedSkillsList.removeChild(
            SkillRemoveBtnElem.closest('.skill-chip')
        );
        tableFilter();
    }
    skillLabel.focus();
};

skillLabel.onfocus = (e) => {
    selectedSkillsList.classList.remove('display-none');
    selectedSkillsList.classList.add('flex-container');
};

skillLabel.onblur = (e) => {
    const isSelectedSkillsListClicked = selectedSkillsList.contains(
        e.relatedTarget
    );

    if (!isSelectedSkillsListClicked) {
        selectedSkillsList.classList.add('display-none');
        selectedSkillsList.classList.remove('flex-container');
    }
};

export { selectedSkillsForSearch };
