"use strict";

const { assert } = require("chai");
const dropTrailingMB = require("../lib/metaphone/07--dropTrailingMB.js");

describe("This function drops the 'b' in 'mb' after words like 'bomb'.", () => {
  it("It should be a function", () => {
    assert.isFunction(dropTrailingMB);
  });
  it("It should drop the 'b' form the end of 'bomb'", () => {
    let expected = "bom";
    assert.equal(dropTrailingMB("bomb"), expected);
  });
  it("It should  not drop the 'b' form the middle of 'mbob'", () => {
    let expected = "mbob";
    assert.equal(dropTrailingMB("mbob"), expected);
  });
});
