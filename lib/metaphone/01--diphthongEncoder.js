"use strict";

module.exports = (word) => {
  word = word.replace(/ou/g, "1");
	word = word.replace(/igh/g, "2");
	word = word.replace(/oi/g, "3");
	word = word.replace(/oo/g, "4");
	word = word.replace(/air/g, "5");
  //if the string "aire" was in the original word make it 5
	word = word.replace(/5e/g, "5");
	if(word.search(/.are/) !== -1){
		word = word.replace(/are/g, "5");
	}
	word = word.replace(/ure/g, "6");
  return word;
}
