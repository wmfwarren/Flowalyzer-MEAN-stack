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
  //pn
  it("it should make a leading 'pn' into an 'n'", () => {
    let expected = "neumatic";
    assert.equal(dropSilentLeadingLetter("pneumatic"), expected)
  });
  it("it should not make an internal 'pn' into an 'n'", () => {
    let expected = "upn";
    assert.equal(dropSilentLeadingLetter("upn"), expected)
  });
  //kh
  it("it should make a leading 'kh' into an 'k'", () => {
    let expected = "kan";
    assert.equal(dropSilentLeadingLetter("khan"), expected)
  });
  it("it should not make an internal 'kh' into an 'k'", () => {
    let expected = "akhn";
    assert.equal(dropSilentLeadingLetter("akhn"), expected)
  });
  //ae
  it("it should make a leading 'ae' into an 'e'", () => {
    let expected = "ether";
    assert.equal(dropSilentLeadingLetter("aether"), expected)
  });
  it("it should not make an internal 'ae' into an 'e'", () => {
    let expected = "haet";
    assert.equal(dropSilentLeadingLetter("haet"), expected)
  });
  //wr
  it("it should make a leading 'wr' into an 'r'", () => {
    let expected = "rap";
    assert.equal(dropSilentLeadingLetter("wrap"), expected)
  });
  it("it should not make an internal 'wr' into an 'r'", () => {
    let expected = "owrt";
    assert.equal(dropSilentLeadingLetter("owrt"), expected)
  });
});
