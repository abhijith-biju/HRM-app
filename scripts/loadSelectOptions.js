const fetchData = (path) => {
    return fetch(path)
        .then((res) => {
            return res.json();
        })
        .then((data) => data)
        .catch((msg) => console.log(msg));
};

const loadSkillOptions = async () => {
    let data;
    await fetchData('./../assets/json/skills.json').then((res) => {
        data = res;
    });
    for (const optionsElem of document
        .querySelectorAll('.select-options')
        .values()) {
        for (const skill of data['skills']) {
            const liElem = `<li>
                        <button type="button" data-value="${skill['name']}">
                            ${skill['name']}
                        </button>
                    </li>`;

            optionsElem.innerHTML += liElem;
        }
    }
};

const loadDepartmentOptions = async () => {
    let data;
    await fetchData('./../assets/json/department.json').then((res) => {
        data = res;
    });
    for (const selectElem of document
        .querySelectorAll('.dept-select')
        .values()) {
        for (const dept of data['department']) {
            const optionElem = `<option value="${dept}">${dept}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

const loadRoleOptions = async () => {
    let data;
    await fetchData('./../assets/json/roles.json').then((res) => {
        data = res;
    });
    for (const selectElem of document
        .querySelectorAll('.role-select')
        .values()) {
        for (const role of data['roles']) {
            const optionElem = `<option value="${role}">${role}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

const loadLocationOptions = async () => {
    let data;
    await fetchData('./../assets/json/location.json').then((res) => {
        data = res;
    });
    for (const selectElem of document
        .querySelectorAll('.location-select')
        .values()) {
        for (const location of data['location']) {
            const optionElem = `<option value="${location}">${location}</option>`;
            selectElem.innerHTML += optionElem;
        }
    }
};

loadSkillOptions();
loadDepartmentOptions();
loadRoleOptions();
loadLocationOptions();
