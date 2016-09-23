"use strict";

module.exports = (word) => {
  word = word.replace(/es$/, 's');
	word = word.replace(/e/, '');
  return word;
}
