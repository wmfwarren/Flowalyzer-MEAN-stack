"use strict";

//this module removes the second vowel in non-diphthong double vowel pairs

module.exports = (word) => {
  while(word.search(/[aeiou][aeiou]/) !== -1){
		let secondVowelIndex = word.search(/[aeiou][aeiou]/) + 1;
		word = word.slice(0, secondVowelIndex) + word.slice(secondVowelIndex + 1);
	}
  return word;
}
