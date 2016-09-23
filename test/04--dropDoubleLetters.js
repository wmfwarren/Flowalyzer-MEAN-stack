"use stirct";

const { assert } = require("chai");
const dropDoubleLetters = require("../lib/metaphone/04--dropDoubleLetters.js");

describe("This function drops the second of two identical letters", () => {
  it("should be a function", () =>{
    assert.isFunction(dropDoubleLetters);
  });
  it("should make 'sass' into 'sas'", () => {
    let expected = "sas";
    assert.equal(dropDoubleLetters("sass"), expected);
  });
  it("should make 'Tennessee' into 'Tenese'", () => {
    let expected = "Tenese";
    assert.equal(dropDoubleLetters("Tennessee"), expected);
  });
  it("should not make 'success' into 'suces'", () => {
    let expected = "succes";
    assert.equal(dropDoubleLetters("success"), expected);
  });
});
