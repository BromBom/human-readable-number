module.exports = function toReadable(number) {
    let num = number.toString();
    let uno = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dec = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tenTh = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    

    if (num == 0) {
       return 'zero';
    }

    else if (num.length === 1) {
       return `${uno[+num[0]]}`;
    }

    else if (num.length === 2) {
        return +num[0] === 1 ? `${tenTh[+num[1]]}` : `${dec[+num[0]]} ${uno[+num[1]]}`;
    }

    else if (num.length === 3) {
        return +num[1] === 1 ? `${uno[+num[0]]} hundred ${tenTh[+num[2]]}` : `${uno[+num[0]]} hundred ${dec[+num[1]]} ${uno[+num[2]]}`
    }
    
}
