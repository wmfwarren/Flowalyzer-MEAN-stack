"use strict";

//This module drops the 'b' from works like "bomb"

module.exports = (word) => {
  word = word.replace(/mb$/, "m");
  return word;
}
