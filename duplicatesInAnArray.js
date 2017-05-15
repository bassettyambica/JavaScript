//Find Duplicates in an Array
function findDuplicates(arr) {
  var results = [];
  var dups = [];
  for (var i = 0; i < arr.length; i++) {
    if (results.indexOf(arr[i]) == -1) {
    results.push(arr[i]);
  } else {
    dups.push(arr[i]);
  }
}
	return dups;
}
console.log(findDuplicates([3,4,5,3,1,2,1,4]));