import { employees } from './firestore.js';
import { employeeTableDisplay } from './employeeTableDisplay.js';
import { selectedSkillsForSearch } from './searchCustomDropdown.js';

document.querySelector('#name-search').addEventListener('keyup', () => {
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

const tableFilter = () => {
    let filteredEmployees = employees;
    filteredEmployees = searchFilter(filteredEmployees);
    filteredEmployees = skillFilter(filteredEmployees);

    employeeTableDisplay(filteredEmployees);
};

export { tableFilter };
