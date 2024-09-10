const findTheOldest = function(list) {
    return list.reduce((oldest,current) => {
        let thisYear = new Date().getFullYear();
        let oldestAge;
        (oldest.yearOfDeath == undefined)?oldestAge = thisYear - oldest.yearOfBirth : oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let currentAge;
        (current.yearOfDeath == undefined)?currentAge = thisYear - current.yearOfBirth : currentAge = current.yearOfDeath - current.yearOfBirth;
        return oldestAge < currentAge ? current : oldest;
    })
    
};

// Do not edit below this line
module.exports = findTheOldest;
