var button = document.getElementsByTagName("button")[0];
var inputText = document.getElementById("chores-name");
var choresList = document.querySelector(".chores-list");


button.addEventListener("click", appendToTheList);

inputText.addEventListener("keypress", appendToListWithKeyPress);


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
        choresList.appendChild(li);
        inputText.value = "";
    }
}