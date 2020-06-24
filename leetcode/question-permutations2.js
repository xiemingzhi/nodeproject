/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const output = [];
    const setsuccess = new Set([]);
    const swapIndexes = function(arr, indexA, indexB) {
      const temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
    };
  
    //https://en.wikipedia.org/wiki/Heap%27s_algorithm
    const generate = function(n, newArr) {
      if (n === 1) {
        strconcat = newArr.join('')
        if (!setsuccess.has(strconcat)) {
            output.push(newArr.slice());
            setsuccess.add(strconcat)  
        }else {
        }  
        return;
      }
  
      generate(n - 1, newArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapIndexes(newArr, i, n - 1);
        } else {
          swapIndexes(newArr, 0, n - 1);
        }
  
        generate(n - 1, newArr);
      }
    };
  
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. 
    //If begin is undefined, slice begins from the index 0.
    generate(nums.length, nums.slice());
  
    return output;
};

console.log(permuteUnique([1,1,2]))