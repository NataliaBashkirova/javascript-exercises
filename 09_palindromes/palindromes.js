const palindromes = function (word) {
  word = word.toLowerCase().replaceAll(/[!., ]/g, "");
  let middleOfTheWord = Math.floor(word.length/2);
  for (let i = 0; i < middleOfTheWord; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        return false;
    }
  }
  return true;
};

palindromes('ZZZZ car, a man, a maracaz.');
// Do not edit below this line
module.exports = palindromes;
