const myShoppingList = new ShoppingList();

const addButtonId = document.getElementById("add_shopping_list_item_button");
const contentId = document.getElementById("content");

const add_to_shopping_list = () => {
  console.log("addshop");
  const titleId = document.getElementById("title");
  const descId = document.getElementById("description");
  const titleVal = titleId.value;
  const descVal = descId.value;

  const new_shopping_list_item = new ShoppingListItem(titleVal, descVal);
  myShoppingList.addItem(new_shopping_list_item);
  const myRender = myShoppingList.render();
  contentId.innerHTML = myRender;
};

const applyDom = () => {
  addButtonId.addEventListener("click", add_to_shopping_list);
};

applyDom();
