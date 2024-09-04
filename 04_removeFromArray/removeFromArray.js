const removeFromArray = function(inputArray,...args) {
let newArray = inputArray;
for(let arg of args){
    for (let i = 0; i < newArray.length; i++){
        if(newArray[i] === arg){
            newArray = newArray.toSpliced(i,1);
            i--;
        }
    }
}
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
