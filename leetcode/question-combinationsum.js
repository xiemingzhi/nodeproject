/**
 * Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

[1,2,3] 5
[1,1,1,1,1]
[1,1,1,1,2]x
[1,1,1,1,3]x
[1,1,1,2]
[1,1,1,3]x
[1,1,2,1]=
[1,1,2,2]x
[1,1,2,3]x
[1,2,1,1]=
[1,2,1,2]x
[1,2,1,3]x
[1,3,1,1]x
[1,3,1,2]x
[1,3,1,3]x
[1,2,1]x
[1,2,2]
[1,2,3]x
[1,3,1]
[1,3,2]x
[1,3,3]x
[2,1,1]
[2,2,2]x
[2,2,1]=
[2,2,3]x
[3,1,1]=
[3,1,2]x
[3,1,3]x
[3,2,1]x

use backtracking
https://en.wikipedia.org/wiki/Backtracking

 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var combSum = function(candidates, target, currArr, successSet, successArr, currSum, currIndex) {
        if (currSum > target) {
            //over limit
            return successArr
        }
        if (currSum == target) {
            //assuming input is sorted
            //currArr = currArr.sort()
            const solStr = currArr.join('')
            if (!successSet.has(solStr)) {
                successSet.add(solStr)
                //The slice() method returns a shallow copy of a portion of an array into a new array object
                successArr.push(currArr.slice())
                //done
                return successArr
            }    
        }
        
        //declare let so that startIndex is new
        for (let startIndex = currIndex; startIndex < candidates.length; startIndex++) {
            //const so that variable is not reused
            const currEle = candidates[startIndex]
            currArr.push(currEle)
            combSum(candidates, target, currArr, successSet, successArr, currSum + currEle, startIndex)
            currArr.pop()
        }

        return successArr
    }

    let retArr = []
    retArr = combSum(candidates, target, [], new Set([]), retArr, 0, 0)
    return retArr
};

console.log(combinationSum([2,3], 6))
console.log(combinationSum([1,2,3], 5))
console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))