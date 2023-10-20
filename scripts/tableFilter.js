import { employees } from './firestore.js';
import { employeeTableDisplay } from './employeeTableDisplay.js';
import { selectedSkillsForSearch } from './searchCustomDropdown.js';

document.querySelector('#name-search').addEventListener('keyup', () => {
    tableFilter();
});

document
    .querySelector('.employees-table .sort-btn')
    .addEventListener('click', (e) => {
        const buttonElem = e.target.closest('button');

        if (buttonElem.getAttribute('data-sort-order') === 'asc') {
            buttonElem.setAttribute('data-sort-order', 'dsc');
            buttonElem.classList.add('desc');
        } else {
            buttonElem.setAttribute('data-sort-order', 'asc');
            buttonElem.classList.remove('desc');
        }
        tableFilter();
    });

const searchFilter = (employeesList) => {
    const searchValue = document
        .querySelector('#name-search')
        .value.trim()
        .toLowerCase();

    if (searchValue) {
        return employeesList.filter(
            (employee) =>
                employee['name'].toLowerCase().indexOf(searchValue) > -1
        );
    }
    return employeesList;
};

const skillFilter = (employeesList) => {
    if (selectedSkillsForSearch.size > 0) {
        return employeesList.filter((employee) => {
            const skillList = Array.from(selectedSkillsForSearch);
            return skillList.every((skill) =>
                employee['skills'].includes(skill)
            );
        });
    }
    return employeesList;
};

const sortList = (employeesList) => {
    if (
        document
            .querySelector('.employees-table .sort-btn')
            .getAttribute('data-sort-order') === 'asc'
    ) {
        employeesList.sort((obj1, obj2) => {
            if (obj1['name'].toLowerCase() > obj2['name'].toLowerCase()) {
                return 1;
            } else if (obj1['name'] < obj2['name']) {
                return -1;
            } else {
                return 0;
            }
        });
    } else {
        employeesList.sort((obj1, obj2) => {
            if (obj1['name'].toLowerCase() < obj2['name'].toLowerCase()) {
                return 1;
            } else if (obj1['name'] > obj2['name']) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    return employeesList;
};

const tableFilter = () => {
    let filteredEmployees = employees;
    filteredEmployees = searchFilter(filteredEmployees);
    filteredEmployees = skillFilter(filteredEmployees);
    filteredEmployees = sortList(filteredEmployees);

    employeeTableDisplay(filteredEmployees);
};

export { tableFilter };
