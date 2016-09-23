"use strict";

const { assert } = require("chai");
const walkingVowels = require("../lib/metaphone/02--walkingVowelDropper.js");

describe("This function drops the second vowel in double vowels", () => {
  it("should be a function", () => {
    assert.isFunction(walkingVowels);
  });
  //basic encoder
  it("should turn two vowel into one 1 time", () =>{
    let expected = "e";
    assert.deepEqual(walkingVowels("ee"), expected);
  });
  it("should turn two vowel into one 1 time", () =>{
    let expected = "e";
    assert.deepEqual(walkingVowels("ei"), expected);
  });
  it("should turn two vowel into one 1 time", () =>{
    let expected = "i";
    assert.deepEqual(walkingVowels("ie"), expected);
  });
  //multi set encoder
  it("should turn two vowel into one 2 times", () =>{
    let expected = "iro";
    assert.deepEqual(walkingVowels("ieroo"), expected);
  });
  //3 vowels walkingVowels
  it("should turn three contiguous vowels into one", () =>{
    let expected = "spontanaty";
    assert.deepEqual(walkingVowels("spontanaeity"), expected);
  });
});
