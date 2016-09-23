"use strict";

const { assert } = require("chai");
const diphthongEncoder = require("../lib/metaphone/01--diphthongEncoder.js");

describe("Change diphthongs to numerals", () => {
  it("should make 'ou' into a '1'", () => {
    let expected = "y1";
    assert.deepEqual(diphthongEncoder("you"), expected);
  });
  it("should make 'igh' into '2'", () => {
    let expected = "t2t";
    assert.deepEqual(diphthongEncoder("tight"), expected);
  });
  it("should make 'oi' into '3'", () => {
    let expected = "3l";
    assert.deepEqual(diphthongEncoder("oil"), expected);
  });
  it("should make 'oo' into '4'", () => {
    let expected = "c4l";
    assert.deepEqual(diphthongEncoder("cool"), expected);
  });
  //--air tests
  it("should make a word ending in 'air' end in '5'", () => {
    let expected = "st5";
    assert.deepEqual(diphthongEncoder("stair"), expected);
  });
  it("should make 'air' into '5'", () => {
    let expected = "5";
    assert.deepEqual(diphthongEncoder("air"), expected);
  });
  //--aire test
  it("should make 'aire' into '5'", () => {
    let expected = "cl5";
    assert.deepEqual(diphthongEncoder("claire"), expected);
  });
  //--are test
  it("should make a word ending in 'are' end in '5'", () => {
    let expected = "st5";
    assert.deepEqual(diphthongEncoder("stare"), expected);
  });
  it("should not make 'are' into '5'", () => {
    let expected = "are";
    assert.deepEqual(diphthongEncoder("are"), expected);
  });
  //"ure" test
  it("string 'ure' should be replaced with 6", () => {
    let expected = "s6";
    assert.deepEqual(diphthongEncoder("sure"), expected);
  });

});
