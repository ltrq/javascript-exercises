const fibonacci = function(a) {
    a = Number(a);

    if (a < 0) {
        return "OOPS";
    }
    else if (a == 0) {
        return 0;
    }
    else{
        let firstPrev = 1;
        let secondPrev = 0;
        for (let i = 2; i <= a; i++) {
            let current = firstPrev + secondPrev;
            secondPrev = firstPrev;
            firstPrev = current;
        }
        return firstPrev;
    }
};

// Do not edit below this line
module.exports = fibonacci;
