"use strict";

const { assert } = require("chai");
const specialCharacterCull = require("../lib/metaphone/00--specialCharacterCull.js");

describe("Removes special characters", () => {
  it("should be a function", () => {
    assert.isFunction(specialCharacterCull);
  });
  it("should remove characters", () => {
    let expected = "hello";
    assert.deepEqual(specialCharacterCull("\'\".,\/#!$%h\^&\*el;:l{}o=\-_`~()"), expected );
  });
  it("should make lower case", () => {
    let expected = "hello";
    assert.deepEqual(specialCharacterCull("\'\".,\/#!$%H\^&\*EL;:L{}O=\-_`~()"), expected );
  });
});
