"use strict";

//This module transforms the string "cc" into "ks"

module.exports = (word) => {
  word = word.replace(/cc/g, "ks");
  return word;
}
