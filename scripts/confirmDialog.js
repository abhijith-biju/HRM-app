const dialog = document.querySelector('.confirm-dialog');

dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

// Handle No button click
dialog.querySelector('.confirm-no-btn').addEventListener('click', () => {
    // console.log('User clicked No or closed the dialog');
    dialog.close();
});
