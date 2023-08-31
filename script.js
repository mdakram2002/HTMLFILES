/** @format */

function add_item() {
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");

  if (item.vlaue = !"") {
    let make_li = document.createElement("li");
    make_li.appendChild(document.createTextNode(item.vlaue));
    list_item.appendChild(make_li);
    item.vlaue = "";

    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    alert("Please add a value to item ");
  }
}
