'use strict';

function offsetParent(elem) {
    var parent = elem.parentNode;

    if (
        window.getComputedStyle(parent).position !== 'static' ||
        parent.tagName === 'BODY'
    ) {
        return parent;
    } else {
        return offsetParent(parent);
    }
}

console.log(offsetParent(document.getElementById('modal-body')));
