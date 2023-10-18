const employeeTableDisplay = (employeesList) => {
    const empTable = document.querySelector('.employees-table tbody');
    empTable.innerHTML = '';

    if (employeesList.length === 0) {
        const tableRow = `<tr>
            <td colspan="6" class="text-center">
                No data to be displayed
            </td>
        </tr>`;
        empTable.innerHTML = tableRow;
        return;
    }

    for (const employee of employeesList) {
        const tableRow = `<tr>
            <td>${employee.empId}</td>
            <td>${employee.name}</td>
            <td>${employee.skills}</td>
            <td>
                <ul class="employee-actions flex-container" data-emp-id = ${employee.id}>
                    <li>
                        <button
                            type="button"
                            class="view-emp-btn flex-container"
                        >
                            <span
                                class="material-symbols-rounded"
                            >
                                visibility
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="edit-emp-btn flex-container"
                        >
                            <span
                                class="material-symbols-rounded"
                            >
                                edit_square
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="delete-emp-btn flex-container"
                        >
                            <span
                                class="material-symbols-rounded"
                            >
                                delete
                            </span>
                        </button>
                    </li>
                </ul>
            </td>
        </tr>`;
        empTable.innerHTML += tableRow;
    }
};

export { employeeTableDisplay };
