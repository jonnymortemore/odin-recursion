console.log(fibs(8));
console.log(fibsRec(8));

function fibs(sequenceLength) {
    const fibsArr = []
    for (let i = 0; i < sequenceLength; i++) {
        if (i < 2) {
            fibsArr.push(i)
        } else {
            fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
        }
        
    }
    return fibsArr

}

function fibsRec(x) {

    //only relevant if sequence length starts at less than 2 - hard coded as these are always the values
    if (x === 0) {
        return []
    }
    if (x === 1) {
        return [0]
    }

    //real sequence starts here by creating the base array and returning
    if (x === 2) {
        return [0, 1]
    }
    
    //save the previous fib array
    const fibArr = fibsRec(x - 1);
    //get the new number by adding the last two values of the array together (base values will be 1 + 0)
    const newFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]
    //push that new value to the current array and return
    fibArr.push(newFib)
    return fibArr
}