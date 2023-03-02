// Directions:
// Given an integer array nums, return the most frequent even element.
// If there is a tie, return the smallest one. If there is no such element, return -1.

function mostFrequentEven(arr) {
  //Filter for evens
  const filtered = arr.filter(n => {
    return n % 2 === 0
  })
  //If there are no even elements, return -1
  if(filtered.length === 0) return -1
  
  //Create a hashmap to track how many times an element will repeat
  let hash = filtered.reduce((a, c) => {
    a[c] = a[c] ? a[c] + 1 : 1
    return a
  }, {})
  // console.log(hash)
  
  //Convert hashmap to an arr where each index is a nested arr with the key and value. This is necessary to compare the values
  let objToArr = Object.keys(hash).map(key => [key, hash[key]])
  console.log(objToArr)
  
  //Compare the current iteration to the next iteration to search for the element that is repeated more often. It is necessary to subtract the length by 1 since we are comparing against the next iteration
  let values = []
  for(let i = 0; i < objToArr.length - 1; i++) {
    // console.log(objToArr[i][1])
    if(objToArr[i][1] <= objToArr[i + 1][1]) {
      values.push(Number(objToArr[i + 1][0]))
    }
  }
  console.log(values)
  
  //If values has a tie, then iterate over the elements to see which element is the smallest of the two. Return the smallest element
  if(values.length > 1) {
    let result;
    for(let i = 0; i < values.length - 1; i++) {
      //console.log(typeof(objToArr[i][0]))
      if(values[i] < values[i + 1]) {
        result = values[i]
      }
    }
    return result
  } else {
    //If values only has one element, then this is the most repeated element
    return values[0]
  }
}

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); // 2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4])); // 4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); // -1
