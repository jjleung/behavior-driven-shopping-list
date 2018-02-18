class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    let renderStr = '<li class ="completed_' + this.is_done + '">';
    renderStr += "<span>" + this.name + "</span>";
    renderStr += "<span>" + this.description + "</span></li>";
    return renderStr;
  }
}
