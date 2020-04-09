
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
bsort(a);
console.log('a=',a);

