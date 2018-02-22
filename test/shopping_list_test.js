// const chai = require("chai");
// const shop = require("../js/shopping_list.js");
// const shopItem = require("../js/shopping_list_item.js");

chai.should();
const assert = chai.assert;
const expect = chai.expect;

describe("ShoppingListItem", function() {
  let slItem;
  let sList;

  beforeEach(() => {
    slItem = new ShoppingListItem("sauce", "raw");
    sList = new ShoppingList();
  });

  it("ShoppingListItem is a class", () => {
    expect(slItem instanceof ShoppingListItem).to.be.true;
  });
  it("ShoppingListItem has a property named `name`", () => {
    expect(slItem.name).to.exist;
  });
  it("ShoppingListItem has a property named `description`", () => {
    expect(slItem).to.have.property("description");
  });
  it("ShoppingListItem has a property named `is_done`", () => {
    expect(slItem).to.have.property("is_done");
  });

  it("ShoppingListItem has a constructor method that accepts two arguments: 'name' and 'description'", () => {
    expect(slItem).to.have.property("name", "sauce");
    expect(slItem).to.have.property("description", "raw");
  });
});
