import $ from '../core';

$.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }
    return this;
};


$.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }
    return this;
};

$.prototype.toggle = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style === 'none') {
            this[i].style = '';
        }
        else {
            this[i].style = 'none';
        }
    }
    return this;
};
