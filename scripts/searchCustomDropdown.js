import { tableFilter } from './tableFilter.js';

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
            optionsContainer.scrollTo({ top: 0, behavior: 'smooth' });
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

        const selectedSkillsList = selectedSkillsContainer.querySelector(
            '.selected-skills-list'
        );

        if (selectedSkillsForSearch.size === 2) {
            const skillLabel =
                selectedSkillsContainer.querySelector('.skill-label');

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

    document
        .querySelector('.table-controls .skills-input-container input')
        .focus();
};

document.querySelector('.table-controls .selected-skills-list').onclick = (
    e
) => {
    const SkillRemoveBtnElem = e.target.closest('.skill-remove-btn');
    if (SkillRemoveBtnElem) {
        const removedSkill = SkillRemoveBtnElem.getAttribute('data-value');
        selectedSkillsForSearch.delete(removedSkill);

        const selectedSkillsContainer = document.querySelector(
            '.table-controls .selected-skills-container'
        );

        const selectedSkillsList = selectedSkillsContainer.querySelector(
            '.selected-skills-list'
        );

        const skillLabel =
            selectedSkillsContainer.querySelector('.skill-label');

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

    document
        .querySelector(
            '.table-controls .selected-skills-container .skill-label'
        )
        .focus();
};

document.querySelector(
    '.table-controls .selected-skills-container .skill-label'
).onfocus = (e) => {
    const selectedSkillsList = document.querySelector(
        '.table-controls .selected-skills-container .selected-skills-list'
    );
    selectedSkillsList.classList.remove('display-none');
    selectedSkillsList.classList.add('flex-container');
};

document.querySelector(
    '.table-controls .selected-skills-container .skill-label'
).onblur = (e) => {
    const selectedSkillsList = document.querySelector(
        '.table-controls .selected-skills-container .selected-skills-list'
    );
    const isRemoveSkillClicked = selectedSkillsList.contains(e.relatedTarget);

    if (!isRemoveSkillClicked) {
        selectedSkillsList.classList.add('display-none');
        selectedSkillsList.classList.remove('flex-container');
    }
};

export { selectedSkillsForSearch };
