
/**
 * for i=1 to array length
 * currvalue = element[i]
 * int j=i
 * while (j>0 && element[j-1]>currvalue)
 *  move elements down element[j] =element[j-1]
 *  j--
 * element[j]=currvalue
 * O(n2)  
 * more efficient than bubblesort
 * @param inputArr
 */
function isort (inputArr) {
    for (i=1; i < inputArr.length; i++) {
        currValue = inputArr[i];
        j=i;
        while (j > 0 && (inputArr[j-1] > currValue)) {
            inputArr[j] = inputArr[j-1];
            j--;
        }
        inputArr[j] = currValue;
    }
}
    
/**
 * for each element in the array
 *  do for each element in the subarray starting from the back
 *   check if element[j-1] > element[j]
 *    then swap(element[j],element[j-1])
 * worst case O(n2)
 * best case O(n)
 * @param inputArr
 */
function bsort(inputArr) {
    for (i=0; i<inputArr.length-1; i++) {
        for(j=inputArr.length-1; j>i; j--) {
            if(inputArr[j-1] > inputArr[j]) {
                swap(inputArr, j-1, j);
            }
        }
    }
}

function swap(numbers, left, right) {
    let tmp = numbers[left];
    numbers[left] = numbers[right];
    numbers[right] = tmp;
}

let a = [3,2,1,1,2,3,4,5];
var start = new Date()
var hrstart = process.hrtime()
bsort(a);
var end = new Date() - start
hrend = process.hrtime(hrstart)
console.log('bubblesort a=',a);
console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
a = [3,2,1,1,2,3,4,5];
start = new Date()
hrstart = process.hrtime()
isort(a);
end = new Date() - start
hrend = process.hrtime(hrstart)
console.log("insertionsort a=", a);
console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
