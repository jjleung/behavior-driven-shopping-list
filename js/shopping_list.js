class ShoppingList {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    if (item) {
      if (this.items.indexOf(item) && item instanceof ShoppingListItem) {
        this.items = this.items.slice(this.items.indexOf(item), 1);
      } else {
        throw Error;
      }
    } else {
      this.items.pop();
    }
  }
  render() {
    let shopUl = "<ul>";
    this.items.forEach(itm => (shopUl += itm.render()));
    shopUl += "</ul>";
    return shopUl;
  }
}
