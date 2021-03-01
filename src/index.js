module.exports = function reverse (n) {
    let number = Math.abs(n); // tests imply reversed number has no sign
    let reverse = 0;
    while (number > 0) {
        lastDigit = number % 10;
        reverse = (reverse * 10) + lastDigit;
        number = Math.floor(number / 10);
    }
    return reverse;
}
