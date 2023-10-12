//disable future days
const setMaxDate = (dateInputElement) => {
    let today = new Date();
    dateInputElement.setAttribute('max', today.toISOString().split('T')[0]);
};

setMaxDate(document.querySelector('#add-emp-form #date-of-birth'));
setMaxDate(document.querySelector('#add-emp-form #date-of-joining'));
