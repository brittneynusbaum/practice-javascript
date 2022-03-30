// 1) Write a function that takes in an array of numbers and returns its sum.
function sum(numbers) {
  var i = 0;
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
    i++;
  });
  return sum;
}
// console.log(sum([1, 2, 3]));

// 2) Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  var i = 0;
  var smallest = strings[i];
  strings.forEach(function(string) {
    if (string.length < smallest.length) {
      smallest = string;
    }
    i++;
  });
  return smallest;
}
// console.log(smallestString(["hello", "goodbye", "hi", "hey"]));

// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
function reverse(numbers) { 
  var reverseArray = [];
  numbers.forEach(function(number) {
    reverseArray.unshift(number);
  });
  return reverseArray;
}
// console.log(reverse([1, 2, 3]));

// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
function beginWithA(strings) {
  var count = 0;
  strings.forEach(function(string) {
    if (string[0] === 'a') {
      count++;
    }
  });
  return count;
}
// console.log(beginWithA(['apple', 'banana', 'around', 'log', 'animal']));

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function sepratedByCommas(strings) {
  return strings.join(",");
}
// console.log(sepratedByCommas(['a', 'p', 'p', 'l', 'e', 's']));

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
function productNumbers(numbers) {
  var product = 1;
  numbers.forEach(function(number) {
    product *= number;
  });
  return product;
}
// console.log(productNumbers([2, 2, 3]));

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
function twoSmallest(numbers) {
  var smallest = numbers[0];
  var smallestTwo = numbers[0];
  numbers.forEach(function(number) {
    if (number < smallest && number !== smallestTwo) {
      smallest = number;
    }
  });
  numbers.forEach(function(number) {
    if (number < smallestTwo && number !== smallest) {
      smallestTwo = number;
    }
  });
  return [smallest, smallestTwo];
}
// console.log(twoSmallest([30, 13, 12, 41]));

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
function countZeros(numbers) {
  var count = 0;
  numbers.forEach(function(number) {
    if (number === 0) {
      count++;
    }
  });
  return count;
}
console.log(countZeros([0, 11, 20, 3, 5, 30, 30, 9]));

// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree(); 


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]); 


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
function numberToHundred() {
  var i = 1;
  while (i <= 100) {
    console.log(i);
    i++;
  }
}
// numberToHundred();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function everyOtherNumberToOneHundred() {
  var i = 1;
  while (i <= 100) {
    console.log(i);
    i += 2;
  }
}
// everyOtherNumberToOneHundred();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
function numberCountsFiftyFive(numbers) {
  var count = 0;
  numbers.forEach(function(number) {
    if (number === 55) {
      count++;
    }
  });
  console.log(count);
}
// numberCountsFiftyFive([55, 1, 3, 4, 55]);

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function awesomeSauce(strings) {
  var newArray = [];
  var i = 1;
  strings.forEach(function(string) {
    newArray.push(string);
    newArray.push("awesomesauce");
    i++;
  });
  console.log(newArray);
}
// awesomeSauce(['a', 'b', 'c', 'd', 'e']);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

