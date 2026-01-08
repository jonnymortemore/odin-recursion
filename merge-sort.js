//test arrays
const MERGESORT_ARRAYS = [
  [],
  [73],
  [1, 2, 3, 4, 5],
  [3, 2, 1, 13, 8, 5, 0, 1],
  [105, 79, 100, 110],
];

//loop through all test arrays
for (const array of MERGESORT_ARRAYS) {
  console.log(mergeSort(array));
}

function mergeSort(array) {
  //base case - if array is a single element, return
  if (array.length <= 1) {
    return array;
  }

  //find mid point of array
  const middle = Math.ceil(array.length / 2);

  const leftHalfArray = array.slice(0, middle);
  const rightHalfArray = array.slice(middle, array.length);
  //sort left half with recursion
  const sortedLeftHalf = mergeSort(leftHalfArray);
  //sort right half with recursion
  const sortedRightHalf = mergeSort(rightHalfArray);

  //merge together
  const mergedArray = merge(sortedLeftHalf, sortedRightHalf);
  return mergedArray;
}

function merge(leftArray, rightArray) {
  //create initial array to store combined array
  const combinedArray = [];
  //indices for left and right array
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  //loop through both arrays as long as both arrays have not been fully checked
  while (
    leftArrayIndex < leftArray.length &&
    rightArrayIndex < rightArray.length
  ) {
    // if the left array current value is less than right - push left index value
    if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
      combinedArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex++;
      //else push right index value
    } else {
      combinedArray.push(rightArray[rightArrayIndex]);
      rightArrayIndex++;
    }
  }
  //add remaining values on left and right array as these are already sorted in order (one of these will be empty)
  combinedArray.push(...leftArray.slice(leftArrayIndex));
  combinedArray.push(...rightArray.slice(rightArrayIndex));

  //return combined array
  return combinedArray;
}
