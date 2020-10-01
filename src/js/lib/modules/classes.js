import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            console.log('continue');
            continue;
        }
        console.log(this[i].classList + ' add ' + classNames);
        this[i].classList.add(...classNames);
    }
    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        console.log('move ' + this[i].classList)
        if (!this[i].classList) {
            continue;
        }
        console.log(this[i] + ' remove ' + classNames);
        this[i].classList.remove(...classNames);
    }
    return this;
};

$.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(className);
    }
    return this;
};
