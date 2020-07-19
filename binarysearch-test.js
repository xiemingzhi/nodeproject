function bs2(array, query, left, right) {
    if (right <= left) return -1;
	let m = Math.floor((left + right)/2);
    //console.log("array["+m+"]="+array[m]);
	if (array[m] == query) return m;
	if (array[m] < query) {
	  left = m + 1;
	  return bs2(array, query, left, right);
	}
	if (array[m] > query) {
	  right = m - 1;
	  return bs2(array, query, left, right);
	}
	return -2;
}

function bs(array, query) {
	let L = 0, R = array.length;
	return bs2(array, query, L, R);
}
  
// console.log("array index of 3 = ", bs([1,2,3,4,5,6,7,8,9], 3));
// console.log("array index of 10 = ", bs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("array index of 3 = ", bs2(arr, 3, 0, arr.length - 1));
console.log("array index of 10 = ", bs2(arr, 10, 0 , arr.length - 1));