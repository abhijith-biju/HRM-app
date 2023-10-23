const displayFullScreenLoader = () => {
    document.querySelector('body').classList.add('body-no-scroll');
    document.getElementById('blur-overlay').classList.remove('display-none');
    document
        .querySelector('.loader.full-screen-loader')
        .classList.add('active');
};

const hideFullScreenLoader = () => {
    document.querySelector('body').classList.remove('body-no-scroll');
    document.getElementById('blur-overlay').classList.add('display-none');
    document
        .querySelector('.loader.full-screen-loader')
        .classList.remove('active');
};

export { displayFullScreenLoader, hideFullScreenLoader };

// displayFullScreenLoader();
