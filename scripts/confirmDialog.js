const dialogElemList = document.querySelectorAll('dialog');

dialogElemList.forEach((dialogElem) => {
    dialogElem.addEventListener('click', (e) => {
        const dialogDimensions = dialogElem.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialogElem.close();
        }
    });

    dialogElem
        .querySelector('.confirm-no-btn')
        .addEventListener('click', () => {
            dialogElem.close();
        });
});
