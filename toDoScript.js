function addItem(){
    var newItem = document.createElement("p");
    newItem.innerHTML = document.getElementById("text").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
}
function removeItem() {
    document.getElementById("list").removeChild(this);
}