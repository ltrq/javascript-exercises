const palindromes = function (a) {
    a = a.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return a === a.split('').reduce((acc,char)=>char + acc,"");
};

// Do not edit below this line
module.exports = palindromes;
