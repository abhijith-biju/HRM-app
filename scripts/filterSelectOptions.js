import { getOptionsData } from './loadSelectOptions.js';

// const loadSkillsOptions = async () => {
//     let data = await getOptionsData('location');
// };

// const skillOptions = await getOptionsData('skills');
const inpElem = document.querySelector(
    '.table-controls .custom-select-wrap input'
);
const dropdownElem = document.querySelector(
    '.table-controls .custom-select-wrap .select-options'
);

const filterSelectOptions = (inpElem, dropdownElem) => {
    const searchValue = inpElem.value.trim().toLowerCase();

    for (const liElem of dropdownElem.children) {
        const btnElem = liElem.firstElementChild;
    }
};

inpElem.addEventListener('keyup', () => {
    filterSelectOptions(inpElem, dropdownElem);
});
