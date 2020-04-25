var button = document.getElementsByTagName("button")[0];
var inputText = document.getElementById("chores-name");
var choresList = document.querySelector(".chores-list");


button.addEventListener("click", appendToTheList);

inputText.addEventListener("keypress", appendToListWithKeyPress);

Array.from(choresList.children, addActionsToArray);

function addActionsToArray(item) {
    item.addEventListener("click", toggleDone);
    addDeleteButton(item);
};


function inputLength() {
    return inputText.value.length;
}

function appendToListWithKeyPress(event) {
    if (event.keyCode === 13) {
        appendToTheList();
    }
}

function appendToTheList() {
    if (inputLength() > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputText.value));
        li.addEventListener("click", toggleDone);

        choresList.appendChild(li);
        inputText.value = "";

        addDeleteButton(li);
    }
}

function toggleDone(event) {
    if (!event.srcElement.classList.contains("delete")) {
        event.srcElement.classList.toggle("done");
    }
}

function addDeleteButton(item) {
    var deletebutton = document.createElement("button");
    deletebutton.appendChild(document.createTextNode("delete me!"));
    deletebutton.classList.add("delete");
    deletebutton.addEventListener("click", deleteItem);
    item.appendChild(deletebutton);
}


function deleteItem(event) {
    console.log("delete me!");
    choresList.removeChild(event.srcElement.parentNode);
}