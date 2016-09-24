"use strict";

//this module removes identical double letters except the string "cc"

module.exports = (word) => {
  word = word.replace(/[^\w\s]|([bdfghjklmnpqrstvwxyzaeiou])(?=\1)/g, "");
  return word;
}
