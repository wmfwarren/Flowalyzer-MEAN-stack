"use strict";

const { assert } = require("chai");
const dropEs = require("../lib/metaphone/03--dropTrailingEs.js");

describe("removes trailing E and trails ESs", () => {
  it("should be a function", () => {
    assert.isFunction(dropEs);
  });
  it("removes the last e", () => {
    let expected = "sam";
    assert.equal(dropEs("same"), expected);
  });
  it("removes the last 'es' and make it an 's'", () => {
    let expected = "sams";
    assert.equal(dropEs("sames"), expected);
  });

});
