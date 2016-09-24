"use strict";

//This module removes silent 'e' at the end of words

module.exports = (word) => {
  word = word.replace(/es$/, 's');
	word = word.replace(/e/, '');
  return word;
}
