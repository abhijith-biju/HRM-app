const filterSelectOptions = (inpElem, dropdownElem) => {
    const searchValue = inpElem.value.trim().toLowerCase();

    for (const liElem of dropdownElem.children) {
        const btnElem = liElem.firstElementChild;
        const optionVal = btnElem.getAttribute('data-value').toLowerCase();

        if (searchValue && optionVal.indexOf(searchValue) === -1) {
            liElem.classList.add('display-none');
        } else {
            liElem.classList.remove('display-none');
        }
    }
};

export { filterSelectOptions };
