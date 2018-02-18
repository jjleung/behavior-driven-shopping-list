const chai = require("chai");
const shop = require("../app.js");

chai.should();
const assert = chai.assert;
const expect = chai.expect;

describe("Shopping-List/", function() {
  describe("node_modules/", function() {
    it("mocha/", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it("chai/", function() {});
  });
  describe("js/", function() {
    it("shopping_list_test.js", function() {});
  });
  describe("tests.html", function() {
    it("has a test", function() {});
  });
});
