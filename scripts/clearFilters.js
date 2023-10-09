'use strict';

document.getElementById('clear-filters-btn').onclick = () => {
    const tableControlsElem = document.querySelector('.table-controls');

    tableControlsElem.querySelectorAll('input').forEach((elem) => {
        elem.value = '';
    });

    tableControlsElem.querySelectorAll('select').forEach((elem) => {
        elem.selectedIndex = 0;
    });

    tableControlsElem.querySelector('.selected-skills-container').innerHTML =
        '';
    selectedSkillsForSearch.clear();
};
