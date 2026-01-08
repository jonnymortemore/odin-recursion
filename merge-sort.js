

MERGESORT_ARRAYS = [
    [],
    [73],
    [1, 2, 3, 4, 5],
    [3, 2, 1, 13, 8, 5, 0, 1],
    [105, 79, 100, 110]
]

console.log(mergeSort(MERGESORT_ARRAYS[3]))

function mergeSort(array) {
    //console.log(array)
    if (array.length <= 1) {
        return array;
    }
    
    //find mid point of array
    const middle = Math.ceil(array.length / 2);

    const leftHalfArray = array.slice(0, middle);
    const rightHalfArray = array.slice(middle, array.length)
    //sort left half
    const sortedLeftHalf = mergeSort(leftHalfArray);
    //sort right half
    const sortedRightHalf = mergeSort(rightHalfArray);

    //merge together
    const mergedArray = merge(sortedLeftHalf, sortedRightHalf)
    return mergedArray
}

function merge(leftArray, rightArray) {
    const combinedArray = []
    let leftArrayIndex = 0
    let rightArrayIndex = 0
    
    while (leftArrayIndex < leftArray.length  && rightArrayIndex < rightArray.length) {
        if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
            combinedArray.push(leftArray[leftArrayIndex]);
            leftArrayIndex++
        } else {
            combinedArray.push(rightArray[rightArrayIndex]);
            rightArrayIndex++
        }
    }

    combinedArray.push(...leftArray.slice(leftArrayIndex))
    combinedArray.push(...rightArray.slice(rightArrayIndex))

    
    return combinedArray
}
