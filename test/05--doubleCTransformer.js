"use stirct";

const { assert } = require("chai");
const doubleCTransformer = require("../lib/metaphone/05--doubleCTransformer.js")

describe("This function changes 'CC' to 'ks'.", () => {
  it("should be a function", () => {
    assert.isFunction(doubleCTransformer);
  });
  it("should make 'success' into 'suksess'", () => {
    let expected = "suksess";
    assert.equal(doubleCTransformer("success"), expected);
  });
});
