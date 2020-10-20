module.exports = function toReadable (number) {
    let numberToRead = '';
    let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const foundTens = (number, tens, digit) => {
        number = number.toString();
        if (number[1] === '0') return `${numberToRead}${tens[number[0]]}`;
        return `${numberToRead}${tens[number[0]]} ${digit[number[1]]}`;
    };

    const foundHundred = (number, digit, tenToTwenty, tens) => {
        number = number.toString();
        let newNumber = Number(`${number[1]}${number[2]}`);

        if (number[1] === '0' && number[2] === '0') return `${numberToRead}${digit[number[0]]} hundred`;
        if (number[1] === '0' && number[2] !== '0') return `${numberToRead}${digit[number[0]]} hundred ${digit[number[2]]}`;
        if (number[1] === '1') return `${numberToRead}${digit[number[0]]} hundred ${tenToTwenty[newNumber - 10]}`;
        if (number[1] !== '0' && number[1] !== '1' && number[2] === '0') return `${numberToRead}${digit[number[0]]} hundred ${tens[number[1]]}`;

        return `${numberToRead}${digit[number[0]]} hundred ${foundTens(newNumber, tens, digit)}`;
    };

    if (number < 10) return `${numberToRead}${digit[number]}`;
    if (number >= 10 && number <= 20) return `${numberToRead}${tenToTwenty[number - 10]}`;
    if (number > 20 && number < 100) return foundTens(number, tens, digit);
    if ( number >= 100 && number < 1000) return foundHundred(number, digit, tenToTwenty, tens);
    
}
