module.exports = function toReadable (number) {
    const numTw = ['zero', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
    'eighteen', 'nineteen'];
    
    const numHun = ['', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        if (number < 20) return numTw[number];
        let decimal = number % 10;
        if (number < 100) return numHun[Math.floor(number/10)] + (decimal? ' ' + numTw[decimal]: '');
        return numTw[Math.floor(number/100)] + ' hundred' + (number % 100 == 0? '':' ' + toReadable(number % 100));
    }
