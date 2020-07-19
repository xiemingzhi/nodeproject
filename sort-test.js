/**
 * pass by value
 * take a number in the middle
 * i index on the left
 * j index from the right
 * while it is greater than the left increment i continue ;
 * while it is less than the right decrement j continue;
 * if we find that i is greater or equal to j then break //reached the end 
 * else swap number at j with number at i
 * recursive call for the left
 * recursive call for the right
 * worst O(n2)
 * avg O(n log(n))
 * @param inputArr
 * @param left
 * @param right
 */
function qsort (inputArr, left, right) {
    if(left < right) {            
        sindex = (left+right)/2; 
        //console.log('sindex=', sindex);
        s = inputArr[Math.floor(sindex)];             
        i = left - 1;             
        j = right + 1;             
        while(true) {                                
            while(inputArr[++i] < s); //look left                
            while(inputArr[--j] > s); //look right                
            if(i >= j)                     
                break;                 
            swap(inputArr, i, j);             
        }
        //console.log('qsort inputArr=', inputArr)             
        qsort(inputArr, left, i-1);   // recursive call check the rest of the left side             
        qsort(inputArr, j+1, right);  // recursive call check the rest of the right side
    }    
}

/**
 * for i=1 to array length
 * currvalue = element[i]
 * int j=i
 * while (j>0 && element[j-1]>currvalue)
 *  move elements down element[j] =element[j-1]
 *  j--
 * element[j]=currvalue
 * avg O(n2)  
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
a = [3,2,1,1,2,3,4,5];
start = new Date()
hrstart = process.hrtime()
qsort(a, 0, a.length-1);
end = new Date() - start
hrend = process.hrtime(hrstart)
console.log("quicksort a=", a);
console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
