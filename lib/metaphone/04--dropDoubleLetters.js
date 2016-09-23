"use strict";

module.exports = (word) => {
  word = word.replace(/[^\w\s]|([bdfghjklmnpqrstvwxyzaeiou])(?=\1)/g, "");
  return word;
}
