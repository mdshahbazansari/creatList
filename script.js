var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");                         //creat element
    li.appendChild(document.createTextNode(input.value));          //make text from input file
    ul.appendChild(li);                                            //add li to ul
    input.value = "";                                              //reset text input field

            //START STRIKETHROUGH
	        // because it's in the function, it only adds it for new items

    function crossOut(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",crossOut);

          //END  STRIKETHROUGH

          //START ADD DELETE BUTTON

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
          //END ADD DELETE BUTTON

          //ADD CLASS DELETE BUTTON
    function deleteListItem(){
        li.classList.add("delete")
    }
          //END delete class
}

function addListAfterClick(){
    if(inputLength() > 0){                                      //empty input field doesn't create a li
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);