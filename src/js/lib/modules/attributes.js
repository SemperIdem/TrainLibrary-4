import $ from '../core';

$.prototype.setAttribute = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, value);
    }
    return this;
};

$.prototype.hasAttribute = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) {
            return true;
        }
    }
    return false;
};

$.prototype.removeAttribute = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        }
    }
    return this;
};

