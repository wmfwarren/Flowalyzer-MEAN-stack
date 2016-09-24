"use strict";

const { assert } = require("chai");
const dropSilentLeadingLetter = require("../lib/metaphone/06--dropSilentLeadingLetters.js");

describe("This function drops the silent parts of double consonant. ", () => {
  it("it should be a function", () => {
      assert.isFunction(dropSilentLeadingLetter);
  });
  //kn
  it("it should make a leading 'kn' into an 'n'", () => {
    let expected = "not";
    assert.equal(dropSilentLeadingLetter("knot"), expected)
  });
  it("it should not make an internal 'kn' into an 'n'", () => {
    let expected = "okn";
    assert.equal(dropSilentLeadingLetter("okn"), expected)
  });
  //gn
  it("it should make a leading 'gn' into an 'n'", () => {
    let expected = "nat";
    assert.equal(dropSilentLeadingLetter("gnat"), expected)
  });
  it("it should not make an internal 'gn' into an 'n'", () => {
    let expected = "ognaw";
    assert.equal(dropSilentLeadingLetter("ognaw"), expected)
  });
  //mn
  it("it should make a leading 'mn' into an 'n'", () => {
    let expected = "neumonic";
    assert.equal(dropSilentLeadingLetter("mneumonic"), expected)
  });
  it("it should not make an internal 'mn' into an 'n'", () => {
    let expected = "emnt";
    assert.equal(dropSilentLeadingLetter("emnt"), expected)
  });
});
