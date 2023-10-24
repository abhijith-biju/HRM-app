import { selectedSkillsForSearch } from './searchCustomDropdown.js';
import { tableFilter } from './tableFilter.js';

document.getElementById('clear-filters-btn').onclick = () => {
    const tableControlsElem = document.querySelector('.table-controls');

    tableControlsElem.querySelectorAll('input').forEach((elem) => {
        elem.value = '';
    });

    tableControlsElem.querySelectorAll('select').forEach((elem) => {
        elem.selectedIndex = 0;
    });

    const selectedSkillsContainer = tableControlsElem.querySelector(
        '.selected-skills-container'
    );

    //reset skills dropdown options
    const optionsContainer = tableControlsElem.querySelector(
        '.skills-input-container .select-options'
    );
    for (const liElem of optionsContainer.children) {
        liElem.classList.remove('display-none');
    }

    selectedSkillsContainer
        .querySelector('.skill-label')
        .classList.add('display-none');

    selectedSkillsContainer
        .querySelector('.skill-label')
        .classList.remove('flex-container');

    selectedSkillsContainer
        .querySelector('.selected-skills-list')
        .classList.remove('pos-absolute', 'display-none');

    selectedSkillsContainer.querySelector('.selected-skills-list').innerHTML =
        '';
    selectedSkillsForSearch.clear();

    tableFilter();
};
