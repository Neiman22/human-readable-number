module.exports = function toReadable (num) {
const numTw = ['zero', 'one', 'two', 'three', 'four', 'five', 
'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
'eighteen', 'nineteen'];

const numHun = ['', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (num < 20) return numTw[num];
    let decimal = num % 10;
    if (num < 100) return numHun[Math.floor(num/10)] + (decimal? ' ' + numTw[decimal]: '');
    if (num < 1000) return numTw[Math.floor(num/100)] + ' hundred' + (num % 100 == 0? '':' ' + toReadable(num % 100));
    if (num < 1000000) return toReadable(Math.floor(num/1000)) + ' thousand' + (num % 1000 == 0? '':' ' + toReadable(num % 1000));
    return toReadable(Math.floor(num/1000000)) + ' milion' + (num % 1000000 == 0? '':' ' + toReadable(num % 1000000));
}
