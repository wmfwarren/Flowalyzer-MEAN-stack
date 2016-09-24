"use strict";

//This module removes silent character in some word beginnings

module.exports = (word) => {
  word = word.replace(/^kn/g, "n");
	word = word.replace(/^gn/g, "n");
	word = word.replace(/^mn/g, "n");
	word = word.replace(/^kh/g, "k");
	word = word.replace(/^pn/g, "n");
	word = word.replace(/^ae/g, "e");
	word = word.replace(/^wr/g, "r");

  return word;
}
