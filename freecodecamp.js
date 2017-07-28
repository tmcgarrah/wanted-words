//Factorialize a number
function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

console.log(factorialize(4));

//palindrome

function palindrome(str) {

  var tempString = str.toLowerCase().replace(/\s/g,'').replace(/[^\w\s]/g,'');
  tempString = tempString.replace(/[^a-zA-Z]/g,'');

  var tempArray = tempString.split('');
  var temp = tempArray.reverse().join('');

  if (tempString === '') {
    return true;
  }else if (!isNaN(parseInt(str.charAt(0))) && tempString === temp){
    return false;
  } else if (tempString === temp){
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("eye"));


//seek and destroy

function destroyer(array) {

  let args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (array[i] === args[j]) {
        delete array[i];
      }
    }
  }

  return array.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


//confirm the ending

function confirmEnding(str, target) {

  if (str.substring(str.length-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("You go Bastian", "tian"));
console.log(confirmEnding("He has to give me a new name", "name"));


//largest of four

function largestOfFour(array) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(Math.max.apply(Math, array[i]));
  }
  return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
