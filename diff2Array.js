/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
  const newArr = [];
  
  for(let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        
        arr1.splice(arr1.indexOf(arr1[i]), 1);
        arr2.splice(arr2.indexOf(arr2[j]), 1);
        i = i - 1;
        j = j - 1;
      }
    }
  }
  
  return arr1.concat(arr2);
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));  // prints ['pink wool']
