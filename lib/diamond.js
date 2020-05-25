function Diamond () {};
Diamond.prototype.toString = function () {
    return 'A';
};
function Diamond (value) {
    this.value = value;
}

Diamond.prototype.toString = function () {
    return this.value;
};