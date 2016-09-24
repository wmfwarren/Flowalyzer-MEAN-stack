"use strict";

//this module removes special characters from strings
//it also makes all remaning letters lowercase

module.exports = (word) => {
  return word.replace(/[.,\/#!$%\^&\*;'":{}=\-_`~()]/g,"").toLowerCase();
}
