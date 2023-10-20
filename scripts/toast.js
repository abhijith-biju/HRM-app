let toastTimer;

document.querySelector('.toast-close-icon').addEventListener('click', () => {
    document.querySelector('.toast').classList.remove('active');
    clearTimeout(toastTimer);
});

const displayToast = (status, info) => {
    const toastElem = document.querySelector('.toast');

    //removing any previously added status class from toast element
    ['success', 'error'].forEach((status) =>
        toastElem.classList.remove(status)
    );

    //removing any previously displayed status icon in toast element
    ['success-icon', 'error-icon'].forEach((statusIcon) =>
        toastElem.querySelector(`.${statusIcon}`).classList.add('display-none')
    );

    switch (status) {
        case 'success':
            toastElem.classList.add('success');
            toastElem
                .querySelector('.success-icon')
                .classList.remove('display-none');

            toastElem.querySelector('.toast-status').innerHTML = 'Success';
            break;
        case 'error':
            toastElem.classList.add('error');
            toastElem
                .querySelector('.error-icon')
                .classList.remove('display-none');

            toastElem.querySelector('.toast-status').innerHTML = 'Error';
            break;
    }
    toastElem.querySelector('.toast-info').innerHTML = info;
    toastElem.classList.add('active');

    toastTimer = setTimeout(() => {
        toastElem.classList.remove('active');
    }, 5000);
};

export { displayToast };
