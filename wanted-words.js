'use strict';

var wordList = ['strength', 'afterwards', 'background', 'photograph', 'successful', 'understand'];

function wantedWords(array, vowels, cons, notIn) {

  let newList = [];
  let words = [];
  let listVowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consCount = 0;
  let hasVowels = false, hasCons = false, notHave = true;

  for (var i = 0; i < array.length; i++) {
    words[i] = array[i].toLowerCase();
  }

  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      for (var k = 0; k < notIn.length; k++) {
        if (words[i][j] === notIn[k]) {
          notHave = false;
        }
      }
      if (words[i][j] === 'a' || words[i][j] === 'e' || words[i][j] === 'i' || words[i][j] === 'o' || words[i][j] === 'u') {
        vowelCount++;
      }
    }

    consCount = words[i].length - vowelCount;

    if (vowelCount === vowels) {
      hasVowels = true;
    }

    if (consCount === cons) {
      hasCons = true;
    }

    if (hasVowels && hasCons && notHave) {
      newList.push(words[i]);
    }

    vowelCount = 0;
    consCount = 0;
    hasVowels = false;
    hasCons = false;
    notHave = true;
  }

  return newList;

}

console.log(wantedWords(wordList, 1, 7, ['m', 'y'])); // ['strength']
console.log(wantedWords(wordList, 3, 7, ['m', 'y'])); // ['afterwards', 'background', 'photograph', 'successful', 'understand']
console.log(wantedWords(wordList, 3, 7, ['a', 's' , 'm', 'y'])); // []
console.log(wantedWords(wordList, 3, 7, ['f', 'g'])); // ['understand']
